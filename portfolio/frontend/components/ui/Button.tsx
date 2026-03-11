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
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  style = {},
}: ButtonProps) => {
  const baseStyles: React.CSSProperties = {
    padding: `${spacing.xs} ${spacing.small}`,
    border: 'none',
    borderRadius: radius.base,
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
      border: `0.125rem solid ${colors.text_secondary}`,
      color: colors.text_secondary,
    },
    outline: {
      backgroundColor: 'transparent',
      border: `0.125rem solid ${colors.accent}`,
      color: colors.accent,
    },
  };

  const variantClass = `button-${variant}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={variantClass}
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...style,
        ...(disabled && {
          opacity: 0.6,
          cursor: 'not-allowed',
        }),
      }}
    >
      {children}
    </button>
  );
};

export default Button;
