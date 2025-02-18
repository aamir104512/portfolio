import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import About from "@/components/about";
import GitHubContributions from "@/components/github-contributions";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <GitHubContributions />
    </main>
  );
}
