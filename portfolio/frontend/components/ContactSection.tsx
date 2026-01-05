// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import { colors, spacing, typography, radius, shadows } from '@/lib/design-tokens';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Prepare for backend integration
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setShowForm(false);
    }
  };

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
            <h2
              style={{
                fontSize: typography.fontSize.h2,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: `${spacing.medium}px`,
              }}
            >
              Socials
            </h2>
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
            </div>
          </div>

          {/* Email Section */}
          <div>
            <h2
              style={{
                fontSize: typography.fontSize.h2,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: `${spacing.medium}px`,
              }}
            >
              Email
            </h2>
            <div
              style={{
                backgroundColor: colors.primary,
                borderRadius: `${radius.base}px`,
                padding: `${spacing.medium}px`,
                boxShadow: shadows.card,
              }}
            >
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
                  <button
                    onClick={() => setShowForm(true)}
                  style={{
                    display: 'inline-block',
                    padding: `${spacing.xs}px ${spacing.small}px`,
                    backgroundColor: 'transparent',
                    border: `2px solid ${colors.accent}`,
                    borderRadius: `${radius.base}px`,
                    color: colors.accent,
                    fontSize: typography.fontSize.body,
                    fontWeight: typography.fontWeight.medium,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    animation: 'fadeIn 0.3s ease-in',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                    e.currentTarget.style.color = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.accent;
                  }}
                >
                  Email Me
                </button>
                </>
              ) : (
                <form onSubmit={handleSubmit} style={{ animation: 'fadeIn 0.3s ease-in' }}>
                  <div style={{ marginBottom: `${spacing.small}px` }}>
                    <label
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontSize: typography.fontSize.body_small,
                        color: colors.text_primary,
                        marginBottom: '4px',
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: `${spacing.xs}px`,
                        backgroundColor: colors.background,
                        border: `1px solid ${errors.name ? '#ff4444' : colors.text_secondary}`,
                        borderRadius: `${radius.base}px`,
                        color: colors.text_primary,
                        fontSize: typography.fontSize.body,
                        outline: 'none',
                      }}
                    />
                    {errors.name && (
                      <span style={{ fontSize: typography.fontSize.body_small, color: '#ff4444' }}>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div style={{ marginBottom: `${spacing.small}px` }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: typography.fontSize.body_small,
                        color: colors.text_primary,
                        marginBottom: '4px',
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: `${spacing.xs}px`,
                        backgroundColor: colors.background,
                        border: `1px solid ${errors.email ? '#ff4444' : colors.text_secondary}`,
                        borderRadius: `${radius.base}px`,
                        color: colors.text_primary,
                        fontSize: typography.fontSize.body,
                        outline: 'none',
                      }}
                    />
                    {errors.email && (
                      <span style={{ fontSize: typography.fontSize.body_small, color: '#ff4444' }}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div style={{ marginBottom: `${spacing.small}px` }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontSize: typography.fontSize.body_small,
                        color: colors.text_primary,
                        marginBottom: '4px',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: `${spacing.xs}px`,
                        backgroundColor: colors.background,
                        border: `1px solid ${errors.message ? '#ff4444' : colors.text_secondary}`,
                        borderRadius: `${radius.base}px`,
                        color: colors.text_primary,
                        fontSize: typography.fontSize.body,
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: typography.fontFamily.mono,
                      }}
                    />
                    {errors.message && (
                      <span style={{ fontSize: typography.fontSize.body_small, color: '#ff4444' }}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: `${spacing.xs}px` }}>
                    <button
                      type="submit"
                      style={{
                        padding: `${spacing.xs}px ${spacing.small}px`,
                        backgroundColor: colors.accent,
                        border: 'none',
                        borderRadius: `${radius.base}px`,
                        color: colors.primary,
                        fontSize: typography.fontSize.body,
                        fontWeight: typography.fontWeight.medium,
                        cursor: 'pointer',
                        transition: 'opacity 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                    >
                      Send
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setFormData({ name: '', email: '', message: '' });
                        setErrors({ name: '', email: '', message: '' });
                      }}
                      style={{
                        padding: `${spacing.xs}px ${spacing.small}px`,
                        backgroundColor: 'transparent',
                        border: `2px solid ${colors.text_secondary}`,
                        borderRadius: `${radius.base}px`,
                        color: colors.text_secondary,
                        fontSize: typography.fontSize.body,
                        fontWeight: typography.fontWeight.medium,
                        cursor: 'pointer',
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
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
    </section>
  );
};

export default ContactSection;
