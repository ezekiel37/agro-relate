import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import FieldError from "./FieldError";

interface TextFieldProps extends React.ComponentProps<"input"> {
  id: string;
  label: string;
  error?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ id, label, error, className, ...inputProps }, ref) => (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
      <Input
        id={id}
        ref={ref}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "h-10 rounded-md border-gray-300 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-gray-400",
          error && "border-red-500 focus-visible:border-red-500"
        )}
        {...inputProps}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  )
);
TextField.displayName = "TextField";

export default TextField;
