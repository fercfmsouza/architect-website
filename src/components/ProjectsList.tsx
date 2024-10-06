'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import projectsData from '../static/projects.json';
import PaginationLink from './PaginationLink';

type Category = 'Arquitetura' | 'Interiores' | 'Comercial';

interface Project {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  inicials: string;
}

const projects: Project[] = projectsData as Project[];

interface ProjectProps {
  title: string;
  category: 'Arquitetura' | 'Interiores' | 'Comercial';
  imageUrl: string;
  inicials: string;
}

const ProjectItem = ({ title, category, imageUrl, inicials }: ProjectProps) => (
  <div>
    <Image
      src={imageUrl}
      alt={title}
      width={580}
      height={850}
      className="w-full object-cover h-[380px] 2xl:h-[550px]"
      placeholder="blur" // Use 'blur' for a placeholder effect
      blurDataURL={imageUrl} // Fallback to the same image as a placeholder
      loading="lazy" // Lazy load the images by default
    />
    <div className="flex justify-between py-4">
      <div>
        <h3 className="font-dm font-bold text-lg text-darkBlue tracking-wide">
          {title}
        </h3>
        <p className="text-darkGray text-sm tracking-wide">{category}</p>
      </div>
      <div className="flex w-[50px] h-[50px] rounded-[50%] bg-bgBeige text-darkGray items-center justify-center text-sm font-light">
        {inicials}
      </div>
    </div>
  </div>
);

const ProjectsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<
    Category | 'Todos os Projetos'
  >('Todos os Projetos');
  const projectsPerPage = 8;

  const filteredProjects =
    activeCategory === 'Todos os Projetos'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <div className="flex flex-col px-8 py-[100px] gap-14 lg:px-[170px] xl:px-[360px]">
      {/* Tabs Component Shadcn */}
      <Tabs
        className="flex flex-col justify-center items-center lg:w-full"
        defaultValue="Todos os Projetos"
        onValueChange={(value) => {
          setActiveCategory(value as Category | 'Todos os Projetos');
        }}
      >
        <TabsList className="mb-8 bg-white border-gold border-[1px] p-0 h-full sm:w-[110%] md:w-[50%] lg:w-full lg:justify-between 2xl:w-[70%]">
          <TabsTrigger
            className="p-[10px] text-xs text-black font-normal lg:px-[32px] lg:py-[20px] lg:text-base"
            value="Todos os Projetos"
          >
            Todos os Projetos
          </TabsTrigger>
          <TabsTrigger
            className="p-[10px] text-xs text-black font-normal lg:px-[32px] lg:py-[20px] lg:text-base"
            value="Arquitetura"
          >
            Arquitetura
          </TabsTrigger>
          <TabsTrigger
            className="p-[10px] text-xs text-black font-normal lg:px-[32px] lg:py-[20px] lg:text-base"
            value="Interiores"
          >
            Interiores
          </TabsTrigger>
          <TabsTrigger
            className="p-[10px] text-xs text-black font-normal lg:px-[32px] lg:py-[20px] lg:text-base"
            value="Comercial"
          >
            Comercial
          </TabsTrigger>
        </TabsList>

        {/* Render the current projects based on activeCategory */}
        <TabsContent
          value={activeCategory}
          className="flex flex-col gap-7 justify-between lg:grid lg:grid-cols-2 lg:mt-0 lg:w-full "
        >
          {currentProjects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </TabsContent>
      </Tabs>

      {/* Pagination Component */}
      <div className="flex gap-3 justify-center items-center h-[52px] flex-wrap">
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationLink
            key={index + 1}
            href={`#`} // You can update this if you want to handle navigation using query params or route changes
            isActive={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)} // Handle page change
          >
            {index + 1}
          </PaginationLink>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
