import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  MonitorSmartphone,
  Server,
} from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Interfaces",
    description: "Clean, accessible experiences across devices.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Solutions",
    description: "Connected frontend and backend functionality.",
  },
  {
    icon: Code2,
    title: "Modern Development",
    description: "React, Next.js and maintainable code.",
  },
  {
    icon: Server,
    title: "Secure Web Applications",
    description: "Secure authentication and data protection.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell overflow-hidden bg-white">
      <Reveal>
        <div className="wrapper">
          {/* Section Heading */}
          <div className="mb-12 max-w-2xl">
            <p className="section-kicker">About Me</p>

            <h2 className="section-title text-left">A little about me</h2>

            <p className="section-copy">
              I create modern web applications that combine intuitive user
              experiences, responsive design, and reliable functionality.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Profile Image */}
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="absolute -bottom-3 -right-3 h-full w-full rounded-[1.75rem] bg-primary" />

              <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[1.75rem] border-l-2 border-t-2 border-blue/40" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-primary shadow-[0_20px_60px_-25px_rgba(30,27,75,0.28)]">
                <Image
                  src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1792774380/kajal_1_dklmqm.png"
                  alt="Kajal Rekha, Full-Stack Developer"
                  width={700}
                  height={875}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />

                {/* Image Caption */}
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-xl border border-white/60 bg-white/90 p-3 shadow-lg backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Code2 size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold text-primary">
                      Kajal Rekha
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Full-Stack Developer
                    </p>
                  </div>

                  <div className="ml-auto hidden shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-xs font-medium text-emerald-700 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Open to opportunities
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="pt-2 lg:pt-0">
              <h3 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl lg:text-[2.5rem]">
                Building better {""}
                <span className="text-blue">web experiences.</span>
              </h3>

              <div className="mt-5 max-w-2xl space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                <p>
                  I&apos;m a{" "}
                  <span className="font-semibold text-primary">
                    Full-Stack Developer
                  </span>{" "}
                  building modern web applications with React, Next.js, Node.js,
                  and TypeScript. I enjoy turning ideas into functional,
                  user-friendly products by bringing frontend and backend
                  together.
                </p>

                <p>
                  I focus on clean UI, responsive design, maintainable code, and
                  building practical solutions to real-world problems.
                </p>
              </div>

              {/* Expertise Highlights */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title}>
                      <div className="group flex gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:bg-slate-50/80 hover:shadow-[0_12px_30px_-20px_rgba(79,70,229,0.35)] sm:p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-blue transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                          <Icon size={19} strokeWidth={1.8} />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-primary">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue hover:shadow-lg hover:shadow-violet-900/15"
                >
                  Let&apos;s Connect
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
