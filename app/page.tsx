import { Hero } from "@/src/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Hero
          eyebrow="Content-driven UI Platform"
          title="Build better digital experiences"
          description="A content-driven platform built with reusable and accessible UI components."
          ctaText="Get Started"
          ctaHref="/platform"
        />
      </main>
    </div>
  );
}
