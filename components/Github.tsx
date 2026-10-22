"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  FolderGit2,
  Github as GithubIcon,
  GitBranch,
  Star,
} from "lucide-react";

const githubStats = [
  {
    value: "104",
    title: "Public Repositories",
    description: "Projects, experiments & learning work",
    icon: FolderGit2,
  },
  {
    value: "1,680",
    title: "Total Contributions",
    description: "Consistent coding activity across GitHub",
    icon: GitBranch,
  },
  {
    value: "171",
    title: "GitHub Stars",
    description: "Stars earned across my GitHub repositories",
    icon: Star,
  },
];

const Github = () => {
  return (
    <section className="section-shell bg-white">
      <div className="wrapper">
        {/*============= Header =================*/}
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">GitHub</p>

          <h2 className="section-title text-left md:text-left">
            Code & Projects
          </h2>

          <p className="section-copy">
            Explore my repositories, development projects, and the technologies
            I use to build modern web applications.
          </p>
        </div>

        {/*============= GitHub Profile Card =============*/}
        <div className="relative mb-5 overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f9fc] p-6 shadow-[0_15px_45px_rgba(33,24,68,0.05)] sm:p-8">
          {/*============ Decorative glow ===============*/}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            {/* ==================Profile ================*/}
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-light shadow-lg">
                <GithubIcon size={32} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  GitHub Profile
                </p>

                <h3 className="mt-1 text-xl font-bold text-primary sm:text-2xl">
                  kajal-rekha
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Full-Stack Developer · React · Next.js · Node.js
                </p>
              </div>
            </div>

            {/* ===================Profile Button ======================== */}
            <Link
              href="https://github.com/kajal-rekha"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue hover:shadow-lg hover:shadow-blue/20"
            >
              View GitHub Profile
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/*============= GitHub Highlights =============*/}
        <div className="grid gap-5 md:grid-cols-3">
          {githubStats.map(({ value, title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/30 hover:shadow-[0_15px_35px_rgba(33,24,68,0.08)]"
            >
              {/*============= Hover glow =============*/}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue/5 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-blue transition-all duration-300 group-hover:scale-105 group-hover:border-blue/20 group-hover:bg-blue/5">
                    <Icon size={21} />
                  </div>

                  <span className="text-2xl font-bold tracking-tight text-primary">
                    {value}
                  </span>
                </div>

                <h3 className="text-base font-bold text-primary">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>

                <div className="mt-5 h-px w-8 bg-blue transition-all duration-300 group-hover:w-14" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Github;
