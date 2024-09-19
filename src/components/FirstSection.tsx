import Image from 'next/image';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const data = [
  {
    title: 'Arquitetura',
    description:
      'It is a long established fact that a reader will be distracted by the of readable content of a page.',
  },
  {
    title: 'Interiores',
    description:
      'It is a long established fact that a reader will be distracted by the of readable content of a page.',
  },
  {
    title: 'Comercial',
    description:
      'It is a long established fact that a reader will be distracted by the of readable content of a page.',
  },
];

const FirstSection = () => {
  return (
    <div className="px-8 py-12 flex flex-col gap-5 items-center justify-center md:flex-row md:px-[56px] md:gap-8 lg:gap-12 xl:px-[170px] xl:py-[160px]">
      {data.map((item) => (
        <div key={item.title} className="flex items-center text-center gap-12">
          <h2 className="font-dm text-darkBlue text-2xl lg:text-4xl">
            {item.title}
          </h2>
          <Separator orientation="vertical" className="h-[130px] " />
        </div>
      ))}
    </div>
  );
};

export default FirstSection;
