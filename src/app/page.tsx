import Banner from "@/components/Banner"
import FeaturedDestinations from "@/components/FeaturedDestinations"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col">
      <Banner />
      <FeaturedDestinations />
      <WhyChooseUs />
    </main>
  )
}
