import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteNav />
      <header className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
