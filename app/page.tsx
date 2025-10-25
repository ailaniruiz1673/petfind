import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Mission } from "@/components/mission"
import { FuturePlans } from "@/components/future-plans"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Mission />
      <FuturePlans />
      <About />
      <Footer />
    </main>
  )
}
