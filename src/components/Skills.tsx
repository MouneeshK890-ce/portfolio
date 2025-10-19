import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";

const skills = [
  {
    icon: IoLogoReact,
    title: "React JS",
    description: "Create dynamic, interactive UIs with reusable components and hooks.",
    color: "text-primary",
  },
  {
    icon: BiLogoTailwindCss,
    title: "Tailwind CSS",
    description: "Build responsive, modern designs fast with utility-first CSS.",
    color: "text-primary",
  },
  {
    icon: BiLogoTypescript,
    title: "TypeScript",
    description: "Write safer, scalable code with strong typing and modern JS features.",
    color: "text-primary",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 gradient-card border-primary/20 backdrop-blur-sm hover:scale-105 transition-smooth group relative overflow-hidden">
                <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-10 transition-smooth"></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full gradient-card flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth ${skill.color}`}>
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 gradient-card border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "HTML5","CSS3","JavaScript (ES6+)","TypeScript",
                "React", "Redux Toolkit", "Tailwind CSS",
                "Vite", "Git & GitHub", "npm","Firebase (Hosting)",
                "Responsive Design", "REST APIs", "Basic Debugging (Chrome DevTools)"
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-smooth cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
