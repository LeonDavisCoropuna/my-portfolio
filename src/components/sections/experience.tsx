"use client";

import { Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/section-reveal";
import { SectionLabel } from "@/components/section-label";

type Engagement = {
  client: string;
  period: string;
  role: string;
  tech: string[];
  bullets: string[];
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights?: string[];
  engagements?: Engagement[];
};

export function Experience() {
  const t = useTranslations();
  const data = t.raw("ExperienceData") as ExperienceItem[];

  return (
    <section id="experiencia" className="border-t px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <SectionLabel number={t("Experience.number")}>{t("Experience.label")}</SectionLabel>
          <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            <Briefcase className="text-muted-foreground size-7" />
            {t("Experience.title")}
          </h2>
        </SectionReveal>
        <ol className="relative mt-12 space-y-12 border-l border-border/60 pl-8 sm:ml-2">
          {data.map((job, idx) => (
            <SectionReveal key={`${job.company}-${idx}`}>
              <li className="relative">
                <span className="bg-background absolute -left-[33.5px] top-1.5 size-3 rounded-full border-2 border-foreground/40 ring-4 ring-background" />
                <div className="text-sm">
                  <p className="text-foreground font-medium">{job.period}</p>
                  <p className="text-muted-foreground">{job.location}</p>
                </div>
                <h3 className="mt-2 text-lg font-medium">
                  {job.role} ·{" "}
                  <span className="text-muted-foreground font-normal">
                    {job.company}
                  </span>
                </h3>

                {job.engagements ? (
                  <div className="mt-5 space-y-5 border-l border-border/40 pl-6">
                    {job.engagements.map((eng, ei) => (
                      <div key={ei}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <h4 className="text-base font-medium tracking-tight">
                            {eng.client}
                          </h4>
                          <span className="text-muted-foreground text-xs tabular-nums">
                            {eng.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {eng.role}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {eng.tech.map((tech, ti) => (
                            <span
                              key={ti}
                              className="border-border/60 bg-muted/40 rounded-full border px-2 py-0.5 text-[11px] font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ul className="text-muted-foreground mt-3 space-y-2 text-sm leading-6">
                          {eng.bullets.map((b, bi) => (
                            <li key={bi} className="relative pl-5">
                              <span className="bg-muted-foreground absolute top-2.5 left-0 size-1.5 rounded-full" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="text-muted-foreground mt-4 space-y-2 text-sm leading-6">
                    {job.highlights?.map((h, i) => (
                      <li key={i} className="relative pl-5">
                        <span className="bg-muted-foreground absolute top-2.5 left-0 size-1.5 rounded-full" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </SectionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
