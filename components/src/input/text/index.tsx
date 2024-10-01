import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  id?: string;
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, id, message, className, ...inputProps }, ref) => {
    const calcId = useMemo(() => {
      return id ?? "text-" + Math.round(Math.random() * 10000);
    }, [id]);
    return (
      <div className={twMerge("grid group/input", className)}>
        <label
          id={calcId + "-label"}
          className="text-sm pb-1 group-focus-within/input:font-semibold "
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          aria-labelledby={calcId + "-label"}
          type="text"
          className="!bg-black-50"
          {...inputProps}
        ></input>
        {message ? (
          <p className="text-xs text-black-400">{message}</p>
        ) : (
          <span className="h-6"></span>
        )}
      </div>
    );
  }
);
