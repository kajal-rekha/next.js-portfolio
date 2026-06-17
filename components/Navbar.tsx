import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };
    const handleOpen = () => {
        setToggle(false);
    };

    return (
        <nav>
            <div className="w-full navbar h-20 shadow-lg flex bg-gray-100 fixed top-0 left-0 right-0 z-[99] rounded-2xl">
                <div className="wrapper flex justify-between items-center">
                    <div className="logo">
                        <Link
                            href="/"
                            className="text-lg md:text-xl text-primary font-semibold font-mono"
                        >
                            Kajal Rekha
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex gap-5 justify-between ">
                            <div className="flex gap-5 justify-between">

                                
                                <Link
                                    href="/"
                                    className="text-primary hover:text-blue text-sm md:text-[1rem] font-semibold eq"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-primary hover:text-blue text-sm  md:text-[1rem]  font-semibold eq"
                                >
                                    Projects
                                </Link>

                                <Link
                                    href="#skills"
                                    className="text-primary hover:text-blue text-sm  md:text-[1rem] font-semibold  eq"
                                >
                                    Skills
                                </Link>

                                <Link
                                    href="#about"
                                    className="text-primary hover:text-blue text-sm  md:text-[1rem]  font-semibold  eq"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/blog"
                                    className="text-primary hover:text-blue text-sm md:text-[1rem]  font-semibold eq"
                                >
                                    Blog
                                </Link>

                                <Link
                                    href="#contact"
                                    className="text-primary hover:text-blue text-sm  md:text-[1rem]  font-semibold eq"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block ">
                        <Link
                            href="/resume.pdf"
                            className="text-sm py-3 px-5 text-gray  font-semibold bg-primary  rounded-md hover:bg-primary/90 eq"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download Resume
                        </Link>
                    </div>

                    {/************ toggle button **************/}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="inline-flex items-center justify-center focus:outline-none text-xl  z-[99]"
                        >
                            {toggle === true ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
            

            {/************ mobile menu *************/}
            <div>
                {toggle ? (
                    <div className="md:hidden">
                        <div className="fixed inset-x-0 top-20 bottom-0 pt-5 bg-blue shadow-lg z-[98] overflow-auto">
                            <div className="flex flex-col gap-5 items-center h-full  pt-10 ">
                                <div className="flex flex-col gap-5 items-center">
                                    <Link
                                        href="#home"
                                        onClick={handleOpen}
                                        className="text-light hover:text-light/80 text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="#projects"
                                        onClick={handleOpen}
                                        className="text-light hover:text-light/80 text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Projects
                                    </Link>

                                    <Link
                                        href="/blog"
                                        onClick={handleOpen}
                                        className="text-light hover:text-light/80 text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Blog
                                    </Link>

                                    <Link
                                        href="#skills"
                                        onClick={handleOpen}
                                        className="text-light hover:text-light/80 text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Skills
                                    </Link>
                                    <Link
                                        href="#about"
                                        onClick={handleOpen}
                                        className="text-light hover:text-light/80 text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        About
                                    </Link>

                                    <Link
                                        href="#contact"
                                        onClick={handleOpen}
                                        className="text-light hover:text-light/80 text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Contact
                                    </Link>
                                </div>

                                <div className="mt-2">
                                    <Link
                                        href="/resume.pdf"
                                        onClick={handleOpen}
                                        className=" text-sm py-2.5 px-4 text-gray  font-semibold  bg-primary rounded-md hover:bg-primary/80 eq"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Download Resume
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;
