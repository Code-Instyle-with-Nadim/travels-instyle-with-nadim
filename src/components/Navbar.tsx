import Image from "next/image"
import Link from "next/link"
import { UserRound } from "lucide-react"

import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/my-bookings" },
  { label: "Admin", href: "/admin" },
] as const

function NavLinks({ activeHref }: { activeHref: string }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-1">
      {navLinks.map(({ label, href }) => {
        const isActive = href === activeHref

        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex h-9 items-center rounded-md px-2.5 text-[13px] font-medium transition-colors sm:px-3.5 sm:text-sm",
                isActive
                  ? "bg-brand/10 text-brand-dark"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              )}
            >
              {label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function Navbar({ activeHref = "/" }: { activeHref?: string }) {
  return (
    <header className=" relative z-100">
      <nav aria-label="Main" className="px-4 sm:px-6 lg:px-10 ">
        <div className="flex h-16 items-center justify-between gap-4 lg:grid lg:h-24 lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden lg:block">
            <NavLinks activeHref={activeHref} />
          </div>

          <Link
            href="/"
            aria-label="Wanderlast home"
            className="shrink-0 lg:col-start-2 lg:justify-self-center"
          >
            <Image
              src="/assets/Wanderlast.png"
              alt="Wanderlast"
              width={162}
              height={24}
              priority
              className="h-6 w-auto lg:h-7"
            />
          </Link>

          <div className="flex items-center justify-end gap-3 sm:gap-6 lg:col-start-3">
            <Link
              href="/profile"
              className="flex items-center gap-1.5 text-[13px] font-medium text-neutral-600 transition-colors hover:text-brand-dark"
            >
              <UserRound aria-hidden="true" className="size-4" strokeWidth={1.75} />
              <span className="sr-only sm:not-sr-only">Profile</span>
            </Link>
            <Link
              href="/login"
              className="text-[13px] font-medium text-neutral-600 transition-colors hover:text-brand-dark"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-[13px] font-medium text-neutral-900 transition-colors hover:text-brand-dark"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-100 py-2 lg:hidden">
          <NavLinks activeHref={activeHref} />
        </div>
      </nav>
    </header>
  )
}
