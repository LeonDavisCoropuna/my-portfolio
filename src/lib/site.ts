export const siteConfig = {
  name: "León Felipe Davis Coropuna",
  shortName: "León Davis",
  title: "León Davis — Backend & IA aplicada",
  tagline:
    "Desarrollador backend especializado en microservicios, arquitecturas distribuidas e inteligencia artificial aplicada.",
  description:
    "Portafolio de León Davis — Backend con Java/Spring Boot, microservicios, cloud e IA aplicada (LLMs, visión por computadora).",
  url: "https://leondavis.dev",
  ogImage: "/og",
  locale: "es",
  location: "Arequipa, Perú",
  phone: "+51 930 747 730",
  author: {
    name: "León Felipe Davis Coropuna",
    email: "leonfelipe201611@gmail.com",
  },
  social: {
    github: "https://github.com/LeonDavisCoropuna",
    linkedin: "https://www.linkedin.com/in/leondavis007",
    youtube: "https://www.youtube.com/channel/UCspceWnNM4JUOZZCWbOkALg",
  },
  keywords: [
    "backend",
    "java",
    "spring boot",
    "microservicios",
    "inteligencia artificial",
    "llms",
    "cloud",
    "aws",
    "gcp",
    "arequipa",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
