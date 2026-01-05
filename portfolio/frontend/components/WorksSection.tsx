// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { colors, spacing, typography, radius, zIndex, shadows, motion } from '@/lib/design-tokens';

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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      style={{
        width: '100%',
        paddingTop: `${spacing.xxl}px`,
        paddingBottom: `${spacing.xxl}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: `${spacing.medium}px`,
          paddingRight: `${spacing.medium}px`,
          position: 'relative',
          zIndex: zIndex.base + 1,
        }}
      >
        {/* Section Header */}
        <h2
          style={{
            fontSize: typography.fontSize.h2,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: `${spacing.xxl}px`,
            textAlign: 'left',
          }}
        >
          SOME OF MY WORKS
        </h2>

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
            const isTextOnLeft = index % 2 === 0;
            
            return (
              <div
                key={project.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: `${spacing.medium}px`,
                  alignItems: 'center',
                  transform: hoveredCard === project.id ? 'translateY(-4px)' : 'translateY(0)',
                  transition: `all ${motion.duration.normal} ${motion.easing.standard}`,
                }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="project-row"
              >
                {isTextOnLeft ? (
                  <>
                    {/* Text Content - Left */}
                    <Link
                      href={project.link}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: colors.primary,
                          borderRadius: `${radius.base}px`,
                          padding: `${spacing.medium}px`,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          boxShadow: hoveredCard === project.id ? shadows.cardHover : shadows.card,
                          transition: `box-shadow ${motion.duration.normal} ${motion.easing.standard}`,
                          cursor: 'pointer',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: typography.fontSize.h3,
                            fontWeight: typography.fontWeight.semibold,
                            color: colors.text_primary,
                            marginBottom: `${spacing.xs}px`,
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          style={{
                            fontSize: typography.fontSize.body,
                            color: colors.text_secondary,
                            marginBottom: `${spacing.small}px`,
                            lineHeight: typography.lineHeight.normal,
                          }}
                        >
                          {project.description}
                        </p>

                        {/* CTA Button */}
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: typography.fontSize.body,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.accent,
                            textDecoration: 'none',
                            transition: `color ${motion.duration.fast}`,
                          }}
                        >
                          Learn more →
                        </span>
                      </div>
                    </Link>

                    {/* Image Part - Right */}
                    <div>
                      <div
                        style={{
                          width: '100%',
                          height: '350px',
                          position: 'relative',
                          borderRadius: `${radius.base}px`,
                        }}
                      >
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          style={{
                            objectFit: 'contain',
                            borderRadius: `${radius.base}px`,
                            filter: hoveredCard === project.id 
                              ? 'drop-shadow(0 10px 28px rgba(0,0,0,0.55))' 
                              : 'drop-shadow(0 6px 16px rgba(0,0,0,0.45))',
                            transition: `filter ${motion.duration.normal} ${motion.easing.standard}`,
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image Part - Left */}
                    <div>
                      <div
                        style={{
                          width: '100%',
                          height: '350px',
                          position: 'relative',
                          borderRadius: `${radius.base}px`,
                        }}
                      >
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          style={{
                            objectFit: 'contain',
                            borderRadius: `${radius.base}px`,
                            filter: hoveredCard === project.id 
                              ? 'drop-shadow(0 10px 28px rgba(0,0,0,0.55))' 
                              : 'drop-shadow(0 6px 16px rgba(0,0,0,0.45))',
                            transition: `filter ${motion.duration.normal} ${motion.easing.standard}`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Text Content - Right */}
                    <Link
                      href={project.link}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: colors.primary,
                          borderRadius: `${radius.base}px`,
                          padding: `${spacing.medium}px`,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          boxShadow: hoveredCard === project.id ? shadows.cardHover : shadows.card,
                          transition: `box-shadow ${motion.duration.normal} ${motion.easing.standard}`,
                          cursor: 'pointer',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: typography.fontSize.h3,
                            fontWeight: typography.fontWeight.semibold,
                            color: colors.text_primary,
                            marginBottom: `${spacing.xs}px`,
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          style={{
                            fontSize: typography.fontSize.body,
                            color: colors.text_secondary,
                            marginBottom: `${spacing.small}px`,
                            lineHeight: typography.lineHeight.normal,
                          }}
                        >
                          {project.description}
                        </p>

                        {/* CTA Button */}
                        <span
                          style={{
                            display: 'inline-block',
                            fontSize: typography.fontSize.body,
                            fontWeight: typography.fontWeight.medium,
                            color: colors.accent,
                            textDecoration: 'none',
                            transition: `color ${motion.duration.fast}`,
                          }}
                        >
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
          
          .project-row > * {
            grid-column: 1 !important;
          }
          
          .project-row > a {
            order: 2;
          }
          
          .project-row > div:last-child {
            order: 1;
          }
        }

        @media (max-width: 640px) {
          section {
            padding-top: ${spacing.small}px !important;
            padding-bottom: ${spacing.small}px !important;
          }
          
          section h2 {
            margin-bottom: ${spacing.small}px !important;
          }
          
          .project-row > a > div {
            padding: ${spacing.small}px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WorksSection;
