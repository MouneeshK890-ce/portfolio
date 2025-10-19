import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate front-end developer eager to create interactive, user-friendly web experiences. I love learning new technologies and turning ideas into engaging digital products.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 gradient-card border-primary/20 backdrop-blur-sm hover:scale-105 transition-smooth">
              <h3 className="text-2xl font-bold mb-4 text-gradient-accent">
                Passionate Developer & Lifelong Learner
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I enjoy building clean, responsive, and user-centered web applications. I’m always exploring new tools, libraries, and techniques to improve my skills and deliver better solutions.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While I’m a fresher, my enthusiasm for development drives me to take on challenges, learn quickly, and contribute meaningfully to projects.
              </p>
              <a
                href=""
                download
                className="inline-block"
              >
                <Button className="gradient-hero glow-primary hover:scale-105 transition-smooth">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>

            </Card>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              { label: "Experience", value: "Aspiring Developer" },
              { label: "Projects Completed", value: "2" },
              { label: "Tech Stack", value: "5+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 gradient-card border-primary/20 backdrop-blur-sm hover:scale-105 transition-smooth">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="text-2xl font-bold text-gradient">{stat.value}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
