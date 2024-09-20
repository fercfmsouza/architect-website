import Heading from '@/components/Heading';
import headingData from '../../static/heading-data.json';
import ProjectsList from '@/components/ProjectsList';

const ProjectsPage = () => {
  const aboutHeading = headingData.find((item) => item.href === '/projects');

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
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
