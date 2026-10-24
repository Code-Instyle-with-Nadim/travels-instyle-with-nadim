import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const searchFields = [
  {
    id: "location",
    name: "location",
    label: "Location",
    placeholder: "Address, City or Zip",
  },
  {
    id: "date",
    name: "date",
    label: "Date/Duration",
    placeholder: "Anytime, 5 Days",
  },
  {
    id: "budget",
    name: "budget",
    label: "Budget",
    placeholder: "$0-$3000",
  },
  {
    id: "people",
    name: "people",
    label: "People",
    placeholder: "5-10",
  },
] as const

export default function Banner() {
  return (
    <section className=" relative isolate flex min-h-[600px] flex-1 flex-col overflow-hidden bg-neutral-900 lg:min-h-[calc(100svh-6rem)]">
      <Image
        src="/assets/Banner.png"
        alt="Aerial view of a coastal village nestled between green hills and a turquoise bay"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/30" />

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <h1 className="font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] font-normal tracking-[-0.02em] text-white">
          <span className="block">Discover Your</span>
          <span className="block">Next Adventure</span>
        </h1>

        <p className="mt-6 max-w-[540px] text-sm leading-relaxed text-white/80 sm:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/destinations"
            className="group inline-flex h-12 items-center gap-3 rounded-sm bg-brand px-7 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brand-dark"
          >
            Explore Now
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/destinations"
            className="inline-flex h-12 items-center rounded-sm bg-white/85 px-7 text-xs font-semibold tracking-[0.12em] text-neutral-900 uppercase backdrop-blur-sm transition-colors hover:bg-white"
          >
            View Destination
          </Link>
        </div>
      </div>

      <form
        role="search"
        action="/destinations"
        method="get"
        className="relative z-10 grid grid-cols-2 border-t border-white/15 bg-[#0B1418]/75 backdrop-blur-md md:absolute md:inset-x-0 md:bottom-0 md:grid-cols-[1.1fr_1.1fr_1fr_0.85fr_auto] md:divide-x md:divide-white/10"
      >
        {searchFields.map((field) => (
          <div
            key={field.id}
            className="flex min-w-0 flex-col justify-center px-5 py-4 transition-colors focus-within:bg-white/5 lg:px-8"
          >
            <label
              htmlFor={field.id}
              className="text-[15px] font-medium text-white/95"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.name}
              type="text"
              autoComplete="off"
              placeholder={field.placeholder}
              className="mt-0.5 w-full bg-transparent text-[13px] text-white placeholder:text-white/60 focus:outline-none"
            />
          </div>
        ))}

        <button
          type="submit"
          className="col-span-2 flex h-14 items-center justify-center bg-brand px-10 text-sm font-semibold text-white transition-colors hover:bg-brand-dark md:col-span-1 md:h-auto lg:px-20"
        >
          Search
        </button>
      </form>
    </section>
  )
}
