import {
  fieldErrorClasses,
  fieldInputClasses,
  fieldLabelClasses,
} from "@/components/ui/fieldStyles";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-2">
        <label htmlFor={inputId} className={fieldLabelClasses}>
          {label}
          {props.required && (
            <span className="text-indigo-500" aria-hidden="true">
              {" "}
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(fieldInputClasses, error && fieldErrorClasses, className)}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
