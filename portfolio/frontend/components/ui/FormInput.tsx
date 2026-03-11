// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { colors, spacing, typography, radius } from '@/lib/design-tokens';

interface FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  rows?: number;
  placeholder?: string;
}

const FormInput = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  rows = 4,
  placeholder,
}: FormInputProps) => {
  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: spacing.xs,
    backgroundColor: colors.background,
    border: `0.0625rem solid ${error ? '#ff4444' : colors.text_secondary}`,
    borderRadius: radius.base,
    color: colors.text_primary,
    fontSize: typography.fontSize.body,
    outline: 'none',
  };

  return (
    <div style={{ marginBottom: spacing.small }}>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: typography.fontSize.body_small,
          color: colors.text_primary,
          marginBottom: '0.25rem',
        }}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          style={{
            ...inputStyles,
            resize: 'vertical',
            fontFamily: typography.fontFamily.mono,
          }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={inputStyles}
        />
      )}
      {error && (
        <span
          style={{
            fontSize: typography.fontSize.body_small,
            color: '#ff4444',
            display: 'block',
            marginTop: '0.25rem',
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default FormInput;
