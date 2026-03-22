import { Globe, Server, Palette, Box, Wrench, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesGrid() {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description: "Built with Next.js, NestJS, MongoDB, SQL, and WordPress for powerful web presence",
    },
    {
      icon: Box,
      title: "SaaS Development",
      description: "Scalable software-as-a-service platforms designed for growth and performance",
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description: "Robust server architecture and RESTful APIs that power your applications",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love and convert visitors",
    },
    {
      icon: Code,
      title: "Branding & Graphics",
      description: "Visual identity and design systems that make your brand stand out",
    },
    {
      icon: Wrench,
      title: "Maintenance & Optimization",
      description: "Ongoing support to keep your digital products running at peak performance",
    },
  ]

  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-border bg-card transition-all hover:border-primary">
              <CardHeader>
                <div className="mb-4 w-fit rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
