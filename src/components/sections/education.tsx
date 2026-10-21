"use client";

import { GraduationCap, Award, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/section-reveal";
import { SectionLabel } from "@/components/section-label";

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  honors?: string[];
};

type CertItem = { name: string; issuer: string; url: string };

export function Education() {
  const t = useTranslations();
  const edu = t.raw("EducationData") as EducationItem[];
  const certs = t.raw("CertificationsData") as CertItem[];

  return (
    <section id="educacion" className="border-t px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <SectionLabel number={t("Education.number")}>{t("Education.label")}</SectionLabel>
          <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            <GraduationCap className="text-muted-foreground size-8" />
            {t("Education.title")}
          </h2>
        </SectionReveal>
        <div className="mt-10 space-y-10">
          {edu.map((ed, i) => (
            <SectionReveal key={`${ed.institution}-${i}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-medium">{ed.institution}</h3>
                <p className="text-muted-foreground text-sm">{ed.period}</p>
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                {ed.degree} · {ed.location}
              </p>
              {ed.honors && ed.honors.length > 0 && (
                <ul className="text-muted-foreground mt-3 space-y-1.5 text-sm leading-6">
                  {ed.honors.map((h, hi) => (
                    <li key={hi} className="relative pl-5">
                      <span className="bg-muted-foreground absolute top-2.5 left-0 size-1.5 rounded-full" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </SectionReveal>
          ))}

          <SectionReveal>
            <h3 className="flex items-center gap-2 text-lg font-medium">
              <Award className="text-muted-foreground size-5" />
              {t("Education.certifications")}
            </h3>
            <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-6">
              {certs.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    {c.name}
                    <span className="text-foreground/60">— {c.issuer}</span>
                    <ArrowUpRight className="size-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
