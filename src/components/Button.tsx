
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-white text-black shadow-sm',
    secondary: 'bg-black bg-opacity-10 text-white border border-white border-opacity-30',
    ghost: 'bg-transparent hover:bg-white hover:bg-opacity-10 text-white',
    link: 'bg-transparent text-white underline p-0 hover:no-underline'
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };

  return (
    <button
      className={cn(
        'rounded-full font-medium transition-all duration-300 animate-scale-in',
        'hover:shadow-md active:scale-[0.98]',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
