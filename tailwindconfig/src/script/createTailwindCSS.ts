import { FunctionalConfig } from "../data/functional-color-tokens";
import { fromTemplate } from "../utils/templates";
import { genericParse, KVItem, KVSection } from "./createTailwindConfig";

const parseLightValue = (
  key: string,
  headerKey: string,
  value: any
): KVItem => {
  const toColor = (value: any): string => {
    if (Array.isArray(value)) {
      return value[0];
    }
    return value;
  };

  return {
    name: `--${headerKey}-${key}`,
    value: toColor(value),
  };
};

const parseDarkValue = (key: string, headerKey: string, value: any): KVItem => {
  const toColor = (value: any): string | undefined => {
    if (Array.isArray(value)) {
      return value[1];
    }
    return undefined;
  };

  return {
    name: `--${headerKey}-${key}`,
    value: toColor(value),
  };
};

const flatMapConfig = (section: KVSection) => {
  return section.groups
    .flatMap((i) => i.kvItems)
    .concat(section.kvItems)
    .filter((i) => i.value !== undefined);
};

const fullParse = (func: (sectionName: string, items: any) => KVSection) => {
  return (config: FunctionalConfig) => {
    return [
      ...flatMapConfig(func("colors", config.textColor)),
      ...flatMapConfig(func("backgroundColor", config.backgroundColor)),
      ...flatMapConfig(func("borderColor", config.borderColor)),
    ];
  };
};

export const createTailwindCSS = async (config: FunctionalConfig) => {
  const parseLight = fullParse(genericParse(parseLightValue));
  const parseDark = fullParse(genericParse(parseDarkValue));

  return (await fromTemplate("tailwind.css.template"))({
    light: parseLight(config),
    dark: parseDark(config),
  });
};
