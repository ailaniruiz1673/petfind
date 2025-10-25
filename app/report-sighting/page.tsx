import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Camera, User, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ReportSightingPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/dashboard">
            <Button variant="ghost" className="mb-6 -ml-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back to Dashboard
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Report a Sighting</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Help us reunite dogs with their families by reporting any sightings. Every detail matters.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sighting Information</CardTitle>
              <CardDescription>Please provide as much detail as possible about the dog you saw</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Dog Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Dog Details
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="dog-name">Dog Name (if known)</Label>
                    <Input id="dog-name" placeholder="e.g., Max, Luna" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="breed">Breed or Description</Label>
                    <Input id="breed" placeholder="e.g., Golden Retriever, Mixed breed" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the dog's appearance, color, size, any distinctive markings, collar, tags, etc."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photo">Upload Photo (optional)</Label>
                    <Input id="photo" type="file" accept="image/*" />
                    <p className="text-sm text-muted-foreground">A photo can greatly help in identifying the dog</p>
                  </div>
                </div>

                {/* Location Information */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Location Details
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="location">Where did you see the dog?</Label>
                    <Input id="location" placeholder="e.g., Downtown Park, 123 Oak Street" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additional-info">Additional Location Information</Label>
                    <Textarea
                      id="additional-info"
                      placeholder="Any additional details about the location or circumstances"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Your Contact Information
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="john@example.com" className="pl-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    We'll use this information to follow up if needed. Your information will be kept confidential.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1">
                    Submit Sighting Report
                  </Button>
                  <Link href="/dashboard" className="flex-1">
                    <Button type="button" variant="outline" className="w-full bg-transparent">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  )
}
