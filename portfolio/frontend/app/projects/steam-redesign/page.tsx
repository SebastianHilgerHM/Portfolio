// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, SectionHeader, ImportantText, ResponsiveGrid, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function SteamRedesignProject() {
  const timelineSteps = [
    {
      number: '01',
      title: 'Research & User Interviews',
      text: 'Conducted a thorough audit of the existing Steam Community tab, documenting pain points through user interviews and analyzing community forum complaints to identify the most impactful areas for improvement.',
    },
    {
      number: '02',
      title: 'Wireframing',
      text: 'Created multiple wireframe iterations focusing on information architecture. Testing different navigation models and content hierarchies before committing to a visual direction ensured the foundation was solid.',
    },
    {
      number: '03',
      title: 'High-Fidelity Click Dummy',
      text: 'Moved into creating an interactive Click Dummy in Figma, establishing a refined visual language that aligns with Steam\'s evolving design system while introducing cleaner layouts and more breathing room for user-generated content, as well as providing an interactive experience for users.',
    },
    {
      number: '04',
      title: 'User Testing & Iteration',
      text: 'Tested Click Dummy with a small user group and iterated based on their feedback. Key improvements included simplified filter structure, and better content previews.',
    },
  ];

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

      <PageTitleSection title="Steam Community-Tab Redesign" subtitle="A UX-focused redesign concept for Steam's community section" />

      {/* Full Width Hero Image */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <div
          style={{
            width: '100%',
            position: 'relative',
          }}
        >
          <Image
            src="/images/page_steam/Steam_Main.png"
            alt="Steam Community Tab Redesign Overview"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: `${radius.base}px`,
            }}
          />
        </div>
      </SectionContainer>

      {/* Problem / Solution - Two Wide Cards Stacked */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: `${spacing.medium}px`,
          }}
        >
          <Card>
            <ResponsiveGrid columns="300px 1fr" gap="medium" alignItems="start" breakpoint={768}>
              <h2
                style={{
                  fontSize: typography.fontSize.h2,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.accent,
                  fontFamily: typography.fontFamily.serif,
                  lineHeight: 1,
                }}
              >
                About the Project
              </h2>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                "Steam Community-Tab Redesign" was completed as part of a university course focused on improving the usability of an existing digital product. In collaboration with a teammate, we redesigned the Steam Community Hub to address navigational complexity and low discoverability of community content.
              </p>
            </ResponsiveGrid>
          </Card>
        </div>
      </SectionContainer>

      {/* Design Process - Vertical Timeline */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Design Process
        </SectionHeader>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            position: 'relative',
            paddingLeft: `${spacing.large}px`,
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '18px',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: colors.text_primary,
              opacity: 0.3,
            }}
          />

          {timelineSteps.map((step, index) => (
            <div
              key={step.number}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: `${spacing.medium}px`,
                paddingBottom: index < timelineSteps.length - 1 ? `${spacing.large}px` : 0,
                position: 'relative',
              }}
              className="timeline-step"
            >
              {/* Step dot */}
              <div
                style={{
                  position: 'absolute',
                  left: `-${spacing.large - 10}px`,
                  top: '6px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: colors.accent,
                  border: `3px solid ${colors.background}`,
                }}
              />

              <span
                style={{
                  fontSize: typography.fontSize.h2,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.accent,
                  fontFamily: typography.fontFamily.serif,
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  style={{
                    fontSize: typography.fontSize.h3,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.text_primary,
                    marginBottom: `${spacing.xs}px`,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_primary,
                    lineHeight: typography.lineHeight.normal,
                  }}
                >
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Overlapping images */}
        <style jsx>{`
          @media (max-width: 768px) {
            .steam-overlap-images {
              flex-direction: column !important;
            }
            .steam-overlap-images > div {
              width: 100% !important;
              margin-left: 0 !important;
            }
            .steam-overlap-img-right {
              margin-left: 0 !important;
              margin-top: -${spacing.large}px !important;
            }
          }
        `}</style>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginTop: `${spacing.xxl}px`,
          }}
          className="steam-overlap-images"
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
              src="/images/page_steam/Steam_Old.png"
              alt="Steam original community tab"
              width={1200}
              height={675}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: `${radius.base}px`,
              }}
            />
          </div>
          <div
            className="steam-overlap-img-right"
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
              src="/images/page_steam/Steam_Post.png"
              alt="Steam redesigned community post"
              width={1200}
              height={675}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: `${radius.base}px`,
              }}
            />
          </div>
        </div>
      </SectionContainer>

      {/* Design Principles - Side by Side Image + Stacked Cards */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Design Principles
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="medium" breakpoint={768}>
          {[
            {
              title: 'Interviews & User Research',
              desc: 'We conducted a series of semi-structured user interviews to understand how people currently navigate the Community Hub, where they get stuck, and which features they struggle to discover. These conversations helped us surface the most frequent pain points, clarify the underlying causes behind them, and translate qualitative feedback into clear usability themes that guided the redesign priorities.',
            },
            {
              title: 'Filtering & Categorization',
              desc: 'The current filter options feel limited and unclear, making it hard to understand what is being filtered, how filters combine, and which settings will actually help you find the content you are looking for.',
            },
            {
              title: 'Community Interaction',
              desc: 'Community interaction (comments, discussions, and engagement signals) was difficult to follow, because comment threads were visually fragmented across the interface and key engagement cues were easy to miss, making it hard to understand what people were responding to, which conversations were still active, and where to jump in.',
            },
            {
              title: 'UI Elements',
              desc: 'Multiple irrelevant UI elements were identified across the Community Hub interface, adding visual noise and pulling attention away from the most important actions and information.',
            },
          ].map((principle) => (
            <Card key={principle.title} padding="small">
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: `${spacing.xs}px`,
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                {principle.desc}
              </p>
            </Card>
          ))}
        </ResponsiveGrid>
      </SectionContainer>

      {/* Closing - Full Width Image + Reflection */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <div
          style={{
            width: '100%',
            position: 'relative',
            marginBottom: `${spacing.large}px`,
          }}
        >
          <Image
            src="/images/page_steam/Steam_Witcher.png"
            alt="Steam redesign Witcher community page"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: `${radius.base}px`,
            }}
          />
        </div>

        <Card>
          <ImportantText marginBottom="small">
            Redesign
          </ImportantText>
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.normal,
            }}
          >
            The redesign introduces clearer sorting and browsing by game and content type (for example: reviews, guides, artwork, and screenshots) to reduce cognitive load and improve findability. The homepage was also redesigned to emphasize personalization by prioritizing games a user owns or follows, creating a more relevant starting point.
          </p>

          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.normal,
            }}
          >
            The feed was updated to make engagement more legible at a glance, surfacing indicators such as likes and top comments before you open a post. Game-specific community pages were given a stronger visual identity, tying them more closely to the look and feel of the respective game.
          </p>

          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.normal,
            }}
          >
            This project demonstrates a research-driven approach to product redesign, with an emphasis on structure, personalization, and interaction visibility.
          </p>
        </Card>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Figma', 'Miro']} />
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
