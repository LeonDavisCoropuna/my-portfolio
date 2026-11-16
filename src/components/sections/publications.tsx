"use client";

import { BookOpen, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionReveal } from "@/components/section-reveal";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

type PublicationData = {
  title: string;
  venue: string;
  year: string;
  type: string;
  role: string;
  summary: string;
  highlights: string[];
  keywords: string[];
  doi: string;
  links: { paper?: string; pdf?: string; doi?: string };
};

const SLUGS = ["xitformer", "crimqa"] as const;

export function Publications() {
  const t = useTranslations();
  const pubs = SLUGS.map((slug) => t.raw(`PublicationsData.${slug}`) as PublicationData);
  const labels = {
    paper: t("Publications.links.paper"),
    doi: t("Publications.links.doi"),
    pdf: t("Publications.links.pdf"),
  };

  return (
    <section id="publicaciones" className="border-t px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <SectionLabel number={t("Publications.number")}>{t("Publications.label")}</SectionLabel>
          <h2 className="flex items-center gap-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            <BookOpen className="text-muted-foreground size-7" />
            {t("Publications.title")}
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            {t("Publications.subtitle")}
          </p>
        </SectionReveal>
        <div className="mt-10 grid gap-5">
          {pubs.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 0.05}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>{p.title}</CardTitle>
                      <CardDescription>
                        {p.venue} · {p.year} · {p.type}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="shrink-0 font-normal">
                      {p.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-6">{p.summary}</p>
                  <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm leading-6">
                    {p.highlights.map((h, hi) => (
                      <li key={hi} className="relative pl-5">
                        <span className="bg-muted-foreground absolute top-2.5 left-0 size-1.5 rounded-full" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.keywords.map((kw) => (
                      <Badge key={kw} variant="outline" className="font-normal">
                        {kw}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {p.links.paper && (
                      <a
                        href={p.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} paper`}
                        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
                      >
                        {labels.paper}
                        <ArrowUpRight className="size-3" />
                      </a>
                    )}
                    {p.links.doi && (
                      <a
                        href={p.links.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} DOI`}
                        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
                      >
                        {labels.doi}
                        <ArrowUpRight className="size-3" />
                      </a>
                    )}
                    {p.links.pdf && (
                      <a
                        href={p.links.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} PDF`}
                        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
                      >
                        {labels.pdf}
                        <ArrowUpRight className="size-3" />
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
