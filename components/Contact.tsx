"use client";

import Link from "next/link";
import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Reveal from "./Reveal";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        "The contact form is not configured yet. Please try again later.",
      );
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      form.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS contact form submission failed:", error);
      if (
        typeof error === "object" &&
        error !== null &&
        "text" in error &&
        typeof error.text === "string"
      ) {
        const status =
          "status" in error && typeof error.status === "number"
            ? `${error.status}: `
            : "";
        toast.error(`EmailJS error ${status}${error.text}`);
      } else if (error instanceof Error) {
        toast.error(`Could not send your message: ${error.message}`);
      } else {
        toast.error("Could not send your message. Please try again.");
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-shell bg-[#f8f9fc]">
      <Toaster position="top-right" />
      <Reveal>
        <div className="wrapper">
          {/*============== Section Header ==============*/}
          <div className="mb-12 max-w-2xl">
            <p className="section-kicker">Get In Touch</p>

            <h2 className="section-title text-left md:text-left">
              Let&apos;s Connect
            </h2>

            <p className="section-copy max-w-xl">
              Have a project idea, collaboration opportunity, or just want to
              say hello? Feel free to reach out.
            </p>
          </div>

          {/*================ Main Content ====================*/}
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/*============= Contact Form ============*/}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(33,24,68,0.05)] sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/*============== Name & Email ==============*/}
                <div className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-primary outline-none transition placeholder:text-slate-400 focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-primary"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="hello@gmail.com"
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-primary outline-none transition placeholder:text-slate-400 focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/10"
                    />
                  </div>
                </div>

                {/*============== Message ==============*/}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-primary"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your..."
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-primary outline-none transition placeholder:text-slate-400 focus:border-blue focus:bg-white focus:ring-2 focus:ring-blue/10"
                  />
                </div>

                {/*================ Submit ==============*/}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-blue px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue/90"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    {!isSending && <Send size={16} />}
                  </button>
                </div>
              </form>
            </div>

            {/*============== Contact Information ==============*/}
            <div className="flex flex-col gap-5">
              {/*========= Intro Card ===========*/}
              <div className="rounded-2xl border border-slate-200 bg-primary p-6 text-white sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">
                  Available for Opportunities
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Let&apos;s build something great together.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Interested in remote opportunities and building impactful web
                  applications.
                </p>
              </div>

              {/*============== Contact Details ==============*/}
              <div className="space-y-5">
                {/* ==========Email ============*/}
                <Link
                  href="mailto:kajalrekha555@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                    <Mail size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-400">Email</p>

                    <p className="mt-1 truncate text-sm font-semibold text-primary transition-colors group-hover:text-blue">
                      kajalrekha555@gmail.com
                    </p>
                  </div>
                </Link>

                {/* ====================WhatsApp ================*/}
                <Link
                  href="https://wa.me/8801883556564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue/30 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                    <Phone size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Phone / WhatsApp</p>

                    <p className="mt-1 text-sm font-semibold text-primary transition-colors group-hover:text-blue">
                      +880 1883556564
                    </p>
                  </div>
                </Link>

                {/*================= Location ===================*/}
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue/10 text-blue">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Location</p>

                    <p className="mt-1 text-sm font-semibold text-primary">
                      Bangladesh · Remote
                    </p>
                  </div>
                </div>
              </div>

              {/*================== Social Links ==============*/}
              {/* <div className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Find me online
              </p>

              <div className="flex gap-2">
                <Link
                  href="https://www.linkedin.com/in/kajal-rekha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue/10 hover:text-blue"
                >
                  <Linkedin size={18} />
                </Link>

                <Link
                  href="https://github.com/kajal-rekha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue/10 hover:text-blue"
                >
                  <Github size={18} />
                </Link>

                <Link
                  href="https://x.com/kajalreka"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue/10 hover:text-blue"
                >
                  <Twitter size={18} />
                </Link>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
