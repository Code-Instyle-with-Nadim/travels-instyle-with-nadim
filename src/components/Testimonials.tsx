"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Testimonial = {
  name: string
  location: string
  quote: string
  image: string
  imageAlt: string
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    location: "Singapore",
    quote:
      "The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.",
    image: "/assets/person2.png",
    imageAlt: "Portrait of Michael Chen",
  },
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote:
      "The Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!",
    image: "/assets/person1.png",
    imageAlt: "Portrait of Sarah Johnson",
  },
]

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateControls = useCallback(() => {
    const track = trackRef.current

    if (!track) return

    const maxScrollLeft = track.scrollWidth - track.clientWidth

    setCanScrollPrev(track.scrollLeft > 2)
    setCanScrollNext(track.scrollLeft < maxScrollLeft - 2)
  }, [])

  useEffect(() => {
    const track = trackRef.current

    updateControls()

    if (!track) return

    const observer = new ResizeObserver(updateControls)
    observer.observe(track)

    return () => observer.disconnect()
  }, [updateControls])

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    const card = track?.querySelector<HTMLElement>("[data-testimonial-card]")

    if (!track || !card) return

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0

    track.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    })
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2
              id="testimonials-heading"
              className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight font-normal tracking-[-0.02em] text-neutral-900"
            >
              What Travelers Say
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 sm:text-sm">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              aria-label="Show previous testimonials"
              className="size-10 cursor-pointer rounded-full border-neutral-200 bg-white text-neutral-400 shadow-none hover:border-neutral-900 hover:bg-white hover:text-neutral-900 disabled:opacity-40"
            >
              <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              aria-label="Show next testimonials"
              className="size-10 cursor-pointer rounded-full border-neutral-200 bg-white text-neutral-400 shadow-none hover:border-neutral-900 hover:bg-white hover:text-neutral-900 disabled:opacity-40"
            >
              <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
            </Button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateControls}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] sm:mt-12 sm:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              data-testimonial-card
              className="w-[88%] shrink-0 snap-start md:w-[calc(50%-0.75rem)]"
            >
              <Card className="gap-0 overflow-hidden bg-white p-0 py-0">
                <div className="grid h-full grid-cols-[1fr_38%]">
                  <div className="flex flex-col p-6 sm:p-7">
                    <blockquote className="text-[15px] leading-[1.5] font-medium text-neutral-900">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    <figcaption className="mt-auto flex items-start gap-2 pt-8">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-4 shrink-0 bg-brand"
                      />
                      <span>
                        <span className="block text-xs font-medium text-brand">
                          {testimonial.name}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-neutral-500">
                          {testimonial.location}
                        </span>
                      </span>
                    </figcaption>
                  </div>

                  <div className="relative min-h-[220px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      fill
                      sizes="(min-width: 768px) 20vw, 34vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
