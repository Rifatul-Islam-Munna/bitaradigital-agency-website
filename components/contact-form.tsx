"use client"

import { FormEvent, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/site-content"

export function ContactForm() {
  const [status, setStatus] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const projectType = String(formData.get("projectType") || "")
    const message = String(formData.get("message") || "")

    const subject = encodeURIComponent(`Project inquiry from ${name || "website visitor"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nProject details:\n${message}`,
    )

    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`
    setStatus("Your email app has been opened with the project brief.")
  }

  return (
    <section id="contact" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] editorial-gradient px-8 py-10 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-white/70">Contact</p>
                <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                  Let&apos;s build something
                  {" "}
                  <span className="italic text-white/80">extraordinary</span>
                  {" "}
                  together.
                </h2>
                <p className="max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                  Share your website, SaaS, UI/UX, branding, or optimization scope. We&apos;ll help shape the right
                  delivery path before development begins.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/60">Scope</p>
                  <p className="mt-3 font-serif text-2xl">Website</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">Custom web presence built for speed, trust, and SEO.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/60">Product</p>
                  <p className="mt-3 font-serif text-2xl">SaaS</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">Operational platforms, dashboards, and role-based flows.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/15 bg-white/8 p-5 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/60">Support</p>
                  <p className="mt-3 font-serif text-2xl">SEO</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">Technical structure, content planning, and on-page readiness.</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] bg-white px-6 py-7 text-foreground sm:px-8 sm:py-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-primary/10 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-foreground/35 focus:border-secondary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-primary/10 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-foreground/35 focus:border-secondary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="projectType"
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-foreground/55"
                >
                  Project Type
                </label>
                <input
                  id="projectType"
                  name="projectType"
                  required
                  placeholder="Website, SaaS, redesign, UI/UX..."
                  className="w-full border-b border-primary/10 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-foreground/35 focus:border-secondary"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-foreground/55"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us what you need, what stage you are in, and what outcome matters most."
                  className="w-full rounded-2xl border border-primary/10 px-4 py-4 text-sm leading-7 outline-none transition-colors placeholder:text-foreground/35 focus:border-secondary"
                />
              </div>
              <button
                type="submit"
                className="editorial-gradient inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-0.5"
              >
                Prepare Inquiry Email
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="text-xs leading-6 text-foreground/50">
                {status || `This opens your email app and pre-fills a project brief to ${siteConfig.contactEmail}.`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
