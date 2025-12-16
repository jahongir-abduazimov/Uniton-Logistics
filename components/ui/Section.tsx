import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 px-4 md:px-6 lg:px-8', className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

