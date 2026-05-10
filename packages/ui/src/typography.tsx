import { ReactNode } from 'react';
import clsx from 'clsx';

type TypographyElement =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'div'
    | 'label';

interface TypographyProps {
    as?: TypographyElement;
    children: ReactNode;
    className?: string;
};

const variantStyles: Record<TypographyElement, string> = {
    h1: 'ui:text-4xl ui:font-bold',
    h2: 'ui:text-3xl ui:font-semibold',
    h3: 'ui:text-2xl ui:font-semibold',
    h4: 'ui:text-xl ui:font-medium',
    h5: 'ui:text-lg ui:font-medium',
    h6: 'ui:text-base ui:font-medium',
    p: 'ui:text-base',
    span: 'ui:text-base',
    div: 'ui:text-base',
    label: 'ui:text-sm ui:font-medium',
};

export const Typography = ({
    as = 'p',
    children,
    className,
}: TypographyProps) => {
    const Component = as;

    return (
        <Component className={clsx("ui:font-[Avenir,sans-serif]", variantStyles[as], className)}>
            {children}
        </Component>
    );
};

