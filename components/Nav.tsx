"use client";
import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { label: "About", href: "/about-reem-borrows" },
  { label: "Book", href: "/unfollow-the-leader" },
  { label: "Framework", href: "/health-head-heart-framework" },
  { label: "Speaking", href: "/speaking" },
  { label: "Work With Reem", href: "/work-with-reem" },
  { label: "Insights", href: "/insights" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-creamlight/95 backdrop-blur border-b border-ocean/10">
      <nav className="section-pad flex items-center justify-between h-20">
        <Link href="/" className="font-display text-xl tracking-wide text-oceandark">
          Reem <span className="italic text-rosedeep">Borrows</span>
        </Link>

        <ul className="hidden xl:flex items-center gap-7 text-sm tracking-wide text-oceandark">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-rosedeep transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/unfollow-the-leader" className="hidden md:inline-block btn-outline">
          Order the Book
        </Link>

        <button
          aria-label="Toggle menu"
          className="xl:hidden text-oceandark"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="xl:hidden bg-creamlight border-t border-ocean/10 px-6 py-6 space-y-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-oceandark text-sm tracking-wide"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/unfollow-the-leader" className="btn-outline inline-block">
              Order the Book
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
