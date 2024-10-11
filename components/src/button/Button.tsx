import { cva, VariantProps } from "class-variance-authority";
import { Asterisk } from "iconoir-react";
import { forwardRef, PropsWithChildren } from "react";

const variant = cva("transition-all relative overflow-hidden", {
  variants: {
    appearance: {
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary",
    },
    rounded: {
      true: "rounded-full aspect-square overflow-hidden",
    },
    isLoading: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    appearance: "primary",
  },
});

type Props = PropsWithChildren<VariantProps<typeof variant>> & {
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { className, appearance, rounded, children, disabled, isLoading, ...rest },
    ref
  ) => {
    return (
      <button
        className={variant({ className, appearance, rounded, isLoading })}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        {isLoading === undefined ? (
          children
        ) : (
          <>
            <div
              className={
                "block w-full transition-all " +
                (isLoading ? "translate-x-[-200%]" : "")
              }
            >
              {children}
            </div>

            <div
              className={
                "absolute transition-all left-1/2 top-1/2 -translate-y-1/2 " +
                (isLoading ? "-translate-x-1/2" : "left-full translate-x-full")
              }
            >
              <div className="animate-spin">
                <Asterisk />
              </div>
            </div>
          </>
        )}
      </button>
    );
  }
);
