// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { colors, spacing, typography, radius, shadows } from '@/lib/design-tokens';

interface Project {
  title: string;
  image: string;
  link?: string;
  size?: 'small' | 'medium' | 'large';
}

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({
  projects = [
    {
      title: 'Poster Series',
      image: '/images/posters.png',
      link: '#',
      size: 'medium',
    },
    {
      title: 'DnD Chatbot',
      image: '/images/chatbot.png',
      link: '#',
      size: 'small',
    },
    {
      title: 'Steam Community-Tab Redesign',
      image: '/images/steam_redesign.png',
      link: '#',
      size: 'small',
    },
    {
      title: '3D Catan',
      image: '/images/catan_3d.png',
      link: '#',
      size: 'medium',
    },
    {
      title: 'Album Covers',
      image: '/images/album_cover.png',
      link: '#',
      size: 'large',
    },
    {
      title: 'MSB Service Center',
      image: '/images/msb.png',
      link: '#',
      size: 'small',
    },
  ],
}: ProjectsSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      style={{
        width: '100%',
        paddingTop: `${spacing.medium}px`,
        paddingBottom: `${spacing.xxl}px`,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingLeft: `${spacing.medium}px`,
          paddingRight: `${spacing.medium}px`,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: `${spacing.medium}px`,
          }}
          className="projects-grid"
        >
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
            {[projects[0], projects[3]].map((project, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingBottom: `${spacing.large}px`,
                  paddingRight: `${spacing.large}px`,
                }}
                className={`project-card`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Card */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: `${radius.base}px`,
                    overflow: 'hidden',
                    backgroundColor: colors.primary,
                    boxShadow: shadows.card,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                
                {/* Text Card - Overlapping bottom right corner */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '70%',
                    padding: `${spacing.xs}px`,
                    backgroundColor: colors.primary,
                    borderRadius: `${radius.base}px`,
                    boxShadow: shadows.card,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: hoveredIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: typography.fontSize.h4,
                      fontWeight: typography.fontWeight.bold,
                      color: colors.text_primary,
                      marginBottom: `${spacing.xs}px`,
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Learn More Button */}
                  <button
                    style={{
                      padding: `${spacing.xs}px ${spacing.small}px`,
                      backgroundColor: 'transparent',
                      border: `2px solid ${colors.accent}`,
                      borderRadius: `${radius.base}px`,
                      color: colors.accent,
                      fontSize: typography.fontSize.body_small,
                      fontWeight: typography.fontWeight.medium,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backgroundColor: hoveredIndex === index ? colors.accent : 'transparent',
                      color: hoveredIndex === index ? colors.primary : colors.accent,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accent;
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.accent;
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
            {[projects[1], projects[4]].map((project, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingBottom: `${spacing.large}px`,
                  paddingRight: `${spacing.large}px`,
                }}
                className={`project-card`}
                onMouseEnter={() => setHoveredIndex(index + 2)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Card */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: `${radius.base}px`,
                    overflow: 'hidden',
                    backgroundColor: colors.primary,
                    boxShadow: shadows.card,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: hoveredIndex === index + 2 ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                
                {/* Text Card - Overlapping bottom right corner */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '70%',
                    padding: `${spacing.xs}px`,
                    backgroundColor: colors.primary,
                    borderRadius: `${radius.base}px`,
                    boxShadow: shadows.card,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: hoveredIndex === index + 2 ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: typography.fontSize.h4,
                      fontWeight: typography.fontWeight.bold,
                      color: colors.text_primary,
                      marginBottom: `${spacing.xs}px`,
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Learn More Button */}
                  <button
                    style={{
                      padding: `${spacing.xs}px ${spacing.small}px`,
                      backgroundColor: 'transparent',
                      border: `2px solid ${colors.accent}`,
                      borderRadius: `${radius.base}px`,
                      color: colors.accent,
                      fontSize: typography.fontSize.body_small,
                      fontWeight: typography.fontWeight.medium,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backgroundColor: hoveredIndex === index + 2 ? colors.accent : 'transparent',
                      color: hoveredIndex === index + 2 ? colors.primary : colors.accent,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accent;
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.accent;
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
            {[projects[2], projects[5]].map((project, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingBottom: `${spacing.large}px`,
                  paddingRight: `${spacing.large}px`,
                }}
                className={`project-card`}
                onMouseEnter={() => setHoveredIndex(index + 4)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Card */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: `${radius.base}px`,
                    overflow: 'hidden',
                    backgroundColor: colors.primary,
                    boxShadow: shadows.card,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: hoveredIndex === index + 4 ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    style={{ objectFit: 'contain', width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                
                {/* Text Card - Overlapping bottom right corner */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '70%',
                    padding: `${spacing.xs}px`,
                    backgroundColor: colors.primary,
                    borderRadius: `${radius.base}px`,
                    boxShadow: shadows.card,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    transform: hoveredIndex === index + 4 ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: typography.fontSize.h4,
                      fontWeight: typography.fontWeight.bold,
                      color: colors.text_primary,
                      marginBottom: `${spacing.xs}px`,
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  {/* Learn More Button */}
                  <button
                    style={{
                      padding: `${spacing.xs}px ${spacing.small}px`,
                      backgroundColor: 'transparent',
                      border: `2px solid ${colors.accent}`,
                      borderRadius: `${radius.base}px`,
                      color: colors.accent,
                      fontSize: typography.fontSize.body_small,
                      fontWeight: typography.fontWeight.medium,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backgroundColor: hoveredIndex === index + 4 ? colors.accent : 'transparent',
                      color: hoveredIndex === index + 4 ? colors.primary : colors.accent,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.accent;
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = colors.accent;
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
