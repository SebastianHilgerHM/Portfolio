// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, SectionHeader, ProjectCard } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function Home() {
  const projects = [
    {
      id: '1',
      title: 'D&D Chatbot',
      description: 'In a Team composed of four people, we created a interactive D&D Chatbot as part of a University Project',
      imageUrl: '/images/sample_chatbot.png',
      link: '/projects/chatbot',
    },
    {
      id: '2',
      title: 'Album Covers',
      description: 'A small Set of Vinyl Album Covers designed, as part of a personal project',
      imageUrl: '/images/sample_cover.png',
      link: '/projects/covers',
    },
    {
      id: '3',
      title: 'Poster Series',
      description: 'A Series of Posters designed as part of a University Assignment, showing various design concepts',
      imageUrl: '/images/sample_poster.png',
      link: '/projects/posters',
    },
  ];

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
      
      {/* Hero Section */}
      <div
        style={{
          width: '100%',
          minHeight: '75vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${spacing.xxl}px ${spacing.medium}px`,
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: `${spacing.xxl}px`,
            alignItems: 'center',
          }}
          className="hero-layout"
        >
          {/* Left Column - Text Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: `${spacing.medium}px`,
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: `${spacing.xs}px ${spacing.small}px`,
                backgroundColor: colors.accent,
                color: colors.background,
                fontSize: typography.fontSize.small,
                fontWeight: typography.fontWeight.bold,
                letterSpacing: '2px',
                width: 'fit-content',
                borderRadius: `${radius.small}px`,
              }}
            >
              PORTFOLIO 2025
            </div>
            
            <h1
              style={{
                fontSize: '72px',
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Design meets
              <br />
              <span style={{ color: colors.accent }}>Development</span>
            </h1>
            
            <p
              style={{
                fontSize: typography.fontSize.h4,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
                maxWidth: '500px',
              }}
            >
              Crafting digital experiences that blend creative design with functional code. 
              Exploring the intersection of aesthetics and technology.
            </p>

            <div
              style={{
                display: 'flex',
                gap: `${spacing.small}px`,
                marginTop: `${spacing.small}px`,
              }}
            >
              <a
                href="#works"
                style={{
                  padding: `${spacing.small}px ${spacing.medium}px`,
                  backgroundColor: colors.accent,
                  color: colors.background,
                  fontSize: typography.fontSize.body,
                  fontWeight: typography.fontWeight.medium,
                  textDecoration: 'none',
                  borderRadius: `${radius.small}px`,
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.opacity = '1';
                }}
              >
                View My Work
              </a>
              
              <a
                href="/contact"
                style={{
                  padding: `${spacing.small}px ${spacing.medium}px`,
                  backgroundColor: 'transparent',
                  color: colors.text_primary,
                  fontSize: typography.fontSize.body,
                  fontWeight: typography.fontWeight.medium,
                  textDecoration: 'none',
                  borderRadius: `${radius.small}px`,
                  border: `2px solid ${colors.text_secondary}`,
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.color = colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.text_secondary;
                  e.currentTarget.style.color = colors.text_primary;
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '1',
              }}
            >
              {/* Animated Background Circle */}
              <div
                className="hero-circle"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  border: `3px solid ${colors.accent}`,
                  opacity: 0.2,
                }}
              />
              
              {/* Rotating Border */}
              <div
                className="hero-rotating-border"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  border: `2px solid transparent`,
                  borderTopColor: colors.accent,
                  borderRightColor: colors.accent,
                }}
              />

              {/* Central Design Element */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '60%',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: '1fr 1fr',
                  gap: `${spacing.small}px`,
                }}
              >
                <div style={{ backgroundColor: colors.accent, borderRadius: `${radius.base}px` }} />
                <div style={{ backgroundColor: colors.card, borderRadius: `${radius.base}px` }} />
                <div style={{ backgroundColor: colors.card, borderRadius: `${radius.base}px` }} />
                <div style={{ backgroundColor: colors.accent, borderRadius: `${radius.base}px` }} />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes rotate {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          .hero-rotating-border {
            animation: rotate 8s linear infinite;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.2;
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              opacity: 0.3;
              transform: translate(-50%, -50%) scale(1.05);
            }
          }

          .hero-circle {
            animation: pulse 3s ease-in-out infinite;
          }

          @media (max-width: 1024px) {
            .hero-layout {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
            .hero-layout > div:first-child {
              align-items: center;
            }
            .hero-layout h1 {
              font-size: 56px !important;
            }
          }

          @media (max-width: 768px) {
            .hero-layout h1 {
              font-size: 42px !important;
            }
          }
        `}</style>
      </div>

      {/* Works Section */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge" id="works">
        <SectionHeader>SOME OF MY WORKS</SectionHeader>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: `${spacing.large}px`,
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              imagePosition={index % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
