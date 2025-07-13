import type { NextConfig } from "next";
import { envSchema } from "@/lib/utils";
import { ZodError } from "zod";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgur.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: '',
                pathname: '/**',
            },
        ]
    }
};

try {
    envSchema.parse(process.env);
} catch (error: unknown) {
    if (error instanceof ZodError) {
        error.errors.forEach((err) => {
            console.error(`[ENV] -> Validation error for: ${err.path} - ${err.message}`);
        });
        process.exit(1);
    }
}

export default nextConfig;