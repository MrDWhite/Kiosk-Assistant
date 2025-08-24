import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  children: React.ReactNode;
}

export function Button({ 
  variant = "default", 
  children, 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    default: "bg-[#00EEBB] hover:bg-[#00b2ff] text-white shadow-lg hover:shadow-xl",
    outline: "border border-white/30 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
