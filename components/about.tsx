import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Who Are We?</h2>
          </div>

          <Card className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-pretty">
                We are a team of passionate technologists, veterinarians, and animal welfare advocates dedicated to
                creating innovative solutions for pet safety and animal welfare.
              </p>

              <p className="text-pretty">
                Our mission began when we witnessed the growing number of street animals and lost pets in our
                communities. We realized that technology could bridge the gap between concerned citizens and animals in
                need.
              </p>

              <p className="text-pretty">
                Today, we're building a comprehensive digital platform that combines real-time tracking, community
                reporting, and cutting-edge safety technology to protect animals and reunite them with their families.
              </p>

              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Compassion for all animals, domestic and wild</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Innovation through technology and community collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparency in our operations and impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>Education and awareness for responsible pet ownership</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
