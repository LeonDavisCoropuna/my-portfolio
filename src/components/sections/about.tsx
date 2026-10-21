"use client";

import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/section-reveal";
import { SectionLabel } from "@/components/section-label";
import { siteConfig } from "@/lib/site";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="sobre-mi" className="border-t px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <SectionLabel number={t("number")}>{t("label")}</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-base leading-7">
            <p>
              {t.rich("p1", {
                bold: (chunks) => (
                  <span className="text-foreground font-medium">{chunks}</span>
                ),
              })}
            </p>
            <p>
              {t.rich("p2", {
                bold: (chunks) => (
                  <span className="text-foreground font-medium">{chunks}</span>
                ),
              })}
            </p>
            <p>
              {t.rich("p3", {
                bold: (chunks) => (
                  <span className="text-foreground font-medium">{chunks}</span>
                ),
              })}
            </p>
          </div>
          <p className="text-muted-foreground mt-6 text-sm">
            {siteConfig.location} · {siteConfig.phone}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
