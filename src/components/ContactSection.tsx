import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <div className="flex flex-col bg-bgBlue px-8 py-20 gap-11 text-center items-center">
      <h2 className="font-dm text-white text-3xl md:text-4xl lg:text-6xl">
        Quer fazer um projeto conosco?
      </h2>
      <p className="text-white">
        Entre em contato via Whatsapp para agendarmos uma reunião.
      </p>
      <Link
        href="https://wa.me/5541988451438/?text=Olá Vanessa, gostaria de fazer uma proposta para meu projeto. Como funciona seus serviços?"
        target="_blank"
      >
        <Button
          variant="gold"
          size="sm"
          className="flex items-center justify-center gap-3 lg:text-lg"
        >
          Faça uma proposta
          <Image
            src="/assets/arrow-blue.svg"
            width={15}
            height={13}
            alt="arrow right"
          />
        </Button>
      </Link>
    </div>
  );
};

export default ContactSection;
