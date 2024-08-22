import Image from "next/image";
import { Button } from "./ui/button";

const IntroHome = () => {
  return (
    <div className="bg-custom-bg-home relative bg-cover bg-center h-[570px] lg:h-[600px] flex flex-col justify-center px-8 gap-8 md:px-[56px] md:rounded-bl-[120px] lg:rounded-bl-[160px] lg:px-[170px]">
      <h1 className="text-6xl font-dm font-normal text-bgBlue lg:text-8xl">
        Sua casa é única
      </h1>
      <p className="text-darkBlue text-base lg:text-xl">
        There are many variations of the passages of lorem ipsum from avaiable
        variantions of the demo.
      </p>
      <Button size="sm" className="flex items-center justify-center gap-4 w-44">
        Projetos
        <Image
          src="../../assets/arrow-right.svg"
          width={15}
          height={13}
          alt="arrow right"
        />
      </Button>
    </div>
  );
};

export default IntroHome;
