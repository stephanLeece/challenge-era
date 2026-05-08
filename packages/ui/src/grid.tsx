import { ReactNode, HTMLAttributes } from 'react';

type GridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Grid = ({ children, className = '', ...props }: GridProps) => {
  return (
    <div
      className={`ui:grid ui:grid-cols-3 ui:md:grid-cols-4 ui:lg:grid-cols-6 ui:gap-0.5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
