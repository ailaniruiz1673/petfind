import { Card } from "@/components/ui/card"
import { Car, Cpu, Radio } from "lucide-react"

export function FuturePlans() {
  return (
    <section id="future" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Future Plans</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We're developing cutting-edge technology to protect pets and reduce accidents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">LiDAR Safety</h3>
            <p className="text-muted-foreground text-center text-pretty leading-relaxed">
              We are searching for LiDAR lasers for your cars to reduce accidents that happen every day with animals on
              the road
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Cpu className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Smart Care</h3>
            <p className="text-muted-foreground text-center text-pretty leading-relaxed">
              Developing advanced technology to take care of dogs, cats, and people through automated monitoring systems
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Radio className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">Tracking Chips</h3>
            <p className="text-muted-foreground text-center text-pretty leading-relaxed">
              The next level of pet care - microchips that let you track your pets in case you lose them
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
