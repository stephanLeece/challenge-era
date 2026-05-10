import { ReactNode } from 'react';
import clsx from 'clsx';

interface GridProps {
  children: ReactNode;
  className?: string;
};

export const Grid = ({ children, className = '' }: GridProps) => {
  return (
    <div className={clsx("ui:grid ui:grid-cols-3 ui:md:grid-cols-4 ui:lg:grid-cols-6 ui:gap-0.5", className)}>
      {children}
    </div>
  );
}
