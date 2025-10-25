import { Navigation } from "@/components/navigation"
import { WantedDogs } from "@/components/wanted-dogs"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Dashboard</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Stay updated with wanted dogs and the latest veterinary news around you.
          </p>
        </div>
        <WantedDogs />
        <NewsSection />
      </div>
      <Footer />
    </main>
  )
}
