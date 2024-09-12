import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

const CTASection = () => {
  return (
    <div className="flex flex-col px-8 py-12 gap-11 text-center lg:flex-row md:text-left md:items-center md:gap-12 md:px-[170px] md:py-[135px]">
      <div className="flex flex-col gap-10 items-center md:justify-center md:items-start md:flex-1">
        <h2 className="font-dm text-bgBlue text-3xl md:text-6xl">
          Criamos a Arte de Viver com Estilo
        </h2>
        <p className="text-darkGray text-normal font-light md:text-xl">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <Link
          href="https://wa.me/5541988451438/?text=Olá Vanessa, gostaria de fazer uma proposta para meu projeto. Como funciona seus serviços?"
          target="_blank"
        >
          <Button
            size="sm"
            className="flex items-center justify-center gap-3 lg:text-lg"
          >
            Faça uma proposta
            <Image
              src="/assets/arrow-right.svg"
              width={15}
              height={13}
              alt="arrow right"
            />
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src="/images/project-5.png"
          alt="Projeto interiores"
          width={653}
          height={700}
          className="rounded-tr-[130px] rounded-bl-[80px] md:rounded-tr-[200px] md:rounded-bl-[130px] "
        />
      </div>
    </div>
  );
};

export default CTASection;
