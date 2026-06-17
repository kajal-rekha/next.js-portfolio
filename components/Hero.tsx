import Image from "next/image";
import Link from "next/link";
import {
    BiLogoFacebook,
    BiLogoGithub,
    BiLogoLinkedin,
    BiLogoTwitter,
} from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
    return (
        <div
            id="home"
            className="pt-28 md:pt-42 pb-12 min-h-screen bg-gray/90"
        >
            <div className="wrapper grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-5 min-h-[75vh]">
                <div>
                    <div className="flex flex-col gap-2 items-start  ">
                        <p className="text-xl md:text-2xl text-primary  font-bold">
                            Hello! there –
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl text-primary  font-bold capitalize">
                            I am{" "}
                            <span className=" text-blue  font-semibold font-mono">
                                kajal rekha
                            </span>
                        </h1>
                        <h4 className="text-2xl md:text-4xl text-primary  font-semibold capitalize">
                            Passionate{" "}
                            <span className="text-blue">MERN stack</span>{" "}
                            Developer
                        </h4>

                        <p className="text-[1.1rem] text-primary mt-2 max-w-xl">
                            Building modern, user-focused web applications with
                            clean UI, optimized performance, and scalable
                            architecture designed to solve meaningful,
                            real-world challenges effectively.
                        </p>
                    </div>
                    <div className="social-links">
                        <div className="flex flex-row flex-wrap gap-7 items-center mt-5">
                            <Link
                                href="https://x.com/kajalreka"
                                className="text-primary hover:text-blue/90 hover:scale-125 eq"
                            >
                                <BiLogoTwitter className="w-6 h-6" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/kajal-rekha"
                                className="text-primary hover:text-blue/90 hover:scale-125 eq"
                            >
                                <BiLogoLinkedin className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/anowar.kajal"
                                className="text-primary hover:text-blue/90 hover:scale-125 eq"
                            >
                                <BiLogoFacebook className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://github.com/kajal-rekha"
                                className="text-primary  hover:text-blue/90  hover:scale-125 eq"
                            >
                                <BiLogoGithub className="w-6 h-6" />
                            </Link>

                            <Link
                                href="https://leetcode.com/u/kajalrekha"
                                className="text-primary hover:text-blue/90 hover:scale-125 eq"
                            >
                                <SiLeetcode className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-7 flex flex-col sm:flex-row gap-4">
                        <button className="text-sm py-2.5 px-5 text-gray capitalize font-semibold bg-blue  rounded-md hover:bg-blue/90 eq">
                            Contact me
                        </button>
                        <button className="text-sm py-2.5 px-5 text-gray capitalize  font-semibold bg-primary  rounded-md hover:bg-primary/90 eq">
                            learn more
                        </button>
                    </div>
                </div>

                <div className="relative w-full h-[60vh] md:h-full flex justify-center">
                    <div className="absolute bg-primary h-full  w-full  ml-8 rounded-md hidden md:block"></div>
                    <div className="relative z-10 h-full w-full   md:-translate-x-4 md:-translate-y-8 ">
                        <Image
                            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1751136045/kajal-1_vmashj.jpg"
                            alt="kajal rekha"
                            width={700}
                            height={700}
                            className="w-full h-full object-cover rounded-md "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
