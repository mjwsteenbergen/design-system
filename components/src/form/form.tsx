import {
  ComponentProps,
  forwardRef,
  HTMLProps,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";
import {
  FormProvider,
  SubmitHandler,
  useController,
  useForm,
  useFormContext,
  useFormState,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "../input";
import { z } from "zod";
import { Select } from "../select";

export const useValidatedForm = <T extends z.Schema<any, any>>(
  schema: T | undefined,
  onSubmit: SubmitHandler<z.infer<T>>,
  formOptions?: Parameters<typeof useForm>[0]
) => {
  const methods = useForm({
    shouldUseNativeValidation: false,
    reValidateMode: "onChange",
    resolver: schema ? zodResolver(schema) : undefined,
    shouldFocusError: false,
    ...(formOptions ?? {}),
  });
  return ({
    children,
    ...props
  }: PropsWithChildren<HTMLProps<HTMLFormElement>>) => {
    return (
      <FormProvider {...methods}>
        <form
          {...props}
          onSubmit={methods.handleSubmit(onSubmit, (e) => console.error(e))}
        >
          {children}
        </form>
      </FormProvider>
    );
  };
};

export const FormTextInput = (
  props: ComponentProps<typeof TextInput> & { name: string }
) => {
  const { register, control } = useFormContext();
  const { errors } = useFormState({
    control,
    name: props.name,
  });

  return (
    <TextInput
      {...props}
      {...register(props.name)}
      message={errors[props.name]?.message as string | undefined}
    />
  );
};

export const FormSelect = (
  props: ComponentProps<typeof Select> & { name: string }
) => {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });
  const onOpenChangeHandler = (open: boolean) => {
    if (!open) {
      field.onBlur();
    }
  };

  return (
    <Select
      {...props}
      onValueChange={(val) => field.onChange(val)}
      onOpenChange={onOpenChangeHandler}
      disabled={field.disabled}
    />
  );
};

export const FormFileInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { name: string }
>((props) => {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });

  return (
    <input
      {...props}
      onBlur={() => field.onBlur()}
      disabled={field.disabled}
      className={"asButton " + props.className}
      onChange={(ev) => {
        console.log(ev);
        field.onChange(ev.target?.files);
      }}
      ref={field.ref}
    />
  );
});
