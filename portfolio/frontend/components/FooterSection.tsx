// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import { colors, spacing, typography } from '@/lib/design-tokens';

const FooterSection = () => {
  return (
    <footer
      style={{
        width: '100%',
        height: '9.125rem',
        backgroundColor: colors.primary,
      }}
    >
      <div
        style={{
          maxWidth: '75rem',
          height: '100%',
          margin: '0 auto',
          paddingLeft: spacing.large,
          paddingRight: spacing.large,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        className="footer-wrapper"
      >
        {/* FooterContent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing.small,
          }}
        >
          {/* LogoIcon */}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={30}
            height={30}
          />

          {/* FooterName */}
          <span
            style={{
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.medium,
              fontFamily: typography.fontFamily.serif,
              color: colors.text_primary,
            }}
          >
            Sebastian Hilger
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
