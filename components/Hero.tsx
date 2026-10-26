import Image from "next/image";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import Reveal from "./Reveal";

const socialLinks = [
  {
    href: "https://x.com/kajalreka",
    label: "X / Twitter",
    icon: BiLogoTwitter,
  },
  {
    href: "https://www.linkedin.com/in/kajal-rekha",
    label: "LinkedIn",
    icon: BiLogoLinkedin,
  },
  {
    href: "https://www.facebook.com/anowar.kajal",
    label: "Facebook",
    icon: BiLogoFacebook,
  },
  {
    href: "https://github.com/kajal-rekha",
    label: "GitHub",
    icon: BiLogoGithub,
  },
  {
    href: "https://leetcode.com/u/kajalrekha",
    label: "LeetCode",
    icon: SiLeetcode,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray/90 pt-[110px] pb-16 md:pt-[140px] md:pb-20"
    >
      <Reveal>
        <div className="wrapper">
          <div className="grid min-h-[calc(100vh-180px)] grid-cols-1 items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-12 lg:gap-20">
            {/* ================= LEFT CONTENT ================= */}
            <div className="flex flex-col items-start">
              {/*============= Small intro ============*/}
              <p className="mb-3 text-sm font-semibold tracking-wide text-blue md:text-base">
                Hello, I&apos;m Kajal —
              </p>

              {/*============== Main Heading ============*/}
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                Full-Stack{" "}
                <span className="font-mono font-semibold text-blue">
                  Developer
                </span>
              </h1>

              {/*=============== Short positioning ================*/}
              <h2 className="mt-4 text-xl font-semibold text-primary sm:text-2xl md:text-3xl">
                MERN <span className="text-slate-400">·</span> Next.js{" "}
                <span className="text-slate-400">·</span> TypeScript
              </h2>

              {/*================= Description ===============*/}
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                I build modern web applications with intuitive interfaces,
                reliable functionality, and a focus on solving real-world
                problems.
              </p>

              {/* ================= SOCIAL LINKS ================= */}
              <div className="mt-7 flex items-center gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-primary transition-all duration-200 hover:-translate-y-0.5 hover:text-blue"
                    >
                      <Icon className="h-5 w-5 md:h-[22px] md:w-[22px]" />
                    </Link>
                  );
                })}
              </div>

              {/* ================= CTA BUTTONS ================= */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue/90"
                >
                  Let&apos;s Connect
                </Link>

                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-slate-50"
                >
                  View My Work
                </Link>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative mx-auto w-full max-w-sm md:max-w-[350px] lg:max-w-[400px]">
              {/*============== Background offset ==============*/}
              <div className="absolute -right-3 -bottom-3 h-full w-full rounded-lg bg-primary " />

              {/*============ Image =============*/}
              <div className="relative z-10 overflow-hidden rounded-lg border border-slate-200 bg-white">
                {/* <Image
                                src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1751136045/kajal-1_vmashj.jpg"
                                alt="Kajal Rekha - Full-Stack Developer"
                                width={700}
                                height={700}
                                priority
                                className="aspect-[4/5] w-full object-cover"
                            /> */}
                <Image
                  src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1683005288/her_o2_msb5gs.jpg"
                  alt="Kajal Rekha - Full-Stack Developer"
                  width={700}
                  height={700}
                  priority
                  className="aspect-[3/4] w-full object-cover"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
