export function TechnologyStack() {
  const technologies = ["Next.js", "NestJS", "MongoDB", "PostgreSQL", "React", "WordPress", "Figma", "Tailwind CSS"]

  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We work with industry-leading technologies and frameworks
          </p>
        </div>
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-lg border-2 border-border bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:border-primary hover:bg-card md:px-8 md:py-4 md:text-lg"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
