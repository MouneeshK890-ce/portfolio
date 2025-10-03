import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "./ParticlesBackground";
import { Scene3D } from "./Scene3D";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      {/* Gradient Blur Backgrounds */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }}></div>

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
                Focused on crafting modern, user-friendly websites. Passionate about turning ideas into interactive designs while constantly learning new technologies
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
                src="/images/hero.png"
                alt="Portfolio Hero"
                className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-cover rounded-full shadow-elegant"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
  className="absolute bottom-4 left-[45%] transform -translate-x-1/2 z-50 lg:block"
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
    </section>
  );
};
