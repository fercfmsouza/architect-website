import Heading from "@/components/Heading";
import Quote from "@/components/Quote";
import headingData from "../../static/heading-data.json";
import AboutSection from "@/components/AboutSection";
import OurTeam from "@/components/OurTeam";

const AboutPage = () => {
  const aboutHeading = headingData.find((item) => item.href === "/about");

  if (!aboutHeading) {
    return <div>Page not found</div>;
  }

  return (
    <main>
      <Heading
        title={aboutHeading.title}
        subtitle={aboutHeading.subtitle}
        image={aboutHeading.image}
      />
      <Quote />
      <AboutSection />
      <OurTeam />
    </main>
  );
};

export default AboutPage;
