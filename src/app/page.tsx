import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { FunExperiences } from "@/components/Events";

export default function Home() {
    return (
        <div className="flex flex-col gap-8 max-w-3xl mx-auto py-6">
            <Hero />
            <Projects />
            <FunExperiences />
        </div>
    )
}