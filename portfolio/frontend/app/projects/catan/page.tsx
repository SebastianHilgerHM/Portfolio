// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card } from '@/components/ui';
import { colors, spacing, typography } from '@/lib/design-tokens';

export default function CatanProject() {
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

      {/* Hero Section with Title and Image */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        {/* Title */}
        <div style={{ marginBottom: `${spacing.large}px` }}>
          <h1
            style={{
              fontSize: typography.fontSize.h1,
              fontWeight: typography.fontWeight.bold,
              color: colors.text_primary,
              marginBottom: `${spacing.xs}px`,
            }}
          >
            Catan 3D
          </h1>
          <p
            style={{
              fontSize: typography.fontSize.h3,
              color: colors.text_secondary,
              fontWeight: typography.fontWeight.regular,
            }}
          >
            A browser version of the classic Catan Boardgame
          </p>
        </div>

        {/* Main Project Image */}
        <div
          style={{
            width: '100%',
            position: 'relative',
            marginBottom: `${spacing.xxl}px`,
          }}
        >
          <Image
            src="/images/catan_3d.png"
            alt="Catan 3D Game Board"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: `${spacing.xs}px`,
            }}
          />
        </div>

        {/* Description Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: `${spacing.large}px`,
            alignItems: 'start',
          }}
          className="project-content"
        >
          {/* Text Content */}
          <Card>
            <h2
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: `${spacing.small}px`,
              }}
            >
              Recreating Catan in a Digital Format
            </h2>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_primary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Card>

          {/* Placeholder for additional content */}
          <div
            style={{
              backgroundColor: colors.text_secondary,
              opacity: 0.2,
              height: '400px',
              borderRadius: `${spacing.xs}px`,
            }}
          />
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .project-content {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </SectionContainer>

      {/* Additional Content Sections - Two Column Layout */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: `${spacing.large}px`,
            alignItems: 'center',
          }}
          className="cluster-layout"
        >
          {/* Left Column - Images Stacked */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: `${spacing.large}px`,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '400px',
              }}
            >
              <Image
                src="/images/catan_3d.png"
                alt="Catan detail 1"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: `${spacing.xs}px`,
                }}
              />
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '400px',
              }}
            >
              <Image
                src="/images/catan_3d.png"
                alt="Catan detail 2"
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: `${spacing.xs}px`,
                }}
              />
            </div>
          </div>

          {/* Right Column - Text Cards in Staggered Layout */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: `${spacing.small}px`,
              position: 'relative',
            }}
            className="text-cluster"
          >
            <Card padding="small" style={{ width: '70%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_primary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '40%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_primary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </Card>
            <Card padding="small" style={{ marginRight: '30%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_primary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '35%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_primary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
            </Card>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .cluster-layout {
              grid-template-columns: 1fr !important;
            }
            .text-cluster > div {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
        `}</style>
      </SectionContainer>

      {/* Weekly Experiments Section */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <h2
          style={{
            fontSize: typography.fontSize.h2,
            fontWeight: typography.fontWeight.bold,
            color: colors.text_primary,
            marginBottom: `${spacing.large}px`,
          }}
        >
          Weekly Experiments
        </h2>

        {/* Scrolling Images Container */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            className="scrolling-images"
            style={{
              display: 'flex',
              gap: `${spacing.medium}px`,
              animation: 'scroll 30s linear infinite',
            }}
          >
            {/* Duplicate the images for seamless loop */}
            {[...Array(2)].map((_, groupIndex) => (
              <div
                key={groupIndex}
                style={{
                  display: 'flex',
                  gap: `${spacing.medium}px`,
                  flexShrink: 0,
                }}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    style={{
                      position: 'relative',
                      width: '300px',
                      height: '300px',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src="/images/catan_3d.png"
                      alt={`Experiment ${num}`}
                      fill
                      style={{
                        objectFit: 'cover',
                        borderRadius: `${spacing.xs}px`,
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .scrolling-images {
            will-change: transform;
          }

          @media (max-width: 768px) {
            .scrolling-images > div > div {
              width: 200px !important;
              height: 200px !important;
            }
          }
        `}</style>
      </SectionContainer>

      {/* Additional Section - Text Left, Image Right + Full Width Image */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        {/* Two Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: `${spacing.large}px`,
            alignItems: 'center',
            marginBottom: `${spacing.xxl}px`,
          }}
          className="reverse-cluster-layout"
        >
          {/* Left Column - Text Cards in Staggered Layout */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: `${spacing.small}px`,
              position: 'relative',
            }}
            className="text-cluster-left"
          >
            <Card padding="small" style={{ marginLeft: '30%', width: '65%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_primary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
            </Card>
            <Card padding="small" style={{ width: '50%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_primary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '25%', width: '70%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_primary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </Card>
          </div>

          {/* Right Column - Single Large Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '500px',
            }}
          >
            <Image
              src="/images/catan_3d.png"
              alt="Catan 3D render"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: `${spacing.xs}px`,
              }}
            />
          </div>
        </div>

        {/* Full Width Image Below */}
        <div
          style={{
            width: '100%',
            position: 'relative',
          }}
        >
          <Image
            src="/images/catan_3d.png"
            alt="Catan game board overview"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: `${spacing.xs}px`,
            }}
          />
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .reverse-cluster-layout {
              grid-template-columns: 1fr !important;
            }
            .text-cluster-left > div {
              margin-left: 0 !important;
              width: 100% !important;
            }
          }
        `}</style>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
