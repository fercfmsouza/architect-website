'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className="flex flex-col gap-14 p-8 lg:py-[170px] md:px-[56px] lg:px-[70px] xl:px-[170px] xl:gap-[150px]">
      <div className="flex flex-col gap-[30px] md:flex-row lg:gap-[60px]">
        <div className="flex flex-col gap-[15px] items-center text-center lg:flex-1 lg:text-left lg:justify-center lg:items-baseline lg:gap-[25px]">
          <h2 className="font-dm text-bgBlue text-3xl md:text-6xl lg:text-[48px]">
            O que nós fazemos
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button
            size="sm"
            className="flex items-center justify-center gap-4 w-44"
          >
            Nossos Serviços
            <Image
              src="/assets/arrow-right.svg"
              width={659}
              height={377}
              alt="arrow right"
            />
          </Button>
        </div>
        <div>
          <Image
            className="rounded-[20px]"
            src="/images/obra.png"
            width={659}
            height={377}
            alt="obra"
          />

          {isMobile && (
            <Button
              size="sm"
              className="flex items-center justify-center gap-4 w-44"
            >
              Nossos Serviços
              <Image
                src="/assets/arrow-right.svg"
                width={659}
                height={377}
                alt="arrow right"
              />
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[30px] md:flex-row ">
        <div>
          <Image
            className="rounded-[20px]"
            src="/images/resultado.png"
            width={659}
            height={377}
            alt="obra"
          />
        </div>
        <div className="flex flex-col gap-[15px] items-center text-center lg:flex-1 lg:text-left lg:justify-center lg:items-baseline lg:gap-[25px]">
          <h2 className="font-dm text-bgBlue text-3xl md:text-6xl lg:text-[48px]">
            O resultado final
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <Button
            size="sm"
            className="flex items-center justify-center gap-4 w-44"
          >
            Nossos Projetos
            <Image
              src="/assets/arrow-right.svg"
              width={15}
              height={13}
              alt="arrow right"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
