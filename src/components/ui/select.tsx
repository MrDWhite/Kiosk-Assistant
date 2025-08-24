import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  placeholder?: string;
  className?: string;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onSelect?: (value: string, label: string) => void;
  isSelected?: boolean;
}

export function Select({ value, onValueChange, children, placeholder, className = "" }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [selectedLabel, setSelectedLabel] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    onValueChange?.(value);
    setIsOpen(false);
  };

  const baseClasses = "relative w-full";
  
  return (
    <div className={`${baseClasses} ${className}`} ref={selectRef}>
      <div
        className="w-full px-3 py-2 rounded-lg border border-white/30 bg-white/10 text-white cursor-pointer flex items-center justify-between transition-all duration-200 hover:bg-white/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedValue ? "text-white" : "text-white/50"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg shadow-lg max-h-60 overflow-auto">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === SelectItem) {
              const childElement = child as React.ReactElement<SelectItemProps>;
              return React.cloneElement(childElement, {
                onSelect: handleSelect,
                isSelected: childElement.props.value === selectedValue
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
}

export function SelectItem({ value, children, onSelect, isSelected }: SelectItemProps) {
  const handleClick = () => {
    onSelect?.(value, children as string);
  };

  return (
    <div
      className={`px-3 py-2 cursor-pointer transition-colors duration-200 hover:bg-white/20 ${isSelected ? 'bg-white/20' : ''}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export function SelectTrigger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
