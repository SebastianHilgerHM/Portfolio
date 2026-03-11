// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import SectionContainer from './ui/SectionContainer';
import Card from './ui/Card';
import InterestCard from './ui/InterestCard';
import { colors, spacing, typography } from '@/lib/design-tokens';

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

  return (
    <SectionContainer paddingTop="medium" paddingBottom="xxlarge" className="curiosity-section">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: spacing.small,
          alignItems: 'stretch',
        }}
        className="curiosity-grid"
      >
        {/* Section Intro Card */}
        <Card style={{ gridColumn: '1 / -1' }}>
          <h3
            style={{
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.semibold,
              marginBottom: spacing.small,
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
        </Card>

        {/* Interest Cards */}
        {displayInterests.map((interest) => (
          <InterestCard key={interest.id} {...interest} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default CuriositySection;
