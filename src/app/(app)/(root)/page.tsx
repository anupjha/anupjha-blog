import type { Metadata } from 'next';
import Link from 'next/link';
import { tags } from '@/lib/blog';
import { getAllBlogPosts } from '@/lib/mdx';
import { cn, formatDate } from '@/lib/utils';
import { AboutCta } from '@/components/shared/about-cta';
import { Button, buttonVariants } from '@/components/shadcn-ui/button';
import { Icons } from '@/components/icons';
import { LinkBadge } from '@/components/shared/link-badge';
import { LinkCard } from '@/components/shared/link-card';

const title = 'Lightweight and Minimalistic Next.js Blog Template';
const description =
  'A minimalistic, easy-to-use blog template built with Next.js. Customize it to your liking and use it for personal blogs, portfolio sites, or tech documentation.';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title,
  description,
};

export default async function IndexPage() {
  const allPosts = await getAllBlogPosts();

  return (
    <div className="flex flex-1 flex-col">
        <div className="container py-3">
          <AboutCta />
        </div>
      <div className="container-wrapper py-8">
        <div className="container flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Blogs</h2>
            <section className="shrink-0 md:sticky md:top-0 md:z-10">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-medium tracking-tight">Tags</h2>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {Object.keys(tags).map((slug) => (
                  <LinkBadge
                    key={slug}
                    label={tags[slug].name}
                    link={`/tag/${slug}`}
                    className="px-2.5 py-2 text-[13px]"
                  />
                ))}
              </div>
            </section>
          </div>

          <section className="flex-1">
            <div className="flex flex-col gap-2">
              {allPosts.map((post) => (
                <LinkCard
                  key={post.slug}
                  title={post.metadata.title}
                  link={`/blog/${post.slug}`}
                  variant="horizontal"
                  badgeText={formatDate(post.metadata.date)}
                  description={post.metadata.description}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="ghost" className="h-9 px-2">
                <Link
                  href="/page/1"
                  className="group inline-flex items-center gap-2"
                >
                  <span>{'See more posts'}</span>
                  <Icons.chevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
