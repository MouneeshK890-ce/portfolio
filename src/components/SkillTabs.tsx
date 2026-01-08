import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    id: "core",
    name: "Core Web",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: Monitor,
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    icon: Wrench,
    skills: ["npm", "Vite", "VS Code", "Postman (API Testing)", "Git & GitHub"],
  },
  {
    id: "services",
    name: "Services & APIs",
    icon: Server,
    skills: ["Firebase", "REST API Integration", "Netlify"],
  },
];

export default function SkillTabs() {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = skillCategories.find(
    (c) => c.id === activeTab
  );

  return (
    <div className="relative w-full">

      {/* ───────────────── Tabs Grid ───────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        {skillCategories.map((category) => {
          const isActive = activeTab === category.id;
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`
                group relative rounded-2xl p-6 text-center
                dark:bg-white/5 backdrop-blur border dark:border-white/10
                transition-all duration-300
                ${
                  isActive
                    ? "border-primary/60 shadow-[0_0_45px_rgba(99,102,241,0.35)]"
                    : "border-white/8 hover:border-primary/30"
                }
              `}
            >
              {/* Active glow (grid only) */}
              {isActive && (
                <div className="absolute inset-0 rounded-2xl bg-primary/15 blur-2xl -z-10" />
              )}

              {/* Icon (NO glow) */}
              <Icon
                className={`
                  h-8 w-8 mx-auto mb-3 transition-colors duration-300
                  ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  }
                `}
              />

              {/* Text */}
              <span
                className={`
                  font-medium tracking-wide transition-colors
                  ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                `}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* ───────────────── Skills Container ───────────────── */}
      <div className="relative rounded-2xl dark:bg-white/5 backdrop-blur border dark:border-white/10 p-10 overflow-hidden">

        {/* Inner glass glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory?.id}
           initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.96 }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="relative z-10"
          >
            {/* Title (centered) */}
            <h3 className="flex items-center justify-center gap-3 text-xl font-semibold mb-5 text-center">
              {activeCategory && (
                <activeCategory.icon className="h-6 w-6 text-primary" />
              )}
              {activeCategory?.name}
            </h3>

            <div className="h-[1px] mx-auto bg-foreground/20 mb-8" />

            {/* Skills (centered) */}
            <div className="flex flex-wrap justify-center gap-4">
              {activeCategory?.skills.map((skill) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="
                    px-5 py-2.5 rounded-md
                    bg-white/10 border dark:border-white/10
                    text-sm font-medium
                    text-foreground
                    hover:border-primary/40
                    hover:shadow-[0_0_22px_rgba(99,102,241,0.35)]
                    transition-all duration-300
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
