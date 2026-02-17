import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 lg:px-8 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary/50">{"$ "}</span>
            echo &quot;Made with ❤️ by Aryan Singh&quot;
          </p>
          <div className="py-2">
            <p className="text-sm text-muted-foreground/60">
              "All izz well"
            </p>
            <p className="text-sm text-muted-foreground/60">
              -3 Idiots
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/yamamara"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2.5 text-muted-foreground/60 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/aryan-singh"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2.5 text-muted-foreground/60 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:aryan.m.singh4@gmail.com"
            className="rounded-lg p-2.5 text-muted-foreground/60 hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
