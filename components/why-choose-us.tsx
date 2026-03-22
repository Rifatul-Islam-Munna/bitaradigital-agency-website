import { CheckCircle, Clock, MessageCircle, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Clean & Modern Code",
      description: "Well-structured, maintainable code that follows industry best practices",
    },
    {
      icon: Clock,
      title: "On-time Delivery",
      description: "We respect deadlines and deliver projects when promised",
    },
    {
      icon: MessageCircle,
      title: "Strong Communication",
      description: "Regular updates and transparent collaboration throughout the project",
    },
    {
      icon: Shield,
      title: "Performance & Security Focused",
      description: "Fast, secure applications that protect user data and provide great experiences",
    },
  ]

  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We're committed to delivering excellence in every project
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card key={reason.title} className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-lg bg-primary/10 p-4">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{reason.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
