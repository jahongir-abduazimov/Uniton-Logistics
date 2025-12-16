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
    'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer hover:scale-105 active:scale-95';

  const variants = {
    primary:
      'bg-gradient-to-r from-[#074C6E] to-[#0ea5e9] text-white hover:from-[#063d57] hover:to-[#074C6E] focus:ring-[#074C6E] shadow-lg hover:shadow-glow transition-all duration-300',
    secondary:
      'bg-white text-[#074C6E] border-2 border-[#074C6E] hover:bg-gradient-to-r hover:from-[#074C6E] hover:to-[#0ea5e9] hover:text-white hover:border-transparent focus:ring-[#074C6E] shadow-md hover:shadow-glow transition-all duration-300',
    outline:
      'bg-transparent text-[#074C6E] border-2 border-[#074C6E] hover:bg-gradient-to-r hover:from-[#074C6E] hover:to-[#0ea5e9] hover:text-white hover:border-transparent focus:ring-[#074C6E] transition-all duration-300',
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

