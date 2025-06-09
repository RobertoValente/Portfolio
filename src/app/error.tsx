'use client'

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error:", error);
        toast.error("An error occurred, please contact support.");
    }, [error]);

    return (
        <>
            <Button
                variant={"link"}
                className="cursor-pointer w-full m-auto"
                onClick={
                    () => reset()
                }
            >
                <Link href="/">Try Again</Link>
            </Button>
        </>
    )
}