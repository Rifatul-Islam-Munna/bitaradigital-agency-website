import { Users, Rocket, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhoWeAre() {
  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled professionals with years of expertise in digital development",
    },
    {
      icon: Rocket,
      title: "Latest Technologies",
      description: "Building with cutting-edge tools and modern frameworks",
    },
    {
      icon: Layers,
      title: "End-to-End Development",
      description: "From concept to launch, we handle every aspect of your project",
    },
  ]

  return (
    <section id="about" className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Who We Are</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We are a digital agency focused on delivering high-quality, scalable solutions. Our team combines technical
            expertise with creative thinking to build products that matter.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-lg bg-primary/10 p-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
