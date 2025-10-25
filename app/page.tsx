import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Mission } from "@/components/mission"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <Footer />
    </main>
  )
}
