import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Todo App",
    description: "A task management application that helps users organize, track, and complete daily tasks efficiently.",
    image:"/images/TODO.png" ,
    tags: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/MouneeshK890-ce/todo-app",
    live: "https://mouneesh-todo-app.web.app",
  },
  {
    title: "Climate Tracker",
    description: "A responsive weather application that fetches and displays real-time weather data for any city using a public API.",
    image:"/images/weather.png",
    tags: ["React", "REST API", "CSS"],
    github : "https://github.com/MouneeshK890-ce/weather-app",
    live: "https://mouneesh-climatrack.web.app"
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
           Some of the frontend projects I’ve built to apply my skills in real-world scenarios.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden gradient-card border-primary/20 backdrop-blur-sm group hover:scale-105 transition-smooth">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-64 object-cover md:object-[center_25%] object-[center_50%] group-hover:scale-110 transition-smooth"
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
             <div className="flex gap-2">
                 {project.github && (
                   <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="secondary" className="glow-accent">
          <Github className="h-4 w-4 mr-2" />
          Code
        </Button>
      </a>
    )}
    {project.live && (
      <a href={project.live} target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="gradient-hero">
          <ExternalLink className="h-4 w-4 mr-2" />
          Live Demo
        </Button>
      </a>
    )}
  </div>
</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
