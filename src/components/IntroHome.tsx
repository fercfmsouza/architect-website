import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const IntroHome = () => {
  return (
    <div className="bg-custom-bg-home relative bg-cover bg-left-top h-[570px] pt-[80px] lg:h-[600px] flex flex-col px-8 gap-4 md:px-[56px] md:rounded-bl-[120px] lg:rounded-bl-[160px] lg:px-[170px]">
      <h1 className="text-6xl font-dm font-normal text-bgBlue lg:text-8xl lg:w-[50%]">
        Sua casa é única
      </h1>
      <p className="text-darkBlue text-base lg:text-xl w-[60%] lg:w-[30%]">
        Confira e se encante pelos nossos projetos
      </p>
      <Link href="/projects" className="w-[50%] lg:w-[19%]">
        <Button
          size="sm"
          className="w-full flex items-center justify-center gap-4 lg:w-44"
        >
          Projetos
          <Image
            src="../../assets/arrow-right.svg"
            width={15}
            height={13}
            alt="arrow right"
          />
        </Button>
      </Link>
    </div>
  );
};

export default IntroHome;
