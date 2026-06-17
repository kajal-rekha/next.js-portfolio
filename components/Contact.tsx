import Link from "next/link";
import { FormEvent, useState } from "react";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const Contact = () => {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <section id="contact" className="py-20 bg-primary/5">
            <div className="wrapper max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
                    {`Let's Connect`}
                </h2>
                <p className="mt-3 text-center text-primary/70">
                    {`Have a project or want to collaborate? I'd love to hear from
                    you!`}
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4">
                            Send a Message
                        </h3>
                        {sent ? (
                            <div className="p-4 bg-blue/10 text-blue rounded-lg text-center">
                                {`✓ Thanks! I'll get back to you soon.`}
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"
                                method="POST"
                                className="space-y-4"
                            >
                                <input
                                    required
                                    name="name"
                                    placeholder="Your name"
                                    className="w-full p-3 rounded-lg border border-primary/20 focus:outline-none focus:border-blue text-primary"
                                />
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="w-full p-3 rounded-lg border border-primary/20 focus:outline-none focus:border-blue text-primary"
                                />
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    placeholder="Your message..."
                                    className="w-full p-3 rounded-lg border border-primary/20 focus:outline-none focus:border-blue text-primary"
                                />
                                {/* Formspree requires a _replyto field for replies */}
                                <input type="hidden" name="_replyto" />
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 btn btn-primary rounded-lg font-semibold hover:opacity-95 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-primary">
                            Other Ways to Connect
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-primary/60 mb-1">
                                    Email
                                </p>
                                <a
                                    href="mailto:kajal@example.com"
                                    className="text-blue font-semibold hover:text-blue/80"
                                >
                                    kajal@example.com
                                </a>
                            </div>
                            <div>
                                <p className="text-sm text-primary/60 mb-1">
                                    Location
                                </p>
                                <p className="text-primary font-semibold">
                                    Dhaka, Bangladesh
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-primary/60 mb-3">
                                    Follow Me
                                </p>
                                <div className="flex gap-4">
                                    <Link
                                        href="https://github.com/kajal-rekha"
                                        className="text-primary hover:text-blue text-2xl transition"
                                    >
                                        <BiLogoGithub />
                                    </Link>
                                    <Link
                                        href="https://linkedin.com/in/kajal-rekha"
                                        className="text-primary hover:text-blue text-2xl transition"
                                    >
                                        <BiLogoLinkedin />
                                    </Link>
                                    <Link
                                        href="https://twitter.com/kajalreka"
                                        className="text-primary hover:text-blue text-2xl transition"
                                    >
                                        <BiLogoTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
