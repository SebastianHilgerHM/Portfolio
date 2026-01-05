// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import { colors, spacing, typography, radius, shadows } from '@/lib/design-tokens';

interface ResumeEntry {
  dateRange: string;
  title: string;
  description: string;
  image?: string;
}

interface ResumeSectionProps {
  educationEntries?: ResumeEntry[];
  workEntries?: ResumeEntry[];
}

const ResumeSection = ({
  educationEntries = [
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
  ],
  workEntries = [
    {
      dateRange: 'Dec 2021 - Aug 2025',
      title: 'Thorma Editing',
      description:
        'Freelance video editor, working on various commercial, industrial, and social media projects.',
    },
  ],
}: ResumeSectionProps) => {
  return (
    <section
      style={{
        width: '100%',
        paddingTop: `${spacing.medium}px`,
        paddingBottom: `${spacing.xxl}px`,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: `${spacing.medium}px`,
          paddingRight: `${spacing.medium}px`,
        }}
      >
        {/* Education Section */}
        <div style={{ marginBottom: `${spacing.large}px` }}>
          <h2
            style={{
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.bold,
              color: colors.text_primary,
              marginBottom: `${spacing.medium}px`,
            }}
          >
            Education
          </h2>

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
              <div
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: `${radius.base}px`,
                  padding: `${spacing.medium}px`,
                  boxShadow: shadows.card,
                }}
              >
                <h3
                  style={{
                    fontSize: typography.fontSize.h4,
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

                {/* Image */}
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
              </div>
            </div>
          ))}
        </div>

        {/* Work Experience Section */}
        <div>
          <h2
            style={{
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.bold,
              color: colors.text_primary,
              marginBottom: `${spacing.medium}px`,
            }}
          >
            Work Experience
          </h2>

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
              <div
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: `${radius.base}px`,
                  padding: `${spacing.medium}px`,
                  boxShadow: shadows.card,
                }}
              >
                <h3
                  style={{
                    fontSize: typography.fontSize.h4,
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

                {/* Image */}
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .resume-entry {
            grid-template-columns: 1fr !important;
            gap: ${spacing.xs}px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ResumeSection;
