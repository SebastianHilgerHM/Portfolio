// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card } from '@/components/ui';
import { colors, spacing, typography } from '@/lib/design-tokens';

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

      {/* Hero Section with Title */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        {/* Title */}
        <div style={{ marginBottom: `${spacing.xxl}px` }}>
          <h1
            style={{
              fontSize: typography.fontSize.h1,
              fontWeight: typography.fontWeight.bold,
              color: colors.text_primary,
              marginBottom: `${spacing.xs}px`,
            }}
          >
            Black and White Poster Series
          </h1>
          <p
            style={{
              fontSize: typography.fontSize.h3,
              color: colors.text_primary,
              fontWeight: typography.fontWeight.regular,
            }}
          >
            A Series of black and white posters that were created as part of a university course
          </p>
        </div>

        {/* Top Row - Horizontal Poster Grid with Scrolling Animation */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: `${spacing.xxl}px`,
          }}
        >
          <div
            className="scrolling-posters"
            style={{
              display: 'flex',
              gap: `${spacing.small}px`,
            }}
          >
            {/* Duplicate the posters for seamless loop */}
            {[...Array(2)].map((_, groupIndex) => (
              <div
                key={groupIndex}
                style={{
                  display: 'flex',
                  gap: `${spacing.small}px`,
                  flexShrink: 0,
                }}
              >
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
                      borderRadius: `${spacing.xs}px`,
                    }}
                  >
                    <Image
                      src={`/images/page_posters/${num - 1}_final_${num}.png`}
                      alt={`Final Poster ${num}`}
                      fill
                      style={{
                        objectFit: 'cover',
                      }}
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
                    borderRadius: `${spacing.xs}px`,
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
                      borderRadius: `${spacing.xs}px`,
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
            ))}
          </div>
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
                borderRadius: `${spacing.xs}px`,
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

        <style jsx>{`
          @media (max-width: 1024px) {
            .poster-grid-bottom {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            :global(.scrolling-posters) > div > div {
              width: 180px !important;
            }
          }
          @media (max-width: 768px) {
            .poster-grid-bottom {
              grid-template-columns: 1fr !important;
            }
            :global(.scrolling-posters) > div > div {
              width: 150px !important;
            }
          }
        `}</style>
      </SectionContainer>

      {/* Description Section */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <h2
          style={{
            fontSize: typography.fontSize.h2,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: `${spacing.large}px`,
          }}
        >
          An Ode to Trash
        </h2>
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: `${spacing.large}px`,
            alignItems: 'center',
            justifyItems: 'center',
            marginBottom: `${spacing.xxl}px`,
          }}
          className="interpretation-layout"
        >
          {/* Left Column - Text Cards in Staggered Layout */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: `${spacing.small}px`,
              position: 'relative',
              alignItems: 'center',
            }}
            className="interpretation-text"
          >
            <Card padding="small" style={{ width: '70%' }}>
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
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                My series tackles scam and phishing emails by visualizing them as looming, water-related entities, often with the concept of "drowning" in the overwhelming number of mails. This was done to create a link to the topic of course before us, as their final series was connected to water.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '35%', width: '60%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Although it did not start with this focus, the first few designs leaned much more heavily on the ever growing involvement of AI in the generation on spam- and phishing-mails and the ever growing threat they pose to internet traffic.
              </p>
            </Card>
            <Card padding="small" style={{ width: '75%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Another iteration was much more focused on delivering actual specific data by showcasing numbers and putting them into perspective. This concept was later scrapped in favour of a more artistic approach.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '25%', width: '65%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Each poster uses shifting light–dark divides and clustered typography to echo the feeling of being overwhelmed by digital junk, turning inbox pollution into a creeping, almost tidal force.
              </p>
            </Card>
          </div>

          {/* Right Column - Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1/1.414',
              overflow: 'hidden',
              borderRadius: `${spacing.xs}px`,
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
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .interpretation-layout {
              grid-template-columns: 1fr !important;
            }
            .interpretation-text > div {
              margin-left: 0 !important;
              width: 100% !important;
            }
          }
        `}</style>
      </SectionContainer>

      {/* Weekly Experiments Section */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <h2
          style={{
            fontSize: typography.fontSize.h2,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: `${spacing.xs}px`,
          }}
        >
          Weekly Experiments
        </h2>
        <p
          style={{
            fontSize: typography.fontSize.h4,
            color: colors.text_primary,
            lineHeight: typography.lineHeight.normal,
            marginBottom: `${spacing.large}px`,
          }}
        >
          A collection of most of my Posters
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
                borderRadius: `${spacing.xs}px`,
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

        <style jsx>{`
          @media (max-width: 1024px) {
            .experiments-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 768px) {
            .experiments-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
