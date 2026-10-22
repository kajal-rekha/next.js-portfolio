"use client";

import { ProjectsData } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

type Project = (typeof ProjectsData)[number];

type ProjectsProps = {
  limit?: number;
};

const Projects = ({ limit }: ProjectsProps) => {

  // ================= CATEGORY MATCHING =================
  const getCategory = (project: Project) => {
    const title = project.title.toLowerCase();

    if (project.category) {
      return project.category;
    }

    if (project.isAI) {
      return "AI";
    }

    if (title.includes("subnivo")) {
      return "SaaS";
    }

    if (
      title.includes("ecommerce") ||
      title.includes("e-commerce") ||
      title.includes("jewelry") ||
      title.includes("tech alpha") ||
      title.includes("purehillglow")
    ) {
      return "eCommerce";
    }

    if (title.includes("project management") || title.includes("dashboard")) {
      return "Dashboard";
    }

    return "Full-Stack";
  };

  // ================= LIMIT =================

  const projectsToShow = limit ? ProjectsData.slice(0, limit) : ProjectsData;

  const [featuredProject, ...supportingProjects] = projectsToShow;

  // ================= TAGS =================

  const renderTags = (tags: string[], count = 5) => {
    return (
      <div className="flex flex-wrap gap-2">
        {tags.slice(0, count).map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  };

  // ================= ACTIONS =================

  const renderActions = (project: Project, compact = false) => {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-lg bg-blue px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue/90 ${
            compact ? "px-3.5" : ""
          }`}
        >
          Live Site
          <ExternalLink size={13} />
        </Link>

        <Link
          href={project.frontEndLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-blue hover:text-blue sm:inline-flex"
        >
          Frontend Code
        </Link>

        {project.backendLink && (
          <Link
            href={project.backendLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:border-blue hover:text-blue sm:inline-flex"
          >
            Backend Code
          </Link>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section-shell bg-white">
      <div className="wrapper">
        {/* ================= SECTION HEADER ================= */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between ">
          <div className="mb-5">
            <p className="section-kicker">Selected Work</p>

            <h2 className="section-title text-left md:text-left">
              Projects I&apos;ve Built
            </h2>

            <p className="section-copy max-w-xl">
              A selection of full-stack applications, SaaS products, and
              real-world web projects I&apos;ve designed and developed.
            </p>
          </div>

          {/* <Link
            href="https://github.com/kajal-rekha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-blue"
          >
            Explore GitHub
            <Github size={17} />
          </Link> */}
        </div>

        {/* ================= PROJECTS ================= */}

        {featuredProject ? (
          <>
            {/* ================= FEATURED PROJECT ================= */}

            <article className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(33,24,68,0.06)]">
              <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                {/*================ IMAGE============== */}

                <div className="relative  bg-slate-50 p-4 sm:p-6 h-full">
                  {featuredProject.image && (
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                      <Image
                        src={featuredProject.image}
                        alt={`${featuredProject.title}`}
                        width={1600}
                        height={2000}
                        priority
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  )}
                </div>

                {/*================ CONTENT =================*/}

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-blue/10 px-3 py-1 text-xs font-bold text-blue">
                      01
                    </span>

                    <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">
                      ★ Featured Project
                    </span>
                  </div>

                  <span className="mt-5 w-fit rounded-full bg-blue/10 px-2.5 py-1 text-[11px] font-semibold text-blue">
                    {getCategory(featuredProject)}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                    {featuredProject.desc}
                  </p>

                  {/*================ ==================PROJECT HIGHLIGHTS =================*/}

                  {/* <div className="mt-6 grid gap-2.5 text-xs text-slate-600 sm:grid-cols-2">
                    {featuredProject.tags.slice(0, 4).map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2.5"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {tag}
                      </div>
                    ))}
                  </div> */}

                  {/*========== TAGS ==============*/}

                  <div className="mt-6">
                    {renderTags(featuredProject.tags, 6)}
                  </div>

                  {/*=========== ACTIONS ===========*/}

                  <div className="mt-7">{renderActions(featuredProject)}</div>
                </div>
              </div>
            </article>

            {/* ================= SUPPORTING PROJECTS ================= */}

            {supportingProjects.length > 0 && (
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {supportingProjects.map((project: Project, index) => (
                  <article
                    key={project.title}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_35px_rgba(33,24,68,0.08)]"
                  >
                    {/*============ IMAGE ============*/}

                    {project.image && (
                      <div className="relative h-56 overflow-hidden bg-slate-100 md:h-64">
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />

                        <span className="absolute left-4 top-4 rounded-md border border-slate-200 bg-white/95 px-2.5 py-1 text-[11px] font-bold text-primary shadow-sm">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                    )}

                    {/*================ =======CONTENT =================*/}

                    <div className="flex flex-1 flex-col p-5">
                      <span className="mb-2 w-fit rounded-full bg-blue/10 px-2.5 py-1 text-[11px] font-semibold text-blue">
                        {getCategory(project)}
                      </span>

                      <h3 className="text-lg font-bold leading-snug text-primary transition-colors duration-200 group-hover:text-blue">
                        {project.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm leading-5 text-slate-500">
                        {project.desc}
                      </p>

                      {/*================ TAGS =================*/}

                      <div className="mt-auto pt-5">
                        {renderTags(project.tags, 4)}
                      </div>

                      {/*================ ACTIONS =================*/}

                      <div className="mt-5">{renderActions(project, true)}</div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        ) : (
          /* ================= EMPTY STATE ================= */

          <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center">
            <p className="text-sm font-medium text-slate-500">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* ================= VIEW ALL ================= */}

        
      </div>
    </section>
  );
};

export default Projects;
