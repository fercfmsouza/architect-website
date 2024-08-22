import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const data = [
  {
    name: "Fernanda Souza",
    city: "Curitiba, Paraná",
    message:
      "Lorem Ipsum is simply dummy text of the typesetting industry Ipsum has been.",
    icon: "../../assets/avatar-woman.svg",
  },
  {
    name: "Janaina dos Santos",
    city: "São José dos Pinhais, Paraná",
    message:
      "Lorem Ipsum is simply dummy text of the typesetting industry Ipsum has been.",
    icon: "../../assets/avatar-woman.svg",
  },
  {
    name: "Roberta Amaral",
    city: "Tijucas do Sul, Paraná",
    message:
      "Lorem Ipsum is simply dummy text of the typesetting industry Ipsum has been.",
    icon: "../../assets/avatar-woman.svg",
  },
  {
    name: "Matheus Henrique",
    city: "Tijucas do Sul, Paraná",
    message:
      "Lorem Ipsum is simply dummy text of the typesetting industry Ipsum has been.",
    icon: "../../assets/avatar-man.svg",
  },
];

const ClientsList = () => {
  return (
    <Carousel className="w-full max-w-xs md:max-w-5xl">
      <CarouselContent className="flex">
        {data.map((client) => (
          <CarouselItem key={client.name} className="md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-start justify-center p-6 gap-7 text-left">
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
