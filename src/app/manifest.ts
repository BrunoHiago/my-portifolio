import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bruno Hiago Xavier | Portfólio",
    short_name: "Bruno Xavier",
    description: "Portfólio de Bruno Hiago Xavier, desenvolvedor Full Stack & Mobile.",
    start_url: "/",
    display: "standalone",
    background_color: "#030014",
    theme_color: "#030014",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
