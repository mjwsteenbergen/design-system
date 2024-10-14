import fs from "node:fs";
import path from "node:path";
import { baseColors } from "./data/basecolors";
import { colors } from "./data/exported-colors";

const items = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 *
 * @param { import("./colortypes").PalletttePallette[] } input
 * @returns { Record<string, Record<number, string>>}
 */
export const convertPalettteToTailwind = (input) => {
  /** @type {Record<string, Record<number, string>>} */
  const finalRes = {};
  return input.reduce((tailw, item) => {
    const { paletteName, swatches } = item;
    /**
     * @type {Record<number, string>}
     */
    const res = {};

    tailw[paletteName.toLowerCase()] = swatches
      .reverse()
      .reduce((res, swath, index) => {
        res[items[index]] = "#" + swath.color;
        return res;
      }, res);
    return tailw;
  }, finalRes);
};

const theme = {
  colors: {
    ...convertPalettteToTailwind(colors),
    ...baseColors,
  },
};

const toList = (
  palette: [name: string, color: string | object][]
): string[] => {
  return palette.flatMap((swatch) => {
    if (typeof swatch[1] === "object") {
      return toList(
        Object.entries(swatch[1]).map((item) => {
          item[0] = `${swatch[0]}-${item[0]}`;
          return item;
        })
      );
    } else {
      return `'${swatch[0]}': 'bg-[${swatch[1]}]'`;
    }
  });
};

export const paletteToBasecolors = () => {
  generatePalette();
  generateStorybook();
};

const generateStorybook = () => {
  const storybookPath = path.resolve(
    "../components/src/foundation",
    "foundation.stories.tsx"
  );
  const storybookContent = fs.readFileSync(storybookPath, "utf8");
  const configContent = `
/* START | Generated colors */
const colors = {
  ${toList(Object.entries(theme.colors)).join(",\n  ")}
}
/* END | Generated colors */`;

  const writeText = storybookContent.replace(
    /\s*\/\* START \| Generated colors \*\/(.|\n)+\/\* END \| Generated colors \*\//g,
    configContent
  );
  fs.writeFileSync(storybookPath, writeText, "utf8");
};

const generatePalette = () => {
  const configPath = path.resolve("./src/", "generated", "base.colors.ts");
  const configContent = `
  const colors = ${JSON.stringify(theme.colors, null, 2)};
  
  export default colors;
  `;

  fs.writeFileSync(configPath, configContent, "utf8");
};
