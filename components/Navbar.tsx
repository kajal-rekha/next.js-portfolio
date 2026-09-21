"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleOpen = () => {
    setToggle(false);
  };

  return (
    <nav className="relative">
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <div className="fixed left-0 right-0 top-0 z-[99] h-[72px] border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="wrapper flex h-full items-center justify-between">
          {/* ================= LOGO ================= */}
          <div>
            <Link
              href="/"
              onClick={handleOpen}
              aria-label="Kajal Rekha - Home"
              className="font-mono text-xl font-bold tracking-tight text-primary transition-colors duration-200 hover:text-blue md:text-2xl"
            >
              &lt;KR/&gt;
            </Link>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:block">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= RESUME ================= */}
          <div className="hidden md:block">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-light transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Download Resume
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={handleToggle}
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              className="flex h-10 w-10 items-center justify-center rounded-md text-primary transition-colors duration-200 hover:bg-slate-100"
            >
              {toggle ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {toggle && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[97] bg-slate-900/20 md:hidden"
            onClick={handleOpen}
          />

          {/* Menu */}
          <div className="fixed inset-x-0 top-[72px] z-[98] border-b border-slate-200 bg-white shadow-lg md:hidden">
            <div className="wrapper py-8">
              <div className="flex flex-col items-center gap-6">
                {/* Navigation Links */}
                <div className="flex flex-col items-center gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleOpen}
                      className="text-base font-medium text-slate-700 transition-colors duration-200 hover:text-blue"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Resume */}
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleOpen}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-light transition-all duration-200 hover:bg-primary/90"
                >
                  Download Resume
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;