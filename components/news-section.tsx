import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    category: "Vaccines",
    title: "New Rabies Vaccine Shows 99% Effectiveness",
    excerpt: "Breakthrough vaccine provides longer-lasting protection for dogs against rabies with fewer side effects.",
    date: "October 20, 2025",
    image: "/veterinarian-giving-vaccine-to-dog.jpg",
  },
  {
    id: 2,
    category: "Medicine",
    title: "FDA Approves New Arthritis Treatment for Senior Dogs",
    excerpt:
      "Revolutionary medication helps senior dogs maintain mobility and reduce joint pain with minimal side effects.",
    date: "October 18, 2025",
    image: "/senior-dog-being-examined-by-vet.jpg",
  },
  {
    id: 3,
    category: "Local News",
    title: "Community Pet Adoption Event This Weekend",
    excerpt:
      "Local government hosting adoption event with over 50 dogs looking for forever homes. Free health checks included.",
    date: "October 15, 2025",
    image: "/dog-adoption-event-with-happy-families.jpg",
  },
  {
    id: 4,
    category: "Medicine",
    title: "Breakthrough in Canine Cancer Treatment",
    excerpt: "New immunotherapy treatment shows promising results in treating aggressive forms of canine cancer.",
    date: "October 12, 2025",
    image: "/veterinary-medical-research.jpg",
  },
  {
    id: 5,
    category: "Local News",
    title: "New Dog Park Opens in Riverside District",
    excerpt:
      "State-of-the-art dog park features separate areas for small and large dogs, agility equipment, and water stations.",
    date: "October 10, 2025",
    image: "/modern-dog-park-with-dogs-playing.jpg",
  },
  {
    id: 6,
    category: "Vaccines",
    title: "Annual Vaccination Reminder for Pet Owners",
    excerpt: "Veterinarians remind pet owners about the importance of annual vaccinations and health check-ups.",
    date: "October 8, 2025",
    image: "/happy-healthy-dog-at-vet-clinic.jpg",
  },
]

export function NewsSection() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Latest News</h2>
        <p className="text-muted-foreground">Stay updated with veterinary news and local pet events</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{item.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-balance group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{item.excerpt}</p>

              <div className="flex items-center gap-2 text-sm text-primary font-medium pt-2">
                <span>Read more</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
