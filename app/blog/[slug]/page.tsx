import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  absoluteUrl,
  blogCategories,
  blogPosts,
  formatDate,
  getBlogPost,
  getRelatedPosts,
  postPath,
  siteConfig,
} from "@/lib/site-content"

type ArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Article Not Found",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: postPath(post.slug),
    },
    openGraph: {
      type: "article",
      url: absoluteUrl(postPath(post.slug)),
      title: post.title,
      description: post.description,
      publishedTime: `${post.publishedAt}T00:00:00Z`,
      images: [
        {
          url: absoluteUrl(post.image),
          alt: post.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [absoluteUrl(post.image)],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((entry) => entry.slug === post.slug)
  const previousPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const relatedPosts = getRelatedPosts(post, 2)

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: absoluteUrl(postPath(post.slug)),
          },
        ],
      },
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        image: absoluteUrl(post.image),
        datePublished: `${post.publishedAt}T00:00:00Z`,
        dateModified: `${post.publishedAt}T00:00:00Z`,
        author: {
          "@type": "Organization",
          name: post.authorName,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl(siteConfig.logo),
          },
        },
        mainEntityOfPage: absoluteUrl(postPath(post.slug)),
        keywords: post.keywords.join(", "),
      },
    ],
  }

  return (
    <>
      <Header activePage="blog" />
      <main id="top" className="overflow-x-hidden pb-10 pt-36">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />

        <section className="px-6 pb-14 sm:px-8 lg:px-10 lg:pb-20">
          <div className="section-shell space-y-10">
            <nav className="flex flex-wrap items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">
              <Link href="/blog" className="transition-colors hover:text-secondary">
                Blog
              </Link>
              <span>/</span>
              <span className="text-secondary">{post.category}</span>
            </nav>

            <div className="max-w-5xl space-y-10">
              <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-primary sm:text-7xl lg:text-[5.4rem]">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-8 border-t border-primary/10 pt-8 text-primary">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">Written by</p>
                  <p className="mt-2 font-serif text-2xl">{post.authorName}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">Published</p>
                  <p className="mt-2 font-serif text-2xl">{formatDate(post.publishedAt)}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">Reading Time</p>
                  <p className="mt-2 font-serif text-2xl">{post.readTime}</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[21/9] overflow-hidden rounded-[1.75rem] bg-[color:var(--surface-container-low)] ambient-shadow">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="section-shell grid gap-16 lg:grid-cols-[minmax(0,1.08fr)_20rem] xl:grid-cols-[minmax(0,1.12fr)_22rem]">
            <article className="article-copy space-y-12">
              <p className="article-dropcap text-xl leading-9 text-primary sm:text-2xl">{post.intro}</p>

              {post.sections.map((section, index) => (
                <section key={section.title} className="space-y-6">
                  <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-primary">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {index === 0 ? (
                    <blockquote className="rounded-[1.5rem] bg-[color:var(--surface-container-low)] px-8 py-10 text-center">
                      <p className="font-serif text-3xl italic leading-tight text-primary sm:text-4xl">"{post.pullQuote}"</p>
                    </blockquote>
                  ) : null}

                  {index === 1 ? (
                    <div className="rounded-[1.5rem] bg-[color:var(--surface-container-low)] p-8">
                      <h3 className="font-serif text-3xl text-primary">Key Takeaways</h3>
                      <ul className="mt-5">
                        {post.keyTakeaways.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </section>
              ))}

              <div className="flex flex-col gap-6 border-t border-primary/10 pt-10 md:flex-row md:items-center md:justify-between">
                {previousPost ? (
                  <Link href={postPath(previousPost.slug)} className="group inline-flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 text-primary transition-colors group-hover:border-secondary group-hover:text-secondary">
                      <ArrowLeft className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">Previous</span>
                      <span className="mt-1 block font-serif text-xl leading-tight text-primary transition-colors group-hover:text-secondary">
                        {previousPost.title}
                      </span>
                    </span>
                  </Link>
                ) : <span />}

                {nextPost ? (
                  <Link href={postPath(nextPost.slug)} className="group inline-flex items-center gap-4 text-right md:ml-auto">
                    <span>
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">Next</span>
                      <span className="mt-1 block font-serif text-xl leading-tight text-primary transition-colors group-hover:text-secondary">
                        {nextPost.title}
                      </span>
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/10 text-primary transition-colors group-hover:border-secondary group-hover:text-secondary">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ) : null}
              </div>
            </article>

            <aside className="space-y-12">
              <div className="space-y-5 rounded-[1.5rem] bg-white p-6 ambient-shadow">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">Categories</p>
                <div className="space-y-3">
                  {blogCategories.map((item) => (
                    <Link
                      key={item.name}
                      href={`/blog?category=${encodeURIComponent(item.name)}`}
                      className="flex items-center justify-between text-sm uppercase tracking-[0.16em] text-primary transition-colors hover:text-secondary"
                    >
                      <span>{item.name}</span>
                      <span className="text-foreground/35">{item.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/42">Related Articles</p>
                <div className="space-y-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.slug} href={postPath(relatedPost.slug)} className="group block space-y-3">
                      <div className="relative aspect-video overflow-hidden rounded-[1.25rem] bg-[color:var(--surface-container-low)]">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.alt}
                          fill
                          sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 20rem, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-serif text-2xl leading-tight text-primary transition-colors group-hover:text-secondary">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-foreground/42">
                        {formatDate(relatedPost.publishedAt)} - {relatedPost.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-primary p-6 text-white">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/55">Project Ready?</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight">Turn insight into delivery.</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Move from article reading to a real custom website, SaaS product, or redesign brief from the home page contact section.
                </p>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-transform hover:-translate-y-0.5"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


