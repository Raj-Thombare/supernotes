"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant='ghost' size='icon' onClick={toggleTheme}>
      <Sun className='h-[1.2rem] w-[1.2rem] transition-all hidden dark:block' />
      <Moon className='h-[1.2rem] w-[1.2rem] block dark:hidden transition-all' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
