// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { colors, spacing, typography } from '@/lib/design-tokens';
import Card from './Card';

interface NumberedStepCardProps {
  number: string;
  title: string;
  text: string;
  padding?: 'small' | 'medium' | 'large';
  titleSize?: 'h3' | 'h4';
  layout?: 'stacked' | 'inline';
  numberWidth?: string;
}

const numberStyles: React.CSSProperties = {
  fontSize: typography.fontSize.h2,
  fontWeight: typography.fontWeight.bold,
  color: colors.accent,
  fontFamily: typography.fontFamily.serif,
  lineHeight: 1,
};

const NumberedStepCard = ({
  number,
  title,
  text,
  padding = 'small',
  titleSize = 'h4',
  layout = 'stacked',
  numberWidth = '72px',
}: NumberedStepCardProps) => {
  const titleAndText = (
    <>
      <h3
        style={{
          fontSize: typography.fontSize[titleSize],
          fontWeight: typography.fontWeight.bold,
          color: colors.text_primary,
          marginBottom: `${spacing.xs}px`,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: typography.fontSize.body,
          color: colors.text_secondary,
          lineHeight: typography.lineHeight.normal,
        }}
      >
        {text}
      </p>
    </>
  );

  if (layout === 'inline') {
    return (
      <div
        style={{
          display: 'flex',
          gap: `${spacing.medium}px`,
          alignItems: 'flex-start',
        }}
      >
        <span
          style={{
            ...numberStyles,
            flexShrink: 0,
            width: numberWidth,
          }}
        >
          {number}
        </span>
        <Card padding={padding} style={{ flex: 1 }}>
          {titleAndText}
        </Card>
      </div>
    );
  }

  return (
    <Card padding={padding}>
      <span
        style={{
          ...numberStyles,
          display: 'block',
          marginBottom: `${spacing.xs}px`,
        }}
      >
        {number}
      </span>
      {titleAndText}
    </Card>
  );
};

export default NumberedStepCard;
