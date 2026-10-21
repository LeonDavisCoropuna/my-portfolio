"use client";

import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/social-icons";
import { siteConfig } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-auto border-t px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-muted-foreground text-sm">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
        <nav className="flex items-center gap-1">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <GithubIcon className="size-4" />
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <YoutubeIcon className="size-4" />
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href={`mailto:${siteConfig.author.email}`}
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <Mail className="size-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
