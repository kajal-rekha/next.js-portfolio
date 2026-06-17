const About = () => {
    return (
        <section id="about" className="py-20 bg-primary/5">
            <div className="wrapper grid gap-10 md:grid-cols-2 items-start">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                        About me
                    </h2>
                    <p className="mt-4 text-primary/80 text-base leading-relaxed max-w-xl">
                        {`I'm a passionate MERN stack developer with 2+ years of
                        experience building scalable web applications. I
                        specialize in creating responsive, user-friendly
                        interfaces with clean, maintainable code.`}
                    </p>
                    <p className="mt-4 text-primary/80 text-base leading-relaxed max-w-xl">
                        {`My focus is on modern web technologies, performance
                        optimization, and delivering solutions that solve
                        real-world problems. I'm always eager to learn new
                        technologies and collaborate with talented teams.`}
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg border border-primary/10 text-center">
                            <h3 className="text-2xl font-bold text-primary">
                                1666
                            </h3>
                            <p className="text-primary/70 text-sm">
                                GitHub contributions
                            </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-primary/10 text-center">
                            <h3 className="text-2xl font-bold text-primary">
                                71
                            </h3>
                            <p className="text-primary/70 text-sm">
                                LeetCode solved
                            </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg border border-primary/10 text-center">
                            <h3 className="text-2xl font-bold text-primary">
                                15+
                            </h3>
                            <p className="text-primary/70 text-sm">
                                Successful projects
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                    <div className="p-5 bg-white rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary">
                            📍 Location
                        </h4>
                        <p className="text-primary/70 mt-1">
                            Dhaka, Bangladesh
                        </p>
                    </div>
                    <div className="p-5 bg-white rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary">
                            🎓 Education
                        </h4>
                        <p className="text-primary/70 mt-1">
                            Computer Science / IT
                        </p>
                    </div>
                  
                    <div className="p-5 bg-white rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary">💼 Focus</h4>
                        <p className="text-primary/70 mt-1">
                            Full-stack Web Development
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
