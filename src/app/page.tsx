import Banner from "@/components/Banner"
import FeaturedDestinations from "@/components/FeaturedDestinations"
import Journey from "@/components/Journey"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function Home() {
  return (
    <>
      <main className="flex min-h-svh flex-col">
        <Banner />
        <FeaturedDestinations />
        <WhyChooseUs />
        <Testimonials />
        <Journey />
      </main>
    </>
  )
}
