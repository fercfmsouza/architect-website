import Image from 'next/image';
import Link from 'next/link';

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
          <h4 className="font-dm font-medium text-xl text-darkBlue">
            Redes Sociais
          </h4>
          <p className="font-jost font-normal text-sm md:text-lg text-darkGray">
            Fique por dentro das nossas redes sociais e conecte-se conosco.
          </p>
          <div className="flex gap-6 items-center">
            <Link href="https://www.facebook.com/arqvmv" target="_blank">
              <Image
                src="../../assets/facebook.svg"
                alt="facebook logo"
                width={16}
                height={25}
                className="hover:fill-gold"
              />
            </Link>
            <Link
              href="https://www.instagram.com/arquiteturavmv/"
              target="_blank"
            >
              <Image
                src="../../assets/instagram.svg"
                alt="instagram logo"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vanessa-maria-valaski-a69273a4/"
              target="_blank"
            >
              <Image
                src="../../assets/linkedinn.svg"
                alt="linkedin logo"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          <h4 className="font-dm font-medium text-xl text-darkBlue">Contato</h4>
          <p className="font-jost text-sm md:text-lg text-darkGray">
            contact@arqvmv.com
          </p>
          <p className="font-jost text-sm md:text-lg text-darkGray">
            (+55) 41 99924-5567
          </p>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-center font-jost font-light text-center text-darkGray text-xs md:text-lg">
        <p className="w-[300px] md:w-full">
          Copyright © Vanessa Maria Valaski | Designed and coded by
          <Link
            href="https://fernandasouza.vercel.app/"
            target="_blank"
            className="underline"
          >
            Fernanda Souza
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
