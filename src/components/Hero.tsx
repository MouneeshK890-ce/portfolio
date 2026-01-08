import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "./ParticlesBackground";

interface HeroProps {
  playedLoader: boolean;
}

export const Hero = ({playedLoader}: HeroProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section id="hero" className="mt-0 relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      {/* Gradient Blur Backgrounds */}

      <div className="container mx-auto px-2 sm:px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {/* Available Badge */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-6"
>
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card pulse-glow">
    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
    <span className="text-sm font-medium text-foreground/80">
      Open to Work
    </span>
    <Sparkles className="w-4 h-4 text-primary" />
  </span>
</motion.div>
              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm{" "}
                <span className="text-gradient">Mouneesh</span>
              </motion.h1>
              
              <motion.h2
                className="text-3xl md:text-4xl text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Front End Developer
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I create modern web applications using React and TypeScript,
                with an emphasis on performance, maintainable code, and
                great user experience.

              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gradient-hero glow-primary hover:scale-105 transition-smooth"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="hover:scale-105 transition-smooth"
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
           <a
                  href="https://github.com/MouneeshK890-ce"  
                  target="_blank"
                  rel="noopener noreferrer"
               >
                   <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-smooth">
                   <Github className="h-5 w-5" />
                   </Button>
            </a>
               <a
                  href="https://www.linkedin.com/in/mouneesh-k-412484355/" 
                  target="_blank"
                  rel="noopener noreferrer"
              >
                   <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-smooth">
                   <Linkedin className="h-5 w-5" />
                   </Button>
                </a>
               <a
                   href="mailto:mouneesh.kandhasamy@gmail.com" 
                >
                  <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-smooth">
                  <Mail className="h-5 w-5" />
                  </Button>
                </a>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center justify-center relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full blur-3xl animate-glow-pulse"></div>
              
              {/* Hero Image */}
              <motion.img
                src="/images/heroImage.webp"
                alt="Portfolio Hero"
                className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-cover object-[center_36%] rounded-full shadow-elegant"
                loading="eager"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
  className="absolute bottom-4 left-[45%] transform -translate-x-1/2 z-50 hidden lg:block"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
>
  <Button
    variant="ghost"
    size="icon"
    onClick={() => scrollToSection("#about")}
    className="rounded-full animate-bounce"
  >
    <ArrowDown className="h-6 w-6" />
  </Button>
</motion.div>
      </div>
    </motion.section>
  );
};
