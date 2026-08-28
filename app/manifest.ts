import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maple Diary Academy",
    short_name: "Maple Diary Academy",
    description:
      "Live online music classes — Keyboard, Piano, Guitar & Vocals. Expert teachers, all ages, first class FREE.",
    start_url: "/",
    display: "standalone",
    background_color: "#080A0F",
    theme_color: "#C8102E",
    orientation: "portrait",
    categories: ["education", "music"],
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
