import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t">
            <div id="content" className="max-w-5xl mx-auto flex flex-col items-center pt-2">
                <p className="text-xs text-muted-foreground text-center">
                    <i>"🚀 Dreaming higher than the sky! But also building things."</i>
                </p>
                <p className="text-sm text-muted-foreground text-center py-1">
                    Made with ❤️ by{" "}
                    <Link href="" className="text-primary hover:underline" target="_blank">
                        Roberto Valente
                    </Link>
                </p>
            </div>
        </footer>
    )
}