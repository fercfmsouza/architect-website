import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    img: '/projects/18.jpg',
    title: 'Residência D&E',
    subtitle: 'Arquitetura',
  },
  {
    img: '/projects/58.jpg',
    title: 'Interiores E&C',
    subtitle: 'Interiores',
  },
  {
    img: '/projects/16.jpg',
    title: 'Interiores F&R',
    subtitle: 'Interiores',
  },
  {
    img: '/projects/06.jpg',
    title: 'Residência R&F',
    subtitle: 'Arquitetura',
  },
];

const ProjectsHomeSection = () => {
  return (
    <div className="px-8 py-12 flex flex-col gap-12 items-center justify-center text-center md:px-[56px] md:gap-8 lg:gap-20 xl:px-[170px] xl:py-[0px]">
      <div className="flex flex-col gap-5">
        <h2 className="font-dm text-bgBlue text-3xl md:text-6xl">
          Confira nossos Projetos
        </h2>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:flex-wrap lg:justify-center">
        {projects.map((project, index) => {
          // Determine the border radius class based on the index
          let borderRadiusClass = '';
          switch (index) {
            case 0:
              borderRadiusClass = 'rounded-tr-[70px]';
              break;
            case 1:
              borderRadiusClass = 'rounded-tl-[70px]';
              break;
            case 2:
              borderRadiusClass = 'rounded-br-[70px]';
              break;
            case 3:
              borderRadiusClass = 'rounded-bl-[70px]';
              break;
          }

          return (
            <div key={project.title} className="flex flex-col gap-6 text-left">
              <Image
                src={project.img}
                width={500}
                height={500}
                alt="projeto"
                className={`${borderRadiusClass} object-cover w-[500px] h-[500px]`}
              />
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-dm text-xl text-darkBlue lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="text-sm font-light text-darkGray lg:text-base">
                    {project.subtitle}
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="bg-bgBeige flex items-center justify-center w-10 h-10 rounded-[50%] lg:w-16 lg:h-16 hover:bg-white hover:border-[1px] hover:border-darkGray"
                >
                  <Image
                    src="../../assets/arrow-icon.svg"
                    width={8}
                    height={18}
                    alt="button"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsHomeSection;
