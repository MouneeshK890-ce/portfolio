const skills = [
  { name: "HTML", icon: "/skills/html.svg" },
  { name: "CSS", icon: "/skills/css.svg" },
  { name: "JavaScript", icon: "/skills/js.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "TypeScript", icon: "/skills/ts.svg" },
  { name: "Tailwind", icon: "/skills/tailwind.svg" },
  { name: "Redux", icon: "/skills/redux.svg" },
  { name: "Bootstrap", icon: "/skills/bootstrap.svg" },
  { name: "jQuery", icon: "/skills/jquery.svg" },
  { name: "Git", icon: "/skills/git.svg" },
  { name: "NPM", icon: "/skills/npm.svg" },
  { name: "Vite", icon: "/skills/vite.svg" },
  { name: "Firebase", icon: "/skills/firebase.svg" },
  { name: "Netlify", icon: "/skills/netlify.svg" },
];

export default function SkillsCarousel() {
  return (
    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24   z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24  z-10" />

          <div className="flex w-max gap-16 animate-scroll hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[140px]"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-20 w-20 md:h-20 md:w-20 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
