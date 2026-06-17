const posts = [
    {
        title: "Node.js & Django — Web development",
        excerpt:
            "Combined Node.js and Django approaches for backend-driven web apps. Some patterns and trade-offs to consider.",
        url: "https://www.linkedin.com/posts/kajal-rekha_nodejs-django-webdevelopment-activity-7130134136815583232-JGUW",
    },
    {
        title: "JavaScript Polymorphism",
        excerpt:
            "Explaining polymorphism patterns in JS and practical examples.",
        url: "https://www.linkedin.com/posts/kajal-rekha_javascript-polymorphism-objectorientedprogramming-activity-7082349596131168257-agmV",
    },
    {
        title: "Node.js — Backend development",
        excerpt:
            "Tips for building robust Node.js backends and common pitfalls.",
        url: "https://www.linkedin.com/posts/kajal-rekha_nodejs-javascript-backenddevelopment-activity-7082339448134242304-iNcg",
    },
    {
        title: "MERN Stack — Fullstack development",
        excerpt:
            "Why MERN stack is a productive choice for many startups and prototypes.",
        url: "https://www.linkedin.com/posts/kajal-rekha_mernstack-webdevelopment-fullstackdevelopment-activity-7078729343492919296-7YdL",
    },
    {
        title: "JS Encapsulation & Modularity",
        excerpt:
            "Practical patterns for encapsulation and modular code in JavaScript.",
        url: "https://www.linkedin.com/posts/kajal-rekha_javascript-encapsulation-modularity-activity-7078335539468271616-pgmm",
    },
    {
        title: "React Components & Lifecycle",
        excerpt:
            "Thoughts on functional vs class components and lifecycle behavior.",
        url: "https://www.linkedin.com/posts/kajal-rekha_reactjs-reactcomponents-reactlifecycle-activity-7076118895627042816-UQly",
    },
    {
        title: "React Hooks Explained",
        excerpt: "A short guide to React hooks and common patterns.",
        url: "https://www.linkedin.com/posts/kajal-rekha_react-reacthooks-javascript-activity-7075483031951593472-x485",
    },
];

export default function BlogPage() {
    return (
        <div className="pt-28 pb-20">
            <div className="wrapper">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">
                    Blog & Posts
                </h1>
                <p className="mt-2 text-primary/70">
                    Selected LinkedIn posts and writing.
                </p>

                <div className="mt-8 grid gap-6">
                    {posts.map((p) => (
                        <article key={p.url} className="card">
                            <h2 className="text-xl font-semibold text-primary">
                                {p.title}
                            </h2>
                            <p className="mt-2 text-primary/80">{p.excerpt}</p>
                            <div className="mt-4">
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline"
                                >
                                    Read on LinkedIn
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
