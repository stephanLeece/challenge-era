import { ReactNode } from 'react';
import clsx from 'clsx';

interface NavbarProps {
    children: ReactNode;
    className?: string;
};

export function Navbar({ children, className }: NavbarProps) {
    return (
        <nav className={clsx("ui:box-border ui:h-14 ui:w-full ui:p-4 ui:flex ui:items-center ui:justify-between", className)}>
            {children}
        </nav>
    );
}
