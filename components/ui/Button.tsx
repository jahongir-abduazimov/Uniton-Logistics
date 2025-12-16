import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';

  const variants = {
    primary:
      'bg-[#074C6E] text-white hover:bg-[#063d57] focus:ring-[#074C6E] shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-[#074C6E] border-2 border-[#074C6E] hover:bg-[#074C6E] hover:text-white focus:ring-[#074C6E]',
    outline:
      'bg-transparent text-[#074C6E] border-2 border-[#074C6E] hover:bg-[#074C6E] hover:text-white focus:ring-[#074C6E]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'md:px-6 md:py-3 px-4 py-2 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

