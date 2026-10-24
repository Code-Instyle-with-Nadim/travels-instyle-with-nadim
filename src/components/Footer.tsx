import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "My Profile", href: "/profile" },
] as const

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
] as const

const socialLinks = [
  { label: "Follow Wanderlast on X", href: "https://x.com", icon: "x" },
  {
    label: "Follow Wanderlast on LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    label: "Follow Wanderlast on Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
] as const

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <Link href="/" aria-label="Wanderlast home" className="inline-flex">
          <Image
            src="/assets/Wanderlast-1.png"
            alt="Wanderlast"
            width={300}
            height={44}
            className="h-auto w-[240px] sm:w-[300px]"
          />
        </Link>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-[11px] font-semibold tracking-[0.16em] text-neutral-500 uppercase">
              Newsletter
            </h2>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-neutral-500">
              Subscribe for exclusive travel deals and inspiration.
            </p>

            <form action="#" className="relative mt-4 max-w-[320px]">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter email"
                className="h-10 w-full border border-transparent bg-white/10 px-4 pr-12 text-sm text-white placeholder:text-neutral-500 focus:border-brand focus:bg-white/15 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to the newsletter"
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-neutral-400 transition-colors hover:text-white"
              >
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </button>
            </form>
          </div>

          <nav aria-labelledby="footer-quicklinks-heading">
            <h2
              id="footer-quicklinks-heading"
              className="text-[11px] font-semibold tracking-[0.16em] text-neutral-500 uppercase"
            >
              Quicklinks
            </h2>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-support-heading">
            <h2
              id="footer-support-heading"
              className="text-[11px] font-semibold tracking-[0.16em] text-neutral-500 uppercase"
            >
              Support
            </h2>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.16em] text-neutral-500 uppercase">
              Contact Us
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+17869011622"
                  className="text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wandarland.com"
                  className="text-sm text-neutral-300 transition-colors hover:text-white"
                >
                  info@wandarland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">
            © 2026 Wanderlast. All rights reserved.
          </p>

          <ul className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  {social.icon === "x" ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                    </svg>
                  ) : social.icon === "linkedin" ? (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452z" />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
