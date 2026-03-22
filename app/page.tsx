import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Globe,
  Palette,
  PenTool,
  Server,
  Wrench,
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import {
  PHARMACY_URL,
  absoluteUrl,
  featuredBlogPosts,
  featuredProjects,
  formatDate,
  postPath,
  primaryKeywords,
  regionalKeywords,
  processSteps,
  reasons,
  serviceMarquee,
  services,
  siteConfig,
  studioStats,
  targetMarkets,
  techStack,
} from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Custom Websites, SaaS Applications & SEO-Ready Digital Experiences",
  description: siteConfig.description,
  keywords: [
    ...primaryKeywords,
    ...regionalKeywords,
    "editorial agency website",
    "pharmacy saas development",
    "seo friendly landing page",
  ],
  alternates: {
    canonical: "/",
  },
}

const serviceIcons = {
  globe: Globe,
  boxes: Boxes,
  server: Server,
  palette: Palette,
  "pen-tool": PenTool,
  wrench: Wrench,
} as const

const homeFaqs = [
  {
    question: "What kind of websites does Bitara build?",
    answer:
      "Bitara builds custom websites, SaaS applications, UI/UX systems, brand-led marketing pages, backend APIs, and ongoing optimization workflows tailored to business goals.",
  },
  {
    question: "Can Bitara build custom SaaS products?",
    answer:
      "Yes. Bitara works on SaaS products, internal dashboards, role-based interfaces, and operational workflows, including live product references like the pharmacy SaaS project showcased on this page.",
  },
  {
    question: "Does the website structure support SEO?",
    answer:
      "The site uses semantic sections, editorial content, metadata, structured data, internal linking, sitemap output, robots configuration, and static blog publishing for stronger on-page SEO readiness.",
  },
  {
    question: "Can existing branding and text be preserved during a redesign?",
    answer:
      "Yes. Bitara can redesign the visual system while keeping useful existing copy, imagery, and business language wherever that content still supports the new experience.",
  },
  {
    question: "How do clients start a project with Bitara?",
    answer:
      "Clients can use the contact section to prepare an inquiry email with project type, goals, and delivery details, which helps define scope before design and development start.",
  },
]

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl(siteConfig.logo),
      description: siteConfig.longDescription,
    },
    {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      description: siteConfig.description,
      areaServed: targetMarkets.map((market) => ({
        "@type": "Country",
        name: market.label,
      })),
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
}

