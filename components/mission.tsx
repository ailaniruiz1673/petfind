import { Card } from "@/components/ui/card"
import { Eye, Heart, Users, Shield } from "lucide-react"

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What We Are Looking For</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We are looking for you to be conscious of the situations of the animals you see every day in the streets. We
            want to help them through digital innovation and captivate you to be part of this mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Awareness</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Be conscious of street animals and their situations in your community
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Help</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Help animals through our digital platform and reporting system
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Join a community of caring individuals making a difference
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Pet Care</h3>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Be conscious of your own dog's situation and wellbeing
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
