"use client"

import Link from "next/link"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react";

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <header>
            <nav className="border-b">
                <div id="content" className="max-w-3xl mx-auto flex items-center justify-between p-2">
                    <div>{/* Maybe put something here later :D */}</div>
                    <div>{/* Maybe put something here later :D */}</div>

                    {mounted && (
                        <Button
                            variant={"ghost"}
                            className="cursor-pointer"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? (
                                <Sun className="size-5" />
                            ) : (
                                <Moon className="size-5" />
                            )}
                        </Button>
                    )}
                </div>
            </nav>
        </header>
    )
}