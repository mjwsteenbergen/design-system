import type { Meta, StoryObj } from "@storybook/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./index";
import { StoryWrapper } from "../utils/storywrapper";
import { Button } from "../button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Dialog/Dialog",
  component: Dialog,
  decorators: [
    StoryWrapper({
      bgGrey: true,
    }),
  ],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse
          nihil accusantium odio ad, animi quia repellendus minus possimus
          iusto, blanditiis facilis dolor eum saepe, voluptatem dicta
          consequuntur ipsum quae!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse
          nihil accusantium odio ad, animi quia repellendus minus possimus
          iusto, blanditiis facilis dolor eum saepe, voluptatem dicta
          consequuntur ipsum quae!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse
          nihil accusantium odio ad, animi quia repellendus minus possimus
          iusto, blanditiis facilis dolor eum saepe, voluptatem dicta
          consequuntur ipsum quae!
        </p>
        <Dialog>
          <DialogTrigger>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};
