// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import HeaderSection from '@/components/HeaderSection';
import WorksSection from '@/components/WorksSection';
import FooterSection from '@/components/FooterSection';
import { colors, spacing } from '@/lib/design-tokens';

export default function Home() {
  return (
    <main style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
      <HeaderSection />
      
      {/* Hero Section Placeholder */}
      <div
        style={{
          width: '100vw',
          minHeight: '60vh',
          backgroundColor: colors.primary,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${spacing.xxl}px ${spacing.medium}px`,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            textAlign: 'center',
            color: colors.text_secondary,
          }}
        >
          <p style={{ fontSize: '24px' }}>Hero Section Placeholder</p>
          <p style={{ fontSize: '16px', marginTop: '16px' }}>
            This section will contain the hero content
          </p>
        </div>
      </div>

      <WorksSection />
      <FooterSection />
    </main>
  );
}
