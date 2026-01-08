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
      title: 'Design Systems',
      description: 'Exploring the intersection of design and code, creating cohesive and scalable visual languages.',
    },
    {
      id: '2',
      title: 'User Experience',
      description: 'Understanding human behavior and psychology to craft intuitive digital experiences.',
    },
    {
      id: '3',
      title: 'Creative Technology',
      description: 'Experimenting with emerging technologies to push the boundaries of what\'s possible.',
    },
    {
      id: '4',
      title: 'Visual Storytelling',
      description: 'Combining narrative and design to communicate ideas effectively and memorably.',
    },
    {
      id: '5',
      title: 'Digital Innovation',
      description: 'Staying at the forefront of web technologies and exploring new ways to enhance user engagement.',
    },
    {
      id: '6',
      title: 'Collaborative Work',
      description: 'Building meaningful connections and working with diverse teams to create exceptional results.',
    },
  ];

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
      
      {/* Introduction Section */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: `${spacing.large}px`,
            alignItems: 'center',
          }}
          className="introduction-grid"
        >
          <ImageBlock
            src="/images/me_placeholder.png"
            alt="Portrait"
            maxWidth="420px"
            height="420px"
            objectFit="cover"
          />

          <Card style={{ maxWidth: '480px' }}>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.semibold,
                marginBottom: `${spacing.small}px`,
                color: colors.text_primary,
              }}
            >
              Get In Touch
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                lineHeight: typography.lineHeight.normal,
                color: colors.text_secondary,
              }}
            >
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out. I'll do my best to get back to you as soon as possible.
            </p>
          </Card>
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .introduction-grid {
              grid-template-columns: 1fr !important;
              row-gap: ${spacing.medium}px !important;
            }
          }
        `}</style>
      </SectionContainer>

      {/* Curiosity Section */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: `${spacing.small}px`,
            alignItems: 'stretch',
          }}
          className="curiosity-grid"
        >
          <Card style={{ gridColumn: '1 / -1' }}>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.semibold,
                marginBottom: `${spacing.small}px`,
                color: colors.text_primary,
              }}
            >
              Let's Connect
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                lineHeight: typography.lineHeight.normal,
                color: colors.text_secondary,
              }}
            >
              I'm available for freelance work, collaborations, and conversations about design and technology. Here are some topics I'm particularly passionate about discussing.
            </p>
          </Card>

          {interests.map((interest) => (
            <InterestCard key={interest.id} {...interest} />
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .curiosity-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
