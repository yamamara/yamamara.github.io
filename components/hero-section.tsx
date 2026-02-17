"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm">
          <span className="text-primary">{">"}</span>
          <span>whoami</span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl text-balance leading-[0.9]">
          ARYAN
          <br />
          <span className="text-primary">SINGH</span>
          <span
              className={`inline-block bg-primary transition-opacity ${
                  showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{
                height: "0.73em", // Matches the line height of your text
                width: "0.25em", // Scales thickness with text size
                marginLeft: "0.1em",

              }}
          />
        </h1>

        <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="max-w-md text-base text-muted-foreground sm:text-lg leading-relaxed">
              Cybersecurity &amp; AI Innovator
            </p>
            <p className="font-mono text-xs text-muted-foreground/70">
              Poolesville High School{" "}
              <span className="text-primary/50">{"///"}</span> SMCS Magnet
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/yamamara"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://linkedin.com/in/aryan-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:aryan.m.singh4@gmail.com"
              className="rounded-lg p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-border/60 sm:mt-16 opacity-0" />

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <p className="font-mono text-xs text-primary tracking-widest">
              <span className="text-muted-foreground/50">{"$ "}</span>cat about.txt
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground lg:col-span-2">
            <p>
              A high school innovator working at the intersection of cybersecurity and AI. I build threat detection systems, train deep learning models, and do academic research.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <p className="font-mono text-xs text-primary tracking-widest">
              <span className="text-muted-foreground/50">{"$ "}</span>ls skills/
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:col-span-2">
            {[
              "Cybersecurity", "Machine Learning", "Penetration Testing", "Ethical Hacking", "Networking", "Linux"
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-card p-2 font-mono text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1">
            <p className="font-mono text-xs text-primary tracking-widest">
              <span className="text-muted-foreground/50">{"$ "}</span>echo "quote i live by"
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground lg:col-span-2">
            <div>
              <p>"Reasonable people adapt themselves to the world. Unreasonable people persist in trying to adapt the world to themselves. Therefore, all progress depends on unreasonable people."</p>
              <p>-George Bernard Shaw</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-muted-foreground/50 tracking-widest">
          scroll
        </span>
        <ChevronDown className="size-4 text-muted-foreground/40 animate-bounce" />
      </div>
    </section>
  )
}
