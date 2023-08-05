import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "./index";
import { StoryWrapper } from "../../utils/storywrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Input/Text",
  component: TextInput,
  decorators: [StoryWrapper()],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Cookie value",
  },
};
