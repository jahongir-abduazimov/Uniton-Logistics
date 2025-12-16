import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-modern hover:shadow-glow transition-all duration-500 lg:p-6 p-3 border border-gray-100 hover:border-[#074C6E]/30 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

