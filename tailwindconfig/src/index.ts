import { baseColorTokens } from "./data/base-color-tokens";
import { purpleFunctionalConfig } from "./data/functional-color-tokens";
import { createStorybookStory } from "./script/createStorybookStory";
import { createTailwindConfig } from "./script/createTailwindConfig";
import { createTailwindCSS } from "./script/createTailwindCSS";
import { functionalColors } from "./tokens/functional-tokens";

// createTailwindConfig(purpleFunctionalConfig);
console.log(await createTailwindCSS(functionalColors));
console.log(await createStorybookStory(functionalColors, baseColorTokens));
