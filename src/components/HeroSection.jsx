import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  Code2,
  Download,
  Github,
  Linkedin,
  Trophy,
} from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: "Full Stack Development",
    description:
      "Building scalable enterprise applications using Angular, React, ASP.NET Core and SQL.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "3+ Years Experience",
    description:
      "Worked across Pharma, Healthcare, Manufacturing and Real Estate domains.",
  },
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    title: "Problem Solver",
    description:
      "Solved 1000+ coding problems and delivered enterprise-grade solutions.",
  },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-semibold mb-6">
              Full Stack Developer
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm
              <span className="block text-primary">
                Neha Patil
              </span>
            </h1>

            <p className="mt-8 text-lg text-muted-foreground leading-8 max-w-xl">
              Full Stack Developer with <strong>3+ years of experience</strong>
              building scalable enterprise web applications using
              <strong> Angular, React, TypeScript, ASP.NET Core and SQL.</strong>
              Passionate about clean architecture, workflow automation and
              performance optimization.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Angular",
                "React",
                "TypeScript",
                ".NET Core",
                "SQL",
                "REST APIs",
              ].map((item) => (
                <span
                  key={item}
                  className="skill-badge"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="primary-button"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

  <a
  href="https://drive.google.com/uc?export=download&id=1pf63BjpIrKV89g5E6eg2DwLMwHta-JP9"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-button"
>
  <Download className="mr-2 h-4 w-4" />
  Resume
</a>

            </div>

            <div className="flex gap-4 mt-10">

              <a
                href="https://github.com/Neha-Dotcom49"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl border border-border flex items-center justify-center hover:bg-primary hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-6">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="professional-card flex gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};