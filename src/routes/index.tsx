import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/portfolio/Cursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Experience } from "@/components/portfolio/Experience";
import { Expertise } from "@/components/portfolio/Expertise";
import { Process } from "@/components/portfolio/Process";
import { Languages } from "@/components/portfolio/Languages";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gautam — Data Scientist, Linguist & AI Annotation Expert" },
      { name: "description", content: "Portfolio of Gautam — data scientist, ML engineer and linguistic expert building human-grade datasets and evaluation systems for frontier AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground grain min-h-screen">
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <Experience />
      <Expertise />
      <Process />
      <Languages />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
}
