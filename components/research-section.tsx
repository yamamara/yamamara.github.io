'use client'

import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ResearchItem {
  title: string
  shortTitle: string
  status: string
  year: string
  description: string
  imageUrl: string
  tags: string[]
}

const research: ResearchItem[] = [
  {
    title: "ZeroDetect: Boundary-Aware Generative Modeling for Zero-Day Malware Detection",
    shortTitle: "ZeroDetect",
    status: "PAPER IN PROGRESS - First Author w/ Dr. Mark Stamp",
    year: "2025",
    description:
        "Training diffusion models to generate malicious opcode sequences for augmenting malware classifiers. XGBoost classifier achieves 90% accuracy and 96% recall, with 91% accuracy at high noise levels where baseline models collapse to 51%.",
    imageUrl: "/thumbnail.png",
    tags: ["Diffusion Models", "Cybersecurity", "XGBoost"],
  },
]

export function ResearchSection() {
  return (
      <section id="research" className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col gap-3">
            <p className="font-mono text-xs text-primary tracking-widest">
              <span className="text-muted-foreground/50">{"$ "}</span>find ./research -type f
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Research
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {research.map((item, i) => (
                <Link key={i} href="/research.pdf" target="_blank" rel="noopener noreferrer">
                  <div className="group relative overflow-hidden rounded-xl bg-card/50 transition-all hover:border-primary/30 hover:bg-card">
                    <div className="flex flex-col md:flex-row">


                      <div className="flex flex-col gap-4 p-6 lg:p-8">
                        <div className="flex flex-col gap-1">
                          <p className="font-mono text-xs text-primary/60 mb-2">
                            {"~/research/"}{item.shortTitle.toLowerCase().replace(/\s+/g, "-")}
                          </p>
                          <h3 className="font-semibold text-foreground leading-snug text-lg text-pretty group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="font-mono text-xs text-muted-foreground">
                            {item.status}
                            <span className="mx-2 text-border/80">{"/"}</span>
                            {item.year}
                          </p>
                        </div>

                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                              <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs font-mono bg-primary/5 text-primary/80 border border-primary/15"
                              >
                                {tag}
                              </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-64 lg:w-80">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>
  )
}