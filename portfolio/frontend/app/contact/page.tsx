// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import { colors } from '@/lib/design-tokens';

export default function Contact() {
  return (
    <main 
      style={{ 
        backgroundColor: colors.background,
        minHeight: '100vh',
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '1145px 1062px',
        backgroundPosition: '0 0',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <HeaderSection />
      <PageTitleSection title="Contact" />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
