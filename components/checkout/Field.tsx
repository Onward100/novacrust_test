import { ReactNode } from "react";

interface FieldProps {
  label: string;
  children: ReactNode;
  boldLabel?: boolean; 
}

export function Field({ label, children, boldLabel = false }: FieldProps) {
  return (
    <div className="mb-4">
      <label
        className={`mb-1 ml-3 mt-3 block text-sm ${
          boldLabel ? "font-semibold text-gray-700" : "text-gray-500"
        }`}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
