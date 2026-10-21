"use client";

import { ArrowUpRight, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, YoutubeIcon } from "@/components/social-icons";
import { SectionReveal } from "@/components/section-reveal";
import { SectionLabel } from "@/components/section-label";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

type ProjectData = {
  title: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: { github?: string; paper?: string; youtube?: string };
  featured?: boolean;
};

const SLUGS = ["crimqa", "face-detection-fog-cloud", "clone-classroom", "chat-real-time", "enrollment-management"] as const;

export function Projects() {
  const t = useTranslations();
  const projects = SLUGS.map((slug) => t.raw(`ProjectsData.${slug}`) as ProjectData);
  const featured = t("Projects.featured");
  const labels = {
    repo: t("Projects.links.repo"),
    paper: t("Projects.links.paper"),
    demo: t("Projects.links.demo"),
  };

  return (
    <section id="proyectos" className="border-t px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <SectionLabel number={t("Projects.number")}>{t("Projects.label")}</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("Projects.title")}
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            {t("Projects.subtitle")}
          </p>
        </SectionReveal>
        <div className="mt-10 grid gap-5">
          {projects.map((p, i) => (
            <SectionReveal key={p.title} delay={i * 0.05}>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>
                        {p.title}
                        {p.featured && (
                          <span className="text-muted-foreground ml-2 text-xs font-normal">
                            · {featured}
                          </span>
                        )}
                      </CardTitle>
                      <CardDescription>
                        {p.role} · {p.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-6">
                    {p.summary}
                  </p>
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
                    {p.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
                      >
                        <GithubIcon className="size-3.5" />
                        {labels.repo}
                        <ArrowUpRight className="size-3" />
                      </a>
                    )}
                    {p.links.paper && (
                      <a
                        href={p.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} paper`}
                        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
                      >
                        <FileText className="size-3.5" />
                        {labels.paper}
                        <ArrowUpRight className="size-3" />
                      </a>
                    )}
                    {p.links.youtube && (
                      <a
                        href={p.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} on YouTube`}
                        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
                      >
                        <YoutubeIcon className="size-3.5" />
                        {labels.demo}
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
