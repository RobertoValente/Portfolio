import Link from "next/link";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";

export default function Home() {

    return (
        <>
            <SparklesText className="text-center mt-6 text-4xl">Hello World :D</SparklesText>
            <div className="text-center mt-6">
                <Button variant={"link"} className="cursor-pointer">
                    <Link href="/#">Home</Link>
                </Button>
            </div>
        </>
    )
}