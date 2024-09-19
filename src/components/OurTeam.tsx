import React from 'react';
import TeamCard from './TeamCard';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  initiallyFlipped?: boolean;
}

const OurTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Vanessa Maria Valaski',
      role: 'CEO Arq VMV & Arquiteta',
      imageUrl: '/images/profile1.jpg',
      initiallyFlipped: true, // This card will show the image side initially
    },
    {
      name: 'Fagner Camargo',
      role: 'Estagiário',
      imageUrl: '/images/profile2.jpg',
    },
  ];

  return (
    <div className="py-[100px] md:py-[135px] flex flex-col gap-[65px]">
      <h2 className="font-dm text-bgBlue text-3xl md:text-5xl text-center">
        Conheça nossa equipe
      </h2>
      <div className="flex flex-col items-center md:flex-row justify-center gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            initiallyFlipped={member.initiallyFlipped}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
