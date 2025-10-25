"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, AlertCircle, X } from "lucide-react"
import { useState } from "react"

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
  const [openCommentId, setOpenCommentId] = useState<number | null>(null)
  const [comments, setComments] = useState<{ [key: number]: string }>({})

  const handleCommentChange = (dogId: number, value: string) => {
    setComments((prev) => ({ ...prev, [dogId]: value }))
  }

  const handleSubmit = (dogId: number) => {
    // Handle the comment submission here
    console.log(`Sighting reported for dog ${dogId}:`, comments[dogId])
    // Reset the form
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

              {openCommentId === dog.id ? (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor={`comment-${dog.id}`} className="text-sm font-medium">
                      Where did you see {dog.name}? (please put your contact information)
                    </label>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setOpenCommentId(null)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <textarea
                    id={`comment-${dog.id}`}
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