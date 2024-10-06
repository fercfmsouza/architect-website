import Image from 'next/image';
import Link from 'next/link';
import FacebookSvg from './svgs/FacebookSvg';
import InstagramSvg from './svgs/InstagramSvg';
import LinkedinSvg from './svgs/LinkedinSvg';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 py-10 md:pt-40 bg-white">
      <div className="flex flex-col justify-between items-start gap-8 sm:flex-row p-8 sm:px-4 md:px-[56px] lg:px-[70px] xl:px-[170px] ">
        <Image
          src="../../assets/logo-with-text.svg"
          alt="Vanessa logo"
          width={180}
          height={150}
          className="w-1/3 md:w-[150px]"
        />
        <div className="flex flex-col gap-6 md:gap-8">
          <h4 className="font-dm font-medium text-xl text-darkBlue lg:text-2xl">
            Redes Sociais
          </h4>
          <p className="font-jost font-normal text-sm md:text-lg text-darkGray">
            Fique por dentro das nossas redes sociais e conecte-se conosco.
          </p>
          <div className="flex gap-6 items-center">
            <Link href="https://www.facebook.com/arqvmv" target="_blank">
              <FacebookSvg className="text-gray-800 hover:text-gold transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.instagram.com/arquiteturavmv/"
              target="_blank"
            >
              <InstagramSvg className="text-gray-800 hover:text-gold transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vanessa-maria-valaski-a69273a4/"
              target="_blank"
            >
              <LinkedinSvg className="text-gray-800 hover:text-gold transition-colors duration-300" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <h4 className="font-dm font-medium text-xl text-darkBlue lg:text-2xl">
            Contato
          </h4>
          <a
            href="mailto:@vanessamariavalaski@gmail.com"
            className="font-jost text-sm md:text-lg text-darkGray hover:text-gold"
          >
            vanessamariavalaski@gmail.com
          </a>
          <a
            href="https://wa.me/5541988451438/?text=Olá Vanessa, gostaria de fazer uma proposta para meu projeto. Como funciona seus serviços?"
            className="font-jost text-sm md:text-lg text-darkGray hover:text-gold"
            target="_blank"
          >
            +55 (41) 98845-1438
          </a>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-center font-jost font-light text-center text-darkGray text-xs md:text-lg">
        <p className="flex justify-center gap-1 md:w-full">
          Copyright © Vanessa Maria Valaski | Designed and coded by
          <Link
            href="https://fernandasouza.vercel.app/"
            target="_blank"
            className="underline hover:text-gold"
          >
            Fernanda Souza
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
