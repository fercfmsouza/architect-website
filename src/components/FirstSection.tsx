import Image from "next/image";
import { Button } from "./ui/button";

const data = [
  {
    title: "Arquitetura",
    description:
      "It is a long established fact that a reader will be distracted by the of readable content of a page.",
  },
  {
    title: "Interiores",
    description:
      "It is a long established fact that a reader will be distracted by the of readable content of a page.",
  },
  {
    title: "Comercial",
    description:
      "It is a long established fact that a reader will be distracted by the of readable content of a page.",
  },
];

const FirstSection = () => {
  return (
    <div className="px-8 py-12 flex flex-col gap-5 items-center justify-center md:flex-row md:px-[56px] md:gap-8 lg:gap-20 xl:px-[170px] xl:py-[160px]">
      {data.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center gap-5 text-center"
        >
          <h2 className="font-dm text-darkBlue text-2xl lg:text-4xl">
            {item.title}
          </h2>
          <p className="text-darkGray text-normal font-light lg:text-xl">
            {item.description}
          </p>
          <Button
            variant="link"
            className="flex items-center justify-center gap-3 lg:text-lg"
          >
            Veja mais
            <Image
              src="../../assets/arrow-right.svg"
              width={15}
              height={13}
              alt="arrow right"
            />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default FirstSection;
