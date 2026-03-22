import { supplementalBlogPosts } from "./supplemental-blog-posts"

export const SITE_URL = "https://www.bitaradigitalit.com"
export const PHARMACY_URL = "http://pharmacy.bitaradigitalit.com/"

export const siteConfig = {
  name: "Bitara Digital",
  shortName: "Bitara",
  title: "Bitara Digital | Custom Websites, SaaS Applications & UI/UX Design",
  description:
    "Bitara builds custom websites, SaaS applications, UI/UX design systems, and on-page SEO foundations for growth-focused businesses.",
  longDescription:
    "Bitara is a digital agency focused on custom websites, SaaS applications, UI/UX design, branding, APIs, and on-page SEO foundations for businesses that need performance, clarity, and trust.",
  contactEmail: "hello@bitaradigitalit.com",
  defaultOgImage: "/modern-web-development-illustration-minimal-clean.jpg",
  logo: "/images/a-modern-minimalistic-logo-design-featur-rf3nccuwtiafdas1upnr7q-9cqj-xrwqww3mah610jw2w.jpeg",
} as const

export type ServiceItem = {
  icon: string
  title: string
  description: string
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type ReasonItem = {
  title: string
  description: string
}

export type ProjectItem = {
  title: string
  category: string
  description: string
  image: string
  alt: string
  href?: string
  liveLabel?: string
  featured?: boolean
  stack: string[]
}

export type BlogSection = {
  title: string
  paragraphs: string[]
  list?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  image: string
  alt: string
  authorName: string
  authorRole: string
  intro: string
  pullQuote: string
  sections: BlogSection[]
  keyTakeaways: string[]
  keywords: string[]
}

export const primaryKeywords = [
  "custom website development",
  "saas application development",
  "ui ux design agency",
  "next.js development agency",
  "seo friendly website design",
  "branding and graphics services",
  "backend api development",
  "custom software development company",
  "website redesign agency",
  "landing page design agency",
  "performance focused website agency",
  "mobile friendly website design",
  "conversion focused web design",
  "web application development company",
  "dashboard development company",
  "pharmacy saas development",
  "healthcare software development",
  "ecommerce website development",
  "wordpress development agency",
  "headless website development",
  "api integration development company",
  "technical seo web design",
  "high conversion website design",
]

export const regionalKeywords = [
  "web development company in bangladesh",
  "website design company in bangladesh",
  "dhaka web development agency",
  "saas development company bangladesh",
  "ui ux design agency bangladesh",
  "ecommerce website development bangladesh",
  "software company for usa clients from bangladesh",
  "custom website development usa",
  "web development agency usa",
  "website redesign agency usa",
  "saas development company usa",
  "custom software company usa",
  "b2b website design usa",
  "law firm website design usa",
  "real estate website design usa",
  "ui ux design agency uk",
  "website design agency uk",
  "seo friendly web design uk",
  "saas development company uk",
  "shopify vs custom ecommerce uk",
  "restaurant website design uk",
  "dental website design uk",
  "london web design agency",
  "multilingual website development europe",
  "european web development agency",
  "saas development company europe",
  "startup branding package europe",
  "hotel booking website development europe",
  "recruitment agency website design europe",
  "offshore development team bangladesh",
  "mobile first design agency usa uk europe",
]

export const targetMarkets = [
  {
    label: "Bangladesh",
    shortLabel: "BD",
    description:
      "Custom websites, SaaS platforms, dashboards, and lead generation pages for businesses in Dhaka and across Bangladesh.",
  },
  {
    label: "United States",
    shortLabel: "USA",
    description:
      "Delivery for startups, clinics, agencies, law firms, real estate teams, and service brands that need stronger digital trust.",
  },
  {
    label: "United Kingdom",
    shortLabel: "UK",
    description:
      "SEO-aware redesigns, UI/UX systems, restaurant and clinic websites, and product-led digital experiences for UK businesses.",
  },
  {
    label: "Europe",
    shortLabel: "EU",
    description:
      "Multilingual-ready websites, SaaS execution, branding systems, and editorial digital experiences for European companies.",
  },
] as const

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
] as const

export const serviceMarquee = [
  "Custom Websites",
  "SaaS Applications",
  "Backend & APIs",
  "UI/UX Design",
  "Branding",
  "Optimization",
]

export const studioStats = [
  {
    value: "06",
    label: "Core services",
    description: "From custom websites to SaaS delivery and ongoing optimization.",
  },
  {
    value: "08",
    label: "Modern technologies",
    description: "Next.js, NestJS, React, SQL, MongoDB, WordPress, Figma, and Tailwind CSS.",
  },
] as const

export const services: ServiceItem[] = [
  {
    icon: "globe",
    title: "Custom Websites",
    description: "Built with Next.js, NestJS, MongoDB, SQL, and WordPress for powerful web presence.",
  },
  {
    icon: "boxes",
    title: "SaaS Development",
    description: "Scalable software-as-a-service platforms designed for growth and performance.",
  },
  {
    icon: "server",
    title: "Backend & API Development",
    description: "Robust server architecture and RESTful APIs that power your applications.",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love and convert visitors.",
  },
  {
    icon: "pen-tool",
    title: "Branding & Graphics",
    description: "Visual identity and design systems that make your brand stand out.",
  },
  {
    icon: "wrench",
    title: "Maintenance & Optimization",
    description: "Ongoing support to keep your digital products running at peak performance.",
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We define business goals, audience priorities, feature scope, and content requirements before design starts.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "High-fidelity layouts, interface systems, and conversion-focused user journeys are crafted with clarity and intent.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Clean code, scalable architecture, and practical CMS or SaaS workflows turn the approved direction into a working product.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Testing, performance improvements, SEO readiness, and deployment support help the project go live with confidence.",
  },
]

