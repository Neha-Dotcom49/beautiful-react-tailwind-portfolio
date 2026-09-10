import {
  ArrowRight,
  Download,
  Briefcase,
  Code2,
  Trophy,
  CheckCircle2,
  Database,
  Layers3,
  MonitorSmartphone,
  Server,
} from "lucide-react";

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "10+", label: "Projects Delivered" },
  { number: "1000+", label: "DSA Problems Solved" },
  { number: "8+", label: "Technologies" },
];

const highlights = [
  {
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    title: "Enterprise Development",
    description:
      "Developed scalable enterprise workflow applications using Angular, ASP.NET Core and REST APIs.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
    title: "Industry Experience",
    description:
      "Worked across Pharma, Healthcare, Manufacturing and Real Estate domains.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-cyan-400" />,
    title: "Problem Solving",
    description:
      "Strong foundation in Data Structures, Algorithms and clean software architecture.",
  },
];

const frontend = [
  "Angular",
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
];

const backend = [
  ".NET Core",
  "ASP.NET Web API",
  "REST API",
];

const database = [
  "SQL Server",
  "PostgreSQL",
];

const tools = [
  "Git",
  "Azure",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      </div>

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">

            ABOUT ME

          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">

            Building Modern

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

              Enterprise Applications

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">

            Full Stack Developer with 3+ years of experience creating
            scalable enterprise solutions using Angular, React,Java,
            ASP.NET Core, SQL Server and cloud technologies.

          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

              <div className="flex flex-col md:flex-row items-center gap-8">

                <div className="relative">

                  <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-25"></div>

                  <img
                    src="/profile.jpg"
                    alt="Neha Patil"
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
                  />

                </div>

                <div>

                  <h3 className="text-4xl font-bold">

                    Neha Patil

                  </h3>

                  <p className="mt-2 text-cyan-400 text-lg">

                    Full Stack Developer

                  </p>

                  <span className="inline-flex mt-4 rounded-full bg-green-500/20 px-4 py-2 text-green-400 text-sm font-medium">

                    🟢 Open to Work

                  </span>

                </div>

              </div>

              <div className="mt-10">

                <p className="leading-8 text-muted-foreground">

                  Passionate Full Stack Developer specializing in
                  enterprise-grade applications using Angular,
                  React, ASP.NET Core, SQL Server and REST APIs.

                  I enjoy transforming business requirements into
                  scalable, maintainable and user-friendly software
                  solutions.

                </p>

              </div>

              <div className="mt-10 space-y-5">

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 mt-1" size={20} />
                  <span>
                    Built enterprise workflow systems and reusable UI components.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 mt-1" size={20} />
                  <span>
                    Integrated REST APIs, JWT Authentication and Role-Based Access Control.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 mt-1" size={20} />
                  <span>
                    Optimized application performance using lazy loading and RxJS.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-400 mt-1" size={20} />
                  <span>
                    Experienced with Agile, Git, SQL Server and cloud deployment.
                  </span>
                </div>

              </div>

                            {/* Skills */}

              <div className="mt-10 space-y-6">

                <div>

                  <div className="flex items-center gap-2 mb-3">
                    <MonitorSmartphone size={18} className="text-cyan-400" />
                    <h4 className="font-semibold text-lg">Frontend</h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {frontend.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                <div>

                  <div className="flex items-center gap-2 mb-3">
                    <Server size={18} className="text-cyan-400" />
                    <h4 className="font-semibold text-lg">Backend</h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {backend.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                <div>

                  <div className="flex items-center gap-2 mb-3">
                    <Database size={18} className="text-cyan-400" />
                    <h4 className="font-semibold text-lg">Database</h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {database.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                <div>

                  <div className="flex items-center gap-2 mb-3">
                    <Layers3 size={18} className="text-cyan-400" />
                    <h4 className="font-semibold text-lg">Tools</h4>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {tools.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-12 flex flex-wrap gap-4">

                <a
                  href="/Neha_Patil_Resume.pdf"
                  download
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  <Download className="mr-2" size={18} />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-cyan-500/30 px-7 py-3 font-semibold transition hover:bg-cyan-500/10"
                >
                  Let's Connect
                  <ArrowRight className="ml-2" size={18} />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl"
                >

                  <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-muted-foreground">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

            {/* Highlights */}

            <div className="mt-8 space-y-6">

              {highlights.map((item) => (

                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition duration-300 hover:border-cyan-500/40 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                      {item.icon}
                    </div>

                    <div>

                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="leading-7 text-muted-foreground">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};