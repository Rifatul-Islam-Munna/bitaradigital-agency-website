"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { navigationLinks } from "@/lib/site-content"

type HeaderProps = {
  activePage?: "home" | "blog"
}

export function Header({ activePage = "home" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const activeLabel = activePage === "home" ? "Home" : "Blog"

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="section-shell">
        <div className="glass-nav ambient-shadow rounded-[2rem] border border-white/70 px-4 py-4 sm:px-5 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-serif text-2xl font-bold tracking-tight text-primary"
              onClick={() => setIsOpen(false)}
            >
              Bitara
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-foreground/60">
                {navigationLinks.map((link) => {
                  const isActive = link.label === activeLabel

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={isActive ? "text-secondary" : "transition-colors hover:text-secondary"}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              <Link
                href="/#contact"
                className="editorial-gradient inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-0.5"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/10 bg-white text-primary md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen ? (
            <div className="mt-4 space-y-3 border-t border-primary/10 pt-4 md:hidden">
              <div className="grid gap-2">
                {navigationLinks.map((link) => {
                  const isActive = link.label === activeLabel

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-white text-primary/70 transition-colors hover:text-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="editorial-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
