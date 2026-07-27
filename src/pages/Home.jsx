import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CertificationSection } from "../components/CertificationSection";
import { AchievementsSection } from "../components/AchievementsSection";
import ChatBot from "../components/ChatBot";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        <SkillsSection />
        <ProjectsSection />
         <CertificationSection />
         <AchievementsSection />
         <ChatBot />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
