import { ReactNode } from "react";

interface FieldProps {
  label: string;
  children: ReactNode;
}

export function Field({ label, children }: FieldProps) {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm text-gray-500">
        {label}
      </label>
      {children}
    </div>
  );
}
