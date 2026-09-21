import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-shell bg-white">
      <div className="wrapper">
        {/*============ Section Heading ==================*/}
        <div className="mb-12 max-w-2xl">
          <p className="section-kicker">About Me</p>

          <h2 className="section-title text-left md:text-left">
            A little about me
          </h2>

          <p className="section-copy">
            I enjoy turning ideas into practical, reliable, and user-friendly
            web experiences.
          </p>
        </div>

        {/*================ Main Content ====================*/}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* =========Image ============*/}
          <div className="relative mx-auto w-full max-w-[480px] lg:mx-0">
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-primary" />

            <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image
                src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1789959189/kajal-mern_iiq7cf.jpg"
                alt="Kajal Rekha - Full-Stack Developer"
                width={700}
                height={700}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/*=================== Content ===============*/}
          <div>
            <h3 className="text-2xl font-bold leading-tight text-primary sm:text-3xl">
              Building web experiences with{" "}
              <span className="text-blue">purpose and precision.</span>
            </h3>

            <div className="mt-6 space-y-4">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                I&apos;m a{" "}
                <span className="font-semibold text-primary">
                  Full-Stack Developer
                </span>{" "}
                focused on building modern web applications using React,
                Next.js, Node.js, and TypeScript. I enjoy working across both
                frontend and backend to create complete, reliable products.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                My approach combines clean UI, responsive design, maintainable
                code, and practical backend architecture. I&apos;m particularly
                interested in building products that are not only visually
                polished but also useful and easy to use.
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                I&apos;m continuously improving my skills, exploring modern
                technologies, and turning ideas into real-world projects. Every
                project is an opportunity to learn something new and improve how
                I build.
              </p>
            </div>

            {/*======================== Key Points =================*/}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Responsive & accessible interfaces",
                "Scalable full-stack architecture",
                "Modern React & Next.js development",
                "Clean and maintainable code",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/*============== CTA ===============*/}
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue"
              >
                Let&apos;s Connect
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
