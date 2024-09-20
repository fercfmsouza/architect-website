import Heading from '@/components/Heading';
import headingData from '../../static/heading-data.json';
import IntroServices from '@/components/IntroServices';
import HowItWorks from '@/components/HowItWorks';
import ContactSection from '@/components/ContactSection';

const ServicesPage = () => {
  const aboutHeading = headingData.find((item) => item.href === '/services');

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
      <IntroServices />
      <HowItWorks />
      <ContactSection />
    </div>
  );
};

export default ServicesPage;
