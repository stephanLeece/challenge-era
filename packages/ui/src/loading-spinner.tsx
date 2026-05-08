import clsx from 'clsx';

const sizeStyles = {
    sm: 'ui:w-2 ui:h-2',
    md: 'ui:w-3 ui:h-3',
    lg: 'ui:w-4 ui:h-4',
};

const colorVariantStyles = {
    light: 'ui:bg-white',
    dark: 'ui:bg-gray-800',
};

type LoadingSpinnerProps = {
    className?: string;
    size?: keyof typeof sizeStyles;
    colorVariant?: keyof typeof colorVariantStyles;
};

export const LoadingSpinner = ({
    className,
    size = 'md',
    colorVariant = 'light',
}: LoadingSpinnerProps) => {
    return (
        <div
            className={clsx('ui:flex ui:items-center ui:gap-1', className)}
            aria-label="Loading"
            role="status"
        >
            <span
                className={clsx(
                    'ui:rounded-full ui:animate-bounce',
                    colorVariantStyles[colorVariant],
                    sizeStyles[size]
                )}
            />
            <span
                className={clsx(
                    'ui:rounded-full ui:animate-bounce',
                    colorVariantStyles[colorVariant],
                    sizeStyles[size]
                )}
                style={{ animationDelay: '0.15s' }}
            /* i would have prefered to use a class here but it seems like there is no animation equivalent
             * of transition-delay in tailwind, so for the sake of time i used inline styles.
             */
            />
            <span
                className={clsx(
                    'ui:rounded-full ui:animate-bounce',
                    colorVariantStyles[colorVariant],
                    sizeStyles[size]
                )}
                style={{ animationDelay: '0.3s' }}
            />
        </div>
    );
};