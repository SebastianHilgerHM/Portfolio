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
        width: '100vw',
        height: '146px',
        backgroundColor: colors.primary,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          height: '100%',
          margin: '0 auto',
          paddingLeft: `${spacing.large}px`,
          paddingRight: `${spacing.large}px`,
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
            gap: `${spacing.small}px`,
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

      <style jsx>{`
        @media (max-width: 640px) {
          .footer-wrapper {
            padding-left: ${spacing.medium}px !important;
            padding-right: ${spacing.medium}px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default FooterSection;
