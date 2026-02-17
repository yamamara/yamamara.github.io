import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  period: string
  title: string
  organization: string
  description: string[]
  tags: string[]
}

const experiences: ExperienceItem[] = [
  {
    period: "Jul 2025 - Present",
    title: "Cybersecurity Researcher",
    organization: "w/ Dr. Mark Stamp",
    description: [
      "Leading novel research on AI analysis of binaries to improve malware detection",
      "Trained a diffusion model to generate malicious opcode sequences for data augmentation",
      "Built XGBoost classifier achieving 90% accuracy, 96% recall; 91% accuracy at high noise levels where baselines dropped to 51%",
      "Writing research paper as first author for publication",
    ],
    tags: ["Security Research", "Malware Detection", "Diffusion Models", "Deep Learning", "XGBoost"],
  },
  {
    period: "Sep 2025 - Present",
    title: "Lead Developer",
    organization: "Vulcan @ Cura Personalis",
    description: [
      "Building communication software for nonverbal workers through the Cura Personalis Project",
      "Leading full-stack application development with React frontend and Node.js + Python backend",
    ],
    tags: ["React", "Node.js", "Python", "Full-Stack"],
  },
  {
    period: "Sep 2024 - Apr 2025",
    title: "Co-founder",
    organization: "SoteriaSecurity",
    description: [
      "Created a startup providing advanced, AI-powered threat detection systems",
      "Trained a CNN based on YOLOv8 to drive the detection software",
      "Placed top 10 internationally in the Conrad Challenge Cyber-Technology & Security division",
    ],
    tags: ["YOLOv8", "CNN", "Machine Learning", "Startup"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-3">
          <p className="font-mono text-xs text-primary tracking-widest">
            <span className="text-muted-foreground/50">{"$ "}</span>cat experience.log
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative grid gap-4 rounded-xl p-5 transition-all hover:bg-card/80 lg:grid-cols-[200px_1fr] lg:gap-10"
            >
              <div className="hidden lg:block absolute left-[212px] top-0 bottom-0 w-px bg-border/40 group-first:top-8 group-last:bottom-[calc(100%-2rem)]" />
              <div className="hidden lg:block absolute left-[209px] top-8 size-[7px] rounded-full border-2 border-primary bg-background z-10" />

              <p className="pt-0.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                {exp.period}
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="font-semibold text-foreground leading-snug text-lg">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {exp.organization}
                  </p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {exp.description.map((line, j) => (
                    <li key={j} className="text-sm leading-relaxed text-muted-foreground flex gap-2">
                      <span className="text-primary/50 mt-1 shrink-0 font-mono text-xs">{">"}</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-1">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-mono bg-primary/5 text-primary/80  hover:bg-primary/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
