import { Separator } from './ui/separator';

const data = [
  {
    title: 'Arquitetura',
  },
  {
    title: 'Interiores',
  },
  {
    title: 'Comercial',
  },
];

const FirstSection = () => {
  return (
    <div className="px-8 py-12 flex flex-col gap-5 items-center justify-center md:flex-row md:px-[56px] md:gap-8 lg:gap-12 xl:px-[170px] xl:py-[160px]">
      {data.map((item) => (
        <div
          key={item.title}
          className="flex flex-col md:flex-row items-center text-center gap-6 md:gap-12"
        >
          <h2 className="font-dm text-darkBlue text-2xl lg:text-4xl">
            {item.title}
          </h2>
          <Separator orientation="horizontal" className="w-[180px] md:hidden" />
          <Separator
            orientation="vertical"
            className="hidden md:block h-[130px]"
          />
        </div>
      ))}
    </div>
  );
};

export default FirstSection;
