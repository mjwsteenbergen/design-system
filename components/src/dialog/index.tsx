import * as RadixDialog from "@radix-ui/react-dialog";

type Props = RadixDialog.DialogProps & {
  classname?: string;
};

("use client");

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cancel } from "iconoir-react";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;
DialogTrigger.defaultProps = {
  className: "reset",
};

const DialogPortal = ({
  className,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={className} {...props} />
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={
      "fixed inset-0 z-50 dark:bg-white/20 bg-black-800/60 backdrop-blur-sm" +
      className
    }
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={
        "fixed max-sm:rounded-t-md max-sm:w-screen max-sm:min-h-[calc(100vh-6rem)] max-sm:left-0 max-sm:bottom-0 sm:left-[50%] sm:bottom-[50%] z-50 grid content-start w-full sm:max-w-lg sm:translate-x-[-50%] gap-4 bg-white dark:bg-black-800 p-6 shadow-lg max-sm:data-[state=closed]:animate-out max-sm:data-[state=closed]:slide-out-to-bottom max-sm:data-[state=open]:animate-in max-sm:data-[state=open]:slide-in-from-bottom sm:rounded-lg md:w-full" +
        className
      }
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="reset absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Cancel />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogClose = DialogPrimitive.Close;
DialogClose.defaultProps = {
  type: undefined,
};

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={"flex flex-col space-y-1.5 sm:text-left" + className}
    {...(props as unknown as object)}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" +
      className
    }
    {...(props as unknown as object)}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={"text-lg font-semibold leading-none tracking-tight" + className}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={"text-sm text-muted-foreground" + className}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
