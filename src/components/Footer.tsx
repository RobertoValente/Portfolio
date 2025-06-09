import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t py-4 pb-2 px-2 bg-background/80">
            <div id="content" className="max-w-3xl mx-auto flex flex-col items-center gap-1">
                <p className="text-xs text-muted-foreground text-center tracking-wider">
                    <i>{`"🚀 Dreaming higher than the sky! But also building things."`}</i>
                </p>
                <p className="text-sm text-muted-foreground text-center py-1 tracking-wide">
                    Made with <span className="text-red-500">❤️</span> by{' '}
                    <Link href="https://robertovalente.pt" className="text-primary font-semibold hover:underline transition-all duration-150" target="_blank">
                        Roberto Valente
                    </Link>
                </p>
            </div>
        </footer>
    )
}