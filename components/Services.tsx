"use client";

import { Monitor, Server, Layers3, ShoppingBag } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Crafting responsive and interactive user interfaces with modern frontend technologies.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    icon: Server,
    title: "Backend & APIs",
    description:
      "Building scalable REST APIs, authentication systems, and reliable server-side logic.",
    technologies: ["Node.js", "Express.js", "REST API"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Full-Stack Solutions",
    description:
      "Developing complete web applications by connecting frontend, backend, database, and deployment.",
    technologies: ["MERN", "TypeScript", "Redux Toolkit"],
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "eCommerce & SaaS",
    description:
      "Building business-focused eCommerce and SaaS platforms with payments, dashboards, and management systems.",
    technologies: ["Stripe", "Admin Panel", "Payments"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="border-b border-slate-100 bg-white py-10 md:py-12"
    >
      <div className="wrapper">
        <h2 className="text-center text-2xl font-bold text-primary md:text-3xl">
          <span className="text-blue">·</span> What I Can Do{" "}
          <span className="text-blue">·</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex min-h-[245px] flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-[0_12px_30px_rgba(33,24,68,0.08)]"
              >
                {/*============= Top ===============*/}
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-medium text-primary/25">
                    {service.number}
                  </span>
                </div>

                {/*============= ===========Content =============*/}
                <h3 className="text-sm font-semibold tracking-tight text-primary">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-primary/65">
                  {service.description}
                </p>

                {/*============= Technologies =============*/}
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
