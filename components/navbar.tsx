"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center space-x-6 ml-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Introduce
            </Link>
            <Link
              href="/project"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/project"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Project
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/contact"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/hunsang-you"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
              "text-muted-foreground"
            )}
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
