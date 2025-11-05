'use client'
import { useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-sand/70 bg-cream/70 backdrop-blur">
      <nav className="container-tight flex items-center justify-between h-16">
        {/* Logo placeholder */}
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#C97A40"/><path d="M8 14c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <div className="h-serif text-xl font-semibold">Your Café</div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium hover:text-accent">
              {l.label}
            </button>
          ))}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-cocoa mb-1"/><div className="w-6 h-0.5 bg-cocoa"/>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sand bg-cream">
          <div className="container-tight py-3 flex flex-col">
            {links.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="py-2 text-left hover:text-accent">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
