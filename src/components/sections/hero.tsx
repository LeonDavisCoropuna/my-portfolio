"use client";

import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/social-icons";
import { siteConfig } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-24 text-center sm:pt-32 sm:pb-32">
      <div className="bg-grid bg-grid-mask absolute inset-0 -z-10" aria-hidden />
      <div className="bg-glow absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <Badge variant="secondary" className="rounded-full px-3 py-1">
          <Sparkles className="text-foreground/70 mr-1 size-3" />
          {t("available")}
        </Badge>
        <h1 className="text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          <span className="font-serif">{t("headline1")}</span>{" "}
          <span className="font-semibold">{t("headline2")}</span>{" "}
          <span className="font-serif">{t("headline3")}</span>
          <br />
          <span className="text-muted-foreground font-serif">{t("headline4")}</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg">
          {t("tagline")}
          <br />
          {t("tagline2")}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a href="#proyectos" className={buttonVariants({ size: "lg" })}>
            {t("ctaProjects")}
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#contacto"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            {t("ctaContact")}
          </a>
        </div>
        <div className="mt-4 flex items-center gap-1">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={buttonVariants({ size: "icon", variant: "ghost" })}
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={buttonVariants({ size: "icon", variant: "ghost" })}
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={buttonVariants({ size: "icon", variant: "ghost" })}
          >
            <YoutubeIcon className="size-4" />
          </a>
          <a
            href={`mailto:${siteConfig.author.email}`}
            aria-label="Email"
            className={buttonVariants({ size: "icon", variant: "ghost" })}
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
