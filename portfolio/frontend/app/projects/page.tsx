// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, ProjectGridCard } from '@/components/ui';
import { spacing } from '@/lib/design-tokens';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Poster Series',
      image: '/images/posters.png',
      link: '/projects/posters',
    },
    {
      title: 'DnD Chatbot',
      image: '/images/chatbot.png',
      link: '#',
    },
    {
      title: 'Steam Community-Tab Redesign',
      image: '/images/steam_redesign.png',
      link: '#',
    },
    {
      title: '3D Catan',
      image: '/images/catan_3d.png',
      link: '/projects/catan',
    },
    {
      title: 'Album Covers',
      image: '/images/album_cover.png',
      link: '#',
    },
    {
      title: 'MSB Service Center',
      image: '/images/msb.png',
      link: '#',
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
      <PageTitleSection title="My Projects" />
      
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge" maxWidth="1400px">
        <div
          style={{
            display: 'flex',
            gap: `${spacing.medium}px`,
          }}
          className="projects-grid"
        >
          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
            <ProjectGridCard {...projects[0]} />
            <ProjectGridCard {...projects[3]} />
          </div>

          {/* Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
            <ProjectGridCard {...projects[1]} />
            <ProjectGridCard {...projects[4]} />
          </div>

          {/* Column 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
            <ProjectGridCard {...projects[2]} />
            <ProjectGridCard {...projects[5]} />
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .projects-grid {
              flex-direction: column !important;
            }
            .projects-grid > div {
              flex-direction: row !important;
            }
          }

          @media (max-width: 768px) {
            .projects-grid > div {
              flex-direction: column !important;
            }
          }
        `}</style>
      </SectionContainer>

      <FooterSection />
    </main>
  );
}
