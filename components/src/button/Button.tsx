import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, PropsWithChildren } from "react";

const variant = cva("", {
  variants: {
    appearance: {
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary",
    },
    rounded: {
      true: "rounded-full aspect-square overflow-hidden",
    },
  },
  defaultVariants: {
    appearance: "primary",
  },
});

type Props = PropsWithChildren<VariantProps<typeof variant>> & {
  className?: string;
  disabled?: boolean;
} & Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, appearance, rounded, children, disabled, ...rest }, ref) => {
    return (
      <button
        className={variant({ className, appearance, rounded })}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
