import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import eventsData from "@/lib/data/events.json";

export function FunExperiences() {
    return (
        <section id="events" className="px-4">
            <div className="mb-2">
                <span className="text-xs font-bold tracking-wider text-primary uppercase underline underline-offset-4">{"EVENTS"}</span>
            </div>
            {eventsData.events.length === 0 ? (
                <li className="text-muted-foreground text-sm">
                    No fun experiences found. Check back later!
                </li>
            ) : (
                <Card className="p-0">
                    <CardContent className="px-4 py-4">
                        <ul className="flex flex-col gap-2">    
                            {eventsData.events.map((event, idx) => (
                                <li key={idx}>
                                    <span className="mr-2">➜</span>
                                    {event.description}
                                    {event.url && (
                                        <Link href={event.url} target="_blank" className="text-muted-foreground underline-offset-2 hover:underline hover:text-primary transition-colors duration-150">
                                            {" "}(Check Here)
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </section>
    );
}