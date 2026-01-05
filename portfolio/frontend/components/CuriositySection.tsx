// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import { colors, spacing, typography, radius, zIndex, shadows, motion } from '@/lib/design-tokens';

// Interface for future backend integration
export interface Interest {
  id: string;
  title: string;
  description: string;
}

interface CuriositySectionProps {
  introTitle?: string;
  introDescription?: string;
  interests?: Interest[];
}

const CuriositySection = ({ 
  introTitle = "What Keeps Me Curious",
  introDescription = "Beyond coding, I explore various creative domains that influence my work and perspective. Each interest shapes how I approach problems and design solutions.",
  interests
}: CuriositySectionProps) => {
  const defaultInterests: Interest[] = [
    {
      id: '1',
      title: 'Design Systems',
      description: 'Exploring the intersection of design and code, creating cohesive and scalable visual languages.',
    },
    {
      id: '2',
      title: 'User Experience',
      description: 'Understanding human behavior and psychology to craft intuitive digital experiences.',
    },
    {
      id: '3',
      title: 'Creative Technology',
      description: 'Experimenting with emerging technologies to push the boundaries of what\'s possible.',
    },
    {
      id: '4',
      title: 'Visual Storytelling',
      description: 'Combining narrative and design to communicate ideas effectively and memorably.',
    },
  ];

  const displayInterests = interests || defaultInterests;
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      style={{
        width: '100%',
        paddingTop: `${spacing.medium}px`,
        paddingBottom: `${spacing.xxl}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="curiosity-section"
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: `${spacing.small}px`,
            alignItems: 'stretch',
          }}
          className="curiosity-grid"
        >
          {/* SectionIntroCard */}
          <div
            style={{
              gridColumn: '1 / -1',
              backgroundColor: colors.primary,
              borderRadius: `${radius.base}px`,
              padding: `${spacing.medium}px`,
              boxShadow: shadows.card,
            }}
          >
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.semibold,
                marginBottom: `${spacing.small}px`,
                color: colors.text_primary,
              }}
            >
              {introTitle}
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                lineHeight: typography.lineHeight.normal,
                color: colors.text_secondary,
              }}
            >
              {introDescription}
            </p>
          </div>

          {/* InterestCards */}
          {displayInterests.map((interest) => (
            <div
              key={interest.id}
              style={{
                backgroundColor: colors.primary,
                borderRadius: `${radius.base}px`,
                padding: `${spacing.medium}px`,
                boxShadow: hoveredCard === interest.id ? shadows.cardHover : shadows.card,
                display: 'flex',
                flexDirection: 'column',
                transform: hoveredCard === interest.id ? 'translateY(-4px)' : 'translateY(0)',
                transition: `all ${motion.duration.normal} ${motion.easing.standard}`,
                cursor: 'default',
              }}
              onMouseEnter={() => setHoveredCard(interest.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.semibold,
                  marginBottom: `${spacing.small}px`,
                  color: colors.text_primary,
                }}
              >
                {interest.title}
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  lineHeight: typography.lineHeight.normal,
                  color: colors.text_secondary,
                }}
              >
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .curiosity-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .curiosity-section {
            padding-top: ${spacing.medium}px !important;
            padding-bottom: ${spacing.medium}px !important;
          }
          
          .curiosity-grid {
            gap: ${spacing.small}px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CuriositySection;
