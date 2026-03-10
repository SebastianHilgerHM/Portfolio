// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { colors, spacing, typography, zIndex } from '@/lib/design-tokens';

interface PageTitleSectionProps {
  title: string;
  subtitle?: string;
}

const PageTitleSection = ({ title, subtitle }: PageTitleSectionProps) => {
  return (
    <section
      style={{
        width: '100%',
        paddingTop: `${spacing.large}px`,
        paddingBottom: `${spacing.medium}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="page-title-section"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: `${spacing.xxl}px`,
          paddingRight: `${spacing.xxl}px`,
          position: 'relative',
          zIndex: zIndex.base + 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h1
            style={{
              fontSize: typography.fontSize.h1,
              fontWeight: typography.fontWeight.bold,
              color: colors.text_primary,
              maxWidth: '800px',
              marginBottom: subtitle ? `${spacing.xs}px` : undefined,
            }}
            className="page-title"
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: typography.fontSize.h3,
                color: colors.text_primary,
                fontWeight: typography.fontWeight.regular,
                maxWidth: '800px',
              }}
              className="page-subtitle"
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .page-title-section {
            padding-top: ${spacing.large}px !important;
            padding-bottom: ${spacing.medium}px !important;
          }
        }

        @media (max-width: 640px) {
          .page-title {
            font-size: ${typography.fontSize.h2} !important;
          }
          .page-subtitle {
            font-size: ${typography.fontSize.h4} !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PageTitleSection;
