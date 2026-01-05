// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import ResumeSection from '@/components/ResumeSection';
import FooterSection from '@/components/FooterSection';

export default function ResumePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#292929',
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '1145px 1062px',
      }}
    >
      <HeaderSection />
      <PageTitleSection title="Resume" />
      <ResumeSection />
      <FooterSection />
    </main>
  );
}