export const reasons: ReasonItem[] = [
  {
    title: "Clean & Modern Code",
    description: "Well-structured, maintainable code that follows industry best practices.",
  },
  {
    title: "On-time Delivery",
    description: "We respect deadlines and deliver projects when promised.",
  },
  {
    title: "Strong Communication",
    description: "Regular updates and transparent collaboration throughout the project.",
  },
  {
    title: "Performance & Security Focused",
    description: "Fast, secure applications that protect user data and provide great experiences.",
  },
]

export const techStack = [
  "Next.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "React",
  "WordPress",
  "Figma",
  "Tailwind CSS",
]

export const projects: ProjectItem[] = [
  {
    title: "Pharmacy SaaS Platform",
    category: "Healthcare SaaS",
    description:
      "A live SaaS product focused on pharmacy operations, stock flow, sales visibility, and day-to-day workflow clarity for real teams.",
    image: "/healthcare-dashboard-design.jpg",
    alt: "Healthcare dashboard interface representing a pharmacy SaaS platform",
    href: PHARMACY_URL,
    liveLabel: "Live SaaS",
    featured: true,
    stack: ["Dashboard", "Operations", "Trust"],
  },
  {
    title: "E-Commerce Platform",
    category: "SaaS Development",
    description:
      "A scalable commerce experience designed for product discovery, admin workflows, and a fast storefront journey.",
    image: "/ecommerce-platform-interface.png",
    alt: "E-commerce platform interface with product and dashboard views",
    featured: true,
    stack: ["Commerce", "Scalability", "Conversion"],
  },
  {
    title: "Real Estate Portal",
    category: "Custom Website",
    description:
      "A property-led website experience built around editorial presentation, lead capture, and premium browsing for buyers.",
    image: "/real-estate-portal-design.jpg",
    alt: "Real estate portal interface with high-end property visuals",
    featured: true,
    stack: ["Lead Generation", "Editorial", "Search"],
  },
  {
    title: "Project Management Tool",
    category: "SaaS Platform",
    description:
      "A product-focused workspace that helps teams track delivery, responsibilities, and operational momentum in one interface.",
    image: "/project-management-tool-interface.jpg",
    alt: "Project management tool interface with workflow cards and charts",
    featured: true,
    stack: ["Workflow", "SaaS", "Teams"],
  },
  {
    title: "Fintech Mobile App",
    category: "UI/UX Design",
    description:
      "A clean mobile-first fintech experience centered on clarity, trust, and decision-making around account and payment flows.",
    image: "/fintech-mobile-app.png",
    alt: "Fintech mobile application interface on a smartphone",
    stack: ["Mobile", "Fintech", "Design"],
  },
  {
    title: "Restaurant Booking System",
    category: "Web Application",
    description:
      "An online reservation workflow that simplifies booking, availability, and service communication for busy hospitality teams.",
    image: "/restaurant-booking-system-design.jpg",
    alt: "Restaurant booking system design with table reservation management",
    stack: ["Reservations", "Web App", "Operations"],
  },
]

const editorialAuthor = {
  authorName: "Bitara Editorial Team",
  authorRole: "Strategy & Delivery",
}

const coreBlogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-saas-application-cost-to-build",
    title: "How Much Does a SaaS Application Cost to Build in 2026?",
    description:
      "A practical guide to SaaS development cost drivers, scope choices, and launch planning for founders.",
    excerpt:
      "Founders do not overspend because code is expensive. They overspend because scope is vague. This guide explains the real budget drivers behind SaaS delivery.",
    category: "Strategy",
    readTime: "9 min read",
    publishedAt: "2026-03-18",
    image: "/project-management-tool-interface.jpg",
    alt: "Project management SaaS interface displayed on a laptop screen",
    ...editorialAuthor,
    intro:
      "The fastest way to lose control of a SaaS budget is to estimate the product as one big number. Pricing becomes clearer when you break the work into business logic, interface complexity, user roles, integrations, and post-launch support.",
    pullQuote:
      "SaaS cost is rarely a code problem first. It is usually a product-definition problem.",
    sections: [
      {
        title: "What actually changes the budget",
        paragraphs: [
          "A SaaS product with one user role, a simple dashboard, and a clean onboarding flow can be planned efficiently. The moment you add billing logic, permissions, analytics, admin tools, notifications, and reporting, the architecture and testing surface area grow quickly.",
          "Integrations also move budgets faster than most founders expect. Payment gateways, CRMs, document generation, warehouse tools, and external APIs all introduce edge cases that take time to design and verify.",
        ],
      },
      {
        title: "Why phased delivery protects cash flow",
        paragraphs: [
          "A well-planned MVP is not a smaller dream. It is the shortest version of the product that can prove demand, gather user behavior, and create internal confidence. Founders who phase their SaaS roadmap usually make better product decisions because the market informs what gets built next.",
          "That means launch one with the core workflow, billing foundation, analytics basics, and admin visibility. Later phases can add deeper automation, richer reporting, and secondary user journeys once data shows they matter.",
        ],
      },
      {
        title: "How agencies should estimate the work",
        paragraphs: [
          "A strong estimate connects business outcomes to technical scope. You should know what the product needs to do, who uses it, what success looks like, and which systems it must connect to before anyone promises a number.",
          "If an estimate arrives without discovery, assumptions, or delivery phases, it is not really an estimate. It is a guess with design language around it.",
        ],
      },
    ],
    keyTakeaways: [
      "Scope clarity has a larger impact on SaaS budgets than framework choice.",
      "User roles, integrations, and reporting are major cost multipliers.",
      "A phased MVP helps control spend and improves product decisions.",
      "Good estimates include assumptions, risks, and launch priorities.",
    ],
    keywords: ["saas development cost", "cost to build saas", "saas mvp budget", "custom software pricing"],
  },
  {
    slug: "custom-website-vs-wordpress-theme-which-one-grows-faster",
    title: "Custom Website vs WordPress Theme: Which One Grows Faster?",
    description:
      "Understand when a theme is enough and when a custom website becomes the better long-term decision.",
    excerpt:
      "Themes can launch quickly, but growth often exposes limits in performance, branding, and flexibility. This comparison helps business owners decide with more clarity.",
    category: "Development",
    readTime: "8 min read",
    publishedAt: "2026-03-12",
    image: "/modern-web-development-illustration-minimal-clean.jpg",
    alt: "Modern website development illustration with layered interface cards",
    ...editorialAuthor,
    intro:
      "A theme is not automatically the wrong choice. The real question is whether your website needs to behave like a template or like a business asset designed around your exact brand, content, and conversion path.",
    pullQuote:
      "Speed to launch matters, but strategic flexibility matters longer.",
    sections: [
      {
        title: "Where themes work well",
        paragraphs: [
          "A theme can be effective when the site is small, the structure is standard, and the brand does not need a differentiated digital experience. For brochure sites, event microsites, or early validation pages, a theme may be enough to get momentum.",
          "The issue appears later when the design needs to shift, the content model becomes more complex, or performance drops under plugin-heavy customization.",
        ],
      },
      {
        title: "What custom websites solve better",
        paragraphs: [
          "Custom websites allow the interface, codebase, and CMS flow to fit the business instead of forcing the business into theme limitations. That matters when you need better SEO control, faster load times, clearer lead funnels, multilingual pages, or integrations with internal systems.",
          "A tailored build also gives the brand its own visual language rather than sharing the same structure that hundreds of other businesses already use.",
        ],
      },
      {
        title: "How to decide the smarter path",
        paragraphs: [
          "Choose a theme when speed and budget are the main priorities and the content model is straightforward. Choose custom when the site is central to lead generation, authority building, or product trust.",
          "In practice, companies that rely heavily on organic traffic, conversion pages, or branded storytelling usually outgrow generic themes faster than they expect.",
        ],
      },
    ],
    keyTakeaways: [
      "Themes are useful for simple launches with standard content structures.",
      "Custom builds outperform when SEO, branding, and flexibility matter.",
      "Plugin-heavy sites often become harder to maintain and optimize.",
      "The right decision depends on business role, not trend language.",
    ],
    keywords: ["custom website vs wordpress theme", "wordpress theme or custom website", "custom web design benefits"],
  },
  {
    slug: "why-page-speed-still-affects-seo-and-conversions",
    title: "Why Page Speed Still Affects SEO and Conversions",
    description:
      "A clear breakdown of how website performance influences rankings, trust, engagement, and lead generation.",
    excerpt:
      "Page speed is not a vanity metric. It changes how people trust your business, how search engines interpret quality, and how efficiently your pages convert.",
    category: "SEO",
    readTime: "7 min read",
    publishedAt: "2026-03-05",
    image: "/ecommerce-platform-interface.png",
    alt: "Fast e-commerce platform interface designed for conversion",
    ...editorialAuthor,
    intro:
      "Visitors notice performance before they understand your offer. A site that feels heavy or delayed creates friction at the exact moment trust should be building. Search engines notice that behavior too.",
    pullQuote:
      "Performance is one of the few improvements that helps SEO, UX, and conversion at the same time.",
    sections: [
      {
        title: "What speed changes for users",
        paragraphs: [
          "Slow pages interrupt momentum. Visitors hesitate to scroll, abandon forms, and lose confidence in the business behind the interface. On mobile, this effect is stronger because connection quality and device capability vary widely.",
          "Fast sites create a smoother reading rhythm, more page depth, and better interaction with core calls to action.",
        ],
      },
      {
        title: "What speed changes for SEO",
        paragraphs: [
          "Search performance depends on many signals, but technical quality still matters. A slow site can reduce crawl efficiency, weaken Core Web Vitals, and create poor engagement patterns that lower the page's overall strength.",
          "Pages that load quickly also make it easier to keep media-rich storytelling, product detail, and trust elements without sacrificing usability.",
        ],
      },
      {
        title: "Where businesses should focus first",
        paragraphs: [
          "Start with image optimization, layout stability, script control, caching, and page structure. Many businesses try to improve speed by changing hosting first, but the real wins usually come from frontend discipline and content weight.",
          "A faster site is rarely one dramatic fix. It is the result of many smaller technical choices made deliberately.",
        ],
      },
    ],
    keyTakeaways: [
      "Users form trust judgments from speed before they read your copy.",
      "Core Web Vitals and engagement patterns can influence SEO outcomes.",
      "Mobile speed deserves priority because it carries the most risk.",
      "The best improvements usually come from disciplined frontend decisions.",
    ],
    keywords: ["page speed seo", "website speed and conversions", "core web vitals business website"],
  },
  {
    slug: "best-tech-stack-for-scalable-saas-products",
    title: "Best Tech Stack for Scalable SaaS Products",
    description:
      "How to evaluate frontend, backend, database, and deployment choices for SaaS products that need room to grow.",
    excerpt:
      "There is no universal best stack, but there are reliable ways to choose one that matches your product shape, team, and growth plan.",
    category: "Development",
    readTime: "10 min read",
    publishedAt: "2026-02-27",
    image: "/project-management-tool-interface.jpg",
    alt: "Scalable SaaS dashboard with analytics and structured modules",
    ...editorialAuthor,
    intro:
      "Teams often ask for the best tech stack when what they really need is the best stack for their product context. Scale is not only about traffic. It is also about team velocity, code maintainability, and the ability to add features without breaking the core.",
    pullQuote:
      "A strong stack is less about fashion and more about how confidently the team can evolve it.",
    sections: [
      {
        title: "Choose for product behavior first",
        paragraphs: [
          "If the product needs strong SEO, fast interfaces, and content-rich marketing pages, the frontend stack should support server rendering and flexible component systems. If the product is dashboard-heavy, internal interaction speed and data handling become larger priorities.",
          "The stack should fit the product's real workload, not the personal preference of whoever is loudest in the room.",
        ],
      },
      {
        title: "Balance speed of development with long-term clarity",
        paragraphs: [
          "A modern stack like Next.js, React, NestJS, and PostgreSQL can work very well for many SaaS products because it offers strong developer ergonomics, predictable structure, and room for growth. But even a good stack becomes expensive when architecture is rushed.",
          "Scalability depends on system boundaries, coding standards, and deployment discipline just as much as language choice.",
        ],
      },
      {
        title: "Plan the operations side too",
        paragraphs: [
          "Founders often focus on the app and ignore the delivery system around it. Monitoring, backups, staging environments, CI workflows, role management, logging, and security reviews are all part of a scalable product.",
          "The best stack is one your team can operate, debug, and improve with confidence after launch.",
        ],
      },
    ],
    keyTakeaways: [
      "There is no universal best stack outside the context of the product.",
      "Scalability includes maintainability, not just traffic handling.",
      "Architecture quality matters as much as framework choice.",
      "Operational readiness should be planned alongside application code.",
    ],
    keywords: ["best tech stack for saas", "scalable saas stack", "nextjs nestjs saas architecture"],
  },
  {
    slug: "how-to-plan-a-website-redesign-without-losing-seo",
    title: "How to Plan a Website Redesign Without Losing SEO",
    description:
      "A redesign checklist covering content mapping, redirects, technical safeguards, and launch sequencing.",
    excerpt:
      "The biggest SEO losses during redesigns usually come from preventable mistakes. Planning content and technical migration early protects rankings and leads.",
    category: "SEO",
    readTime: "9 min read",
    publishedAt: "2026-02-18",
    image: "/real-estate-portal-design.jpg",
    alt: "Premium real estate website interface that reflects a redesign project",
    ...editorialAuthor,
    intro:
      "A redesign should improve search performance, not reset it. The businesses that lose traffic usually treat SEO as a review step near launch instead of a foundation that shapes information architecture from the start.",
    pullQuote:
      "A beautiful redesign that breaks page intent is still a failed migration.",
    sections: [
      {
        title: "Map the current site before changing it",
        paragraphs: [
          "You need an inventory of existing pages, rankings, backlinks, high-performing queries, and conversion pages before design decisions begin. Without that map, important pages often disappear or change meaning during redesign.",
          "This step also reveals which pages should be consolidated, improved, or retired instead of blindly preserved.",
        ],
      },
      {
        title: "Keep search intent attached to each page",
        paragraphs: [
          "When URLs, headings, copy, and internal links change, the page can drift away from the intent it previously ranked for. A new design should improve clarity without removing the semantic signals that made the page useful to searchers.",
          "This is especially important for service pages, city pages, and blog articles that already bring qualified traffic.",
        ],
      },
      {
        title: "Launch with technical safeguards",
        paragraphs: [
          "Redirects, canonicals, metadata, schema, image alt text, XML sitemaps, robots directives, and analytics validation all need a pre-launch checklist. The launch should be monitored closely for crawl errors and sudden drops in key landing pages.",
          "Redesigns are safest when technical SEO is treated like part of engineering, not part of decoration.",
        ],
      },
    ],
    keyTakeaways: [
      "Audit the current site's performance before making design decisions.",
      "Protect page intent, not just page existence, during migration.",
      "Redirects and metadata should be prepared before launch day.",
      "A redesign plan should include post-launch monitoring and fixes.",
    ],
    keywords: ["website redesign seo", "redesign without losing rankings", "seo migration checklist"],
  },
  {
    slug: "ui-ux-process-for-high-converting-landing-pages",
    title: "UI/UX Process for High-Converting Landing Pages",
    description:
      "Learn how research, hierarchy, messaging, and testing shape landing pages that convert more qualified visitors.",
    excerpt:
      "Conversion-focused landing pages are rarely the result of one clever headline. They work because the structure, visuals, and offer reduce friction in the right order.",
    category: "Design",
    readTime: "8 min read",
    publishedAt: "2026-02-12",
    image: "/modern-web-development-illustration-minimal-clean.jpg",
    alt: "Landing page design illustration with layered editorial sections",
    ...editorialAuthor,
    intro:
      "A landing page has one job: guide the right visitor toward one clear action. That means design choices should not compete for attention. They should create certainty, momentum, and trust.",
    pullQuote:
      "High-converting pages feel simple because the strategy behind them is disciplined.",
    sections: [
      {
        title: "Start with audience questions, not layout trends",
        paragraphs: [
          "Before wireframes, you need to know what the visitor is trying to understand. What problem are they solving, what doubt will stop them, and what proof helps them move forward? Those answers shape the page more accurately than any design gallery can.",
          "Strong landing pages resolve uncertainty section by section instead of throwing every message onto the first screen.",
        ],
      },
      {
        title: "Use hierarchy to control decision-making",
        paragraphs: [
          "Headlines, subheads, proof blocks, visuals, and CTA placements should work like a guided conversation. The user should know what you do, who it is for, why it is credible, and what to do next without effort.",
          "When hierarchy fails, visitors do not always leave immediately. Often they stay and still do not convert because the page never earns enough confidence.",
        ],
      },
      {
        title: "Measure after launch, not just before it",
        paragraphs: [
          "Landing pages improve through observation. Scroll depth, click behavior, form completion, source quality, and heatmap patterns show where the page creates hesitation or momentum.",
          "Design is not finished when the page looks good. It is finished when the page communicates well under real traffic.",
        ],
      },
    ],
    keyTakeaways: [
      "Research should shape the structure before visual styling begins.",
      "Good hierarchy reduces doubt in a predictable sequence.",
      "Proof and CTA placement need to support the same conversion story.",
      "Post-launch behavior data should guide the next iteration.",
    ],
    keywords: ["high converting landing page design", "ui ux landing page process", "landing page conversion design"],
  },
  {
    slug: "headless-cms-vs-traditional-cms-for-growing-brands",
    title: "Headless CMS vs Traditional CMS for Growing Brands",
    description:
      "A straightforward comparison for teams deciding how flexible their content system needs to be.",
    excerpt:
      "The best CMS is not the most fashionable one. It is the one that supports your publishing workflow, growth goals, and technical reality without slowing the team down.",
    category: "Content",
    readTime: "8 min read",
    publishedAt: "2026-02-05",
    image: "/project-management-tool-interface.jpg",
    alt: "Structured content dashboard representing a CMS comparison",
    ...editorialAuthor,
    intro:
      "Content systems affect much more than publishing. They influence SEO execution, design flexibility, internal workflows, and how efficiently your team can expand into new sections, languages, or campaigns.",
    pullQuote:
      "A CMS should reduce friction for your team, not create a permanent workaround culture.",
    sections: [
      {
        title: "Why traditional CMS platforms stay popular",
        paragraphs: [
          "Traditional CMS platforms can be fast to launch, especially for content-heavy sites with familiar editorial needs. They are often easier for non-technical teams to understand and can be economical when the site structure is straightforward.",
          "Problems start when design control, performance demands, or integration requirements exceed what the standard setup handles gracefully.",
        ],
      },
      {
        title: "Where headless systems win",
        paragraphs: [
          "Headless CMS setups are useful when the same content needs to power websites, apps, landing pages, and campaign experiences with more design freedom. They also support faster frontends and cleaner separation between content and presentation.",
          "That flexibility comes with a need for stronger planning because the editor experience must be designed with as much care as the frontend.",
        ],
      },
      {
        title: "Make the decision by workflow",
        paragraphs: [
          "If the business needs speed, standard publishing, and simpler ownership, traditional CMS setups are often enough. If the brand needs a custom digital experience, multi-channel content, and better frontend performance, headless becomes more attractive.",
          "The right answer should reflect workflow maturity, not just ambition.",
        ],
      },
    ],
    keyTakeaways: [
      "Traditional CMS tools are strong for standard publishing needs.",
      "Headless systems offer more design flexibility and channel control.",
      "Editor experience should be planned as part of the architecture.",
      "Choose based on workflow complexity, not buzzwords.",
    ],
    keywords: ["headless cms vs traditional cms", "best cms for growing brand", "headless website benefits"],
  },
  {
    slug: "healthcare-website-design-requirements-for-trust-and-usability",
    title: "Healthcare Website Design Requirements for Trust and Usability",
    description:
      "Key design and content principles that help healthcare websites communicate trust, clarity, and action.",
    excerpt:
      "Healthcare visitors arrive with urgency, uncertainty, or responsibility. The interface has to reduce stress while still guiding the next action clearly.",
    category: "Industry Insights",
    readTime: "9 min read",
    publishedAt: "2026-01-29",
    image: "/healthcare-dashboard-design.jpg",
    alt: "Healthcare dashboard and website interface focused on trust and clarity",
    ...editorialAuthor,
    intro:
      "Healthcare design is not only about looking professional. It is about making people feel that the information is reliable, the process is understandable, and the next step is safe to take.",
    pullQuote:
      "In healthcare, clarity is a trust signal before it is a design choice.",
    sections: [
      {
        title: "Structure matters more than decoration",
        paragraphs: [
          "Visitors need immediate orientation. Services, specialties, contact options, booking paths, and emergency information should be easy to recognize without hunting through marketing language.",
          "Clean typography, sensible spacing, and strong labeling reduce cognitive pressure for users who may already be anxious.",
        ],
      },
      {
        title: "Content should answer real patient questions",
        paragraphs: [
          "Healthcare sites often fail because they speak in internal language rather than visitor language. People want to know what is offered, who it is for, what to expect, and how to take action.",
          "That means service pages should explain symptoms, workflow, provider credibility, and preparation details with more practical clarity.",
        ],
      },
      {
        title: "Trust is built through consistency",
        paragraphs: [
          "Professional visuals help, but trust is reinforced when booking actions work, contact details are clear, mobile performance is strong, and the site handles important information without clutter.",
          "Every broken interaction weakens confidence in the care behind the interface.",
        ],
      },
    ],
    keyTakeaways: [
      "Healthcare users need clear structure before persuasive design.",
      "Practical service information builds more trust than abstract claims.",
      "Mobile performance and working contact flows are essential.",
      "Consistency across content and UX reinforces credibility.",
    ],
    keywords: ["healthcare website design", "medical website trust", "healthcare ux best practices"],
  },
  {
    slug: "real-estate-website-features-that-actually-generate-leads",
    title: "Real Estate Website Features That Actually Generate Leads",
    description:
      "A guide to the real estate website features that help turn browsing interest into serious inquiries.",
    excerpt:
      "Beautiful property sites are not enough on their own. Real estate websites generate better leads when the browsing experience is paired with friction-aware inquiry design.",
    category: "Industry Insights",
    readTime: "8 min read",
    publishedAt: "2026-01-21",
    image: "/real-estate-portal-design.jpg",
    alt: "Luxury real estate portal designed for browsing and lead generation",
    ...editorialAuthor,
    intro:
      "Real estate websites live in a difficult space. They need to present aspiration, support detailed comparison, and still move users toward a concrete inquiry without making the process feel pushy.",
    pullQuote:
      "Lead generation in real estate starts with better browsing, not louder forms.",
    sections: [
      {
        title: "Search and filtering should feel effortless",
        paragraphs: [
          "Visitors need to narrow listings quickly by location, price, property type, and high-value amenities. If discovery feels slow or confusing, even premium visuals cannot save the experience.",
          "Search quality matters because it shapes whether a user sees the right inventory early enough to stay engaged.",
        ],
      },
      {
        title: "Listing pages need context, not just imagery",
        paragraphs: [
          "High-quality visuals are important, but users also need plan details, location cues, availability signals, and the next logical question answered. Many sites underperform because they separate beautiful galleries from useful property information.",
          "A strong listing page balances emotion with practical decision support.",
        ],
      },
      {
        title: "Inquiry flows should be low-friction",
        paragraphs: [
          "The more commitment a user feels a form demands, the more likely they are to delay. Simple inquiry forms, visible contact options, and clear expectations around follow-up improve lead quality while reducing hesitation.",
          "Trust increases when the site makes the next step feel easy and respectful.",
        ],
      },
    ],
    keyTakeaways: [
      "Filtering and discovery are essential to real estate lead generation.",
      "Property pages should combine emotion with usable detail.",
      "Low-friction inquiry flows increase lead momentum.",
      "Luxury visuals work best when paired with practical clarity.",
    ],
    keywords: ["real estate website features", "real estate website lead generation", "property website ux"],
  },
  {
    slug: "ecommerce-ux-mistakes-that-kill-checkout-conversion",
    title: "E-commerce UX Mistakes That Kill Checkout Conversion",
    description:
      "Common ecommerce interface mistakes that create hesitation, abandonment, and weaker order completion rates.",
    excerpt:
      "Checkout drop-off usually comes from accumulated friction. Small interface problems compound into lost revenue when users feel uncertainty at the wrong moment.",
    category: "Design",
    readTime: "8 min read",
    publishedAt: "2026-01-14",
    image: "/ecommerce-platform-interface.png",
    alt: "E-commerce checkout and storefront interface designed for conversion",
    ...editorialAuthor,
    intro:
      "A checkout flow does not fail only when it breaks. It also fails when it creates too many small doubts. Confusing forms, unclear totals, slow steps, and weak trust signals all chip away at intent.",
    pullQuote:
      "Conversion drops when users have to think about the interface instead of the purchase.",
    sections: [
      {
        title: "Hidden costs and unclear totals",
        paragraphs: [
          "Unexpected shipping, tax, or service charges late in the flow damage trust immediately. Users want cost clarity as early as possible so they can commit without feeling tricked at the end.",
          "The cleaner your pricing communication is, the less the checkout has to repair emotionally.",
        ],
      },
      {
        title: "Forms that ask for too much",
        paragraphs: [
          "Long or awkward forms create fatigue. Every unnecessary field increases completion resistance, especially on mobile. Good ecommerce UX removes anything that does not directly support payment, fulfillment, or essential communication.",
          "The fastest way to help conversion is often to remove questions, not redesign buttons.",
        ],
      },
      {
        title: "Weak trust moments near payment",
        paragraphs: [
          "Security signals, refund clarity, delivery expectations, and recognizable payment options reduce hesitation. If the page feels vague at the moment of payment, users naturally hesitate to move forward.",
          "Trust content should support the transaction rather than distracting from it.",
        ],
      },
    ],
    keyTakeaways: [
      "Surprise costs are one of the fastest ways to lose checkout intent.",
      "Shorter forms reduce fatigue, especially on mobile.",
      "Trust signals near payment strongly influence completion behavior.",
      "Checkout UX succeeds by removing doubt step by step.",
    ],
    keywords: ["ecommerce ux mistakes", "checkout conversion optimization", "reduce cart abandonment"],
  },
  {
    slug: "what-founders-should-prepare-before-hiring-a-web-development-agency",
    title: "What Founders Should Prepare Before Hiring a Web Development Agency",
    description:
      "A founder-focused checklist for agency selection, project readiness, and stronger delivery outcomes.",
    excerpt:
      "Agencies do better work when founders arrive with business clarity. You do not need a perfect brief, but you do need a clear reason for the project to exist.",
    category: "Strategy",
    readTime: "7 min read",
    publishedAt: "2026-01-08",
    image: "/modern-web-development-illustration-minimal-clean.jpg",
    alt: "Business planning and web development strategy illustration",
    ...editorialAuthor,
    intro:
      "Hiring an agency becomes much easier when you can explain the business problem, the audience, and the outcome you want the project to create. Without that, proposals become hard to compare because everyone is solving a different problem.",
    pullQuote:
      "The best agency partnerships begin with business clarity, not design references.",
    sections: [
      {
        title: "Know what success should look like",
        paragraphs: [
          "Is the goal more qualified leads, a stronger brand, a faster publishing workflow, or a product-ready SaaS experience? The clearer the success criteria, the easier it becomes to discuss scope, timeline, and budget honestly.",
          "When success stays vague, every deliverable looks reasonable and none of them are easy to measure.",
        ],
      },
      {
        title: "Collect the inputs early",
        paragraphs: [
          "Founders should prepare brand assets, competitor references, existing analytics, service details, user pain points, and any important integration requirements before conversations go too far.",
          "This does not mean creating a polished specification alone. It means reducing preventable ambiguity so discovery can be productive.",
        ],
      },
      {
        title: "Evaluate how the agency thinks",
        paragraphs: [
          "A capable agency should ask strong questions about audience, operations, scalability, and content. If the conversation stays at the level of colors and page count, the project will likely stay shallow.",
          "Look for a partner that can connect business outcomes to technical decisions with precision.",
        ],
      },
    ],
    keyTakeaways: [
      "Success criteria should be clear before proposals are compared.",
      "Business inputs reduce ambiguity and improve delivery planning.",
      "Strong agencies ask strategic questions, not only visual ones.",
      "Founders do not need perfect briefs, but they do need clear intent.",
    ],
    keywords: ["hire web development agency", "prepare before hiring agency", "agency project brief checklist"],
  },
  {
    slug: "api-first-backend-architecture-for-modern-platforms",
    title: "API-First Backend Architecture for Modern Platforms",
    description:
      "Why API-first thinking improves product flexibility, frontend delivery, and operational scalability.",
    excerpt:
      "When backend systems are designed as products rather than hidden utilities, teams can move faster across web apps, admin tools, and partner integrations.",
    category: "Development",
    readTime: "9 min read",
    publishedAt: "2025-12-30",
    image: "/healthcare-dashboard-design.jpg",
    alt: "Backend-driven dashboard representing API-first architecture",
    ...editorialAuthor,
    intro:
      "API-first architecture is valuable because it forces teams to define data contracts and system responsibilities early. That discipline reduces confusion later when more interfaces or partners need access to the same business logic.",
    pullQuote:
      "An API-first system turns product logic into infrastructure the whole business can reuse.",
    sections: [
      {
        title: "Why structure matters early",
        paragraphs: [
          "When APIs are treated as an afterthought, frontend teams often build around inconsistent data shapes and unclear behaviors. That makes iteration slower and introduces avoidable bugs.",
          "Defined contracts create a more stable foundation for dashboards, public websites, mobile apps, and internal tools to grow from the same core logic.",
        ],
      },
      {
        title: "How API-first improves scale",
        paragraphs: [
          "An organized backend allows new interfaces to use existing workflows rather than rebuilding them in parallel. This is especially useful when businesses launch admin panels, partner portals, or customer-facing apps from the same data model.",
          "Reusability, observability, and access control all improve when backend thinking is deliberate instead of reactive.",
        ],
      },
      {
        title: "What to watch out for",
        paragraphs: [
          "API-first does not mean overengineering. Teams still need to avoid designing abstractions so early that the project slows down before users see value.",
          "The goal is useful structure that helps present needs and future flexibility meet in the right place.",
        ],
      },
    ],
    keyTakeaways: [
      "API-first thinking improves clarity across multiple interfaces.",
      "Shared contracts reduce frontend and integration friction.",
      "Reusability supports scale across apps, portals, and admin systems.",
      "Good structure should help delivery, not slow it down.",
    ],
    keywords: ["api first architecture", "backend architecture for saas", "modern api development"],
  },
  {
    slug: "mobile-first-design-checklist-for-service-businesses",
    title: "Mobile-First Design Checklist for Service Businesses",
    description:
      "A practical checklist for service websites that need strong mobile usability, faster trust, and better inquiry flow.",
    excerpt:
      "Most service businesses lose mobile leads through small usability failures, not dramatic design flaws. This checklist focuses on the essentials that move results.",
    category: "Design",
    readTime: "7 min read",
    publishedAt: "2025-12-19",
    image: "/restaurant-booking-system-design.jpg",
    alt: "Mobile-friendly service booking interface for a service business",
    ...editorialAuthor,
    intro:
      "Mobile-first design is especially important for service businesses because visitors often arrive with immediate intent. They may be comparing vendors, checking credibility, or trying to contact someone quickly from a phone.",
    pullQuote:
      "Mobile-first does not mean shrinking the desktop site. It means prioritizing the user's real context.",
    sections: [
      {
        title: "Make critical actions obvious",
        paragraphs: [
          "Phone, WhatsApp, quote request, booking, and location actions should be easy to find without long scrolling. Users should not need to decode the page to understand how to take the next step.",
          "The more urgent the service category, the more important this becomes.",
        ],
      },
      {
        title: "Keep content clean and readable",
        paragraphs: [
          "Mobile layouts need generous spacing, clear headings, concise paragraphs, and image sizes that support rather than bury the message. Service pages often feel overwhelming because desktop content is simply stacked instead of truly restructured.",
          "A readable mobile page improves both trust and conversion behavior.",
        ],
      },
      {
        title: "Performance and form design are part of UX",
        paragraphs: [
          "Fast loading, stable layouts, and simple inquiry forms matter as much as visual polish. If the mobile experience is slow or form-heavy, many users will delay contact and choose a competitor with less friction.",
          "Mobile UX works best when technical and content decisions support each other.",
        ],
      },
    ],
    keyTakeaways: [
      "Contact actions should be visible early in the mobile journey.",
      "Mobile layouts need real content prioritization, not simple stacking.",
      "Short forms and fast performance strongly affect service inquiries.",
      "Mobile-first thinking should shape design and engineering together.",
    ],
    keywords: ["mobile first website checklist", "service business mobile ux", "mobile friendly service website"],
  },
  {
    slug: "branding-and-website-design-why-they-must-be-built-together",
    title: "Branding and Website Design: Why They Must Be Built Together",
    description:
      "Why separated brand and web decisions often weaken clarity, consistency, and conversion performance.",
    excerpt:
      "Branding sets the promise. Website design proves it in real time. When they are built in isolation, the digital experience loses coherence.",
    category: "Content",
    readTime: "8 min read",
    publishedAt: "2025-12-11",
    image: "/fintech-mobile-app.png",
    alt: "Brand-driven interface design on a fintech mobile screen",
    ...editorialAuthor,
    intro:
      "A website is not only a container for brand assets. It is the place where tone, credibility, clarity, and action come together. That is why branding and web design should inform each other instead of being treated as separate tracks.",
    pullQuote:
      "A good brand identity should not stop at the logo. It should shape the way the interface communicates.",
    sections: [
      {
        title: "Branding without digital expression stays incomplete",
        paragraphs: [
          "Color, typography, voice, and positioning only become meaningful when they shape real user interactions. If the website does not carry those principles consistently, the identity feels cosmetic rather than operational.",
          "Users experience brand through flow, hierarchy, and clarity as much as they do through visual assets.",
        ],
      },
      {
        title: "Website design needs a real strategic voice",
        paragraphs: [
          "When web design starts without brand thinking, pages often become visually acceptable but strategically generic. Messaging lacks distinction, visuals feel borrowed, and the user journey misses the tone the business wants to own.",
          "That makes the site easier to compare on price because the value story feels weak.",
        ],
      },
      {
        title: "The strongest work happens in overlap",
        paragraphs: [
          "When branding and website design are developed together, the result is more coherent. Page structure, calls to action, imagery direction, and content voice all reinforce the same business identity.",
          "That coherence helps users trust faster because the experience feels deliberate from end to end.",
        ],
      },
    ],
    keyTakeaways: [
      "Brand identity should shape interface behavior, not only visuals.",
      "Websites built without brand strategy often feel generic.",
      "Integrated brand and web decisions create stronger trust signals.",
      "Consistency across message and design improves conversion clarity.",
    ],
    keywords: ["branding and website design", "why branding matters for websites", "brand strategy web design"],
  },
  {
    slug: "technical-seo-checklist-for-new-business-websites",
    title: "Technical SEO Checklist for New Business Websites",
    description:
      "An essential launch checklist covering metadata, indexing, structure, speed, schema, and internal linking.",
    excerpt:
      "New sites often miss SEO basics because teams focus on visuals first. This checklist keeps the technical foundation aligned with search visibility from launch.",
    category: "SEO",
    readTime: "9 min read",
    publishedAt: "2025-12-02",
    image: "/modern-web-development-illustration-minimal-clean.jpg",
    alt: "Technical SEO friendly website structure and interface illustration",
    ...editorialAuthor,
    intro:
      "Technical SEO is not a separate layer added after launch. It is the framework that helps search engines discover, understand, and trust your pages efficiently from the beginning.",
    pullQuote:
      "Search visibility starts with discoverability, structure, and consistency before it starts with ranking ambition.",
    sections: [
      {
        title: "Set the crawl and indexing foundation",
        paragraphs: [
          "Every new business website should have clear metadata, a useful robots file, an XML sitemap, canonical tags, structured headings, and an internal linking plan. Search engines need a predictable structure before they can evaluate content quality well.",
          "Even a small site benefits from building this correctly from day one.",
        ],
      },
      {
        title: "Support the pages with performance and semantics",
        paragraphs: [
          "Page speed, accessible markup, descriptive alt text, clean URL patterns, and schema where relevant help search engines interpret the site more confidently. These details also make the user experience stronger, which supports search performance indirectly.",
          "Technical SEO works best when engineering and content teams are aligned.",
        ],
      },
      {
        title: "Launch with measurement, not assumptions",
        paragraphs: [
          "Search Console, analytics, event tracking, and page-level measurement should be ready when the site goes live. Without that visibility, problems in indexation or organic landing page performance can stay hidden too long.",
          "The goal is not just to be crawlable. It is to be measurable and improvable.",
        ],
      },
    ],
    keyTakeaways: [
      "Robots, sitemap, canonicals, and metadata should exist before launch.",
      "Performance, alt text, and structured markup strengthen technical SEO.",
      "Internal linking helps search engines understand page relationships.",
      "Measurement tools should be validated as part of launch readiness.",
    ],
    keywords: ["technical seo checklist", "new website seo launch", "business website seo setup"],
  },
]

export const blogPosts: BlogPost[] = [...coreBlogPosts, ...supplementalBlogPosts]

export const featuredProjects = projects.filter((project) => project.featured)
export const featuredBlogPosts = blogPosts.slice(0, 3)

export const categoryCounts = blogPosts.reduce<Record<string, number>>((counts, post) => {
  counts[post.category] = (counts[post.category] ?? 0) + 1
  return counts
}, {})

export const blogCategories = Object.entries(categoryCounts)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([name, count]) => ({ name, count }))

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentPost: BlogPost, limit = 2) {
  return blogPosts
    .filter((post) => post.slug !== currentPost.slug)
    .sort((left, right) => {
      const leftScore = left.category === currentPost.category ? 1 : 0
      const rightScore = right.category === currentPost.category ? 1 : 0
      return rightScore - leftScore
    })
    .slice(0, limit)
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`))
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path
  }

  return new URL(path, SITE_URL).toString()
}

export function postPath(slug: string) {
  return `/blog/${slug}`
}
