import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../command";
import { Button } from "../button/Button";
import { Check, NavArrowDown } from "iconoir-react";
import { twMerge } from "tailwind-merge";

export function Combobox({
  options = [],
  commandEmpty,
  loader,
}: {
  commandEmpty?: React.ReactNode;
  loader?: JSX.Element;
  options: { value: string; label: string }[];
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="justify-between flex w-[300px]"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Select..."}
          <NavArrowDown className="ml-2 h-6 w-6 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            {loader}
            {loader
              ? null
              : commandEmpty ?? <CommandEmpty>No items found.</CommandEmpty>}
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={twMerge(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
