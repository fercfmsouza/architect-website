import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Briefing',
      description:
        'Nessa fase temos o nosso primeiro contato, para entendermos suas necessidades e expectativas com o projeto.',
      image: '/images/briefingImg.png',
      icon: '/assets/briefing.svg',
    },
    {
      number: '02',
      title: 'Estudo Preliminar',
      description:
        'A partir disso levantamos todos os dados necessários e iniciamos o estudo e apresentamos o projeto em plantas e imagens 3D. Após aprovado, iniciamos a fase final.',
      image: '/images/conceptImg.png',
      icon: '/assets/concept.svg',
    },
    {
      number: '03',
      title: 'Projeto Final',
      description:
        'Apresentamos e entregamos o projeto final completo. Que depende de casa necessidade de entrega conforme ficou acordado em briefing.',
      image: '/images/designImg.png',
      icon: '/assets/design.svg',
    },
  ];

  return (
    <div className="flex flex-col gap-12 py-20 px-8 bg-bgBeige text-center md:items-center lg:mx-[170px] lg:rounded-[50px] lg:mb-[100px] lg:px-[100px] 2xl:mx-[360px] 2xl:mb-[180px]">
      <div className="flex flex-col gap-5">
        <h2 className="font-dm text-bgBlue text-3xl md:text-5xl text-center">
          Como funciona
        </h2>
        <p className="text-darkGray text-normal font-light md:text-xl lg:w-[70%] lg:m-auto">
          Adotamos uma abordagem simples, de fácil compreensão dos clientes que
          funciona da seguinte forma:
        </p>
      </div>

      <div className="flex flex-col justify-center gap-14 lg:flex-col lg:gap-[70px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col gap-5 lg:flex-row lg:gap-[50px] lg:justify-between lg:items-center ${
              index === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <Image
              src={step.image}
              width={453}
              height={485}
              alt="briefing image"
            />
            <div className="flex flex-col items-center max-w-xs lg:gap-[60px]">
              <div className="flex justify-between w-full items-center">
                <Image src={step.icon} width={60} height={60} alt="icon" />
                <p className="text-[60px] font-bold font-dm text-white">
                  {step.number}
                </p>
              </div>
              <div className="flex flex-col items-start text-left gap-3">
                <h3 className="font-dm text-xl font-semibold text-darkBlue lg:text-[30px]">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-darkGray lg:text-base lg:text-[18px]">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
