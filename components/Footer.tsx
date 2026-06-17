import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-transparent text-white py-16">
            <div className="wrapper grid gap-10 lg:grid-cols-[1.5fr_1fr]">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.35em] text-blue-60">
                        Stay connected
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Let&apos;s build something remarkable together.
                    </h2>
                    <p className="max-w-xl text-primary-50 leading-relaxed">
                        I create polished, modern web experiences with a focus on
                        performance, accessibility, and beautiful UI. Reach out if
                        you have a project idea or want to improve your digital presence.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-30 transition hover-bg-blue-90"
                    >
                        Contact me
                    </Link>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.35em] text-blue-60">
                            Quick links
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-primary-50">
                            <Link href="#home" className="transition hover:text-white">
                                Home
                            </Link>
                            <Link href="#projects" className="transition hover:text-white">
                                Projects
                            </Link>
                            <Link href="#skills" className="transition hover:text-white">
                                Skills
                            </Link>
                            <Link href="#contact" className="transition hover:text-white">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.35em] text-blue-60">
                            Connect with me
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-primary-50">
                            <a
                                href="https://github.com/kajal-rekha"
                                target="_blank"
                                rel="noreferrer"
                                className="transition hover:text-white"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kajal-rekha"
                                target="_blank"
                                rel="noreferrer"
                                className="transition hover:text-white"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://x.com/kajalreka"
                                target="_blank"
                                rel="noreferrer"
                                className="transition hover:text-white"
                            >
                                X / Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-white-10 pt-6 text-center text-sm text-primary-40">
                © {new Date().getFullYear()} Kajal Rekha. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
