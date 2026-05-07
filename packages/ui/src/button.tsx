"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className = "", appName }: ButtonProps) => {
  return (
    <button
      className="ui:bg-red-500 ui:text-pink-300 ui:h-8 ui:w-[100px]"
      onClick={() => alert("Hello from the new ui package")}
    >
      {children}
    </button>
  );
};