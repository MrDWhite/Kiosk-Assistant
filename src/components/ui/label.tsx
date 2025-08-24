import React from "react";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export function Label({ children, className = "", htmlFor }: LabelProps) {
  return (
    <label 
      htmlFor={htmlFor}
      className={`block text-sm font-medium ${className}`}
    >
      {children}
    </label>
  );
}
