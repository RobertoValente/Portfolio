"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Images, ChevronLeft, ChevronRight } from "lucide-react"
import projectsData from "@/lib/data/projects.json";

/*type Project = {
    status: string;
    title: string;
    description: string;
    urlGithub?: string;
    urlSite?: string;
    images: string[];
};*/

export function Projects() {
	const [open, setOpen] = useState(false);
	const [currentImages, setCurrentImages] = useState<string[]>([]);
	const [currentIdx, setCurrentIdx] = useState(0);

	const openViewer = (images: string[]) => {
		setCurrentImages(images);
		setCurrentIdx(0);
		setOpen(true);
	};

	const closeViewer = () => setOpen(false);

	return (
		<section id="projects" className="px-4">
			<div className="mb-2">
				<span className="text-xs font-bold tracking-wider text-primary uppercase underline underline-offset-4">PROJECTS</span>
			</div>
			<div className="flex flex-col gap-3">
                {projectsData.projects.length === 0 ? (
                    <div className="text-muted-foreground text-sm">
                        No projects found. Check back later!
                    </div>
                ) : (
                    (projectsData.projects.map((project, idx) => (
                        <Card key={idx} className="flex flex-col sm:flex-row gap-4 p-4 h-full">
                            <CardContent className="flex flex-col flex-1 px-0 py-2">
                                <div className="flex flex-row items-center gap-2">
                                    <h3 className="font-semibold text-lg tracking-tight text-primary/90">{project.title}</h3>
                                    <Badge
                                        variant={"secondary"}
                                        className="text-xs font-semibold"
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                                <div className="flex-1" />
                                <div className="flex flex-row gap-2 mt-4">
                                    {project.images.length > 0 && (
                                        <Button
                                            variant="default"
                                            className="tracking-wide cursor-pointer"
                                            onClick={() => openViewer(project.images)}
                                            title="View Screenshots"
                                        >
                                            <Images className="size-4 ml-1" />
                                            Screenshots
                                        </Button>
                                    )}

                                    {project.urlSite && (
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="tracking-wide cursor-pointer"
                                            title="View Site"
                                        >
                                            <Link href={project.urlSite} target="_blank">
                                                <ExternalLink className="size-4" />
                                                <span className="hidden xs:block">Visit</span>
                                            </Link>
                                        </Button>
                                    )}

                                    {project.urlGithub && (
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="tracking-wide cursor-pointer"
                                            title="View GitHub Repository"
                                        >
                                            <Link href={project.urlGithub} target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                                                <span className="hidden xs:block">Github</span>
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )))
                )}
			</div>
			
			{open && (
				<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
					<div className="bg-background rounded-2xl shadow-2xl p-4 relative max-w-md w-full flex flex-col items-center border border-primary/20">
						<Image
							src={currentImages[currentIdx]}
							alt="Project Image"
							width={400}
							height={250}
							className="rounded-sm object-contain mb-2 border border-primary/10"
							style={{ background: '#f3f3f3' }}
						/>
						<div className="flex gap-2 mb-2">
							<Button
								size="icon"
								variant="outline"
                                className="cursor-pointer"
								onClick={() => setCurrentIdx((i) => Math.max(i - 1, 0))}
								disabled={currentIdx === 0}
							>
								<ChevronLeft className="size-4 cursor-pointer" />
							</Button>
							<Button
								size="icon"
								variant="outline"
                                className="cursor-pointer"
								onClick={() =>
									setCurrentIdx((i) =>
										Math.min(i + 1, currentImages.length - 1)
									)
								}
								disabled={currentIdx === currentImages.length - 1}
							>
								<ChevronRight className="size-4 cursor-pointer" />
							</Button>
						</div>
						<Button
							variant="outline"
                            className="cursor-pointer mt-1"
							onClick={closeViewer}
						>
							Close
						</Button>
					</div>
				</div>
			)}
		</section>
	);
}
