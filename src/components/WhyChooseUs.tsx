import Image from "next/image"

const features = [
  {
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    icon: "/assets/ShieldCheck.png",
    iconAlt: "",
  },
  {
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
    icon: "/assets/MapTrifold.png",
    iconAlt: "",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
    icon: "/assets/Headset.png",
    iconAlt: "",
  },
] as const

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-us-heading"
      className="bg-[#eaf8fb] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2
            id="why-choose-us-heading"
            className="text-[clamp(1.875rem,3.5vw,2.5rem)] leading-tight font-normal tracking-[-0.01em] text-neutral-900"
          >
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 sm:text-sm">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="bg-white p-7 sm:p-8">
              <Image
                src={feature.icon}
                alt={feature.iconAlt}
                width={32}
                height={32}
                className="size-8"
              />
              <h3 className="mt-5 text-xl leading-snug font-normal text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
