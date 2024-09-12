"use client";

interface HeadingProps {
  title: string;
  subtitle: string;
  image: string;
}

const Heading = ({ title, subtitle, image }: HeadingProps) => {
  return (
    <div
      className="relative bg-cover bg-center h-[150px] flex flex-col justify-end items-center lg:h-[350px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex flex-col items-center bg-white px-16 py-5 rounded-tl-[40px] rounded-tr-[40px] gap-2 sm:px-28 sm:py-10">
        <h1 className="text-2xl font-dm font-normal text-darkBlue lg:text-5xl">
          {title}
        </h1>
        <p className="text-darkGray text-xs lg:text-xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Heading;
