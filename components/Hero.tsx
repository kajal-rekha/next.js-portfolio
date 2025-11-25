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
        <div className="pt-32 md:pt-56 pb-10  min-h-screen bg-gray/90">
            <div className="wrapper flex flex-col md:flex-row  justify-between gap-32 h-[95vh]">
                <div>
                    <div className="flex flex-col gap-2 items-start  ">
                        <p className="text-xl md:text-2xl text-primary  font-bold">
                            Hello! there –
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl text-primary  font-bold capitalize">
                            I am{" "}
                            <span className=" text-blue  font-semibold">
                                kajal rekha
                            </span>
                        </h1>
                        <h4 className="text-2xl md:text-3xl text-primary  font-semibold capitalize">
                            Passionate mern stack developer
                        </h4>

                        <p className="text-[1.1rem]  text-primary mt-2">
                            I am a skilled MERN stack developer with expertise
                            in building web applications. I am passionate about
                            creating efficient and user-friendly solutions,
                            leveraging my strong knowledge of MongoDB,
                            Express.js, Next.js, React, and Node.js
                        </p>
                    </div>
                    <div className="social-links">
                        <div className="flex flew-row gap-7 items-center mt-5">
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
                    <div className="mt-7 flex gap-7">
                        <button className="text-sm py-2.5 px-5 text-gray capitalize font-semibold bg-blue  rounded-md hover:bg-blue/90 eq">
                            Contact me
                        </button>
                        <button className="text-sm py-2.5 px-5 text-gray capitalize  font-semibold bg-primary  rounded-md hover:bg-primary/90 eq">
                            learn more
                        </button>
                    </div>
                </div>

                <div className="relative  w-full h-[80%] flex justify-center ">
                    <div className="absolute bg-primary h-full  w-full  ml-8 rounded-md "></div>
                    <div className="relative z-10 h-full  w-full   -translate-x-4 -translate-y-8 ">
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
