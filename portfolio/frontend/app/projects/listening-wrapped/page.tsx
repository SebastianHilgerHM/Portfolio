// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P07 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, ImportantText, ResponsiveGrid, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius, shadows } from '@/lib/design-tokens';

export default function ListeningWrappedProject() {
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

      {/* ── Title ── */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        <h1
          style={{
            fontSize: typography.fontSize.h1,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            lineHeight: 1.05,
            marginBottom: spacing.xs,
          }}
        >
          Listening Wrapped
        </h1>
        <p
          style={{
            fontSize: typography.fontSize.h4,
            color: colors.text_primary,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
          }}
        >
          Visualizing Spotify listening data through rhythm, energy, and motion
        </p>
      </SectionContainer>

      {/* ── Hero Image ── */}
      <SectionContainer paddingTop="small" paddingBottom="medium">
        <div
          style={{
            width: '100%',
            borderRadius: radius.base,
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/page_listening_wrapped/Spotify_Main.png"
            alt="Listening Wrapped Interface"
            width={1400}
            height={788}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </SectionContainer>

      {/* ── Keyword highlights row ── */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <div
          className="keyword-row"
          style={{
            display: 'flex',
            gap: spacing.small,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {['BPM', 'Danceability', 'Energy', '3D Vinyl', '4 Screens'].map((word) => (
            <span
              key={word}
              style={{
                padding: `${spacing.xs} ${spacing.medium}`,
                backgroundColor: colors.primary,
                borderRadius: radius.base,
                border: `0.0625rem solid ${colors.accent}`,
                color: colors.accent,
                fontSize: typography.fontSize.h4,
                fontFamily: typography.fontFamily.mono,
                fontWeight: typography.fontWeight.semibold,
                boxShadow: shadows.card,
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </SectionContainer>

      {/* ── About — full-width card ── */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
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
            &ldquo;Listening Wrapped&rdquo; is a university project based on personal Spotify listening history, built to explore how data can be presented in a visual and interactive way.
          </p>
        </Card>
      </SectionContainer>

      {/* ── Focus — accent bar + card ── */}
      <SectionContainer paddingTop="large" paddingBottom="xxlarge">
        <Card>
          <div style={{ display: 'flex', gap: spacing.medium, alignItems: 'stretch' }}>
            <div
              style={{
                width: '0.25rem',
                flexShrink: 0,
                backgroundColor: colors.accent,
                borderRadius: '0.125rem',
              }}
            />
            <div>
              <h2
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.accent,
                  marginBottom: spacing.xs,
                }}
              >
                Beyond &ldquo;Top Artists&rdquo;
              </h2>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.loose,
                }}
              >
                Instead of focusing on typical &ldquo;top artists&rdquo; summaries, the project emphasizes rhythmic attributes such as BPM (beats per minute) and danceability to identify patterns in how energy and movement show up across listening behavior over time.
              </p>
            </div>
          </div>
        </Card>
      </SectionContainer>

      {/* ── Image with floating caption card ── */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <div
          className="floating-caption-wrapper"
          style={{
            position: 'relative',
            width: '100%',
          }}
        >
          <Image
            src="/images/page_listening_wrapped/Spotify_Bar.png"
            alt="Listening Wrapped bar chart visualization"
            width={1400}
            height={788}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: radius.base,
            }}
          />
          {/* Floating card overlapping bottom-right */}
          <div
            className="floating-card"
            style={{
              position: 'absolute',
              bottom: `-${spacing.large}`,
              right: spacing.medium,
              maxWidth: '26.25rem',
            }}
          >
            <Card padding="medium">
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: spacing.xs,
                }}
              >
                3D Vinyl Anchor
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                A 3D vinyl record acts as the main design element and interaction anchor. The site is split into four screens, and the vinyl shifts position and context as the user moves through the experience, reinforcing continuity across views.
              </p>
            </Card>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <ResponsiveGrid columns="1fr 1fr" gap="medium" alignItems="start" breakpoint={768}>
          <Card padding="large">
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: spacing.xs,
              }}
            >
              Minimal Charts, Maximum Feel
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.loose,
              }}
            >
              Charts and graphs are intentionally minimal (line and bar charts) to keep attention on motion, transitions, and interaction feel. The experience is self-contained and based on a single dataset, with no user upload feature.
            </p>
          </Card>
          <div
            style={{
              borderRadius: radius.base,
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/page_listening_wrapped/Spotify_Line.png"
              alt="Listening Wrapped line chart visualization"
              width={700}
              height={500}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </ResponsiveGrid>
      </SectionContainer>

      {/* ── List View ── */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <div
          style={{
            width: '100%',
            borderRadius: radius.base,
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/page_listening_wrapped/Spotify_List.png"
            alt="Listening Wrapped list view"
            width={1400}
            height={788}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Next.js', 'TypeScript', 'D3.js', 'Svelte']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
