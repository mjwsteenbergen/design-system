import fs from "node:fs";
import path from "node:path";
import { functionalColors } from "./data/functional-tokens";

const tailwindConfigPath = path.resolve("../", "tailwind.config.ts");
const tailwindCSSPath = path.resolve("../", "tailwind.css");
const foundationStorybookPath = path.resolve(
  "../components/src/foundation",
  "foundation.stories.tsx"
);

export const baseColorsToTailwind = () => {
  generateTailwindConfigColors();
  generateTailwindCSSColors();
  baseColorsToTailwindStorybook();
};

const generateTailwindCSSColors = () => {
  const tailwindConfig = fs.readFileSync(tailwindCSSPath, "utf8");
  const configContent = `
/* START | Generated functional colors */
:root {
  ${toList(Object.entries(functionalColors))
    .map(([name, value]) => {
      if (Array.isArray(value)) {
        return `--${name}: ${value[0]};`;
      }
      return `--${name}: ${value};`;
    })
    .join("\n  ")}
}

.enable-darkmode {
  ${toList(Object.entries(functionalColors))
    .flatMap(([name, value]) => {
      if (Array.isArray(value)) {
        return [`--${name}: ${value[1]};`];
      }
      return [];
    })
    .join("\n  ")}
}

@media (prefers-color-scheme: dark) {
  :root {
    ${toList(Object.entries(functionalColors))
      .flatMap(([name, value]) => {
        if (Array.isArray(value)) {
          return [`--${name}: ${value[1]};`];
        }
        return [];
      })
      .join("\n    ")}
  }
}
/* END | Generated functional colors */`.replaceAll(/\n/g, "\n  ");

  const writeText = tailwindConfig.replace(
    /\s+\/\* START \| Generated functional colors \*\/(.|\n)+\/\* END \| Generated functional colors \*\//g,
    configContent
  );

  fs.writeFileSync(tailwindCSSPath, writeText, "utf8");
};

const generateTailwindConfigColors = () => {
  const remap = (
    value: [name: string, color: string | object][],
    basevalue: string = ""
  ) => {
    return value.map(([name, color]) => {
      if (!Array.isArray(color) && typeof color === "object") {
        return [
          name,
          Object.fromEntries(
            remap(
              Object.entries(color),
              basevalue.length > 0 ? basevalue + "-" + name : name
            )
          ),
        ];
      } else {
        return [name, `var(--${basevalue + "-" + name})`];
      }
    });
  };

  const tailwindConfig = fs.readFileSync(tailwindConfigPath, "utf8");
  const remappedConfig = Object.fromEntries(
    Object.entries(functionalColors).map(([name, value]) => {
      return [name, Object.fromEntries(remap(Object.entries(value), name))];
    })
  );

  const configContent = `
/* START | Generated functional colors */
...${JSON.stringify(remappedConfig, null, 2)},
/* END | Generated functional colors */`.replaceAll(/\n/g, "\n    ");

  const writeText = tailwindConfig.replace(
    /\s+\/\* START \| Generated functional colors \*\/(.|\n)+\/\* END \| Generated functional colors \*\//g,
    configContent
  );

  fs.writeFileSync(tailwindConfigPath, writeText, "utf8");
};

export const toList = (
  palette: [name: string, color: string | object][]
): [string, string | [string, string]][] => {
  return palette.flatMap((swatch) => {
    if (!Array.isArray(swatch[1]) && typeof swatch[1] === "object") {
      return toList(
        Object.entries(swatch[1]).map((item) => {
          item[0] = `${swatch[0]}-${item[0]}`;
          return item;
        })
      );
    } else {
      return [[swatch[0], swatch[1] as string]];
    }
  });
};

const stringify = (theme: any, prefix: string) => {
  return JSON.stringify(
    toList(Object.entries(theme)).map((i) => prefix + "-" + i[0]),
    null,
    2
  );
};

const baseColorsToTailwindStorybook = () => {
  const storybookContent = fs.readFileSync(foundationStorybookPath, "utf8");
  const configContent = `
/* START | Generated functional colors */
const functionalColors = {
  text: ${stringify(functionalColors.textColor, "text")},
  background: ${stringify(functionalColors.backgroundColor, "bg")},
  border: ${stringify(functionalColors.borderColor, "border")},
  other: ${stringify(functionalColors.colors, "")},
}
/* END | Generated functional colors */`;

  const writeText = storybookContent.replace(
    /\s*\/\* START \| Generated functional colors \*\/(.|\n)+\/\* END \| Generated functional colors \*\//g,
    configContent
  );

  fs.writeFileSync(foundationStorybookPath, writeText, "utf8");
};
