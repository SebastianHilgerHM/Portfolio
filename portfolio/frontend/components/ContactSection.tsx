// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P07 - Portfolio Website

'use client';

import { useState } from 'react';
import SectionContainer from './ui/SectionContainer';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';
import ContactForm from './ui/ContactForm';
import { colors, spacing, typography } from '@/lib/design-tokens';
import { contactApi } from '@/lib/api';

interface SocialLink {
  platform: string;
  handle: string;
  url: string;
}

interface ContactSectionProps {
  socials?: SocialLink[];
  emailAddress?: string;
}

const ContactSection = ({
  socials = [
    { platform: 'Instagram', handle: '@', url: 'https://instagram.com' },
    { platform: 'LinkedIn', handle: '@', url: 'https://linkedin.com' },
  ],
  emailAddress = 'contact@example.com',
}: ContactSectionProps) => {
  const [showForm, setShowForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleFormSubmit = async (data: { name: string; email: string; message: string }) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await contactApi.submit(data);

      if (response.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
        // Show detailed validation errors if available
        if (response.details && response.details.length > 0) {
          setErrorMessage(response.details.join(', '));
        } else {
          setErrorMessage(response.error || 'Failed to send message');
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  return (
    <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: spacing.large,
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
                marginBottom: spacing.small,
              }}
            >
              Contact me through my Socials...
            </h3>
            {socials.map((social) => (
              <div
                key={social.platform}
                style={{
                  marginBottom: spacing.xs,
                }}
              >
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.text_primary,
                    marginBottom: '0.25rem',
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
                  className="fade-in-animation"
                  style={{
                    fontSize: typography.fontSize.body,
                    fontWeight: typography.fontWeight.medium,
                    color: colors.text_primary,
                    marginBottom: spacing.small,
                  }}
                >
                  ... or via Email directly
                </h3>
                <a
                  href={`mailto:${emailAddress}`}
                  className="fade-in-animation"
                  style={{
                    fontSize: typography.fontSize.body,
                    color: colors.accent,
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: spacing.small,
                  }}
                >
                  {emailAddress}
                </a>
                <Button variant="outline" onClick={() => setShowForm(true)}>
                  Email Me
                </Button>
              </>
            ) : submitStatus === 'success' ? (
              <div className="fade-in-animation">
                <p
                  style={{
                    fontSize: typography.fontSize.body,
                    color: '#4CAF50',
                    fontWeight: typography.fontWeight.medium,
                  }}
                >
                  ✓ Message sent successfully!
                </p>
              </div>
            ) : (
              <>
                {submitStatus === 'error' && (
                  <p
                    style={{
                      fontSize: typography.fontSize.small,
                      color: '#f44336',
                      marginBottom: spacing.xs,
                    }}
                  >
                    {errorMessage}
                  </p>
                )}
                <ContactForm
                  onSubmit={handleFormSubmit}
                  onCancel={() => {
                    setShowForm(false);
                    setSubmitStatus('idle');
                    setErrorMessage('');
                  }}
                />
                {submitStatus === 'loading' && (
                  <p
                    style={{
                      fontSize: typography.fontSize.small,
                      color: colors.text_secondary,
                      marginTop: spacing.xs,
                    }}
                  >
                    Sending...
                  </p>
                )}
              </>
            )}
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
