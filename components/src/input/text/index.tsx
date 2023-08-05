import { useMemo } from "react";

type Props = {
  label: string;
  id?: string;
} & Pick<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const TextInput = ({ label, id, ...inputProps }: Props) => {
  const calcId = useMemo(() => {
    return id ?? "text-" + Math.round(Math.random() * 10000);
  }, [id]);
  return (
    <div className="grid group/input">
      <label
        id={calcId + "-label"}
        className="text-sm pb-1 group-focus-within/input:font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        aria-labelledby={calcId + "-label"}
        type="text"
        {...inputProps}
      ></input>
    </div>
  );
};
