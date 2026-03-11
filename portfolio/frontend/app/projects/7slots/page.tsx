// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P07 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, SectionHeader, ImportantText, ResponsiveGrid, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function SevenSlotsProject() {
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
            lineHeight: 1.05,
            marginBottom: spacing.xs,
          }}
        >
          7Clash
        </h1>
        <p
          style={{
            fontSize: typography.fontSize.h4,
            color: colors.text_primary,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
          }}
        >
          Building and breaking web applications to learn about security
        </p>
      </SectionContainer>

      {/* Hero Image */}
      <SectionContainer paddingTop="small" paddingBottom="medium">
        <div style={{ width: '100%', borderRadius: radius.base, overflow: 'hidden' }}>
          <Image
            src="/images/page_7clash/7Clash_Main.png"
            alt="7Clash gambling platform interface"
            width={1400}
            height={700}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </SectionContainer>

      {/* Context */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="start" breakpoint={1024}>
          <Card>
            <div style={{ display: 'flex', gap: spacing.medium, alignItems: 'stretch', height: '100%' }}>
              <div
                style={{
                  width: '0.25rem',
                  flexShrink: 0,
                  backgroundColor: colors.accent,
                  borderRadius: '0.125rem',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2
                  style={{
                    fontSize: typography.fontSize.h3,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.accent,
                    marginBottom: spacing.xs,
                  }}
                >
                  The Course
                </h2>
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_secondary,
                    lineHeight: typography.lineHeight.loose,
                  }}
                >
                  &ldquo;7Clash: Web Security&rdquo; was a university course where we learned about web vulnerabilities by building applications that could be attacked. Each team created a website and then participated in a controlled attack phase to identify weaknesses.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: 'flex', gap: spacing.medium, alignItems: 'stretch', height: '100%' }}>
              <div
                style={{
                  width: '0.25rem',
                  flexShrink: 0,
                  backgroundColor: colors.accent,
                  borderRadius: '0.125rem',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2
                  style={{
                    fontSize: typography.fontSize.h3,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.accent,
                    marginBottom: spacing.xs,
                  }}
                >
                  The Product
                </h2>
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_secondary,
                    lineHeight: typography.lineHeight.loose,
                  }}
                >
                  We built an online gambling platform with a virtual currency system, chosen because balances and transactions create realistic and complex surfaces for exploitation.
                </p>
              </div>
            </div>
          </Card>
        </ResponsiveGrid>
      </SectionContainer>

      {/* Implementation and Hardening */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Implementation and Hardening
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="start" breakpoint={1024}>
          <Card>
            <ImportantText marginBottom="small">
              Building the Product
            </ImportantText>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.loose,
              }}
            >
              The first part of the semester focused on the core product: defining game mechanics, setting up the database, and building user accounts. After that, we shifted to security by tightening input handling, authentication, session management, and database queries to reduce common vulnerabilities.
            </p>
          </Card>

          <div style={{ width: '100%', borderRadius: radius.base, overflow: 'hidden' }}>
            <Image
              src="/images/page_7clash/7Clash_Result.png"
              alt="7Clash result screen"
              width={700}
              height={500}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </ResponsiveGrid>

        <div style={{ marginTop: spacing.large }}>
          <Card>
            <ImportantText marginBottom="small">
              Attack Phase
            </ImportantText>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.loose,
              }}
            >
              In the final phase, teams attempted to exploit one another&apos;s applications using techniques such as SQL injection and CSS-based attacks. We also used tools like OWASP ZAP to scan for issues. The project provided practical experience in defensive thinking and in understanding how security problems emerge in real systems.
            </p>
          </Card>
        </div>
      </SectionContainer>

      {/* Closing image */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <div style={{ width: '100%', borderRadius: radius.base, overflow: 'hidden' }}>
          <Image
            src="/images/page_7clash/7Clash_Attack.png"
            alt="7Clash attack phase"
            width={1400}
            height={700}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </SectionContainer>

      {/* The Games */}
      <SectionContainer paddingTop="large" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          The Site
        </SectionHeader>

        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.small }}>
          {[
            { src: '/images/page_7clash/7Clash_Shop.png', alt: '7Clash shop screen' },
            { src: '/images/page_7clash/7Clash_Heist.png', alt: '7Clash heist game' },
            { src: '/images/page_7clash/7Clash_Game.png', alt: '7Clash game screen' },
          ].map((img, idx) => (
            <div
              key={idx}
              style={{
                width: '100%',
                borderRadius: radius.base,
                overflow: 'hidden',
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={700}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['HTML', 'Figma', 'TypeScript']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
