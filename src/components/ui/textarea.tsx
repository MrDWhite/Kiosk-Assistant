import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className = "", ...props }: TextareaProps) {
  const baseClasses = "w-full px-3 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00EEBB] focus:ring-opacity-50 resize-none";
  
  return (
    <textarea 
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
}
