"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter, type Locale, localeLabels } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function SiteNav() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "sobre-mi", label: t("about") },
    { id: "experiencia", label: t("experience") },
    { id: "proyectos", label: t("projects") },
    { id: "stack", label: t("stack") },
    { id: "educacion", label: t("education") },
    { id: "contacto", label: t("contact") },
  ];

  useEffect(() => {
    for (const loc of routing.locales) {
      if (loc !== locale) router.prefetch(pathname, { locale: loc });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  function prefetchOther(next: Locale) {
    if (next !== locale) router.prefetch(pathname, { locale: next });
  }

  function goToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 flex justify-start gap-3 px-4 pt-4 transition-all sm:justify-center sm:px-6",
          scrolled ? "pointer-events-none" : "pointer-events-auto"
        )}
        aria-label="Navegación principal"
      >
        {/* Desktop nav */}
        <div
          className={cn(
            "pointer-events-auto hidden items-center gap-1 rounded-full border bg-background/70 px-2 py-1 backdrop-blur-md transition-all sm:flex",
            scrolled ? "border-border/60 shadow-sm" : "border-transparent shadow-none"
          )}
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {s.label}
              </a>
            );
          })}
        </div>

        {/* Desktop locale switcher */}
        <div className="pointer-events-auto hidden items-center gap-0.5 rounded-full border border-transparent bg-background/70 p-1 backdrop-blur-md sm:flex">
          {routing.locales.map((loc) => {
            const isActive = loc === locale;
            return (
              <a
                key={loc}
                href={pathname}
                onClick={(e) => {
                  e.preventDefault();
                  router.replace(pathname, { locale: loc });
                }}
                onMouseEnter={() => prefetchOther(loc as Locale)}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Switch to ${loc}`}
                className={cn(
                  "rounded-full px-2.5 py-1 font-mono text-[10px] tracking-wider transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {localeLabels[loc]}
              </a>
            );
          })}
        </div>

        {/* Mobile sheet trigger */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="pointer-events-auto rounded-full bg-background/70 backdrop-blur-md sm:hidden"
                aria-label="Abrir menú"
              />
            }
          >
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent
            side="top"
            showCloseButton={false}
            className="mt-16 mx-4 w-auto rounded-2xl border border-border/60 p-0"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>{t("about")}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-2">
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <SheetClose
                    key={s.id}
                    nativeButton
                    render={
                      <button
                        onClick={() => goToSection(s.id)}
                        className={cn(
                          "rounded-xl px-4 py-3 text-left text-sm transition-colors",
                          isActive
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      />
                    }
                  >
                    {s.label}
                  </SheetClose>
                );
              })}
              <div className="mt-1 flex items-center gap-1 border-t border-border/60 px-2 pt-3">
                {routing.locales.map((loc) => {
                  const isActive = loc === locale;
                  return (
                    <SheetClose
                      key={loc}
                      nativeButton={false}
                      render={
                        <a
                          href={pathname}
                          onClick={(e) => {
                            e.preventDefault();
                            router.replace(pathname, { locale: loc });
                          }}
                          onMouseEnter={() => prefetchOther(loc as Locale)}
                          aria-current={isActive ? "true" : undefined}
                          className={cn(
                            "rounded-full px-3 py-1.5 font-mono text-xs tracking-wider transition-colors",
                            isActive
                              ? "bg-foreground text-background"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        />
                      }
                    >
                      {localeLabels[loc]}
                    </SheetClose>
                  );
                })}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}
