import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import SkillsCarousel from "./SkillsCarousel"
import SkillTabs from "./SkillTabs";

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
          className="text-center mb-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
           Technologies and tools I use to build modern frontend applications.
          </p>
        <section id="skills" className=" py-10 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <SkillTabs />
          </div>
        </section>
        </motion.div>


        <SkillsCarousel/>



      </div>
    </section>
  );
};
