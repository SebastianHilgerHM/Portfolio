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

export default function CatanProject() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: colors.background,
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '71.563rem 66.375rem',
      }}
    >
      <HeaderSection />

      <PageTitleSection title="Catan 3D" subtitle="A browser version of the classic Catan Boardgame" />

      {/* Hero Image */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        {/* Main Project Image */}
        <div
          style={{
            width: '100%',
            position: 'relative',
            marginBottom: spacing.xxl,
          }}
        >
          <Image
            src="/images/page_catan/0_withHUD.png"
            alt="Catan 3D Game Board"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: radius.base,
            }}
          />
        </div>

        {/* Description Section */}
        <ResponsiveGrid columns="1fr 1fr" gap="large" breakpoint={1024}>
          {/* Text Content */}
          <Card>
            <h2
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: spacing.small,
              }}
            >
              Recreating Catan in a Digital Format
            </h2>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              As part of a university course, our team of four developed a 3D digital version of the board game Catan. The project combined gameplay programming, interface design, and 3D asset creation into a unified product.
            </p>
          </Card>

          {/* Placeholder for additional content */}
          <div
            style={{
              position: 'relative',
              height: '25rem',
              borderRadius: radius.base,
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/page_catan/1_placeholder.png"
              alt="Catan placeholder"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: radius.base,
              }}
            />
          </div>
        </ResponsiveGrid>
      </SectionContainer>

      {/* Additional Content Sections - Two Column Layout */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Role &amp; Workflow
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="start" breakpoint={1024}>
          {/* Left Column - Images Stacked */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.large,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '25rem',
              }}
            >
              <Image
                src="/images/page_catan/2_port.png"
                alt="Catan detail 1"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: radius.base,
                }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '25rem',
              }}
            >
              <Image
                src="/images/page_catan/3_wheat.png"
                alt="Catan detail 2"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: radius.base,
                }}
              />
            </div>
          </div>

          {/* Right Column - Text Cards in Staggered Layout */}
          <StaggeredCards
            items={[
              {
                width: '70%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    My primary responsibility within the team was shaping the visual side of the project.
                  </p>
                ),
              },
              {
                marginLeft: '40%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    Returning to Blender after a long pause introduced some friction at the start, particularly when dealing with topology, shading, and consistency across different models.
                  </p>
                ),
              },
              {
                marginRight: '30%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    Alongside the modeling itself, I coordinated with the programming side to ensure the asset formats and scales fit smoothly into the existing logic and Unity pipeline.
                  </p>
                ),
              },
              {
                marginLeft: '35%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    This split workflow allowed the visuals and mechanics to evolve without blocking each other, creating a steady pace of iteration and refinement throughout the semester.
                  </p>
                ),
              },
            ]}
          />
        </ResponsiveGrid>

      </SectionContainer>

      {/* Weekly Experiments Section */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <SectionHeader level="h2" marginBottom="large">
          Visual Direction
        </SectionHeader>

        {/* Scrolling Images Container */}
        <ScrollingStrip gap="medium" className="scrolling-images">
          {['center', 'clay', 'ore', 'sheep', 'water', 'wood'].map((name) => (
            <div
              key={name}
              style={{
                position: 'relative',
                width: '18.75rem',
                height: '18.75rem',
                flexShrink: 0,
              }}
            >
              <Image
                src={`/images/page_catan/a_${name}.png`}
                alt={`Catan ${name}`}
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: radius.base,
                }}
              />
            </div>
          ))}
        </ScrollingStrip>
      </SectionContainer>

      {/* Additional Section - Text Left, Image Right + Full Width Image */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        {/* Two Column Layout */}
        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="start" style={{ marginBottom: spacing.xxl }} breakpoint={1024}>
          {/* Left Column - Text Cards in Staggered Layout */}
          <StaggeredCards
            items={[
              {
                marginLeft: '30%',
                width: '65%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    The finished 3D models leaned towards a low poly style, both to ensure that the visual quality of the project does not suffer and to keep the asset creation process manageable within the time constraints of the project.
                  </p>
                ),
              },
              {
                width: '50%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    The design process started with a number of prototype assets that were used to test the core mechanics of the game. In addition to this, I created multiple different parts for the models, whilst also looking for free 3D assets that could be used to fill out the tiles.
                  </p>
                ),
              },
              {
                marginLeft: '25%',
                width: '70%',
                content: (
                  <p style={{ fontSize: typography.fontSize.body, color: colors.text_secondary, lineHeight: typography.lineHeight.normal }}>
                    During the final stages of the project, I focused on assembling the different parts into cohesive models that could be importet into the game, while also itterating over the models to add more detail and polish.
                  </p>
                ),
              },
            ]}
          />

          {/* Right Column - Single Large Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '31.25rem',
            }}
          >
            <Image
              src="/images/page_catan/4_road.png"
              alt="Catan 3D render"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: radius.base,
              }}
            />
          </div>
        </ResponsiveGrid>

        {/* Full Width Image Below */}
        <div
          style={{
            width: '100%',
            position: 'relative',
          }}
        >
          <Image
            src="/images/page_catan/5_withoutHUD.png"
            alt="Catan game board overview"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: radius.base,
            }}
          />
        </div>

      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Blender', 'Figma', 'Python', 'Three.js']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
