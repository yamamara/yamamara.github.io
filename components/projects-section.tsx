import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string[]
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "AutoRed",
    description: [
      "AI-powered red teaming tool using an LLM capable of generating JavaScript exploits",
      "Implemented transfer learning on Kimi K2 Thinking model with ~40,000 JS malware samples",
      "Successfully exploited and defaced a dummy vulnerable website 7/10 times",
      "Exploits SQL vulnerabilities, XSS, and other common web attack vectors",
    ],
    tags: ["LLM", "Transfer Learning", "Red Teaming", "JavaScript"],
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-3">
          <p className="font-mono text-xs text-primary tracking-widest">
            <span className="text-muted-foreground/50">{"$ "}</span>ls -la projects/
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-primary/60 mb-2">
                    {"~/projects/"}{project.title.toLowerCase().replace(/\s+/g, "-")}
                  </p>
                  <h3 className="font-semibold text-foreground text-lg">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`GitHub: ${project.title}`}
                    >
                      <Github className="size-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`Demo: ${project.title}`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-1.5 mb-4 flex-1">
                {project.description.map((line, j) => (
                  <li key={j} className="text-sm leading-relaxed text-muted-foreground flex gap-2">
                    <span className="text-primary/40 mt-0.5 shrink-0 font-mono text-xs">{">"}</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-mono bg-primary/5 text-primary/80 hover:bg-primary/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
