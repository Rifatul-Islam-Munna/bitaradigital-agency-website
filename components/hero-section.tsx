import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Building Modern, Scalable Digital Experiences.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Bitara builds custom websites, SaaS applications, UI/UX design, branding, and digital solutions using the
              latest technologies. We transform your vision into powerful digital products that drive growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore Our Work
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full lg:h-[500px]">
              <img src="/modern-web-development-illustration-minimal-clean.jpg" alt="Digital Experience" className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
