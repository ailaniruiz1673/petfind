import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/happy-dogs-playing-in-a-park-with-people-caring-fo.jpg"
          alt="Dogs being cared for"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            <span>Protecting Dogs Through Technology</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">Every Dog Deserves a Safe Home</h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Join our mission to protect street animals and reunite lost pets with their families through innovative
            digital solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild className="text-lg">
              <Link href="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
              <Link href="#mission">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
