// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { colors, spacing, typography, radius } from '@/lib/design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  style?: React.CSSProperties;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  style = {},
}: ButtonProps) => {
  const baseStyles: React.CSSProperties = {
    padding: `${spacing.xs}px ${spacing.small}px`,
    border: 'none',
    borderRadius: `${radius.base}px`,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.medium,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: colors.accent,
      color: colors.primary,
    },
    secondary: {
      backgroundColor: 'transparent',
      border: `2px solid ${colors.text_secondary}`,
      color: colors.text_secondary,
    },
    outline: {
      backgroundColor: 'transparent',
      border: `2px solid ${colors.accent}`,
      color: colors.accent,
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.opacity = '0.8';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = colors.accent;
      e.currentTarget.style.color = colors.primary;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.opacity = '1';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = colors.accent;
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
