// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import SectionContainer from './ui/SectionContainer';
import SectionHeader from './ui/SectionHeader';
import ProjectCard from './ui/ProjectCard';
import { spacing } from '@/lib/design-tokens';

// Interface for future backend integration
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface WorksSectionProps {
  projects?: Project[];
}

const WorksSection = ({ projects }: WorksSectionProps) => {
  // Sample project data - will be replaced with API data later
  const defaultProjects: Project[] = [
    {
      id: '1',
      title: 'Project Alpha',
      description: 'A comprehensive web application built with modern technologies.',
      imageUrl: '/images/sample_chatbot.png',
      link: '/projects/alpha',
    },
    {
      id: '2',
      title: 'Project Beta',
      description: 'An innovative solution for digital collaboration and productivity.',
      imageUrl: '/images/sample_cover.png',
      link: '/projects/beta',
    },
    {
      id: '3',
      title: 'Project Gamma',
      description: 'Mobile-first design approach with stunning user experience.',
      imageUrl: '/images/sample_poster.png',
      link: '/projects/gamma',
    },
  ];

  const displayProjects = projects || defaultProjects;

  return (
    <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
      <SectionHeader>SOME OF MY WORKS</SectionHeader>

      {/* Projects List */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${spacing.large}px`,
        }}
        className="projects-list"
      >
        {displayProjects.map((project, index) => {
          const imagePosition = index % 2 === 0 ? 'right' : 'left';
          
          return (
            <ProjectCard
              key={project.id}
              {...project}
              imagePosition={imagePosition}
            />
          );
        })}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .project-card {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          section {
            padding-top: ${spacing.small}px !important;
            padding-bottom: ${spacing.small}px !important;
          }
        }
      `}</style>
    </SectionContainer>
  );
};

export default WorksSection;

