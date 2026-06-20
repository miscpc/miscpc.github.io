import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({ children, id, className, title, subtitle }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-12">
            {subtitle && (
              <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {title}
              </h2>
            )}
            <div className="h-1 w-12 bg-emerald-500 mt-4 rounded-full" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
