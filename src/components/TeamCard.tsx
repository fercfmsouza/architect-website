'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  initiallyFlipped?: boolean;
}

const TeamCard = ({
  name,
  role,
  imageUrl,
  initiallyFlipped = false,
}: TeamMember) => {
  const [isFlipped, setIsFlipped] = useState(initiallyFlipped);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-[284px] h-[433px] [perspective:1000px] cursor-pointer transition-all duration-300 hover:shadow-xl"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-bgBeige rounded-lg flex flex-col items-center justify-center [backface-visibility:hidden]">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-md">{role}</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image
            alt={`${name} profile`}
            src={imageUrl}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
