// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, SectionHeader, ResponsiveGrid, StaggeredCards, ScrollingStrip, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function PostersProject() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: colors.background,
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '1145px 1062px',
      }}
    >
      <HeaderSection />

      <PageTitleSection title="Black and White Poster Series" subtitle="A Series of black and white posters that were created as part of a university course" />

      {/* Poster Grids */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        {/* Top Row - Horizontal Poster Grid with Scrolling Animation */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: `${spacing.xxl}px`,
          }}
        >
          <ScrollingStrip gap="small" className="scrolling-posters">
            {/* Final posters */}
            {[1, 2, 3].map((num) => (
              <div
                key={`final-${num}`}
                style={{
                  position: 'relative',
                  width: '240px',
                  aspectRatio: '1/1.414',
                  flexShrink: 0,
                  overflow: 'hidden',
                  borderRadius: `${radius.base}px`,
                }}
              >
                <Image
                  src={`/images/page_posters/${num - 1}_final_${num}.png`}
                  alt={`Final Poster ${num}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
            {/* Proto poster */}
            <div
              style={{
                position: 'relative',
                width: '240px',
                aspectRatio: '1/1.414',
                flexShrink: 0,
                overflow: 'hidden',
                borderRadius: `${radius.base}px`,
              }}
            >
              <Image
                src="/images/page_posters/3_final_proto.png"
                alt="Final Proto Poster"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            {/* Gallery posters */}
            {['cubes', 'expansion', 'fish', 'initials', 'leaf', 'leaf_empty', 'leaf_full', 'mirror', 'movie', 'optical', 'pattern', 'pile', 'spiral', 'stripes', 'vase'].map((name) => (
              <div
                key={name}
                style={{
                  position: 'relative',
                  width: '240px',
                  aspectRatio: '1/1.414',
                  flexShrink: 0,
                  overflow: 'hidden',
                  borderRadius: `${radius.base}px`,
                }}
              >
                <Image
                  src={`/images/page_posters/g_${name}.png`}
                  alt={`Poster ${name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </ScrollingStrip>
        </div>

        {/* Bottom Row - 3 Large Posters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: `${spacing.medium}px`,
            marginBottom: `${spacing.xxl}px`,
          }}
          className="poster-grid-bottom"
        >
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1.414',
                overflow: 'hidden',
                borderRadius: `${radius.base}px`,
              }}
            >
              <Image
                src={`/images/page_posters/${num - 1}_final_${num}.png`}
                alt={`Featured Poster ${num}`}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Description Section */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          An Ode to Trash
        </SectionHeader>
        <Card>
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.normal,
            }}
          >
            In our Typography & Design course, we were tasked with creating ten black and white poster designs in a weekly format. The goal of this course was to learn about the basic principles of contrast, composition, as well as visual hierarchy. The goal was not to create good posters but instead try to achieve something coherent whilst meeting the task criteria of each week. The final project expanded this into a series of three posters meant to spotlight a form of “trash” in society, either in the abstract or literal sense.
          </p>
        </Card>
      </SectionContainer>

      {/* My Interpretation Section */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="center" breakpoint={1024} style={{ justifyItems: 'center', marginBottom: `${spacing.xxl}px` }}>
          {/* Left Column - Text Cards in Staggered Layout */}
          <StaggeredCards
            alignItems="center"
            items={[
              {
                width: '70%',
                content: (
                  <>
                    <h2
                      style={{
                        fontSize: typography.fontSize.h3,
                        fontWeight: typography.fontWeight.bold,
                        color: colors.text_primary,
                        marginBottom: `${spacing.small}px`,
                      }}
                    >
                      My Interpretation
                    </h2>
                    <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                      My series tackles scam and phishing emails by visualizing them as looming, water-related entities, often with the concept of "drowning" in the overwhelming number of mails. This was done to create a link to the topic of course before us, as their final series was connected to water.
                    </p>
                  </>
                ),
              },
              {
                marginLeft: '35%',
                width: '60%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    Although it did not start with this focus, the first few designs leaned much more heavily on the ever growing involvement of AI in the generation on spam- and phishing-mails and the ever growing threat they pose to internet traffic.
                  </p>
                ),
              },
              {
                width: '75%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    Another iteration was much more focused on delivering actual specific data by showcasing numbers and putting them into perspective. This concept was later scrapped in favour of a more artistic approach.
                  </p>
                ),
              },
              {
                marginLeft: '25%',
                width: '65%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    Each poster uses shifting light–dark divides and clustered typography to echo the feeling of being overwhelmed by digital junk, turning inbox pollution into a creeping, almost tidal force.
                  </p>
                ),
              },
            ]}
          />

          {/* Right Column - Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1/1.414',
              overflow: 'hidden',
              borderRadius: `${radius.base}px`,
            }}
          >
            <Image
              src="/images/page_posters/3_final_proto.png"
              alt="Final Proto Poster"
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </ResponsiveGrid>
      </SectionContainer>

      {/* Weekly Experiments Section */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="small">
          Weekly Experiments
        </SectionHeader>
        <p
          style={{
            fontSize: typography.fontSize.h4,
            color: colors.text_primary,
            lineHeight: typography.lineHeight.normal,
            marginBottom: `${spacing.large}px`,
          }}
        >
          A collection of some of my Posters
        </p>

        {/* Grid of All Gallery Posters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: `${spacing.medium}px`,
          }}
          className="experiments-grid"
        >
          {['cubes', 'expansion', 'fish', 'initials', 'leaf', 'leaf_empty', 'leaf_full', 'mirror', 'movie', 'optical', 'pattern', 'pile', 'spiral', 'stripes', 'vase'].map((name) => (
            <div
              key={name}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1.414',
                overflow: 'hidden',
                borderRadius: `${radius.base}px`,
              }}
            >
              <Image
                src={`/images/page_posters/g_${name}.png`}
                alt={`Poster ${name}`}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Affinity Designer', 'Affinity Photo', 'Figma']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
