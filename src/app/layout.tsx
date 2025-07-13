import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ui/theme-provider";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    creator: 'Roberto Valente',
    authors: [{ name: "Roberto Valente", url: "https://robertovalente.pt" }],
    
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    publisher: "Roberto Valente",
    applicationName: "Portfolio - Roberto Valente",
    title: {
        default: "Portfolio - Roberto",
        template: "%s | Portfolio - Roberto",
    },
    description: "I'm Roberto - a developer and a dreamer with action! Always learning, always building.",
    keywords: [
        "roberto valente", "portfolio backend", "portfolio fullstack",
        "roberto valente portfolio", "roberto valente developer",
        "Roberto Valente", "Roberto Valente Programador", "Roberto Valente Developer",
        "robertovalente"
    ],
    alternates: {
        canonical: process.env.NEXT_PUBLIC_SITE_URL!,
        languages: {
            "pt-PT": `${process.env.NEXT_PUBLIC_SITE_URL!}`,
            "en-US": `${process.env.NEXT_PUBLIC_SITE_URL!}`,
        }
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-video-preview': -1,
            'max-snippet': -1,
            noimageindex: false,
            'notranslate': false,
        },
    },
    verification: {
        google: 'google-site-verification-code',
    },
    other: {
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'format-detection': 'telephone=no',
    },
    //manifest: "",
    //verification: {},

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}