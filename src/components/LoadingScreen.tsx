import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) return;

      // 🔒 Lock scroll
  document.body.style.overflow = "hidden";
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      lettersRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.8,
        ease: "power4.out",
      }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
        "-=0.4"
      )
      .fromTo(
        ".loader-subtext",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.6"
      );

    return () => {
      tl.kill();
      // 🔓 Restore scroll safely
    document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  const name = "Mouneesh";

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-black dark:bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-100%",
        transition: { duration: 1, ease: "easeInOut" },
      }}
    >
      <div className="text-center">
        {/* Animated Name */}
        <h1 className="flex justify-center text-5xl md:text-7xl font-bold mb-6">
          {name.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                if (el) lettersRef.current[i] = el;
              }}
              className="inline-block text-gradient"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Loading Line */}
        <div
          ref={lineRef}
          className="mx-auto w-48 h-[3px] origin-left bg-gradient-to-r from-primary via-accent to-primary rounded-full"
        />

        {/* Subtext */}
        <p className="loader-subtext mt-6 text-muted-foreground tracking-wide">
          Bringing ideas to life
        </p>
      </div>
    </motion.div>
  );
}
