import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const InlineTextEdit = ({
  value: initialValue,
  className,
  onChange,
}: {
  value: string;
  className: string;
  onChange: (
    value: string,
    onComplete: () => void,
    onFailure: () => void
  ) => void;
}) => {
  const [mode, setMode] = useState<"DISPLAY" | "EDITING" | "APPLYING">(
    "DISPLAY"
  );
  const [value, setValue] = useState(initialValue);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (mode == "EDITING") {
      setTimeout(() => {
        ref.current?.focus();
      }, 0);
    }
  }, [ref.current, mode]);

  switch (mode) {
    case "DISPLAY":
      return (
        <p onClick={() => setMode("EDITING")} className={className}>
          {value}
        </p>
      );
    case "EDITING":
      return (
        <input
          ref={ref}
          type="text"
          className={twMerge(
            "reset !border-none p-0 bg-transparent w-min block",
            className
          )}
          onChange={(ev) => setValue(ev.target.value)}
          onBlur={() => {
            setMode("APPLYING");
            if (value !== initialValue) {
              onChange(
                value,
                () => {
                  setMode("DISPLAY");
                },
                () => {
                  setMode("DISPLAY");
                  setValue(initialValue);
                }
              );
            } else {
              setMode("DISPLAY");
            }
          }}
          value={value}
        ></input>
      );
    case "APPLYING":
      return <p className={twMerge(className, "animate-pulse")}>{value}</p>;
    default:
      break;
  }
};
