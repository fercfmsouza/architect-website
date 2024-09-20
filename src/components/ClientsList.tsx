import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const data = [
  {
    name: 'Fernanda Medeiros',
    city: 'Curitiba, Paraná',
    message:
      'Excelente profissional, super detalhista! Amo acompanhar o trabalho dela! Recomento muito!',
    icon: '../../assets/avatar-woman.svg',
  },
  {
    name: 'Ede Corrêa',
    city: 'Tijucas do Sul, Paraná',
    message:
      'Um sonho que passou para o papel e do papel tornou-se realidade! Adorei a atenção, a cordialidade, a parceria e principalmente: o preço! O acompanhamento pós projeto também é muito satisfatório!',
    icon: '../../assets/avatar-man.svg',
  },
  {
    name: 'Eloisa Schramm',
    city: 'Tijucas do Sul, Paraná',
    message: 'Profissional competente, Ama o que faz !!!',
    icon: '../../assets/avatar-woman.svg',
  },
  {
    name: 'Eduardo Maoski',
    city: 'Tijucas do Sul, Paraná',
    message:
      'Melhor escritório de arquitetura e interiores, fez meu apartamento em Curitiba, custo benefício incrível e sem contar o aproveitamento do espaço!',
    icon: '../../assets/avatar-man.svg',
  },
];

const ClientsList = () => {
  return (
    <Carousel className="w-full max-w-xs md:max-w-5xl">
      <CarouselContent className="flex">
        {data.map((client) => (
          <CarouselItem key={client.name} className="md:basis-1/3">
            <div>
              <Card>
                <CardContent className="flex flex-col aspect-square items-start p-6 gap-7 text-left">
                  <div className="flex items-center gap-6">
                    <Image
                      src={client.icon}
                      width={77}
                      height={77}
                      alt="Imagem cliente"
                    />
                    <div className="text-left">
                      <h3 className="font-dm text-darkBlue text-xl">
                        {client.name}
                      </h3>
                      <p className="text-darkGray text-sm font-light">
                        {client.city}
                      </p>
                    </div>
                  </div>
                  <div className="text-darkGray text-base font-light">
                    {client.message}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ClientsList;
