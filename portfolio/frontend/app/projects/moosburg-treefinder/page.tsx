// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P07 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, SectionHeader, ImportantText, ResponsiveGrid, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function MoosburgTreefinderProject() {
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

      {/* Title */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        <h1
          style={{
            fontSize: typography.fontSize.h1,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            lineHeight: 1.05,
            marginBottom: `${spacing.xs}px`,
          }}
        >
          Moosburg Treefinder
        </h1>
        <p
          style={{
            fontSize: typography.fontSize.h4,
            color: colors.text_primary,
            fontWeight: typography.fontWeight.regular,
            lineHeight: typography.lineHeight.normal,
          }}
        >
          A civic tool for climate-appropriate tree planting in Moosburg an der Isar
        </p>
      </SectionContainer>

      {/* Hero Image */}
      <SectionContainer paddingTop="small" paddingBottom="medium">
        <div style={{ width: '100%', borderRadius: `${radius.base}px`, overflow: 'hidden' }}>
          <Image
            src="/images/page_treefinder/Treefinder_Main.png"
            alt="Treefinder interface overview"
            width={1400}
            height={600}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </SectionContainer>

      {/* Context */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        <Card padding="large">
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.loose,
              marginBottom: `${spacing.medium}px`,
            }}
          >
            &ldquo;Moosburg Treefinder&rdquo; started as a collaboration with the city of Moosburg an der Isar. The project came out of a university course where city representatives presented real challenges, and we chose a problem focused on climate-appropriate tree planting and navigating local replacement regulations.
          </p>
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.loose,
            }}
          >
            The challenge had two parts: helping newly planted trees fit local climate and environment, and supporting a regulation that requires replacement plantings after tree removal depending on trunk diameter.
          </p>
        </Card>
      </SectionContainer>

      {/* Solution */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Solution
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="center" breakpoint={1024}>
          <Card>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.loose,
              }}
            >
              We developed &ldquo;Treefinder&rdquo;, a website that guides residents through a quiz to recommend suitable tree species for their situation. The platform also helps users fill out the necessary forms to submit to the city, reducing administrative effort while encouraging sustainable, climate-appropriate planting.
            </p>
          </Card>

          <div style={{ width: '100%', borderRadius: `${radius.base}px`, overflow: 'hidden' }}>
            <Image
              src="/images/page_treefinder/Treefinder_Info.png"
              alt="Treefinder info screen"
              width={700}
              height={500}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </ResponsiveGrid>
      </SectionContainer>

      {/* Process */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Process
        </SectionHeader>

        {/* Domain research */}
        <Card style={{ marginBottom: `${spacing.medium}px` }}>
          <ImportantText marginBottom="small">
            Domain Research
          </ImportantText>
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.loose,
            }}
          >
            To build domain understanding, we met with Moosburg&apos;s city gardener to learn what matters when choosing a tree, including soil conditions, space requirements, climate resilience, and long-term maintenance.
          </p>
        </Card>

        {/* Design to development */}
        <Card style={{ marginBottom: `${spacing.large}px` }}>
          <ImportantText marginBottom="small">
            Design to Development
          </ImportantText>
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.loose,
            }}
          >
            We started with hand-drawn wireframes, moved into Figma for refined layouts, built an interactive click dummy, and then developed a functional web prototype. The project concluded with a product pitch presenting the concept and prototype as a realistic civic service.
          </p>
        </Card>

        {/* Closing image */}
        <div style={{ width: '100%', borderRadius: `${radius.base}px`, overflow: 'hidden' }}>
          <Image
            src="/images/page_treefinder/Treefinder_Research.png"
            alt="Treefinder research overview"
            width={1400}
            height={600}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </SectionContainer>

      {/* The Questionnaire */}
      <SectionContainer paddingTop="large" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          The Questionnaire
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr 1fr" gap="small" breakpoint={768}>
          {[
            { src: '/images/page_treefinder/Treefinder_Quiz.png', alt: 'Treefinder quiz start' },
            { src: '/images/page_treefinder/Treefinder_Question.png', alt: 'Treefinder question screen' },
            { src: '/images/page_treefinder/Treefinder_Result.png', alt: 'Treefinder result screen' },
          ].map((img, idx) => (
            <div
              key={idx}
              style={{
                width: '100%',
                borderRadius: `${radius.base}px`,
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
        </ResponsiveGrid>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Figma', 'JavaScript']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
