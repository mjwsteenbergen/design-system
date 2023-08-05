import { Decorator } from "@storybook/react";
import { cva } from "class-variance-authority";

const variants = cva({
  variants: {
    bgGrey: {
      true: "bg-black-200",
    },
  },
});

type Props = {
  bgGrey?: boolean;
};

export const StoryWrapper = (props?: Props): Decorator => {
  return (Story) => {
    return (
      <div
        className={variants({
          ...props,
          className: "flex items-center justify-center w-screen h-screen ",
        })}
      >
        <div className="max-w-2xl">
          <Story />
        </div>
      </div>
    );
  };
};
