import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectAccordionProps {
  name: string;
  link: string;
  image?: string;
  description?: string;
}

export const ProjectAccordion: React.FC<ProjectAccordionProps> = ({ name, link, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex items-center justify-between w-3/4 mx-auto p-5 mb-5 transition-all duration-300 border-b-2 rounded-sm">
        {image && (
          <img src={image} alt={name} className="w-1/4 h-auto rounded-md" />
        )}
        <div className="ml-5 flex-1">
          <p
            className={`font-title text-3xl transform transition-transform duration-300 ${isHovered ? 'translate-x-3' : 'translate-x-0'}`}
          >
            {name}
          </p>
          {description && (
            <p
              className={`text-lg text-accent mt-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              {description}
            </p>
          )}
        </div>
        {/* Render ArrowComponent as a React Component */}
        <div className={`flex items-center opacity-100 transition-opacity duration-300`}>
          <FaArrowRight className={`${isHovered ? 'text-accent' : 'text-gray-500'}`} />
        </div>
      </div>
    </a>
  );
};
