// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import Card from './Card';
import { colors, spacing, typography } from '@/lib/design-tokens';

export interface InterestCardProps {
  id: string;
  title: string;
  description: string;
}

const InterestCard = ({ id, title, description }: InterestCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      hoveredState={isHovered}
      variant="interactive"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
