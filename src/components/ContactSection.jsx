import {
  Mail,
  Linkedin,
  Github,
  Code2,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">

        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-5 mb-12">
          I'm always open to discussing new opportunities and collaborations.
          Feel free to connect with me.
        </p>

        <div className="flex flex-wrap justify-center gap-8">

          <a
            href="https://linkedin.com/in/nehapatil49"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
              <Linkedin size={28} />
            </div>
            <span className="mt-3 text-sm text-muted-foreground group-hover:text-primary">
              LinkedIn
            </span>
          </a>

          <a
            href="https://github.com/Neha-Dotcom49"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
              <Github size={28} />
            </div>
            <span className="mt-3 text-sm text-muted-foreground group-hover:text-primary">
              GitHub
            </span>
          </a>

          <a
            href="https://leetcode.com/u/Nehap082001/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
              <Code2 size={28} />
            </div>
            <span className="mt-3 text-sm text-muted-foreground group-hover:text-primary">
              LeetCode
            </span>
          </a>

          <a
            href="mailto:nehapatil1082@gmail.com"
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
              <Mail size={28} />
            </div>
            <span className="mt-3 text-sm text-muted-foreground group-hover:text-primary">
              Email
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};