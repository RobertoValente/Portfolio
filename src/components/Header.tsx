"use client"

import Link from "next/link"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Loader2 } from "lucide-react"

export function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header>
            <nav className="border-b">
                <div id="content" className="max-w-5xl mx-auto flex items-center justify-between p-2">
                    <Button variant={"ghost"} className="cursor-pointer">
                        <Link href="/">
                            Roberto Valente
                        </Link>
                    </Button>

                    <Button
                        variant={"ghost"}
                        className="cursor-pointer"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        title={theme === "dark" ? "Switch to Light Mode" : theme === "light" ? "Switch to Dark Mode" : "Loading Theme"}
                    >
                        {theme === "dark" ? (
                            <Sun className="size-5" />
                        ) : theme === "light" ? (
                            <Moon className="size-5" />
                        ) : (
                            <Loader2 className="size-5 animate-spin" />
                        )}
                    </Button>
                </div>
            </nav>
        </header>
    )
}