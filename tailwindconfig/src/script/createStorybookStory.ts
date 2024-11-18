import { BaseTokens } from "../data/base-color-tokens";
import { FunctionalConfig } from "../data/functional-color-tokens";
import { fromTemplate } from "../utils/templates";
import { genericParse, KVItem } from "./createTailwindConfig";

export const createStorybookStory = async (
  config: FunctionalConfig,
  baseConfig: BaseTokens
) => {
  const parseValue = (
    key: string,
    value: string | Record<string, string>,
    prefix: string
  ): KVItem[] => {
    if (typeof value === "string") {
      return [
        {
          name: prefix + "-" + key,
          value: value,
        },
      ];
    }

    return Object.entries(value).flatMap(([childKey, childValue]) =>
      parseValue(childKey, childValue, key)
    );
  };

  const parseBase = (baseConfig: BaseTokens) =>
    Object.entries(baseConfig).flatMap(([key, value]) =>
      parseValue(key, value, "")
    );

  const parseFunctional = genericParse((key, headerKey) => {
    return {
      name: headerKey + "-" + key,
      value: "",
    };
  });

  return (await fromTemplate("foundation.stories.tsx.template"))({
    baseColors: parseBase(baseConfig),
    functionalColors: [
      parseFunctional("text", config.textColor),
      parseFunctional("bg", config.backgroundColor),
      parseFunctional("border", config.borderColor),
    ],
  });
};
