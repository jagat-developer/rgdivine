import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ className, variant = "primary", children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf",
        variant === "primary" &&
          "bg-leaf text-white hover:bg-leaf-hover",
        variant === "secondary" &&
          "border border-ink/15 bg-white text-ink hover:border-leaf hover:text-leaf-deep",
        variant === "ghost" && "text-ink/80 hover:text-leaf-deep",
        className,
      )}
      {...props}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
