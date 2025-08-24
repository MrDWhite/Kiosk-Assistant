import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  const baseClasses = "w-full px-3 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00EEBB] focus:ring-opacity-50";
  
  return (
    <input 
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
}
