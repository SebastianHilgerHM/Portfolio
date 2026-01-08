// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, SectionHeader, Button, ContactForm } from '@/components/ui';
import { colors, spacing, typography } from '@/lib/design-tokens';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const socials = [
    { platform: 'Instagram', handle: '@', url: 'https://instagram.com' },
    { platform: 'LinkedIn', handle: '@', url: 'https://linkedin.com' },
  ];

  const emailAddress = 'contact@example.com';

  const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Form submitted:', data);
    setShowForm(false);
  };

  return (
    <main 
      style={{ 
        backgroundColor: colors.background,
        minHeight: '100vh',
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '1145px 1062px',
        backgroundPosition: '0 0',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <HeaderSection />
      <PageTitleSection title="Contact" />
      
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: `${spacing.large}px`,
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Socials Section */}
          <div>
            <SectionHeader level="h2" marginBottom="medium">
              Socials
            </SectionHeader>
            <Card>
              <h3
                style={{
                  fontSize: typography.fontSize.body,
                  fontWeight: typography.fontWeight.medium,
                  color: colors.text_primary,
                  marginBottom: `${spacing.small}px`,
                }}
              >
                Contact me through my Socials...
              </h3>
              {socials.map((social) => (
                <div
                  key={social.platform}
                  style={{
                    marginBottom: `${spacing.xs}px`,
                  }}
                >
                  <p
                    style={{
                      fontSize: typography.fontSize.body,
                      color: colors.text_primary,
                      marginBottom: '4px',
                    }}
                  >
                    {social.platform}:
                  </p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: typography.fontSize.body,
                      color: colors.accent,
                      textDecoration: 'none',
                    }}
                  >
                    {social.handle}
                  </a>
                </div>
              ))}
            </Card>
          </div>

          {/* Email Section */}
          <div>
            <SectionHeader level="h2" marginBottom="medium">
              Email
            </SectionHeader>
            <Card>
              {!showForm ? (
                <>
                  <h3
                    style={{
                      fontSize: typography.fontSize.body,
                      fontWeight: typography.fontWeight.medium,
                      color: colors.text_primary,
                      marginBottom: `${spacing.small}px`,
                      animation: 'fadeIn 0.3s ease-in',
                    }}
                  >
                    ... or via Email directly
                  </h3>
                  <a
                    href={`mailto:${emailAddress}`}
                    style={{
                      fontSize: typography.fontSize.body,
                      color: colors.accent,
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: `${spacing.small}px`,
                      animation: 'fadeIn 0.3s ease-in',
                    }}
                  >
                    {emailAddress}
                  </a>
                  <Button variant="outline" onClick={() => setShowForm(true)}>
                    Email Me
                  </Button>
                </>
              ) : (
                <ContactForm
                  onSubmit={handleFormSubmit}
                  onCancel={() => setShowForm(false)}
                />
              )}
            </Card>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
