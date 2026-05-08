import React from 'react';
import clsx from 'clsx';

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'className'> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export const Image = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  ...props
}: ImageProps) => (
  <div className={clsx("ui:relative ui:block ui:w-full ui:aspect-square ui:overflow-hidden", className)}>
    <img
      src={src}
      alt={alt}
      className={clsx("ui:absolute ui:inset-0 ui:h-full ui:w-full ui:object-cover", imgClassName)}
      {...props}
    />
  </div>
);


