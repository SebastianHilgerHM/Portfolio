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
              color: colors.text_primary,
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
            src="/images/page_catan/0_withHUD.png"
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
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              As part of a university course, our team of four developed a 3D digital version of the board game Catan. The project combined gameplay programming, interface design, and 3D asset creation into a unified product. To keep development moving efficiently, we implemented large parts of the game logic early using temporary placeholder pieces. This made it possible to test core interactions, resource distribution, and turn mechanics in parallel while I worked on producing the finalized assets.
            </p>
          </Card>

          {/* Placeholder for additional content */}
          <div
            style={{
              position: 'relative',
              height: '400px',
              borderRadius: `${spacing.xs}px`,
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/page_catan/1_placeholder.png"
              alt="Catan placeholder"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: `${spacing.xs}px`,
              }}
            />
          </div>
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
                src="/images/page_catan/2_port.png"
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
                src="/images/page_catan/3_wheat.png"
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
              <h3
                style={{
                  fontSize: typography.fontSize.h3,
                  fontWeight: typography.fontWeight.bold,
                  color: colors.text_primary,
                  marginBottom: `${spacing.xs}px`,
                }}
              >
                Role & Workflow
              </h3>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                My primary responsibility within the team was shaping the visual side of the project.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '40%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Returning to Blender after a long pause introduced some friction at the start, particularly when dealing with topology, shading, and consistency across different models.
              </p>
            </Card>
            <Card padding="small" style={{ marginRight: '30%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Alongside the modeling itself, I coordinated with the programming side to ensure the asset formats and scales fit smoothly into the existing logic and Unity pipeline.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '35%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                This split workflow allowed the visuals and mechanics to evolve without blocking each other, creating a steady pace of iteration and refinement throughout the semester.
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
          Visual Direction
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
                {['center', 'clay', 'ore', 'sheep', 'water', 'wood'].map((name) => (
                  <div
                    key={name}
                    style={{
                      position: 'relative',
                      width: '300px',
                      height: '300px',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={`/images/page_catan/a_${name}.png`}
                      alt={`Catan ${name}`}
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
          @media (max-width: 768px) {
            :global(.scrolling-images) > div > div {
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
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                The finished 3D models leaned toward stylized realism, aiming for clear visual readability without becoming overly detailed.
              </p>
            </Card>
            <Card padding="small" style={{ width: '50%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                The finished 3D models leaned toward stylized realism, aiming for clear visual readability without becoming overly detailed.
              </p>
            </Card>
            <Card padding="small" style={{ marginLeft: '25%', width: '70%' }}>
              <p
                style={{
                  fontSize: typography.fontSize.body,
                  color: colors.text_secondary,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                Subtle environmental lighting helped bind the scene together, giving the board a cohesive digital presence distinct from the physical tabletop version.
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
              src="/images/page_catan/4_road.png"
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
            src="/images/page_catan/5_withoutHUD.png"
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
