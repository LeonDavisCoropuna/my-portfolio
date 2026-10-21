"use client";

import { useTranslations } from "next-intl";
import { Server, Monitor, Database, MessageSquare, Brain, Cloud } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { SectionLabel } from "@/components/section-label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type SkillGroup = { category: string; items: string[] };

const categoryIcons: Record<string, typeof Server> = {
  Backend: Server,
  Frontend: Monitor,
  Datos: Database,
  "Mensajería & Cache": MessageSquare,
  "IA / ML": Brain,
  "Cloud & DevOps": Cloud,
};

const dataIcons: Record<string, typeof Server> = {
  Data: Database,
  "Messaging & Cache": MessageSquare,
  "AI / ML": Brain,
  "Cloud & DevOps": Cloud,
};

type CoreMeta = { slug: string; years: number; color: string };

const CORE: Record<string, CoreMeta> = {
  Java: { slug: "openjdk", years: 5, color: "#f89820" },
  "Spring Boot": { slug: "springboot", years: 3, color: "#6db33f" },
  "Apache Kafka": { slug: "apachekafka", years: 2, color: "#231f20" },
  TypeScript: { slug: "typescript", years: 3, color: "#3178c6" },
  React: { slug: "react", years: 3, color: "#61dafb" },
  "Next.js": { slug: "nextdotjs", years: 2, color: "#000000" },
  Docker: { slug: "docker", years: 3, color: "#2496ed" },
  "Google Cloud": { slug: "googlecloud", years: 2, color: "#4285f4" },
};

function CoreTech({ name, meta }: { name: string; meta: CoreMeta }) {
  return (
    <span className="group/core inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background px-2 py-1 transition-colors hover:border-foreground/30">
      {/* eslint-disable-next-line @next/next/no-img-element -- simple-icons CDN, no optimization needed */}
      <img
        src={`https://cdn.simpleicons.org/${meta.slug}`}
        alt=""
        width={14}
        height={14}
        loading="lazy"
        className="size-3.5 shrink-0"
        style={{ filter: meta.color === "#000000" ? "invert(0)" : undefined }}
      />
      <span className="font-mono text-xs">{name}</span>
      <span className="text-muted-foreground font-mono text-[10px] tabular-nums">
        {meta.years}y
      </span>
    </span>
  );
}

function NormalPill({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border/60 bg-background px-2 py-1 font-mono text-xs">
      {name}
    </span>
  );
}

export function Stack() {
  const t = useTranslations();
  const groups = t.raw("StackData") as SkillGroup[];

  return (
    <section id="stack" className="border-t px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <SectionLabel number={t("Stack.number")}>{t("Stack.label")}</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("Stack.title")}
          </h2>
        </SectionReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {groups.map((group, i) => {
            const Icon =
              categoryIcons[group.category] ??
              dataIcons[group.category] ??
              Server;
            return (
              <SectionReveal key={group.category} delay={i * 0.05}>
                <Card className="h-full">
                  <CardHeader className="flex-row items-center gap-3 space-y-0">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
                      <Icon className="size-4" />
                    </div>
                    <CardTitle>{group.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => {
                        const core = CORE[item];
                        return core ? (
                          <CoreTech key={item} name={item} meta={core} />
                        ) : (
                          <NormalPill key={item} name={item} />
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
