// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P07 - Portfolio Website

'use client';

import { useEffect, useState } from 'react';
import HeaderSection from '@/components/HeaderSection';
import PageTitleSection from '@/components/PageTitleSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, ProjectGridCard } from '@/components/ui';
import { spacing, colors, typography } from '@/lib/design-tokens';
import { projectApi, Project } from '@/lib/api';

// Fallback projects data in case API is unavailable
const fallbackProjects = [
  {
    title: 'Poster Series',
    image: '/images/page_projects/Posters_Main.png',
    link: '/projects/posters',
  },
  {
    title: 'DnD Chatbot',
    image: '/images/page_projects/Dungeon_Mate_Main.png',
    link: '/projects/chatbot',
  },
  {
    title: 'Steam Community-Tab Redesign',
    image: '/images/page_projects/Steam_Main.png',
    link: '/projects/steam-redesign',
  },
  {
    title: '3D Catan',
    image: '/images/page_projects/catan_main.png',
    link: '/projects/catan',
  },
  {
    title: 'Album Covers',
    image: '/images/page_projects/Album_Spikes_Main.png',
    link: '/projects/album-covers',
  },
  {
    title: 'MSB Service Center',
    image: '/images/page_projects/MSB_Main.png',
    link: '/projects/msb',
  },
  {
    title: 'Listening Wrapped',
    image: '/images/page_projects/Spotify_Main.png',
    link: '/projects/listening-wrapped',
  },
  {
    title: 'Moosburg Treefinder',
    image: '/images/page_projects/Treefinder_Main.png',
    link: '/projects/moosburg-treefinder',
  },
  {
    title: '7Clash',
    image: '/images/page_projects/7Clash_Main.png',
    link: '/projects/7slots',
  },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<{ title: string; image: string; link: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectApi.getAll();
        
        if (response.success && response.data) {
          // Map API data to the format expected by ProjectGridCard
          const mappedProjects = response.data.map((project: Project) => ({
            title: project.title,
            image: project.imageUrl,
            link: project.link,
          }));
          setProjects(mappedProjects);
        } else {
          console.warn('API unavailable, using fallback data');
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Distribute projects into 3 columns
  const getColumnProjects = (columnIndex: number) => {
    return projects.filter((_, index) => index % 3 === columnIndex);
  };

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
      <PageTitleSection title="My Projects" />
      
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge" maxWidth="1400px">
        {loading ? (
          <div style={{ textAlign: 'center', padding: `${spacing.xxl}px` }}>
            <p style={{ color: colors.text_secondary, fontSize: typography.fontSize.body }}>
              Loading projects...
            </p>
          </div>
        ) : error && projects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: `${spacing.xxl}px` }}>
            <p style={{ color: '#E57373', fontSize: typography.fontSize.body }}>
              {error}
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              gap: `${spacing.medium}px`,
            }}
            className="projects-grid"
          >
            {/* Column 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
              {getColumnProjects(0).map((project, idx) => (
                <ProjectGridCard key={`col1-${idx}`} {...project} />
              ))}
            </div>

            {/* Column 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
              {getColumnProjects(1).map((project, idx) => (
                <ProjectGridCard key={`col2-${idx}`} {...project} />
              ))}
            </div>

            {/* Column 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: `${spacing.medium}px`, flex: 1 }}>
              {getColumnProjects(2).map((project, idx) => (
                <ProjectGridCard key={`col3-${idx}`} {...project} />
              ))}
            </div>
          </div>
        )}

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
