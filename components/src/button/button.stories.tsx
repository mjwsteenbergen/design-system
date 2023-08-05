import type { Meta, StoryObj } from "@storybook/react";
import { StoryWrapper } from "../utils/storywrapper";

import { Button } from "../button/Button";
import { Plus } from "iconoir-react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button/Button",
  component: Button,
  decorators: [StoryWrapper()],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    appearance: "primary",
    children: "This is some text",
  },
};

export const Secondary: Story = {
  args: {
    appearance: "secondary",
    children: "This is some text",
  },
};

export const Tertiarty: Story = {
  args: {
    appearance: "tertiary",
    children: "This is some text",
  },
};

export const Icon: Story = {
  args: {
    rounded: true,
    children: <Plus />,
  },
};

export const IconXL: Story = {
  args: {
    rounded: true,
    children: <Plus height={50} width={50} />,
  },
};
