import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Journey() {
  return (
    <section className="relative isolate flex min-h-[320px] items-center justify-center overflow-hidden bg-neutral-900 px-4 py-16 text-center sm:min-h-[360px] sm:px-6 lg:min-h-[400px] lg:py-20">
      <Image
        src="/assets/CTA.png"
        alt="Aerial view of an airplane flying over a tropical island"
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

      <div className="max-w-2xl">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-normal tracking-[-0.01em] text-white">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-[15px]">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Link
          href="/destinations"
          className="group mt-7 inline-flex h-11 items-center gap-4 bg-white px-7 text-[11px] font-semibold tracking-[0.14em] text-neutral-900 uppercase transition-colors hover:bg-neutral-100"
        >
          Book Your Trip Today
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  )
}
