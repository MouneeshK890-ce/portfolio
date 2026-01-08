import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Code, Palette, Zap, Users } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check } from "lucide-react";


const strengths = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing readable, maintainable, and scalable frontend code.",
  },
  {
    icon: Palette,
    title: "UI Focus",
    description: "Building responsive and visually appealing user interfaces.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing animations, assets, and load performance.",
  },
  {
    icon: Users,
    title: "Team Mindset",
    description: "Collaborative, open to feedback, and eager to learn.",
  },
];

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  const [downloaded, setDownloaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);


  useEffect(() => {
  if (!downloaded) return;
  const timer = setTimeout(() => setDownloaded(false), 4000);
  return () => clearTimeout(timer);
}, [downloaded]);


  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        rotateX: (y / rect.height) * 15,
        rotateY: (x / rect.width) * -15,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const reset = () =>
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4 });

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section id="about" className="py-15 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className=" mt-4 text-muted-foreground max-w-2xl mx-auto">
          Building responsive and scalable web applications with modern frontend technologies
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-10">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex items-center justify-center"
>
  <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="
    relative
    w-[300px]
    sm:w-[350px]
    lg:w-[400px]

    aspect-[10/10]
    min-h-[380px]
    sm:min-h-[450px]
    lg:min-h-[470px]
    rounded-2xl
    border dark:border-white/15
    bg-white/5
    backdrop-blur-sm
    p-2
    overflow-hidden
  "
>
  <video
  ref={videoRef}
  src="/about-video/about.mp4"
  muted
  loop
  playsInline
  autoPlay
  preload="auto"
  onCanPlay={() => {
    videoRef.current?.play().catch(() => {});
  }}
  className="
    w-full
    h-full
    object-cover
    rounded-xl
    pointer-events-none
  "
  style={{ objectPosition: "center 45%" }}
/>

  {/* subtle glass overlay */}
  <div className="absolute inset-0 rounded-xl bg-black/20 pointer-events-none" />
</motion.div>

</motion.div>


          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Frontend Developer
            </h3>
            <p className="text-muted-foreground mb-5 leading-relaxed sm:ps-4 text-center sm:text-start">
             I’m a Frontend developer focused on building clean, responsive, and
scalable web applications using HTML, CSS, JavaScript, React,
and TypeScript.
            </p>
            <p className="text-muted-foreground mb-5 leading-relaxed sm:ps-4 text-center sm:text-start">
             Experienced with Redux for state management, REST API integration,
and responsive UI using Tailwind CSS and Bootstrap. I deploy
projects using Firebase Hosting and Netlify, following modern
frontend workflows with npm and Vite.
              My goal is to become a reliable front-end engineer who builds meaningful digital experiences.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed sm:ps-4 text-center sm:text-start">
          I focus on clean code, usability, and performance while building
maintainable interfaces. Continuously improving my skills by
working on real-world projects and modern frontend patterns.

            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
 <motion.a
  href="/resume/Mouneesh_Kandhasamy_Resume.pdf"
  download="Mouneesh_Kandhasamy_Frontend_Developer_Resume.pdf"
  onClick={() => setDownloaded(true)}
  whileHover={{ scale: downloaded ? 1 : 1.06 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 420, damping: 22 }}
  className={`
    group relative inline-flex items-center gap-3
    lg:ms-3
    px-8 py-3.5 rounded-2xl
    font-semibold
    overflow-hidden
    border
    transition-all duration-200 ease-out
    ${
      downloaded
        ? `
          text-emerald-50 border-emerald-400/40
          bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500
        `
        : `
          text-white border-white/20
          bg-gradient-to-r from-primary via-accent to-primary
          bg-[length:200%_200%]
          hover:bg-[position:100%_0%]
        `
    }
  `}
>
  {/* 🔥 FAST Glow */}
  <span
    className={`
      absolute inset-0
      opacity-0 group-hover:opacity-100
      transition-opacity duration-150
      blur-xl
      ${
        downloaded
          ? "bg-emerald-400/40"
          : "bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60"
      }
    `}
  />

  {/* ⚡ FAST Sweep */}
  {!downloaded && (
    <span
      className="
        absolute inset-0
        -translate-x-full group-hover:translate-x-full
        transition-transform duration-300 ease-out
        bg-gradient-to-r from-transparent via-white/30 to-transparent
      "
    />
  )}

  {/* 🔮 Content */}
  <span className="relative z-10 flex items-center gap-2">
    <AnimatePresence mode="wait">
      {!downloaded ? (
        <motion.span
          key="download"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download CV
        </motion.span>
      ) : (
        <motion.span
          key="done"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-2"
        >
          <Check className="w-4 h-4" />
          Downloaded
        </motion.span>
      )}
    </AnimatePresence>
  </span>
</motion.a>
</div>
          </motion.div>
        </div>


        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            My <span className="text-gradient">Strengths</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((item, i) => (
             <motion.div
             key={item.title}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             whileHover={{ y: -10 }}
             transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            viewport={{ once: true }}
            className="p-6 rounded-xl dark:bg-white/5 backdrop-blur border dark:border-white/10
             text-center will-change-transform"
             >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
