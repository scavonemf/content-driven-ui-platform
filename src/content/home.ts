import type { Page } from "./types";

export const homePage: Page = {
  sections: [
    {
        id: "hero-home",
        type: "hero",
        eyebrow: "Content-driven UI Platform",
        title: "Build better digital experiences",
        description:
            "A content-driven platform built with reusable and accessible UI components.",
        ctaText: "Explore platform",
        ctaHref: "/platform",
    },
    {
        id: "feature-home",
        type: "feature-list",
        title: "Why this platform?",
        items: [
            "Reusable UI components",
            "Accessible interfaces",
            "Performance focused",
            "Content-driven architecture",
        ],
    },
    ]
};  