export default function Page() {
  return (
    <>
      <Header activePage="home" />
      <main id="top" className="overflow-x-hidden pb-10 pt-36">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
        />

        <section id="home" className="px-6 pb-20 pt-4 sm:px-8 lg:px-10 lg:pb-28">
          <div className="section-shell">
            <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="space-y-8">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-primary/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary">
                    Custom Websites
                  </span>
                  <span className="rounded-full border border-primary/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary">
                    SaaS Applications
                  </span>
                  <span className="rounded-full border border-primary/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary">
                    UI/UX Design
                  </span>
                </div>
                <div className="space-y-6">
                  <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-primary sm:text-7xl lg:text-[5.8rem]">
                    Building
                    {" "}
                    <span className="italic text-secondary">modern, scalable</span>
                    {" "}
                    digital experiences.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-foreground/65 sm:text-xl">
                    {siteConfig.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/#contact"
                    className="editorial-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-white transition-transform hover:-translate-y-0.5"
                  >
                    Start a Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-primary ambient-shadow transition-transform hover:-translate-y-0.5"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.4rem] bg-white/75 p-4 ambient-shadow">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-secondary">Custom Websites</p>
                    <p className="mt-2 font-serif text-3xl text-primary">Fast</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/60">Landing pages, service sites, and redesigns built for trust and speed.</p>
                  </div>
                  <div className="rounded-[1.4rem] bg-white/75 p-4 ambient-shadow">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-secondary">SaaS Platforms</p>
                    <p className="mt-2 font-serif text-3xl text-primary">Scale</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/60">Dashboards, admin panels, and product workflows shaped for growth.</p>
                  </div>
                  <div className="rounded-[1.4rem] bg-white/75 p-4 ambient-shadow">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-secondary">UI/UX + SEO</p>
                    <p className="mt-2 font-serif text-3xl text-primary">Clarity</p>
                    <p className="mt-1 text-sm leading-6 text-foreground/60">Mobile-first pages, cleaner messaging, and stronger search-ready structure.</p>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-[34rem] pb-0 sm:pb-10">
                <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-secondary/10 blur-3xl lg:block" />
                <div className="absolute -right-4 bottom-10 hidden h-48 w-48 rounded-full bg-primary/10 blur-3xl lg:block" />
                <div className="ambient-shadow relative overflow-hidden rounded-[2rem] bg-white p-4">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[color:var(--surface-container-low)]">
                    <Image
                      src="/modern-web-development-illustration-minimal-clean.jpg"
                      alt="Bitara custom website and SaaS design illustration"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="ambient-shadow mt-4 w-full rounded-[1.6rem] bg-white p-5 sm:absolute sm:-bottom-6 sm:right-6 sm:mt-0 sm:max-w-xs">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary">Live Proof</p>
                  <h2 className="mt-3 font-serif text-2xl leading-tight text-primary">Pharmacy SaaS Platform</h2>
                  <p className="mt-3 text-sm leading-7 text-foreground/62">
                    A live SaaS project that helps visitors trust Bitara through a working product, not only portfolio claims.
                  </p>
                  <a
                    href={PHARMACY_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-secondary"
                  >
                    Open Live SaaS
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-6 text-white">
          <div className="marquee">
            <div className="marquee-track">
              {serviceMarquee.map((item) => (
                <p key={`${item}-primary`} className="font-serif text-3xl italic tracking-tight sm:text-4xl">
                  {item}
                </p>
              ))}
            </div>
            <div className="marquee-track">
              {serviceMarquee.map((item) => (
                <p key={`${item}-secondary`} className="font-serif text-3xl italic tracking-tight sm:text-4xl">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[color:var(--surface-container-low)] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="section-shell">
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">Our Expertise</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-primary sm:text-6xl">
                Elevating brands through strategic precision.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-foreground/62 sm:text-lg">
                Your current Bitara service offering remains here, reworked into the stitch visual system instead of being replaced by generic filler.
              </p>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon]

                return (
                  <article
                    key={service.title}
                    className="ambient-shadow rounded-[1.5rem] bg-white p-8 transition-transform hover:-translate-y-1"
                  >
                    <Icon className="h-8 w-8 text-secondary" />
                    <h3 className="mt-8 font-serif text-3xl leading-tight text-primary">{service.title}</h3>
                    <p className="mt-4 text-base leading-8 text-foreground/62">{service.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="section-shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-10">
              {studioStats.map((stat) => (
                <div key={stat.label} className="flex items-end gap-5">
                  <p className="font-serif text-7xl leading-none tracking-[-0.05em] text-primary sm:text-[7rem]">
                    {stat.value}
                  </p>
                  <div className="pb-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-secondary">
                      {stat.label}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-foreground/60">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <p className="eyebrow">The Studio</p>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] text-primary sm:text-5xl">
                We are a digital agency focused on delivering high-quality, scalable solutions with editorial clarity.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-foreground/65 sm:text-lg">
                Our team combines technical expertise with creative thinking to build products that matter. Bitara builds
                custom websites, SaaS applications, UI/UX design, branding, and digital solutions using the latest
                technologies, while preserving the business language that already works for your brand.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[color:var(--surface-container-low)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="section-shell">
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow">Market Coverage</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-primary sm:text-5xl">
                Positioned for clients in Bangladesh, the USA, the UK, and Europe.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-foreground/62 sm:text-lg">
                The site copy and keyword targeting now support regional search intent while keeping the brand presentation professional and close to the editorial stitch direction.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {targetMarkets.map((market) => (
                <article key={market.label} className="rounded-[1.5rem] bg-white p-6 ambient-shadow">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-secondary">{market.shortLabel}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight text-primary">{market.label}</h3>
                  <p className="mt-4 text-sm leading-7 text-foreground/62">{market.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[color:var(--surface-container-low)] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="section-shell">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-4">
                <p className="eyebrow">Selected Works</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-primary sm:text-6xl">
                  Projects that build trust through real output.
                </h2>
              </div>
              <a
                href={PHARMACY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-secondary"
              >
                View Pharmacy SaaS
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group overflow-hidden rounded-[1.75rem] bg-white ambient-shadow ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className={`grid gap-0 ${index === 0 ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
                    <div className={`relative overflow-hidden ${index === 0 ? "aspect-[16/10] lg:aspect-auto" : "aspect-[16/11]"}`}>
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-5 p-8 sm:p-10">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-secondary">
                          {project.category}
                        </span>
                        {project.liveLabel ? (
                          <span className="rounded-full bg-secondary/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-primary">
                            {project.liveLabel}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="font-serif text-3xl leading-tight text-primary sm:text-4xl">{project.title}</h3>
                      <p className="text-base leading-8 text-foreground/62">{project.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-primary/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-secondary"
                        >
                          Visit Live Project
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
          <div className="section-shell">
            <div className="max-w-3xl space-y-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-white/55">The Method</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-6xl">How we create value.</h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <article key={step.step} className="space-y-4">
                  <p className="font-serif text-6xl italic text-white/25">{step.step}</p>
                  <h3 className="font-serif text-3xl">{step.title}</h3>
                  <p className="text-sm leading-7 text-white/70">{step.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map((reason) => (
                <article key={reason.title} className="rounded-[1.5rem] bg-white/8 p-6 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="section-shell">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-4">
                <p className="eyebrow">The Journal</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-primary sm:text-6xl">
                  Static articles built for search intent and authority.
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-secondary"
              >
                Browse All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {featuredBlogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={postPath(post.slug)}
                  className="group rounded-[1.75rem] bg-white p-4 ambient-shadow transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-[color:var(--surface-container-low)]">
                    <Image src={post.image} alt={post.alt} fill className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  </div>
                  <div className="space-y-4 px-2 py-5">
                    <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-foreground/45">
                      <span className="text-secondary">{post.category}</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <h3 className="font-serif text-3xl leading-tight text-primary transition-colors group-hover:text-secondary">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-7 text-foreground/62">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--surface-container-low)] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <p className="eyebrow">SEO Details</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-primary sm:text-5xl">
                On-page SEO is handled through structure, metadata, content depth, and internal links, not empty promises.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-foreground/64 sm:text-lg">
                No one can honestly guarantee a numeric SEO score before real auditing tools run, but this build includes the right on-page foundations: semantic page structure, indexable content, static articles, FAQ content, structured data, metadata, sitemap, robots, internal linking, and descriptive image alt text.
              </p>
            </div>
            <div className="space-y-4">
              {homeFaqs.map((item) => (
                <article key={item.question} className="rounded-[1.5rem] bg-white p-6 ambient-shadow">
                  <h3 className="font-serif text-2xl leading-tight text-primary">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/62">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
