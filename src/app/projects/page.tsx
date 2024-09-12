import Heading from "@/components/Heading";
import headingData from "../../static/heading-data.json";

const ProjectsPage = () => {
  const aboutHeading = headingData.find((item) => item.href === "/projects");

  if (!aboutHeading) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Heading
        title={aboutHeading.title}
        subtitle={aboutHeading.subtitle}
        image={aboutHeading.image}
      />
      Projects Page
    </div>
  );
};

export default ProjectsPage;
