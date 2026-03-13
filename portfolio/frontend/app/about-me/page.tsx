// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, ImageBlock, InterestCard } from '@/components/ui';
import { colors, spacing, typography } from '@/lib/design-tokens';

export default function AboutMe() {
  const interests = [
    {
      id: '1',
      title: 'Drawing & Graffiti',
      description: 'I sketch constantly — whatever idea decides to show up. When I want something raw and expressive, I dive into tagging and graffiti-inspired pieces.',
    },
    {
      id: '2',
      title: 'Sewing & Clothes',
      description: 'Customizing clothing and sewing pieces together lets me play with texture, shape, and personal expression in a totally different way.',
    },
    {
      id: '3',
      title: 'Coding',
      description: 'I love experimenting with code, especially building small games and prototypes to see how ideas feel once they’re interactive.',
    },
    {
      id: '4',
      title: 'Dancing',
      description: 'Dancing is how I reset my brain when I’ve been creating for too long.',
    },
    {
      id: '5',
      title: 'Gaming',
      description: 'A lot of my inspiration for world-building, storytelling, and interaction comes from the games I sink time into.',
    },
    {
      id: '6',
      title: 'Design',
      description: 'Somewhere in the middle of all this is design — the place where everything blends together into the work I make.',
    },
  ];

  return (
    <main 
      style={{ 
        backgroundColor: colors.background,
        minHeight: '100vh',
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '71.563rem 66.375rem',
        backgroundPosition: '0 0',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <HeaderSection />
      <PageTitleSection title="ABOUT ME" />
      
      {/* Introduction Section */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: spacing.large,
            alignItems: 'center',
          }}
          className="introduction-grid"
        >
          <ImageBlock
            src="/images/me.jpg"
            alt="Portrait"
            maxWidth="26.25rem"
            height="26.25rem"
            objectFit="cover"
          />

          <Card style={{ maxWidth: '30rem' }}>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.semibold,
                marginBottom: spacing.small,
                color: colors.text_primary,
              }}
            >
              Introduction
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                lineHeight: typography.lineHeight.normal,
                color: colors.text_secondary,
              }}
            >
              Hello, my name is Sebastian and I am a 22 year old Student from Munich, Germany, currently enrolled at Munich University of Applied Sciences for a degree in Computer Science and Design.
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Curiosity Section */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: spacing.small,
            alignItems: 'stretch',
          }}
          className="curiosity-grid"
        >
          <Card style={{ gridColumn: '1 / -1' }}>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.semibold,
                marginBottom: spacing.small,
                color: colors.text_primary,
              }}
            >
              What Interests Me?
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                lineHeight: typography.lineHeight.normal,
                color: colors.text_secondary,
              }}
            >
              I move between a bunch of creative interests that feed into each other and shape how I work.
            </p>
          </Card>

          {interests.map((interest) => (
            <InterestCard key={interest.id} {...interest} />
          ))}
        </div>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
