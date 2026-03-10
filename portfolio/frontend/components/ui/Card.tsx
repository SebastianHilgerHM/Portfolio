// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { ReactNode } from 'react';
import { colors, spacing, typography, radius, shadows, motion } from '@/lib/design-tokens';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  padding?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
  className?: string;
}

const Card = ({ 
  children, 
  variant = 'default',
  padding = 'medium',
  onClick,
  onMouseEnter,
  onMouseLeave,
  style = {},
  className = '',
}: CardProps) => {
  const paddingMap = {
    small: spacing.small,
    medium: spacing.medium,
    large: spacing.large,
  };

  const baseStyles: React.CSSProperties = {
    backgroundColor: colors.primary,
    borderRadius: `${radius.base}px`,
    padding: `${paddingMap[padding]}px`,
    boxShadow: shadows.card,
    transition: `all ${motion.duration.normal} ${motion.easing.standard}`,
  };

  const variantClass = variant === 'interactive' ? 'card-interactive' : variant === 'hover' ? 'card-hover' : '';

  return (
    <div
      style={{
        ...baseStyles,
        ...style,
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${variantClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default Card;
