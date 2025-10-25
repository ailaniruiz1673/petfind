import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, AlertCircle } from "lucide-react"

const wantedDogs = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    lastSeen: "Downtown Park",
    date: "2 days ago",
    description: "Friendly golden retriever, wearing blue collar",
    status: "urgent",
    image: "/golden-retriever.png",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Husky Mix",
    lastSeen: "Riverside Area",
    date: "5 days ago",
    description: "Gray and white husky mix, very energetic",
    status: "missing",
    image: "/husky-mix-dog.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    breed: "Beagle",
    lastSeen: "Oak Street",
    date: "1 week ago",
    description: "Small beagle with brown spots, answers to Charlie",
    status: "missing",
    image: "/beagle-dog.png",
  },
]

export function WantedDogs() {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Wanted Dogs</h2>
          <p className="text-muted-foreground">Help us find these missing pets</p>
        </div>
        <Button>Report a Sighting</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wantedDogs.map((dog) => (
          <Card key={dog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img src={dog.image || "/placeholder.svg"} alt={dog.name} className="w-full h-full object-cover" />
              {dog.status === "urgent" && (
                <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Urgent
                </Badge>
              )}
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{dog.name}</h3>
                <p className="text-sm text-muted-foreground">{dog.breed}</p>
              </div>

              <p className="text-sm text-pretty">{dog.description}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Last seen: {dog.lastSeen}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{dog.date}</span>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                I've Seen This Dog
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
