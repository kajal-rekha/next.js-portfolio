const skillCategories = [
    {
        category: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML/CSS",
            "JavaScript",
        ],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
        category: "Tools & Others",
        skills: ["Git", "Docker", "AWS", "Firebase", "Figma", "Webpack"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="wrapper">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Skills & Expertise
                </h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.category}
                            className="p-6 bg-white rounded-lg border border-primary/20"
                        >
                            <h3 className="text-lg font-semibold text-blue mb-4">
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-blue/10 text-blue rounded-full text-sm font-medium hover:bg-blue/20 transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
