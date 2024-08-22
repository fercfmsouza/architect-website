const Heading = () => {
  return (
    <div className="bg-custom-bg-about relative bg-cover bg-center h-[150px] flex flex-col justify-end items-center lg:h-[350px]">
      <div className="flex flex-col items-center bg-white px-16 py-5 rounded-tl-[40px] rounded-tr-[40px] gap-2 sm:px-28 sm:py-10">
        <h1 className="text-2xl font-dm font-normal text-darkBlue lg:text-5xl">
          Sobre nós
        </h1>
        <p className="text-darkGray text-xs lg:text-xl">Home / Sobre</p>
      </div>
    </div>
  );
};

export default Heading;
