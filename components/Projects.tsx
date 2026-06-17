import { ProjectsData } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

type Project = (typeof ProjectsData)[number];

type ProjectsProps = {
    limit?: number;
};

const Projects = ({ limit }: ProjectsProps) => {
    const projectsToShow = limit ? ProjectsData.slice(0, limit) : ProjectsData;

    return (
        <section id="projects" className="py-20 bg-primary/5">
            <div className="wrapper">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Featured Projects
                </h2>
                <p className="mt-2 text-primary/70">
                    Showcase of my recent works and side projects
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projectsToShow.map((p: Project) => (
                        <article
                            key={p.title}
                            className="group p-6 bg-white rounded-lg border border-primary/20 hover:border-blue/50 hover:shadow-lg transition-all duration-300"
                        >
                            {p.image ? (
                                <div className="relative h-40 overflow-hidden rounded-md mb-4 bg-primary/5">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ) : null}
                            <h3 className="text-lg font-semibold text-primary group-hover:text-blue transition">
                                {p.title}
                            </h3>
                            <p className="mt-2 text-primary/70 text-sm leading-relaxed">
                                {p.desc}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-blue/10 text-blue text-xs rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={p.liveLink}
                                className="inline-block mt-4 text-blue font-semibold text-sm hover:text-blue/70"
                            >
                                View Project →
                            </a>
                        </article>
                    ))}
                </div>
                {limit ? (
                    <div className="mt-8 text-center sm:text-left">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary/90"
                        >
                            View all projects
                        </Link>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default Projects;
