import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  absoluteUrl,
  blogCategories,
  blogPosts,
  formatDate,
  postPath,
  primaryKeywords,
  regionalKeywords,
  siteConfig,
  targetMarkets,
} from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read Bitara Digital articles on website strategy, SEO, SaaS development, UI/UX design, branding, and search-driven content planning.",
  keywords: [...primaryKeywords, ...regionalKeywords, "digital agency blog", "saas development blog", "website seo blog"],
  alternates: {
    canonical: "/blog",
  },
}

type BlogPageProps = {
  searchParams: Promise<{
    q?: string
    category?: string
  }>
}

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${siteConfig.name} Blog`,
  url: absoluteUrl("/blog"),
  description:
    "Static editorial blog library covering digital strategy, design, development, industry insights, and SEO-friendly content planning.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(postPath(post.slug)),
      name: post.title,
    })),
  },
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = await searchParams
  const query = resolvedParams.q?.trim().toLowerCase() ?? ""
  const category = resolvedParams.category?.trim() ?? ""

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = category ? post.category === category : true
    const haystack = `${post.title} ${post.excerpt} ${post.description} ${post.keywords.join(" ")}`.toLowerCase()
    const matchesQuery = query ? haystack.includes(query) : true

    return matchesCategory && matchesQuery
  })

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <>
      <Header activePage="blog" />
      <main id="top" className="overflow-x-hidden pb-10 pt-36">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
        />

        <section className="px-6 pb-20 sm:px-8 lg:px-10">
          <div className="section-shell space-y-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl space-y-4">
                <p className="eyebrow">The Journal</p>
                <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-primary sm:text-7xl">
                  Perspectives on <span className="italic text-secondary">digital excellence</span>.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-foreground/62 sm:text-lg">
                  {blogPosts.length}+ static articles targeting real search intent across Bangladesh, the USA, the UK, and Europe.
                </p>
              </div>
              <form method="get" className="w-full max-w-md">
                <div className="relative">
                  <input
                    type="search"
                    name="q"
                    defaultValue={query}
                    placeholder="Search the archives..."
                    className="w-full border-b border-primary/10 bg-transparent py-3 pr-10 text-sm outline-none transition-colors placeholder:text-foreground/35 focus:border-secondary"
                  />
                  <Search className="pointer-events-none absolute right-0 top-3 h-4 w-4 text-foreground/35" />
                </div>
                {category ? <input type="hidden" name="category" value={category} /> : null}
              </form>
            </div>

            <div className="flex flex-wrap gap-3">
              {targetMarkets.map((market) => (
                <span
                  key={market.label}
                  className="rounded-full border border-primary/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/65"
                >
                  {market.shortLabel}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className={`rounded-full px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${
                  !category
                    ? "bg-primary text-white"
                    : "bg-[color:var(--surface-container-low)] text-primary/65 hover:bg-[color:var(--surface-container-high)]"
                }`}
              >
                All Stories
              </Link>
              {blogCategories.map((item) => (
                <Link
                  key={item.name}
                  href={`/blog?category=${encodeURIComponent(item.name)}`}
                  className={`rounded-full px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] ${
                    category === item.name
                      ? "bg-primary text-white"
                      : "bg-[color:var(--surface-container-low)] text-primary/65 hover:bg-[color:var(--surface-container-high)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
          <div className="section-shell">
            {featuredPost ? (
              <article className="grid overflow-hidden rounded-[1.75rem] bg-white ambient-shadow lg:grid-cols-[1.12fr_0.88fr]">
                <Link href={postPath(featuredPost.slug)} className="relative block aspect-[16/11] lg:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute left-6 top-6 rounded-full bg-secondary px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white">
                    Featured Article
                  </span>
                </Link>
                <div className="flex flex-col justify-between p-8 sm:p-12">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/40">
                      <span className="text-secondary">{featuredPost.category}</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      href={postPath(featuredPost.slug)}
                      className="font-serif text-4xl leading-tight tracking-[-0.03em] text-primary transition-colors hover:text-secondary"
                    >
                      {featuredPost.title}
                    </Link>
                    <p className="text-base leading-8 text-foreground/62">{featuredPost.excerpt}</p>
                  </div>
                  <div className="mt-10 flex items-center justify-between border-t border-primary/10 pt-6">
                    <div>
                      <p className="text-sm font-semibold text-primary">{featuredPost.authorName}</p>
                      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-foreground/40">
                        {featuredPost.authorRole}
                      </p>
                    </div>
                    <Link
                      href={postPath(featuredPost.slug)}
                      className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-secondary"
                    >
                      Read Story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ) : (
              <div className="rounded-[1.75rem] bg-white p-10 ambient-shadow">
                <p className="eyebrow">No Results</p>
                <h2 className="mt-4 font-serif text-4xl text-primary">No articles matched your filter.</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/62">
                  Try another search term or clear the active category filter to browse the full article library.
                </p>
                <Link
                  href="/blog"
                  className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-secondary"
                >
                  Reset Filters
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {remainingPosts.length > 0 ? (
          <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
            <div className="section-shell grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={postPath(post.slug)}
                  className="group rounded-[1.75rem] bg-white p-4 ambient-shadow transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[color:var(--surface-container-low)]">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="space-y-4 px-2 py-5">
                    <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/40">
                      <span className="text-secondary">{post.category}</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <h2 className="font-serif text-3xl leading-tight text-primary transition-colors group-hover:text-secondary">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-7 text-foreground/62">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="section-shell">
            <div className="editorial-gradient overflow-hidden rounded-[1.9rem] px-8 py-12 text-center text-white sm:px-12 lg:px-16 lg:py-16">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-white/60">Need Delivery, Not Just Reading?</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                Turn strategy into a custom website, <span className="italic text-white/80">SaaS product,</span> or redesign.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">
                Use the contact section on the home page to send a structured project brief and move from browsing to planning.
              </p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-transform hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


