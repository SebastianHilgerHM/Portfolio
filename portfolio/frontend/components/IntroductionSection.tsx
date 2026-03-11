// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import SectionContainer from './ui/SectionContainer';
import ImageBlock from './ui/ImageBlock';
import Card from './ui/Card';
import { colors, spacing, typography } from '@/lib/design-tokens';

interface IntroductionSectionProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const IntroductionSection = ({ 
  title = "Introduction", 
  description = "I'm a passionate developer with a keen interest in creating intuitive and engaging web experiences. My work combines technical expertise with creative problem-solving to deliver solutions that make a difference.",
  imageUrl = "/images/me.jpg"
}: IntroductionSectionProps) => {
  return (
    <SectionContainer paddingTop="medium" paddingBottom="medium" className="introduction-section">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columngap: spacing.large,
          alignItems: 'center',
        }}
        className="introduction-grid"
      >
        {/* Image Block */}
        <ImageBlock
          src={imageUrl}
          alt="Portrait"
          maxWidth="26.25rem"
          height="26.25rem"
          objectFit="cover"
        />

        {/* Text Block */}
        <Card style={{ maxWidth: '30rem' }} className="text-block">
          <h3
            style={{
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.semibold,
              marginBottom: spacing.small,
              color: colors.text_primary,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: typography.fontSize.body,
              lineHeight: typography.lineHeight.normal,
              color: colors.text_secondary,
            }}
          >
            {description}
          </p>
        </Card>
      </div>
    </SectionContainer>
  );
};

export default IntroductionSection;
