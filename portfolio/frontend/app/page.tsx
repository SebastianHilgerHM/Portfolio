// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import { useState } from 'react';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, SectionHeader, ProjectCard } from '@/components/ui';
import { colors, spacing } from '@/lib/design-tokens';

export default function Home() {
  const projects = [
    {
      id: '1',
      title: 'Project Alpha',
      description: 'A comprehensive web application built with modern technologies.',
      imageUrl: '/images/sample_chatbot.png',
      link: '/projects/alpha',
    },
    {
      id: '2',
      title: 'Project Beta',
      description: 'An innovative solution for digital collaboration and productivity.',
      imageUrl: '/images/sample_cover.png',
      link: '/projects/beta',
    },
    {
      id: '3',
      title: 'Project Gamma',
      description: 'Mobile-first design approach with stunning user experience.',
      imageUrl: '/images/sample_poster.png',
      link: '/projects/gamma',
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
      
      {/* Hero Section Placeholder */}
      <div
        style={{
          width: '100%',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${spacing.xxl}px ${spacing.medium}px`,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            textAlign: 'center',
            color: colors.text_secondary,
          }}
        >
          <p style={{ fontSize: '24px' }}>Hero Section Placeholder</p>
          <p style={{ fontSize: '16px', marginTop: '16px' }}>
            This section will contain the hero content
          </p>
        </div>
      </div>

      {/* Works Section */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
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
