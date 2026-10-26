"use client";

import { useState } from "react";
import type { IconType } from "react-icons";

import { BiLogoNetlify } from "react-icons/bi";
import { MdAnimation } from "react-icons/md";

import {
  FaBootstrap,
  FaChrome,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNpm,
  FaNodeJs,
  FaReact,
  FaStripe,
  FaYarn,
} from "react-icons/fa6";

import {
  SiAxios,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiFramer,
  SiInsomnia,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
  SiRedux,
  SiRender,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import Reveal from "./Reveal";

type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools";

const skillCategories: Record<SkillCategory, Skill[]> = {
  Frontend: [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "#1572B6",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      color: "#7952B3",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#38BDF8",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "React.js",
      icon: FaReact,
      color: "#61DAFB",
    },
    {
      name: "Redux",
      icon: SiRedux,
      color: "#764ABC",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#111827",
    },
    {
      name: "Firebase Auth",
      icon: SiFirebase,
      color: "#FFCA28",
    },
    {
      name: "Axios",
      icon: SiAxios,
      color: "#5A29E4",
    },
    {
      name: "GSAP",
      icon: MdAnimation,
      color: "#88CE02",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "#0055FF",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "#68A063",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#111827",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      color: "#2D3748",
    },
    {
      name: "Mongoose",
      icon: SiMongoose,
      color: "#880000",
    },
    {
      name: "Stripe",
      icon: FaStripe,
      color: "#635BFF",
    },
  ],

  Database: [
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "Mongoose",
      icon: SiMongoose,
      color: "#880000",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      color: "#2D3748",
    },
  ],

  Tools: [
    {
      name: "Git",
      icon: FaGitAlt,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "#111827",
    },
    {
      name: "NPM",
      icon: FaNpm,
      color: "#CB3837",
    },
    {
      name: "Yarn",
      icon: FaYarn,
      color: "#2C8EBB",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#111827",
    },
    {
      name: "Netlify",
      icon: BiLogoNetlify,
      color: "#00C7B7",
    },
    {
      name: "Render",
      icon: SiRender,
      color: "#46E3B7",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "#FF6C37",
    },
    {
      name: "Insomnia",
      icon: SiInsomnia,
      color: "#4000BF",
    },

    {
      name: "Figma",
      icon: SiFigma,
      color: "#F24E1E",
    },
    {
      name: "Chrome DevTools",
      icon: FaChrome,
      color: "#4285F4",
    },
  ],
};

const categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Frontend");

  const activeSkills = skillCategories[activeCategory];

  return (
    <section id="skills" className="section-shell bg-[#f8f9fc]">
      <Reveal>
        <div className="wrapper">
          {/* =================Section Heading ==============*/}
          <div className="mb-10 max-w-2xl text-left">
            <p className="section-kicker">Tech Stack</p>

            <h2 className="section-title text-left md:text-left">
              Technologies I Work With
            </h2>

            <p className="section-copy">
              A collection of technologies and tools I use to build modern,
              scalable, and user-focused web applications.
            </p>
          </div>

          {/* =================Category Tabs ================*/}
          <div className="mb-8 flex flex-wrap items-center justify-start gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-blue bg-blue text-white shadow-md shadow-blue/20"
                      : "border-slate-200 bg-white text-slate-500 hover:border-blue hover:text-blue"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/*================ Skills Container =================*/}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(33,24,68,0.06)] sm:p-8 md:p-10">
            {/*============ Decorative Glow ==============*/}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue/5 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue/5 blur-3xl" />

            {/*============= Skills ===============*/}
            <div
              key={activeCategory}
              className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10"
            >
              {activeSkills.map(({ name, icon: Icon, color }) => (
                <Reveal key={name}>
                  <div className="group relative flex w-full min-h-[120px] cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-2 py-3 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue/30 hover:bg-slate-50 hover:shadow-[0_14px_30px_rgba(33,24,68,0.10)]">
                    {/* ==============Hover Gradient ==============*/}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/*============= Icon ================*/}
                    <div className="relative mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue/20 group-hover:bg-white group-hover:shadow-md">
                      <Icon
                        size={20}
                        color={color}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:rotate-3"
                      />
                    </div>

                    {/* =====================Name ==================*/}
                    <span className="relative line-clamp-2 text-[11px] font-semibold leading-tight text-slate-600 transition-colors duration-300 group-hover:text-primary sm:text-[12px]">
                      {name}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
