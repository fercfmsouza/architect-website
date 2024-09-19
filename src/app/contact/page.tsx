import Heading from '@/components/Heading';
import headingData from '../../static/heading-data.json';
import ContactMap from '@/components/ContactMap';
import OurTeam from '@/components/OurTeam';

const ContactPage = () => {
  const aboutHeading = headingData.find((item) => item.href === '/contact');

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
      <OurTeam />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
