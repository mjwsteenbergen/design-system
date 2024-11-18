import type { Meta, StoryObj } from "@storybook/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./index";
import { StoryWrapper } from "../utils/storywrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Select",
  component: Select,
  decorators: [
    StoryWrapper({
      bgGrey: true,
    }),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {new Array(10).fill(null).map((_, index) => (
            <SelectItem key={index} value={index.toString()}>
              Item {index}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
};
