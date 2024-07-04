import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn("border-4 border-purple bg-white disabled:border-lightgray w-full p-3 font-bold active:bg-purple text-purple active:text-white disabled:text-[#aaa] disabled:pointer-events-none", props.className)}
    >
      {children}
    </button>
  );
};

export default Button;
