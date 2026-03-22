import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "SaaS Development",
      image: "/ecommerce-platform-interface.png",
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Application",
      image: "/healthcare-dashboard-design.jpg",
    },
    {
      title: "Fintech Mobile App",
      category: "UI/UX Design",
      image: "/fintech-mobile-app.png",
    },
    {
      title: "Real Estate Portal",
      category: "Custom Website",
      image: "/real-estate-portal-design.jpg",
    },
    {
      title: "Project Management Tool",
      category: "SaaS Platform",
      image: "/project-management-tool-interface.jpg",
    },
    {
      title: "Restaurant Booking System",
      category: "Web Application",
      image: "/restaurant-booking-system-design.jpg",
    },
  ]

  return (
    <section id="portfolio" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Portfolio</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Recent projects that showcase our expertise and creativity
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border bg-card transition-all hover:border-primary"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm font-medium text-primary">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-card-foreground">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
