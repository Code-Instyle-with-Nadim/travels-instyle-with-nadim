"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Star,
} from "lucide-react"

import { cn } from "@/lib/utils"

type Destination = {
  slug: string
  country: string
  title: string
  price: number
  duration: string
  rating: number
  image: string
  imageAlt: string
}

const destinations: Destination[] = [
  {
    slug: "bali-paradise",
    country: "Nepal",
    title: "Bali Paradise",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: "/assets/destinations/image6.png",
    imageAlt: "Aerial view of a turquoise coastline seen from an airplane wing",
  },
  {
    slug: "bali-overwater-villas",
    country: "Indonesia",
    title: "Bali Paradise",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: "/assets/destinations/image5.png",
    imageAlt: "Thatched overwater bungalows surrounded by clear turquoise water",
  },
  {
    slug: "bali-beachfront",
    country: "Indonesia",
    title: "Bali Paradise",
    price: 2700,
    duration: "7 Days/6 Nights",
    rating: 4.5,
    image: "/assets/destinations/image2.png",
    imageAlt: "Aerial view of a white sand beach lined with palm trees and sun loungers",
  },
  {
    slug: "machu-picchu",
    country: "Peru",
    title: "Machu Picchu",
    price: 2400,
    duration: "8 Days/7 Nights",
    rating: 4.9,
    image: "/assets/destinations/image3.png",
    imageAlt: "Traveler photographing the terraced ruins of Machu Picchu",
  },
  {
    slug: "alpine-escape",
    country: "Switzerland",
    title: "Alpine Escape",
    price: 3500,
    duration: "6 Days/5 Nights",
    rating: 4.8,
    image: "/assets/destinations/image4.png",
    imageAlt: "Traveler enjoying a panoramic view of green alpine valleys",
  },
]

export default function FeaturedDestinations() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToCard = (index: number) => {
    const track = trackRef.current
    const card = track?.children[index] as HTMLElement | undefined

    if (!track || !card) return

    const trackRect = track.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()

    track.scrollTo({
      left: track.scrollLeft + (cardRect.left - trackRect.left),
      behavior: "smooth",
    })
  }

  const goTo = (index: number) => {
    const nextIndex = Math.min(Math.max(index, 0), destinations.length - 1)

    setActiveIndex(nextIndex)
    scrollToCard(nextIndex)
  }

  const handleScroll = () => {
    const track = trackRef.current

    if (!track) return

    const cards = Array.from(track.children) as HTMLElement[]
    const maxScrollLeft = track.scrollWidth - track.clientWidth

    if (maxScrollLeft <= 0) {
      setActiveIndex(0)
      return
    }

    if (track.scrollLeft >= maxScrollLeft - 2) {
      setActiveIndex(cards.length - 1)
      return
    }

    const trackLeft = track.getBoundingClientRect().left
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(closestIndex)
  }

  const isFirst = activeIndex === 0
  const isLast = activeIndex === destinations.length - 1

  return (
    <section
      aria-labelledby="featured-destinations-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="featured-destinations-heading"
              className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-normal tracking-[-0.02em] text-neutral-900"
            >
              Featured Destinations
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-[15px]">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          <Link
            href="/destinations"
            className="group inline-flex h-11 w-fit shrink-0 items-center gap-4 border border-brand px-6 text-[11px] font-semibold tracking-[0.16em] text-brand uppercase transition-colors hover:bg-brand hover:text-white"
          >
            All Destinations
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:mt-12 sm:gap-6 lg:mt-14 [&::-webkit-scrollbar]:hidden"
        >
          {destinations.map((destination) => (
            <article
              key={destination.slug}
              className="group w-[86%] shrink-0 snap-start sm:w-[47%] lg:w-[42%]"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-neutral-100">
                <Image
                  src={destination.image}
                  alt={destination.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, (min-width: 640px) 47vw, 86vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-sm bg-white px-2.5 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
                  {destination.rating.toFixed(1)}
                  <Star
                    aria-hidden="true"
                    className="size-3 fill-neutral-900 text-neutral-900"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="flex items-center gap-1.5 text-[13px] text-neutral-500">
                  <MapPin aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                  {destination.country}
                </p>

                <div className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] leading-tight font-normal text-neutral-900">
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="transition-colors hover:text-brand-dark"
                    >
                      {destination.title}
                    </Link>
                  </h3>
                  <p className="text-[15px] font-medium text-neutral-900 tabular-nums">
                    ${destination.price}
                    <span className="text-xs font-normal text-neutral-500">/person</span>
                  </p>
                </div>

                <p className="mt-1 flex items-center gap-1.5 text-[13px] text-neutral-500">
                  <CalendarDays
                    aria-hidden="true"
                    className="size-3.5"
                    strokeWidth={1.75}
                  />
                  {destination.duration}
                </p>

                <Link
                  href={`/destinations/${destination.slug}`}
                  className="group/book mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand uppercase transition-colors hover:text-brand-dark"
                >
                  Book Now
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform group-hover/book:translate-x-0.5 group-hover/book:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-5 sm:mt-12">
          <p
            aria-live="polite"
            className="min-w-9 text-lg font-light text-neutral-900 tabular-nums"
          >
            {activeIndex + 1}/{destinations.length}
          </p>

          <div aria-hidden="true" className="h-px flex-1 bg-neutral-200" />

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              disabled={isFirst}
              aria-label="Show previous destinations"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-colors",
                isFirst
                  ? "cursor-not-allowed opacity-40"
                  : "hover:border-neutral-900 hover:text-neutral-900"
              )}
            >
              <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              disabled={isLast}
              aria-label="Show next destinations"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-colors",
                isLast
                  ? "cursor-not-allowed opacity-40"
                  : "hover:border-neutral-900 hover:text-neutral-900"
              )}
            >
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
