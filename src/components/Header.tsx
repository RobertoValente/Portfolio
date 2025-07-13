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
        <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
            <nav className="max-w-3xl mx-auto flex items-center justify-between p-2">
                <div>{/* Maybe put something here later :D */}</div>

                <div className="hidden md:flex items-center space-x-2">
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection('about')}
                        className="cursor-pointer hover:text-primary hover:scale-105 hover:bg-primary/10 transition-all duration-200 group"
                    >
                        <User className="size-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
                        About
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection('projects')}
                        className="cursor-pointer hover:text-primary hover:scale-105 hover:bg-primary/10 transition-all duration-200 group"
                    >
                        <Briefcase className="size-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
                        Projects
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection('events')}
                        className="cursor-pointer hover:text-primary hover:scale-105 hover:bg-primary/10 transition-all duration-200 group"
                    >
                        <Trophy className="size-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-200" />
                        Events
                    </Button>
                </div>

                <div className="flex items-center space-x-2">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="cursor-pointer hover:scale-110 hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {theme === "dark" ? (
                                <Sun className="size-5 group-hover:rotate-12 transition-transform duration-300" />
                            ) : (
                                <Moon className="size-5 group-hover:rotate-12 transition-transform duration-300" />
                            )}
                        </Button>
                    )}
                </div>
            </nav>
        </header>
    )
}