// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Card from './Card';
import { colors, spacing, typography } from '@/lib/design-tokens';

export interface InterestCardProps {
  id: string;
  title: string;
  description: string;
}

const InterestCard = ({ id, title, description }: InterestCardProps) => {
  return (
    <Card
      variant="interactive"
      style={{
        display: 'flex',
        flexDirection: 'column',
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
  );
};

export default InterestCard;
