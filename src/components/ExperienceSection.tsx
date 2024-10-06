import { Separator } from '@/components/ui/separator';

const data = [
  {
    number: 10,
    title: 'Anos de experiência',
  },
  {
    number: 120,
    title: 'Projetos entregues',
  },
  {
    number: 15,
    title: 'Projetos em andamento',
  },
  {
    number: 120,
    title: 'Clientes felizes',
  },
];

const ExperienceSection = () => {
  return (
    <div className="mt-12 flex flex-col h-[600px] items-center justify-center gap-8 text-center bg-bgBeige md:h-[450px] md:flex-row">
      {data.map((item, index) => (
        <div key={item.title} className="md:flex md:items-center md:gap-7">
          <div className="flex flex-col gap-3">
            <h2 className="text-gold font-dm text-4xl lg:text-5xl">
              {item.number}
            </h2>
            <p className="text-darkGray text-sm font-light pb-4 lg:text-lg">
              {item.title}
            </p>
          </div>
          {index < data.length - 1 && (
            <Separator
              orientation="horizontal"
              className="w-[180px] md:hidden"
            />
          )}
          {index < data.length - 1 && (
            <Separator
              orientation="vertical"
              className="hidden md:block h-[130px] md:mx-8"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
