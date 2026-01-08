// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, SectionHeader, Card } from '@/components/ui';
import { colors, spacing, typography, radius, shadows } from '@/lib/design-tokens';

export default function ResumePage() {
  const educationEntries = [
    {
      dateRange: 'Oct 2024 - Present',
      title: 'Munich University of Applied Sciences',
      description:
        'Bachelor\'s in Interaction Design and Interactive Media. Focused on user-centered design, interactive technologies, and digital prototyping.',
      image: '/images/university_placeholder.png',
    },
    {
      dateRange: 'Sep 2019 - Jul 2023',
      title: 'FOS Erding',
      description:
        'Successfully completed technical high school focusing on technology, design, and applied sciences.',
      image: '/images/school_placeholder.png',
    },
  ];

  const workEntries = [
    {
      dateRange: 'Dec 2021 - Aug 2025',
      title: 'Thorma Editing',
      description:
        'Freelance video editor, working on various commercial, industrial, and social media projects.',
    },
  ];

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#292929',
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '1145px 1062px',
      }}
    >
      <HeaderSection />
      <PageTitleSection title="Resume" />
      
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        {/* Education Section */}
        <div style={{ marginBottom: `${spacing.large}px` }}>
          <SectionHeader level="h3" marginBottom="medium">
            Education
          </SectionHeader>

          {educationEntries.map((entry, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: `${spacing.medium}px`,
                marginBottom: `${spacing.large}px`,
              }}
              className="resume-entry"
            >
              {/* Date Range */}
              <div>
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_primary,
                    fontWeight: typography.fontWeight.medium,
                  }}
                >
                  {entry.dateRange}
                </p>
              </div>

              {/* Content */}
              <Card>
                <h3
                  style={{
                    fontSize: typography.fontSize.h3,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.text_primary,
                    marginBottom: `${spacing.xs}px`,
                  }}
                >
                  {entry.title}
                </h3>
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_primary,
                    lineHeight: 1.6,
                    marginBottom: entry.image ? `${spacing.small}px` : '0',
                  }}
                >
                  {entry.description}
                </p>

                {entry.image && (
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '300px',
                      borderRadius: `${radius.base}px`,
                      overflow: 'hidden',
                      boxShadow: shadows.card,
                    }}
                  >
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <div>
          <SectionHeader level="h3" marginBottom="medium">
            Work Experience
          </SectionHeader>

          {workEntries.map((entry, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: `${spacing.medium}px`,
                marginBottom: `${spacing.large}px`,
              }}
              className="resume-entry"
            >
              {/* Date Range */}
              <div>
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_primary,
                    fontWeight: typography.fontWeight.medium,
                  }}
                >
                  {entry.dateRange}
                </p>
              </div>

              {/* Content */}
              <Card>
                <h3
                  style={{
                    fontSize: typography.fontSize.h3,
                    fontWeight: typography.fontWeight.bold,
                    color: colors.text_primary,
                    marginBottom: `${spacing.xs}px`,
                  }}
                >
                  {entry.title}
                </h3>
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_primary,
                    lineHeight: 1.6,
                    marginBottom: entry.image ? `${spacing.small}px` : '0',
                  }}
                >
                  {entry.description}
                </p>

                {entry.image && (
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '300px',
                      borderRadius: `${radius.base}px`,
                      overflow: 'hidden',
                      boxShadow: shadows.card,
                    }}
                  >
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .resume-entry {
              grid-template-columns: 1fr !important;
              gap: ${spacing.xs}px !important;
            }
          }
        `}</style>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
