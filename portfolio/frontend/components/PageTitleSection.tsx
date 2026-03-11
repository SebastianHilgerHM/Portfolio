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
        paddingTop: spacing.large,
        paddingBottom: spacing.medium,
        position: 'relative',
        overflow: 'hidden',
      }}
      className="page-title-section"
    >
      <div
        style={{
          maxWidth: '75rem',
          margin: '0 auto',
          paddingLeft: spacing.xxl,
          paddingRight: spacing.xxl,
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
              maxWidth: '50rem',
              marginBottom: subtitle ? spacing.xs : undefined,
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
                maxWidth: '50rem',
              }}
              className="page-subtitle"
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageTitleSection;
