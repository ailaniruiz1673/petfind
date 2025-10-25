import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, AlertCircle, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const wantedDogs = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    lastSeen: "Downtown Park",
    date: "2 days ago",
    description: "Friendly and energetic. Was wearing a red collar.",
    image: "/friendly-golden-retriever-dog-with-red-collar.jpg",
  },
  {
    id: 2,
    name: "Luna",
    breed: "German Shepherd",
    lastSeen: "Oak Street",
    date: "1 week ago",
    description: "Shy but gentle. Last seen near the woods.",
    image: "/shy-gentle-german-shepherd-dog.jpg",
  },
  {
    id: 3,
    name: "Rocky",
    breed: "Bulldog",
    lastSeen: "Riverwalk Trail",
    date: "3 days ago",
    description: "Short and muscular. Has a white patch on chest.",
    image: "/muscular-bulldog-with-white-patch-on-chest.jpg",
  },
]

export function WantedDogs() {
  const [openCommentId, setOpenCommentId] = useState<number | null>(null)
  const [comments, setComments] = useState<{ [key: number]: string }>({})

  const handleCommentChange = (dogId: number, value: string) => {
    setComments((prev) => ({ ...prev, [dogId]: value }))
  }

  const handleSubmit = (dogId: number) => {
    console.log(Sighting reported for dog ${dogId}:, comments[dogId])
    setComments((prev) => ({ ...prev, [dogId]: "" }))
    setOpenCommentId(null)
  }

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Wanted Dogs</h2>
          <p className="text-muted-foreground">Help us find these missing pets</p>
        </div>
        <Link href="/report-sighting">
          <Button>Report a Sighting</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wantedDogs.map((dog) => (
          <Card key={dog.id} className="p-4 flex flex-col justify-between">
            <div>
              {/* Dog Image */}
              {dog.image && (
                <img
                  src={dog.image || "/placeholder.svg"}
                  alt={dog.name}
                  className="w-full h-48 object-cover rounded-md mb-3"
                />
              )}

              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{dog.name}</h3>
                <Badge variant="secondary">{dog.breed}</Badge>
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" /> {dog.lastSeen}
              </div>
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4 mr-1" /> {dog.date}
              </div>

              <p className="text-sm text-muted-foreground mb-3">{dog.description}</p>

              <div className="flex items-center text-yellow-600 text-sm font-medium mb-2">
                <AlertCircle className="h-4 w-4 mr-1" /> Missing
              </div>

              {openCommentId === dog.id ? (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor={comment-${dog.id}} className="text-sm font-medium">
                      Where did you see {dog.name}? (please put your contact information)
                    </label>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setOpenCommentId(null)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <textarea
                    id={comment-${dog.id}}
                    placeholder="Please provide details about the location, time, and any other relevant information..."
                    value={comments[dog.id] || ""}
                    onChange={(e) => handleCommentChange(dog.id, e.target.value)}
                    className="w-full min-h-[100px] px-3 py-2 text-sm rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={() => handleSubmit(dog.id)}
                      disabled={!comments[dog.id]?.trim()}
                    >
                      Submit Sighting
                    </Button>
                    <Button variant="outline" onClick={() => setOpenCommentId(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button className="w-full bg-transparent" variant="outline" onClick={() => setOpenCommentId(dog.id)}>
                  I've Seen This Dog
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
