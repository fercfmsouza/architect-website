import React from 'react';

const IntroServices = () => {
  const projectsDescription = [
    {
      title: 'Projeto Arquitetônico',
      description:
        'Desenvolvimento de projetos arquitetônicos completos, unindo funcionalidade, estética e sustentabilidade, conforme normas técnicas.',
    },
    {
      title: 'Projeto de Interiores',
      description:
        'Criação de ambientes internos personalizados, priorizando conforto, estética e otimização do espaço conforme as necessidades do cliente.',
    },
    {
      title: 'Projeto Comercial',
      description:
        'Projetos para espaços comerciais, focando na identidade da marca, funcionalidade e experiência do cliente para aumentar as vendas.',
    },
  ];

  return (
    <div className="px-8 py-[100px] flex flex-col gap-6 md:flex-row xl:py-[200px] xl:px-[170px] 2xl:px-[360px] ">
      {projectsDescription.map((item, index) => (
        <div
          key={item.title}
          className={`px-8 py-[50px] flex flex-col items-center justify-center rounded-[30px] gap-5 text-center cursor-pointer
            ${index === 1 ? 'bg-bgBeige' : 'bg-white hover:bg-bgBeige'}
          `}
        >
          <h2 className="font-dm text-xl text-darkBlue lg:text-2xl">
            {item.title}
          </h2>
          <p className="text-sm font-light text-darkGray lg:text-base">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default IntroServices;
