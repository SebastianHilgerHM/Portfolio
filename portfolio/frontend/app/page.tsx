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
        backgroundSize: '71.563rem 66.375rem',
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
          padding: `${spacing.xxl} ${spacing.medium}`,
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '87.5rem',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: spacing.xxl,
            alignItems: 'center',
          }}
          className="hero-layout"
        >
          {/* Left Column - Text Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: spacing.medium,
            }}
          >
            
            <h1
              style={{
                fontSize: '4.5rem',
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Welcome to my
              <br />
              <span style={{ color: colors.accent }}>Portfolio</span>
            </h1>
            
            <p
              style={{
                fontSize: typography.fontSize.h4,
                color: colors.text_primary,
                lineHeight: typography.lineHeight.normal,
                maxWidth: '31.25rem',
              }}
            >
              My name is Sebastian, and I am a designer and developer based in Germany, currently studying Computer Science and Design at Munich University of Applied Sciences.
            </p>

            <div
              style={{
                display: 'flex',
                gap: spacing.small,
                marginTop: spacing.small,
              }}
            >
              <a
                href="/projects"
                className="hero-button-primary"
                style={{
                  padding: `${spacing.small} ${spacing.medium}`,
                  backgroundColor: colors.accent,
                  color: colors.background,
                  fontSize: typography.fontSize.body,
                  fontWeight: typography.fontWeight.medium,
                  textDecoration: 'none',
                  borderRadius: radius.base,
                  display: 'inline-block',
                }}
              >
                View My Work
              </a>
              
              <a
                href="/contact"
                className="hero-button-secondary"
                style={{
                  padding: `${spacing.small} ${spacing.medium}`,
                  backgroundColor: 'transparent',
                  color: colors.text_primary,
                  fontSize: typography.fontSize.body,
                  fontWeight: typography.fontWeight.medium,
                  textDecoration: 'none',
                  borderRadius: radius.base,
                  border: `0.125rem solid ${colors.text_secondary}`,
                  display: 'inline-block',
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Column - Skills Display */}
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
                maxWidth: '31.25rem',
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
                  border: `0.1875rem solid ${colors.accent}`,
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
                  border: `0.125rem solid transparent`,
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
                  gap: spacing.small,
                }}
              >
                <div style={{ backgroundColor: colors.accent, borderRadius: radius.base }} />
                <div style={{ backgroundColor: colors.primary, borderRadius: radius.base }} />
                <div style={{ backgroundColor: colors.primary, borderRadius: radius.base }} />
                <div style={{ backgroundColor: colors.accent, borderRadius: radius.base }} />
              </div>

              {/* Orbiting Skills */}
              {[
                { name: 'Figma', level: 5, angle: 0 },
                { name: 'Python', level: 4, angle: 51 },
                { name: 'CSS', level: 4, angle: 102 },
                { name: 'HTML', level: 4, angle: 153 },
                { name: 'Aseprite', level: 3, angle: 204 },
                { name: 'JavaScript', level: 3, angle: 255 },
                { name: 'Blender', level: 2, angle: 306 },
              ].map((skill, index) => {
                const radius = 52; // % from center
                const angleRad = (skill.angle * Math.PI) / 180;
                const x = Number((50 + radius * Math.cos(angleRad - Math.PI / 2)).toFixed(2));
                const y = Number((50 + radius * Math.sin(angleRad - Math.PI / 2)).toFixed(2));
                const delay = Number((index * 100).toFixed(0));
                
                return (
                  <div
                    key={skill.name}
                    className="skill-orbit"
                    style={{
                      position: 'absolute',
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.25rem',
                      animationDelay: `${delay}ms`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: typography.fontSize.body_small,
                        fontWeight: typography.fontWeight.bold,
                        color: colors.text_primary,
                        whiteSpace: 'nowrap',
                        textTransform: 'uppercase',
                        letterSpacing: '0.0625rem',
                      }}
                    >
                      {skill.name}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.1875rem',
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          style={{
                            width: '0.375rem',
                            height: '0.375rem',
                            borderRadius: '50%',
                            backgroundColor: dot <= skill.level ? colors.accent : colors.text_secondary,
                            opacity: dot <= skill.level ? 1 : 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Works Section */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge" id="works">
        <SectionHeader>SOME OF MY WORKS</SectionHeader>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.large,
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
