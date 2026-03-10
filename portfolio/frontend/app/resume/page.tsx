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
        'I started attending the Munich University of Applied Sciences in October 2024, after studying Computer Science at LMU for two Semesters. With my application for Computer Science and Design at MUC.DAI, I took a major shift towards a more design-oriented focus. I am currently in my fourth semester.',
      image: '/images/resume/0_hm.jpg',
    },
    {
      dateRange: 'Sep 2020 - Jul 2023',
      title: 'FOS Erding',
      description:
        'I attended FOS Erding before starting university, focusing on the technical branch. At the time, I wasn’t fully aware of how useful the practical orientation and project work would become later. Looking back, the mix of applied subjects and hands-on experience helped me build a solid foundation for my studies and confirmed my interest in the tech and design field.',
      image: '/images/resume/1_fos.jpeg',
    },
  ];

  const workEntries = [
    {
      dateRange: 'Dec 2022 - Aug 2025',
      title: 'Therme Erding - Cashier',
      description:
        'I worked at Therme Erding as a cashier for about 2.5 years. Besides handling transactions at the register, I took care of various administrative and organizational tasks in the office. I was also involved in customer service away from the counter, helping guests with questions and requests throughout the facility.',
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
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
