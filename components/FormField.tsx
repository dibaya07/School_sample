import type { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  children: ReactNode;
  className?: string;
}

export default function FormField({ label, children, className = 'flex-1' }: FormFieldProps) {
  return (
    <div className={className}>
      <label className="block text-xs font-medium text-[#4A3E36] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
