import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import { getPostBySlug, posts, Post } from "@/lib/posts";
import Link from "next/link";

type Props = {
  post: Post | null;
};

export default function PostPage({ post }: Props) {
  if (!post) {
    return (
      <div>
        <Navbar />
        <main className="pt-28 pb-20">
          <div className="wrapper">
            <h1 className="text-2xl font-bold text-primary">Post not found</h1>
            <p className="mt-4">The requested post could not be found.</p>
            <Link href="/blog" className="mt-4 inline-block text-blue">Back to blog</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="wrapper">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">{post.title}</h1>
          <p className="text-sm text-primary/60 mt-2">{post.date}</p>
          <div className="mt-6 text-primary/80 leading-relaxed">
            {post.content}
          </div>
          <div className="mt-8">
            <Link href="/blog" className="text-blue font-semibold">← Back to articles</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug as string;
  const post = getPostBySlug(slug);
  return {
    props: {
      post,
    },
  };
};
