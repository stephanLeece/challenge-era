import { ComponentProps } from 'react';
import clsx from 'clsx';

export const GridImage = ({
  className,
  ...imgProps
}: ComponentProps<'img'>) => (
  <img
    className={clsx(
      'ui:block ui:w-full ui:aspect-square ui:object-cover',
      className
    )}
    {...imgProps}
  />
);