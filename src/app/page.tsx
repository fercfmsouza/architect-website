import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import ExperienceSection from "@/components/ExperienceSection";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import IntroHome from "@/components/IntroHome";
import Navbar from "@/components/Navbar";
import ProjectsHomeSection from "@/components/ProjectsHomeSection";

export default function Home() {
  return (
    <main>
      <IntroHome />
      <FirstSection />
      <ProjectsHomeSection />
      <ExperienceSection />
      <CTASection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
