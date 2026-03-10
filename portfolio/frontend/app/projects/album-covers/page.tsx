// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, ImportantText, SectionHeader, ResponsiveGrid, StaggeredCards, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function AlbumCoversProject() {
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

      <PageTitleSection title="Album Covers" subtitle="A set of vinyl album cover designs created as a personal project" />

      {/* Hero — Overlapping Images */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
          className="album-overlap-images"
        >
          <div
            style={{
              position: 'relative',
              width: '55%',
              flexShrink: 0,
              zIndex: 1,
            }}
          >
            <Image
              src="/images/page_albums/Album_Saga_V1.png"
              alt="Album Saga cover version 1"
              width={1200}
              height={1200}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: `${radius.base}px`,
              }}
            />
          </div>
          <div
            className="album-overlap-img-right"
            style={{
              position: 'relative',
              width: '55%',
              flexShrink: 0,
              marginLeft: '-10%',
              marginTop: `${spacing.xxl}px`,
              zIndex: 2,
            }}
          >
            <Image
              src="/images/page_albums/Album_Spikes_Light.png"
              alt="Album Spikes light variant"
              width={1200}
              height={1200}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: `${radius.base}px`,
              }}
            />
          </div>
        </div>
      </SectionContainer>

      {/* Full Width Description Card */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <ImportantText marginBottom="medium">
          These Covers represent a personal exploration of cover art systems, created to test new tools, workflows, and visual directions. The work focuses on iterating quickly, refining composition, and translating 3D form into concise 2D outcomes.
        </ImportantText>
      </SectionContainer>

      {/* Direction and Focus */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Direction and Focus
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="medium" alignItems="center" breakpoint={768}>
          {/* Left — Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1/1',
              overflow: 'hidden',
              borderRadius: `${radius.base}px`,
            }}
          >
            <Image
              src="/images/page_albums/Album_Spikes_Dark.png"
              alt="Album Spikes dark variant"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Right — Staggered Text Cards */}
          <StaggeredCards
            items={[
              {
                width: '90%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    The project developed in two directions. The first reinterprets an existing vinyl cover through a new visual language. The second is an original cover built around texture and a repeating 3D spike element. The spike was modeled in Blender and used as the central motif, arranged in rhythmic patterns to create depth and tension. Although the final deliverable is a 2D cover, the underlying structure remains intentionally three-dimensional.
                  </p>
                ),
              },
              {
                marginLeft: '20%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    Both directions include several iterations exploring variations in color, composition, and hierarchy to evaluate how small changes affect tone and readability. Blender was used for 3D modeling and rendering, Affinity for refinement and compositing, and Figma for layout exploration and presentation. The project highlights an interest in combining 3D assets with graphic design principles, and in using iterative personal work to develop both craft and workflow.
                  </p>
                ),
              },
            ]}
          />
        </ResponsiveGrid>
      </SectionContainer>

      {/* Large Image with Overlapping Staggered Cards */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <h2
          style={{
            fontSize: typography.fontSize.h2,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: `${spacing.large}px`,
          }}
        >
          Visual Approach
        </h2>

        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '400px',
          }}
          className="overlay-section"
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '55%',
              height: '100%',
              borderRadius: `${radius.base}px`,
              overflow: 'hidden',
            }}
            className="overlay-image"
          >
            <Image
              src="/images/page_albums/Album_Saga_B%26W.png"
              alt="Album Saga black and white variant"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Staggered Cards Overlapping Right Side */}
          <div
            style={{
              position: 'relative',
              marginLeft: '40%',
              display: 'flex',
              flexDirection: 'column',
              gap: `${spacing.small}px`,
              paddingTop: `${spacing.medium}px`,
              paddingBottom: `${spacing.medium}px`,
            }}
            className="overlay-cards"
          >
            <Card padding="small" style={{ width: '90%', marginLeft: '10%' }}>
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: `${spacing.xs}px`,
                }}
              >
                Typography as Identity
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                The cover text is taken from the original vinyl sleeve, keeping the album’s wording while adapting it to a new layout.  
              </p>
            </Card>

            <Card padding="small" style={{ width: '80%' }}>
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: `${spacing.xs}px`,
                }}
              >
                Texture &amp; Materiality
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                The designs incorporate grain, noise, and paper textures to honor the physical nature of vinyl. What looks flat on screen was designed to feel tactile when printed.
              </p>
            </Card>

            <Card padding="small" style={{ width: '85%', marginLeft: '15%' }}>
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: `${spacing.xs}px`,
                }}
              >
                Composition
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Working within a perfect square demands deliberate placement. Asymmetric layouts and generous whitespace create visual tension that draws the eye through each design.
              </p>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* Horizontal Scrolling Strip */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <h2
          style={{
            fontSize: typography.fontSize.h2,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: `${spacing.large}px`,
          }}
        >
          The Collection
        </h2>

        <ResponsiveGrid columns="1fr 1fr 1fr 1fr" gap="small" breakpoint={480}>
          {[
            '/images/page_albums/Album_Saga_V1.png',
            '/images/page_albums/Album_Saga_B%26W.png',
            '/images/page_albums/Album_Spikes_Light.png',
            '/images/page_albums/Album_Spikes_Dark.png',
          ].map((src, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1',
                overflow: 'hidden',
                borderRadius: `${radius.base}px`,
              }}
            >
              <Image
                src={src}
                alt={`Cover ${idx + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </ResponsiveGrid>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Blender', 'Affinity Designer', 'Affinity Photo', 'Figma']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
