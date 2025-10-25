import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Heart, DollarSign, Users, Home } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function DonatePage() {
  const donationAmounts = [
    { amount: 25, impact: "Provides food for a dog for one week" },
    { amount: 50, impact: "Covers basic veterinary checkup" },
    { amount: 100, impact: "Supplies shelter bedding for multiple dogs" },
    { amount: 250, impact: "Funds emergency medical treatment" },
  ]

  const impactStats = [
    { icon: Heart, value: "X+", label: "Dogs Rescued" },
    { icon: Home, value: "X+", label: "Dogs Rehomed" },
    { icon: Users, value: "X+", label: "Volunteers" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Every Donation Makes a Difference</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Your generosity directly impacts the lives of dogs in need. 80% of your donation goes toward rescue,
              rehabilitation, and rehoming efforts.
            </p>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 px-4 border-b">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation Amounts */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Choose Your Impact</h2>
            <p className="text-center text-muted-foreground mb-12 text-pretty">
              Select an amount below or enter a custom donation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {donationAmounts.map((donation, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary"
                >
                  <div className="text-3xl font-bold mb-2 text-primary">${donation.amount}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{donation.impact}</p>
                </Card>
              ))}
            </div>

            <Card className="p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Make Your Donation</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium mb-2">
                    Donation Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="number"
                      id="amount"
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your donation is tax-deductible. You will receive a receipt via email for your records.
                  </p>
                </div>

                <Button size="lg" className="w-full text-lg">
                  Complete Donation
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By donating, you agree to our terms and privacy policy. Your payment information is secure and
                  encrypted.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Where Your Money Goes</h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Rescue Operations",
                  percentage: "30%",
                  description: "Emergency rescue missions, transportation, and initial medical assessments",
                },
                {
                  title: "Medical Care",
                  percentage: "20%",
                  description: "Veterinary treatments, surgeries, vaccinations, and ongoing health monitoring",
                },
                {
                  title: "Shelter & Care",
                  percentage: "20%",
                  description: "Food, bedding, facility maintenance, and daily care for dogs awaiting adoption",
                },
                {
                  title: "Adoption Support",
                  percentage: "10%",
                  description: "Adoption events, marketing, and post-adoption follow-up services",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl font-bold text-primary min-w-[60px]">{item.percentage}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
