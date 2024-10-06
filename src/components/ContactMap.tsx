import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FacebookSvg from './svgs/FacebookSvg';
import InstagramSvg from './svgs/InstagramSvg';
import LinkedinSvg from './svgs/LinkedinSvg';

const ContactMap = () => {
  return (
    <div className="bg-bgBeige px-8 py-12 flex flex-col gap-5 items-center justify-center md:px-[56px] md:py-[135px] md:gap-[65px] lg:gap-[80px] xl:px-[170px] xl:py-[160px]">
      <h2 className="font-dm text-bgBlue text-3xl md:text-5xl lg:w-[60%] text-center">
        Vamos conversar! Estamos a um clique de distância.
      </h2>
      <div className="h-screen flex flex-col justify-center items-center gap-[60px] lg:flex-row lg:w-full lg:h-full">
        <div className="bg-white w-[340px] rounded-[20px] md:w-[420px] p-4 flex flex-col gap-8 justify-center md:p-12 md:rounded-[40px] lg:h-[437px]">
          <div>
            <a
              href="mailto:someone@example.com"
              className="flex items-center gap-4 hover:text-gold"
            >
              <Image
                src="/assets/email.png"
                alt="email icon"
                width={52}
                height={52}
                className="w-[42px] h-[42px]"
              />
              vanessamariavalaski@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/5541988451438/?text=Olá Vanessa, gostaria de fazer uma proposta para meu projeto. Como funciona seus serviços?"
              className="flex items-center gap-4 hover:text-gold"
              target="_blank"
            >
              <Image
                src="/assets/phone.png"
                alt="email icon"
                width={52}
                height={52}
                className="w-[42px] h-[42px]"
              />
              +55 (41) 98845-1438
            </a>
          </div>
          <div>
            <a
              href="https://www.vmvarquitetura.com.br"
              className="flex items-center gap-4 hover:text-gold"
            >
              <Image
                src="/assets/site.png"
                alt="email icon"
                width={52}
                height={52}
                className="w-[42px] h-[42px]"
              />
              www.vmvarquitetura.com.br
            </a>
          </div>
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
        <div className="h-[437px] w-full lg:flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4428.4755035171665!2d-49.21091338076872!3d-25.946875406881844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dc3770af5b3bc1%3A0xff8e8618c5e0428c!2sARQUITETURA%20E%20INTERIORES%20VMV%20-%20Vanessa%20Maria%20Valaski!5e0!3m2!1spt-BR!2sde!4v1726735472535!5m2!1spt-BR!2sde"
            width="788"
            height="437"
            loading="lazy"
            className="w-full rounded-none md:rounded-[40px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
