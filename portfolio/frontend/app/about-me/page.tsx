// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import IntroductionSection from '@/components/IntroductionSection';
import CuriositySection from '@/components/CuriositySection';
import FooterSection from '@/components/FooterSection';
import { colors } from '@/lib/design-tokens';

export default function AboutMe() {
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
      <PageTitleSection title="ABOUT ME" />
      <IntroductionSection 
        title="Get In Touch"
        description="I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out. I'll do my best to get back to you as soon as possible."
      />
      <CuriositySection 
        introTitle="Let's Connect"
        introDescription="I'm available for freelance work, collaborations, and conversations about design and technology. Here are some topics I'm particularly passionate about discussing."
      />
      <FooterSection />
    </main>
  );
}
