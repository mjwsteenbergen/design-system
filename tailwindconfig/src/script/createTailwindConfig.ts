import { FunctionalConfig } from "../data/functional-color-tokens";
import { fromTemplate } from "../utils/templates";

const abstractParse = (
  headerKey: string,
  onValue: (key: string, headerKey: string, value: any) => KVItem,
  onObject: (key: string, headerKey: string, value: any) => KVGroup
) => {
  return (item: [string, any]) => {
    const [key, value] = item;
    if (Array.isArray(value) || typeof value === "string") {
      return onValue(key, headerKey, value);
    } else {
      return onObject(key, headerKey, value);
    }
  };
};

const parseValue = (key: string, headerKey: string, value: any): KVItem => {
  return {
    name: key,
    value: `var(--${headerKey}-${key})`,
  };
};

export const genericParse = (
  parseValue: (key: string, headerKey: string, value: any) => KVItem
) => {
  return (sectionName: string, items: any) => {
    const parse = abstractParse(
      sectionName,
      parseValue,
      (key, headerKey, value) => {
        return {
          name: key,
          kvItems: Object.entries(value).map((item) => {
            return abstractParse(`${headerKey}-${key}`, parseValue, () => {
              throw new Error("Should not happen");
            })(item) as unknown as KVItem;
          }),
        };
      }
    );
    return Object.entries(items)
      .map(parse)
      .reduce<KVSection>(
        (res, cur) => {
          if ("kvItems" in cur) {
            res.groups.push(cur);
          } else {
            res.kvItems.push(cur);
          }
          return res;
        },
        {
          name: sectionName,
          groups: [],
          kvItems: [],
        } as KVSection
      );
  };
};

const parse = genericParse(parseValue);

export const createTailwindConfig = async (config: FunctionalConfig) => {
  return (await fromTemplate("tailwind.config.template"))({
    sections: [
      parse("colors", config.textColor),
      parse("backgroundColor", config.backgroundColor),
      parse("borderColor", config.borderColor),
      parse("ringColor", config.borderColor),
      parse("ringOffsetColor", config.backgroundColor),
    ],
  } satisfies HandlebarsTailwindConfig);
};

export type KVItem = {
  name: string;
  value: string | undefined;
};

type KVGroup = {
  name: string;
  kvItems: KVItem[];
};

export type KVSection = {
  name: string;
  kvItems: KVItem[];
  groups: KVGroup[];
};

type HandlebarsTailwindConfig = {
  sections: KVSection[];
};
