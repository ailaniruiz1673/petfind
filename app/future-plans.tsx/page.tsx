import { Navigation } from "@/components/navigation"
import { FuturePlans } from "@/components/future-plans"
import { Footer } from "@/components/footer"

export default function FuturePlansPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FuturePlans />
      <Footer />
    </main>
  )
}
