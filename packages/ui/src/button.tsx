"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="ui:bg-red-500 ui:text-pink-300 ui:h-8 ui:w-[100px]"
      onClick={() => alert("Hello from the new ui package")}
    >
      {children}
    </button>
  );
};