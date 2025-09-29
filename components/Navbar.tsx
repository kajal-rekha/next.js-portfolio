import { Menu, Minus } from "lucide-react";
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
        <div>
            <div className="sm:w-full navbar h-20 shadow-lg flex bg-gray">
                <div className="wrapper flex justify-between items-center">
                    <div className="logo">
                        <Link
                            href="/"
                            className="text-lg md:text-xl text-primary font-semibold"
                        >
                            Kajal Rekha
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="flex gap-5 justify-between text-sm  lg:text-xl font-normal ">
                            <div className="flex gap-5 justify-between ">
                                <Link
                                    href="/"
                                    className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                >
                                    Projects
                                </Link>

                                <Link
                                    href="/skills"
                                    className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                >
                                    Skills
                                </Link>

                                <Link
                                    href="/about"
                                    className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                >
                                    About
                                </Link>

                                <Link
                                    href="/contact"
                                    className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block ">
                        <Link
                            href="./"
                            className=" text-sm py-3 px-5 text-gray  font-semibold bg-primary  rounded-md hover:bg-primary/80 eq"
                        >
                            View Resume
                        </Link>
                    </div>

                    {/************ toggle button **************/}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="inline-flex items-center justify-center focus:outline-none text-xl  z-[99]"
                        >
                            {toggle === true ? <Minus /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/************ mobile menu *************/}
            <div>
                {toggle ? (
                    <div className="md:hidden">
                        <div
                            onClick={handleOpen}
                            className={`fixed top-20 right-0 h-screen w-92 bg-dark/10 shadow-lg z-[98] transform transition-transform  eq ${
                                toggle ? "translate-x-0" : "translate-x-full"
                            }`}
                        >
                            <div className="flex flex-col gap-5 items-center h-full  pt-10 ">
                                <div className="flex flex-col gap-5 items-center ">
                                    <Link
                                        href="/"
                                        className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Projects
                                    </Link>

                                    <Link
                                        href="/skills"
                                        className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Skills
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        About
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="text-primary hover:text-secondary text-sm  md:text-[1.2rem] font-semibold  eq"
                                    >
                                        Contact
                                    </Link>
                                </div>

                                <div className="">
                                    <Link
                                        href="/"
                                        className=" text-sm py-3 px-4 text-gray  font-semibold bg-primary  rounded-md hover:bg-primary/80 eq"
                                    >
                                        View Resume
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Navbar;
