import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

interface IndexProps {
  playedLoader: boolean;
}

const Index = ({ playedLoader }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero playedLoader={playedLoader} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mouneesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
