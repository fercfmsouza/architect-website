import ClientsList from "./ClientsList";

const ClientsSection = () => {
  return (
    <div className="bg-bgBeige flex flex-col items-center px-8 py-12 gap-10 text-center md:mx-[170px] md:my-[120px] md:rounded-[70px] md:px-12 md:py-20">
      <h2 className="font-dm text-bgBlue text-3xl md:text-5xl md:w-1/2">
        O que os clientes falam sobre nós
      </h2>
      <ClientsList />
    </div>
  );
};

export default ClientsSection;
