"use client"

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon, User, Briefcase, Trophy } from "lucide-react"
import { useEffect, useState } from "react";

export function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="max-w-3xl mx-auto flex items-center justify-between p-2">
                <div>{/* Maybe put something here later :D */}</div>

                <div className="hidden md:flex items-center space-x-6">
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection('about')}
                        className="cursor-pointer hover:text-primary transition-colors"
                    >
                        <User className="size-4" />
                        About
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection('projects')}
                        className="cursor-pointer hover:text-primary transition-colors"
                    >
                        <Briefcase className="size-4" />
                        Projects
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection('events')}
                        className="cursor-pointer hover:text-primary transition-colors"
                    >
                        <Trophy className="size-4" />
                        Events
                    </Button>
                </div>

                <div className="flex items-center space-x-2">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer hover:scale-110 transition-transform"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? (
                                <Sun className="size-5 " />
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