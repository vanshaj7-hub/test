import {
  fieldErrorClasses,
  fieldInputClasses,
  fieldLabelClasses,
} from "@/components/ui/fieldStyles";
import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        <textarea
          ref={ref}
          id={inputId}
          rows={5}
          className={cn(
            fieldInputClasses,
            "resize-y",
            error && fieldErrorClasses,
            className
          )}
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

Textarea.displayName = "Textarea";
