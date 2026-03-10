// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { colors, spacing, typography, zIndex, motion } from '@/lib/design-tokens';

const HeaderSection = () => {
  return (
    <header
      style={{
        width: '100%',
        height: '40px',
        backgroundColor: colors.primary,
        position: 'sticky',
        top: 0,
        zIndex: zIndex.sticky,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          height: '100%',
          margin: '0 auto',
          padding: `0 ${spacing.xs / 2}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* BrandBlock */}
        <Link
          href="/"
          aria-label="Home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: `${spacing.xs}px`,
            textDecoration: 'none',
          }}
        >
          {/* LogoIcon */}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={24}
            height={24}
            priority
            style={{
              marginBottom: '2px',
            }}
          />
          
          {/* BrandName */}
          <span
            style={{
              fontFamily: typography.fontFamily.serif,
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.semibold,
              color: colors.text_primary,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            SEBASTIAN HILGER
          </span>
        </Link>

        {/* NavigationBlock */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: `${spacing.medium}px`,
          }}
        >
          {['About Me', 'Contact', 'Resume', 'Projects'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="nav-link"
              style={{
                fontFamily: typography.fontFamily.mono,
                fontSize: typography.fontSize.body,
                fontWeight: typography.fontWeight.medium,
                color: colors.text_primary,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
