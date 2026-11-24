import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Vulcan Privacy Policy",
  description: "How the Vulcan communication board app handles your information.",
}

const contactEmail = "bowtamer111@gmail.com"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  )
}

export default function VulcanPrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Link href="/" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to home
        </Link>

        <header className="mt-8 mb-12 space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Vulcan Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Effective November 24, 2026</p>
          <p className="text-muted-foreground leading-relaxed">
            Vulcan is a communication board app for Android, developed by Aryan Singh. This policy explains what
            information Vulcan handles and where it goes. In short: Vulcan does not collect, transmit, sell, or share
            your personal information. Everything you add stays on your device.
          </p>
        </header>

        <div className="space-y-10">
          <Section title="Information stored on your device">
            <p>
              Vulcan saves the words, categories, emoji, and tile layout you create, along with any photos you choose
              to add to tiles. This information is stored only in Vulcan&apos;s private storage on your device. It is
              never uploaded to us or to anyone else.
            </p>
            <p>
              Drawings made on the drawing board are not saved. Vulcan opts out of Android&apos;s automatic app backup,
              so your tiles and photos are not copied to cloud backups.
            </p>
          </Section>

          <Section title="Photos">
            <p>
              Vulcan only accesses a photo when you pick one using Android&apos;s file or photo picker. The selected
              image is copied into Vulcan&apos;s private storage so it can appear on a tile. Vulcan does not browse
              your photo library and does not use your camera, microphone, location, or contacts.
            </p>
          </Section>

          <Section title="Speech">
            <p>
              When you tap Speak or a word in your sentence, Vulcan passes the text to the text-to-speech engine selected in your
              device settings, such as Speech Services by Google. That engine is a separate app provided by another
              company, and its handling of the text is governed by its provider&apos;s privacy policy. Some voices may
              use an internet connection. Vulcan itself does not send the text anywhere.
            </p>
          </Section>

          <Section title="No accounts, ads, analytics, or tracking">
            <p>
              Vulcan has no sign-in, no advertising, no analytics, and no tracking. It does not use advertising
              identifiers and does not share data with third parties.
            </p>
          </Section>

          <Section title="Children">
            <p>
              Vulcan does not collect personal information from anyone, including children under 13. Information
              entered into the app stays on the device where it was entered.
            </p>
          </Section>

          <Section title="Deleting your data">
            <p>
              You can remove everything Vulcan has stored by opening Android Settings, then Apps, then Vulcan, then
              Storage, and choosing Clear storage. Uninstalling Vulcan also deletes all of its data. Because we never
              receive your data, there is nothing for us to delete on our side.
            </p>
          </Section>

          <Section title="Security">
            <p>
              Vulcan&apos;s data is kept in app-private storage, which Android&apos;s app sandbox protects from other
              apps. Anyone with access to your unlocked device can open Vulcan and see your tiles, so use a screen
              lock if that matters to you.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              If Vulcan&apos;s handling of information changes, this page will be updated and the effective date
              above will change.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy or Vulcan can be sent to{" "}
              <a href={`mailto:${contactEmail}`} className="text-foreground underline underline-offset-4">
                {contactEmail}
              </a>
              .
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  )
}
