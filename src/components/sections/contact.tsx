"use client";

import { Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { GithubIcon, LinkedinIcon, YoutubeIcon } from "@/components/social-icons";
import { siteConfig } from "@/lib/site";
import { SectionReveal } from "@/components/section-reveal";
import { SectionLabel } from "@/components/section-label";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { icon: Mail, label: "Email", value: siteConfig.author.email, href: `mailto:${siteConfig.author.email}` },
  { icon: GithubIcon, label: "GitHub", value: "@LeonDavisCoropuna", href: siteConfig.social.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "/in/leondavis007", href: siteConfig.social.linkedin },
  { icon: YoutubeIcon, label: "YouTube", value: "@LeonDavis", href: siteConfig.social.youtube },
];

export function Contact() {
  const t = useTranslations();

  return (
    <section id="contacto" className="border-t px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <SectionLabel number={t("Contact.number")}>{t("Contact.label")}</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("Contact.title")}
          </h2>
          <p className="text-muted-foreground mt-3 text-base">
            {t("Contact.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.author.email}`}
              className={buttonVariants({ size: "lg" })}
            >
              <Mail className="size-4" />
              {t("Contact.sendEmail")}
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              {t("Contact.linkedin")}
            </a>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {links.map((l) => {
              const Icon = l.icon;
              const external = l.href.startsWith("http");
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="hover:bg-muted/50 flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors"
                  >
                    <Icon className="text-muted-foreground size-4" />
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-xs">{l.label}</p>
                      <p className="truncate text-sm font-medium">{l.value}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text-muted-foreground mt-6 flex items-center gap-1.5 text-sm">
            <MapPin className="size-3.5" />
            {siteConfig.location}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
