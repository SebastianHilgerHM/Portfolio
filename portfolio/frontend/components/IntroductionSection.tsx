// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import { colors, spacing, typography, radius, zIndex } from '@/lib/design-tokens';

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
    <section
      style={{
        width: '100%',
        paddingTop: `${spacing.medium}px`,
        paddingBottom: `${spacing.medium}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="introduction-section"
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
            gridTemplateColumns: '1fr 1fr',
            columnGap: `${spacing.large}px`,
            alignItems: 'center',
          }}
          className="introduction-grid"
        >
          {/* IllustrationBlock */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                maxWidth: '420px',
                width: '100%',
                height: '420px',
                position: 'relative',
                borderRadius: `${radius.base}px`,
                overflow: 'hidden',
              }}
            >
              <Image
                src={imageUrl}
                alt="Portrait"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: `${radius.base}px`,
                }}
              />
            </div>
          </div>

          {/* TextBlock */}
          <div
            style={{
              backgroundColor: colors.primary,
              borderRadius: `${radius.base}px`,
              padding: `${spacing.medium}px`,
              maxWidth: '480px',
            }}
            className="text-block"
          >
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
          </div>
        </div>
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
    </section>
  );
};

export default IntroductionSection;
