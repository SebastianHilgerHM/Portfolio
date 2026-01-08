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
  imageUrl = "/images/me_placeholder.png"
}: IntroductionSectionProps) => {
  return (
    <SectionContainer paddingTop="medium" paddingBottom="medium" className="introduction-section">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: `${spacing.large}px`,
          alignItems: 'center',
        }}
        className="introduction-grid"
      >
        {/* Image Block */}
        <ImageBlock
          src={imageUrl}
          alt="Portrait"
          maxWidth="420px"
          height="420px"
          objectFit="cover"
        />

        {/* Text Block */}
        <Card style={{ maxWidth: '480px' }} className="text-block">
          <h3
            style={{
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.semibold,
              marginBottom: `${spacing.small}px`,
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

      <style jsx>{`
        @media (max-width: 1024px) {
          .introduction-grid {
            grid-template-columns: 1fr !important;
            row-gap: ${spacing.medium}px !important;
          }
        }

        @media (max-width: 640px) {
          .introduction-section {
            padding-top: ${spacing.small}px !important;
            padding-bottom: ${spacing.small}px !important;
          }
          
          .text-block {
            padding: ${spacing.small}px !important;
          }
        }
      `}</style>
    </SectionContainer>
  );
};

export default IntroductionSection;
