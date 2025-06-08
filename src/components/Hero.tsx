import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <Card className="p-2">
            <CardContent className="flex flex-row p-2">
                <div id="text">
                    <h1 className="font-semibold text-2xl">What's Up! 🫡</h1>
                    <p className="text-lg">I'm Roberto, a developer and a dreamer with action.</p>
                    <p>Currently, learning and building things!</p>
                    <div className="flex flex-row gap-2 mt-2">
                        <Button variant={"outline"} size={"icon"} className="cursor-pointer">
                            <Link href="">
                                A
                            </Link>
                        </Button>
                    </div>
                </div>
                <div id="img" className="hidden sm:flex items-center justify-center">
                    img
                </div>
            </CardContent>
        </Card>
    )
}