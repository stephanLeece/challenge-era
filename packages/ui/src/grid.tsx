import { ReactNode, HTMLAttributes } from 'react';

type GridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Grid = ({ children, className = '', ...props }: GridProps) => {
  return (
    <div
      className={`ui:grid ui:grid-cols-2 ui:md:grid-cols-4 ui:lg:grid-cols-12 ui:gap-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
