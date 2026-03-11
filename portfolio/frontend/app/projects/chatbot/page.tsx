// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

'use client';

import Image from 'next/image';
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';
import { SectionContainer, Card, SectionHeader, ImportantText, ImageBlock, ResponsiveGrid, NumberedStepCard, TechStack } from '@/components/ui';
import { colors, spacing, typography, radius } from '@/lib/design-tokens';

export default function ChatbotProject() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: colors.background,
        backgroundImage: 'url(/svg/background_vector.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '71.563rem 66.375rem',
      }}
    >
      <HeaderSection />

      {/* Hero Section - Title Left, Logo Right */}
      <SectionContainer paddingTop="large" paddingBottom="medium">
        <ResponsiveGrid columns="1fr 1fr" gap="large" alignItems="start" breakpoint={1024}>
          <div>
            <h1
              style={{
                fontSize: typography.fontSize.h1,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: spacing.small,
                lineHeight: 1.05,
              }}
            >
              Dungeon Mate
            </h1>
            <p
              style={{
                fontSize: typography.fontSize.h3,
                color: colors.text_primary,
                fontWeight: typography.fontWeight.regular,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              An interactive Dungeons &amp; Dragons companion built as a university team project
            </p>
          </div>

          <ImageBlock
            src="/images/page_chatbot/Dungeon_Mate_Logo.png"
            alt="Dungeon Mate Logo"
            height="25rem"
            objectFit="contain"
          />
        </ResponsiveGrid>
      </SectionContainer>

      {/* Description Card - Full Width */}
      <SectionContainer paddingTop="small" paddingBottom="medium">
        <Card>
          <p
            style={{
              fontSize: typography.fontSize.body,
              color: colors.text_secondary,
              lineHeight: typography.lineHeight.normal,
            }}
          >&ldquo;Dungeon Mate&rdquo; was developed as a university team project to explore conversational interfaces in a game-adjacent context. The goal was to support Dungeons &amp; Dragons players and game masters by generating structured ideas for campaigns and sessions.
          </p>
        </Card>
      </SectionContainer>

      {/* How It Works - Intro Card + 3 Step Cards */}
      <SectionContainer paddingTop="xxlarge" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          How It Works
        </SectionHeader>

        {/* Intro text */}
        <ImportantText marginBottom="medium">
          The chatbot covers three main areas:
        </ImportantText>

        {/* 3 step cards in a row */}
        <ResponsiveGrid columns="repeat(3, 1fr)" gap="medium" breakpoint={1024}>
          {[
            { num: '01', title: 'Character Creation', text: 'Users can ask the bot to create characters, NPCs, or Villans, using information provided in the prompt, whilst adhering to the rules and structure of D&D 5e.' },
            { num: '02', title: 'Encounter Generation', text: 'The bot can generate encounters based on user input, such as desired difficulty, environment, or monster types, while ensuring that the encounters are balanced and engaging.' },
            { num: '03', title: 'Scene Development', text: 'The bot can help create detailed scenes and settings for campaigns, providing vivid descriptions and narrative elements to enhance the storytelling experience.' },
          ].map((step) => (
            <NumberedStepCard key={step.num} number={step.num} title={step.title} text={step.text} />
          ))}
        </ResponsiveGrid>

        {/* Section image */}
        <div style={{ marginTop: spacing.xxl }}>
          <Image
            src="/images/page_chatbot/Dungeon_Mate_Chat.png"
            alt="Dungeon Mate chat interface"
            width={1200}
            height={675}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: radius.base,
            }}
          />
        </div>
      </SectionContainer>

      {/* Features - 2 Column Grid */}
      <SectionContainer paddingTop="medium" paddingBottom="xxlarge">
        <SectionHeader level="h2" marginBottom="large">
          Visuals and Personality
        </SectionHeader>

        <ResponsiveGrid columns="1fr 1fr" gap="medium" breakpoint={768}>
          <Card>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: spacing.xs,
              }}
            >
              Visuals
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              I mainly focused on the visual atmosphere and the chatbot’s voice. For the visuals, I created a pixel art animated background showing the interior of a medieval tavern. It is the main visual layer of the application and sets the tone immediately.
            </p>
          </Card>

          <Card>
            <h3
              style={{
                fontSize: typography.fontSize.h3,
                fontWeight: typography.fontWeight.bold,
                color: colors.text_primary,
                marginBottom: spacing.xs,
              }}
            >
              Personality
            </h3>
            <p
              style={{
                fontSize: typography.fontSize.body,
                color: colors.text_secondary,
                lineHeight: typography.lineHeight.normal,
              }}
            >
              On the conversational side, I shaped how the bot talks and behaves by writing and refining the system prompt, and by creating supporting resources that guided how the bot generated characters, encounters, and scenes. These internal guidelines helped keep outputs coherent and aligned with the game’s vibe.
            </p>
          </Card>
        </ResponsiveGrid>

        {/* Overlapping images */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginTop: spacing.xxl,
          }}
          className="overlap-images"
        >
          <div
            style={{
              position: 'relative',
              width: '55%',
              flexShrink: 0,
              zIndex: 1,
            }}
          >
            <Image
              src="/images/page_chatbot/Dungeon_Mate_Visuals.png"
              alt="Dungeon Mate visual design"
              width={1200}
              height={675}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: radius.base,
              }}
            />
          </div>
          <div
            className="overlap-img-right"
            style={{
              position: 'relative',
              width: '55%',
              flexShrink: 0,
              marginLeft: `-10%`,
              marginTop: spacing.xxl,
              zIndex: 2,
            }}
          >
            <Image
              src="/images/page_chatbot/Dungeon_Mate_Prompt.png"
              alt="Dungeon Mate prompt interface"
              width={1200}
              height={675}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: radius.base,
              }}
            />
          </div>
        </div>
      </SectionContainer>

      {/* Full Width Image + Tech Stack Below */}
      <SectionContainer paddingTop="medium" paddingBottom="medium">
        <TechStack items={['Python', 'OpenAI Api', 'Aseprite', 'Figma', 'Gradio']} />
      </SectionContainer>
      <FooterSection />
    </main>
  );
}
