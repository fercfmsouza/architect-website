import Heading from "@/components/Heading";
import headingData from "../../static/heading-data.json";

const ServicesPage = () => {
  const aboutHeading = headingData.find((item) => item.href === "/services");

  if (!aboutHeading) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <Heading
        title={aboutHeading.title}
        subtitle={aboutHeading.subtitle}
        image={aboutHeading.image}
      />
      services page
    </div>
  );
};

export default ServicesPage;
