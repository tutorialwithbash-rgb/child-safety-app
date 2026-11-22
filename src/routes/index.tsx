import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, FileDown, Smartphone, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const downloadOptions: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "APK file", href: "", icon: FileDown },
  {
    label: "Browser version",
    href: "https://drive.google.com/file/d/18R4g_7Wj4aEC7wDZ1d-cz22jNefZfl7M/view?usp=sharing",
    icon: Smartphone,
  },
];
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safernet | Download the App" },
      {
        name: "description",
        content: "Download Safernet for everyday family safety.",
      },
      { property: "og:title", content: "Safernet | Download the App" },
      {
        property: "og:description",
        content: "Download Safernet for everyday family safety.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-4 px-6 lg:px-10">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Safernet home">
          <img src="/logo.png" alt="SN logo" className="size-14 shrink-0 rounded-sm object-cover" />
          <span className="truncate font-display text-lg font-bold">Safernet</span>
        </a>
        <Button asChild variant="outline" size="sm" className="shrink-0 border-primary/25">
          <a href="#download">Download</a>
        </Button>
      </header>

      <section
        id="home"
        aria-labelledby="page-title"
        className="overflow-hidden bg-hero text-hero-foreground"
      >
        <div className="mx-auto grid min-h-[min(72vh,760px)] max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:py-16">
          <div className="max-w-xl">
            <p className="text-sm font-bold uppercase text-signal">A little more peace of mind</p>
            <h1
              id="page-title"
              className="mt-5 max-w-xl font-display text-5xl leading-[1.04] font-extrabold sm:text-6xl lg:text-7xl"
            >
              Safernet
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-hero-muted">
              Download our child safety app and keep peace of mind close, wherever the day takes
              you.
            </p>

            <div id="download" className="mt-9 flex flex-wrap gap-3">
              {downloadOptions.map(({ label, href, icon: Icon }, index) => {
                const buttonContent = (
                  <>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                    {href ? (
                      <ArrowUpRight aria-hidden="true" />
                    ) : (
                      <span className="text-xs font-medium">Link coming soon</span>
                    )}
                  </>
                );
                const buttonClassName =
                  index === 0
                    ? "h-12 rounded-md bg-signal px-5 text-signal-foreground shadow-none hover:bg-signal/90"
                    : "h-12 rounded-md border-hero-foreground/40 bg-transparent px-5 text-hero-foreground shadow-none hover:bg-hero-foreground/10 hover:text-hero-foreground";

                return href ? (
                  <Button
                    key={label}
                    asChild
                    variant={index === 0 ? "default" : "outline"}
                    size="lg"
                    className={buttonClassName}
                  >
                    <a href={href} target="_blank" rel="noreferrer">
                      {buttonContent}
                    </a>
                  </Button>
                ) : (
                  <Button
                    key={label}
                    type="button"
                    disabled
                    variant={index === 0 ? "default" : "outline"}
                    size="lg"
                    className={buttonClassName}
                    title="Google Drive link coming soon"
                  >
                    {buttonContent}
                  </Button>
                );
              })}
            </div>
            <p className="mt-5 text-sm text-hero-muted">
              The APK download link is coming soon. Use the browser version above in the meantime.
            </p>
          </div>

          <div className="hidden items-center justify-center md:flex md:justify-end">
            <img
              src="/splash-logo.png"
              alt="Safernet logo"
              className="aspect-square w-[min(78vw,460px)] object-contain"
            />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="size-10 rounded-sm object-cover" />
          <span className="font-display font-bold">Safernet</span>
        </div>
        <p className="text-sm text-muted-foreground">For the moments that matter most.</p>
      </footer>
    </main>
  );
}
