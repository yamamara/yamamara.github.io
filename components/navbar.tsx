"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "research", href: "#research" },
  { label: "projects", href: "#projects" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#about")
          }}
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-primary">{"/home/"}</span>aryan
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className={cn(
                "group relative px-3 py-2 font-mono text-xs transition-colors",
                activeSection === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-primary/60 mr-1">//</span>
              {link.label}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-3 right-3 h-px bg-primary" />
              )}
            </a>
          ))}
          <div className="ml-4 border-l border-border/50 pl-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={cn(
                  "rounded-lg px-3 py-2.5 font-mono text-sm transition-colors",
                  activeSection === link.href
                    ? "text-foreground bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-primary/60 mr-2">0{i + 1}.</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
