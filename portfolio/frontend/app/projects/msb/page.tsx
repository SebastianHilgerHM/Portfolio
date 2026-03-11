// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P07 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, SectionHeader, ImportantText, ImageBlock, ResponsiveGrid, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function MsbProject() {
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

      {/* Title */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        <h1
          style={{
            fontSize: typography.fontSize.h1,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: spacing.xs,
            lineHeight: 1.05,
          }}
        >
          MSB Service Center
        </h1>
        <p
          style={{
            fontSize: typography.fontSize.h4,
            color: colors.text_primary,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
          }}
        >
          A research-driven service concept for Munich&apos;s city library
        </p>
      </SectionContainer>

      {/* Hero Image */}
      <SectionContainer paddingTop="small" paddingBottom="medium">
        <div style={{ width: '100%', borderRadius: radius.base, overflow: 'hidden' }}>
          <Image
            src="/images/page_msb/MSB_Main.png"
            alt="MSB Service Center Prototype"
            width={1400}
            height={788}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </SectionContainer>

      {/* Description */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <Card padding="large">
          <p
            style={{
              fontSize: typography.fontSize.h4,
              color: colors.text_primary,
              lineHeight: typography.lineHeight.loose,
              textAlign: 'center',
              maxWidth: '56.25rem',
              margin: '0 auto',
            }}
          >
            &ldquo;München Stadtbibliothek: Service Center&rdquo; was developed as part of a university course called <em>User Research</em>. The project started from real-world challenges presented by Munich&apos;s city administration and moved from qualitative research into concept development and rapid prototyping.
          </p>
        </Card>
      </SectionContainer>

      {/* Pivot - Accent title card */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="medium">
        <Card>
          <ResponsiveGrid columns="18.75rem 1fr" gap="medium" alignItems="start" breakpoint={768}>
            <h2
              style={{
                fontSize: typography.fontSize.h2,
                fontWeight: typography.fontWeight.bold,
                color: colors.accent,
                fontFamily: typography.fontFamily.serif,
                lineHeight: 1,
              }}
            >
              The Pivot
            </h2>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              We initially explored combining the library with a parcel station, in order to ease delivery traffic in the city center. Interview feedback however showed that this would disrupt the quiet atmosphere of the library, so we pivoted to an approach that would be less disruptive.
            </p>
          </ResponsiveGrid>
        </Card>
      </SectionContainer>

      {/* Concept Section - Stacked cards + image */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Concept
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="start" breakpoint={1024}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.medium,
            }}
          >
            <Card>
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: spacing.xs,
                }}
              >
                Public Service Hub
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Based on the research, we developed the &ldquo;MSB: Service Center&rdquo; concept, positioning the library as a public service hub where people can rent tools, technical equipment, and media.
              </p>
            </Card>

            <Card>
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: spacing.xs,
                }}
              >
                Social Accessibility
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                The concept extends shared access beyond books and focuses on social accessibility, especially for people who cannot afford expensive tools or recurring rental fees from private providers.
              </p>
            </Card>
          </div>

          <ImageBlock
            src="/images/page_msb/MSB_Item.png"
            alt="MSB Service Center concept"
            height="31.25rem"
          />
        </ResponsiveGrid>
      </SectionContainer>

      {/* Prototype Sprint - Full image + two cards */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Prototype Sprint
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="medium" breakpoint={768}>
          <Card>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: spacing.xs,
              }}
            >
              Hackathon Sprint
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              The research phase concluded with a hackathon-style sprint. We had about ten hours to turn findings into a prototype and pitch.
            </p>
          </Card>

          <Card>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: spacing.xs,
              }}
            >
              Core Logic
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              The interface is rough visually due to the time constraint, but it demonstrates the core interaction logic, including availability indicators and how service information would be integrated into an online rental flow.
            </p>
          </Card>
        </ResponsiveGrid>

        <div
          style={{
            width: '100%',
            position: 'relative',
            marginTop: spacing.large,
            marginBottom: spacing.large,
          }}
        >
          <Image
            src="/images/page_msb/MSB_Login.png"
            alt="MSB login screen"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: radius.base,
            }}
          />
        </div>

        <div
          style={{
            width: '100%',
            position: 'relative',
          }}
        >
          <Image
            src="/images/page_msb/MSB_Catalog.png"
            alt="MSB catalog view"
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

      {/* Closing Reflection */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <ImportantText>
          This project highlights how research-driven decisions and user feedback can reshape a product direction into a more viable concept.
        </ImportantText>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Figma', 'Miro', 'JavaScript']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
