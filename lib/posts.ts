export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
};

export const posts: Post[] = [
    {
        slug: "building-a-modern-portfolio",
        title: "Building a Modern Portfolio",
        date: "2026-04-10",
        excerpt: "How I built a fast, accessible portfolio with Next.js and Tailwind.",
        content: `This post walks through the decisions and techniques used to build a modern portfolio using Next.js, TypeScript, and Tailwind CSS. Topics covered include responsive design, image optimization, and deployment best practices.`,
    },
    {
        slug: "improving-performance",
        title: "Improving Web Performance",
        date: "2026-03-05",
        excerpt: "Practical tips to make your web apps faster and lighter.",
        content: `Performance is crucial for user experience. In this article we cover lazy-loading, code-splitting, minimizing render-blocking resources, and measuring impact with Lighthouse.`,
    },
    {
        slug: "design-systems-for-small-teams",
        title: "Design Systems for Small Teams",
        date: "2026-02-18",
        excerpt: "Applying consistent UI with a lightweight design system.",
        content: `Design systems don't need to be heavy. This post explains how to create tokens, components, and documentation that scale for small teams.`,
    },
];

export function getPostBySlug(slug: string) {
    return posts.find((p) => p.slug === slug) || null;
}
