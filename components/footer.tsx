import Link from "next/link"
import { services, siteConfig } from "@/lib/site-content"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[color:var(--surface-container-low)]">
      <div className="section-shell py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-6 md:col-span-1">
            <Link href="/" className="inline-block font-serif text-4xl font-bold tracking-tight text-primary">
              Bitara
            </Link>
            <p className="max-w-sm text-sm leading-7 text-foreground/65">{siteConfig.longDescription}</p>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-xl italic text-primary">Pages</h3>
            <div className="space-y-3 text-sm uppercase tracking-[0.16em] text-foreground/60">
              <Link href="/" className="block transition-colors hover:text-secondary">
                Home
              </Link>
              <Link href="/#projects" className="block transition-colors hover:text-secondary">
                Projects
              </Link>
              <Link href="/#contact" className="block transition-colors hover:text-secondary">
                Contact
              </Link>
              <Link href="/blog" className="block transition-colors hover:text-secondary">
                Blog
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-xl italic text-primary">Capabilities</h3>
            <div className="space-y-3 text-sm uppercase tracking-[0.16em] text-foreground/60">
              {services.slice(0, 4).map((service) => (
                <p key={service.title}>{service.title}</p>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-xl italic text-primary">Proof</h3>
            <p className="text-sm leading-7 text-foreground/65">
              Live SaaS reference:
              {" "}
              <a
                href="http://pharmacy.bitaradigitalit.com/"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline decoration-secondary/50 underline-offset-4 transition-colors hover:text-secondary"
              >
                pharmacy.bitaradigitalit.com
              </a>
            </p>
            <p className="text-sm leading-7 text-foreground/65">
              Editorial blog library with static SEO-focused articles across strategy, design, development, and search.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-primary/10 pt-8 text-[0.72rem] uppercase tracking-[0.22em] text-foreground/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <a href="#top" className="transition-colors hover:text-secondary">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}

