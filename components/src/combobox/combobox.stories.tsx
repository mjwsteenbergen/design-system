import type { Meta, StoryObj } from "@storybook/react";

import { StoryWrapper } from "../utils/storywrapper";
import { CommandLoader } from "../command";
import { Combobox } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Combobox",
  component: Combobox,
  decorators: [StoryWrapper()],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    options: [
      {
        value: "next.js",
        label: "Next.js",
      },
      {
        value: "sveltekit",
        label: "SvelteKit",
      },
      {
        value: "nuxt.js",
        label: "Nuxt.js",
      },
      {
        value: "remix",
        label: "Remix",
      },
      {
        value: "astro",
        label: "Astro",
      },
    ],
  },
};

export const Loader: Story = {
  args: {
    loader: <CommandLoader />,
    options: [],
  },
};
