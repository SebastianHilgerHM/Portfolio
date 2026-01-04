##
## HeaderSection
##


### Purpose
Global site navigation and identity. Visible on all pages.

### Container
- element: header
- width: 100vw
- height: 64px
- background: colors.primary
- position: sticky
- top: 0
- z-index: zIndex.sticky

### Inner Wrapper
- max-width: 1200px
- height: 100%
- horizontally centered
- padding: spacing.xs
- display: flex
- align-items: center
- justify-content: space-between

### Layout
- display: flex
- direction: row
- align-items: center
- main-axis: space-between

### Children (DOM order)
1. BrandBlock
2. NavigationBlock

---

### BrandBlock
- display: flex
- align-items: center
- gap: spacing.xs
- clickable: true
- links to home route "/"

#### Contents
- LogoIcon (SVG)
  - size: 24px × 24px
- BrandName (text)
  - text: "SEBASTIAN HILGER"
  - fontFamily: typography.fontFamily.serif
  - fontSize: typography.fontSize.h3
  - fontWeight: typography.fontWeight.semibold
  - color: colors.text_primary
  - letter-spacing: 0.05em
  - text-transform: uppercase

---

### NavigationBlock
- display: flex
- align-items: center
- gap: spacing.medium

#### Navigation Items
- About Me
- Contact
- Resume
- Projects

#### Typography
- fontFamily: typography.fontFamily.mono
- fontSize: typography.fontSize.body
- fontWeight: typography.fontWeight.medium
- color: colors.text_primary
- letter-spacing: 0.03em
- text-transform: uppercase

#### Interaction
- hover:
  - color: colors.accent
  - transition-duration: motion.duration.fast

---

### Responsive Behavior
- < 768px:
  - NavigationBlock hidden
  - Header height unchanged
  - BrandBlock remains visible and left-aligned

### Accessibility
- header element used
- nav element wraps NavigationBlock
- navigation items are <a> elements
- logo link has aria-label "Home"


##
## WorksSection
##


### Purpose
Showcase selected projects with preview media and short descriptions.

### Container
- element: section
- width: 100vw
- background: colors.background
- padding-top: spacing.xxl
- padding-bottom: spacing.xxl
- position: relative
- overflow: hidden

### Inner Wrapper
- max-width: 1200px
- horizontally centered
- padding-left/right: spacing.medium
- position: relative
- z-index: zIndex.base + 1

---

### Section Header
- element: h2
- text: "SOME OF MY WORKS"
- margin-bottom: spacing.xxl
- text-align: left

#### Typography
- fontSize: typography.fontSize.h2
- fontWeight: typography.fontWeight.bold
- color: colors.text_primary

---

### Projects Grid
- display: grid
- grid-template-columns: repeat(2, 1fr)
- gap: spacing.large
- align-items: stretch

---

### ProjectCard (repeated)
- background: colors.primary
- border-radius: radius.base
- padding: spacing.medium
- display: flex
- flex-direction: column
- justify-content: space-between

#### Contents
1. MediaBlock
   - image or illustration
   - width: 100%
   - border-radius: radius.base

2. ContentBlock
   - title (h3)
   - description (p)
   - CTA button ("Learn more")

#### Typography
- h3:
  - fontSize: typography.fontSize.h3
  - fontWeight: typography.fontWeight.semibold
- p:
  - fontSize: typography.fontSize.body
  - color: colors.text.secondary

---

### Interaction
- ProjectCard hover:
  - transform: translateY(-4px)
  - box-shadow: shadows.md
  - transition-duration: motion.duration.normal

---

### Responsive Behavior
- < 1024px:
  - grid-template-columns: 1fr
- < 640px:
  - section header margin-bottom: spacing.small
  - card padding: spacing.xs

---

### Accessibility
- section element used
- h2 used for section title
- each project title uses h3
- CTA buttons are <a> elements with clear labels


##
## FooterSection
##


### Purpose
Provide site identity and visual closure at the bottom of the page.

### Container
- element: footer
- width: 100vw
- height: 96px
- background: colors.primary

### Inner Wrapper
- max-width: 1200px
- height: 100%
- horizontally centered
- padding-left/right: spacing.large
- display: flex
- align-items: left
- justify-content: flex-start

---

### FooterContent
- display: flex
- align-items: left
- gap: spacing.small

#### Contents
1. LogoIcon
   - SVG
   - size: 20px × 20px
2. FooterName
   - text: "Sebastian Hilger"

#### Typography
- fontSize: typography.fontSize.h3
- fontWeight: typography.fontWeight.medium
- color: colors.text_primary

---

### Responsive Behavior
- < 640px:
  - height unchanged
  - padding-left/right: spacing.medium

---

### Accessibility
- footer element used
- logo SVG marked aria-hidden if decorative
- text remains readable at all breakpoints


##
## PageTitleSection
##


### Purpose
Introduce the page context with a clear title before the main content begins.

### Container
- element: section
- width: 100vw
- padding-top: spacing.xxl
- padding-bottom: spacing.xxl
- position: relative
- overflow: hidden

---

### Inner Wrapper
- max-width: 1200px
- horizontally centered
- padding-left/right: spacing.xxl
- position: relative
- z-index: zIndex.base + 1

---

### Title
- element: h1
- text: "PAGE TITLE HERE"
- max-width: 800px

#### Typography
- fontSize: typography.fontSize.h1
- fontWeight: typography.fontWeight.bold
- color: colors.text_primary

---

### Layout
- display: flex
- flex-direction: column
- align-items: flex-start

---

### Responsive Behavior
- < 768px:
  - padding-top: spacing.large
  - padding-bottom: spacing.medium
- < 640px:
  - fontSize reduced to typography.fontSize.h2

---

### Accessibility
- section element used
- h1 used as primary page heading
- decorative SVGs marked aria-hidden


##
## IntroductionSection
##


### Purpose
Present a personal introduction combining an illustrative portrait with descriptive text.

### Container
- element: section
- width: 100vw
- background: colors.background.primary
- padding-top: spacing.xxl
- padding-bottom: spacing.xxl
- position: relative
- overflow: hidden

---

### Inner Wrapper
- max-width: 1200px
- horizontally centered
- padding-left/right: spacing.medium
- position: relative
- z-index: zIndex.base + 1

---

### Layout
- display: grid
- grid-template-columns: 1fr 1fr
- column-gap: spacing.large
- align-items: center

---

### Children (DOM order)
1. IllustrationBlock
2. TextBlock

---

### IllustrationBlock
- display: flex
- justify-content: center
- align-items: center

#### Illustration
- image asset
- max-width: 420px
- width: 100%
- border-radius: radius.base

---

### TextBlock
- background: colors.primary
- border-radius: radius.base
- padding: spacing.medium
- max-width: 480px

#### Contents
- card title (h3): "Introduction"
- descriptive paragraph text

#### Typography
- h3:
  - fontSize: typography.fontSize.h3
  - fontWeight: typography.fontWeight.semibold
  - margin-bottom: spacing.small
  - color: colors.text_primary
- paragraph:
  - fontSize: typography.fontSize.body
  - lineHeight: typography.lineHeight.normal
  - color: colors.text_secondary

---

### Responsive Behavior
- < 1024px:
  - grid-template-columns: 1fr
  - row-gap: spacing.medium
  - IllustrationBlock appears above TextBlock
- < 640px:
  - padding-top/bottom: spacing.small
  - TextBlock padding: spacing.small

---

### Accessibility
- section element used
- h2 used for section heading
- image has descriptive alt text
- decorative SVGs marked aria-hidden


##
## CuriositySection
##


### Purpose
Communicate personal interests and creative domains that influence the author’s work.

---

### Container
- element: section
- width: 100vw
- padding-top: spacing.xxl
- padding-bottom: spacing.xxl
- position: relative
- overflow: hidden

---

### Inner Wrapper
- max-width: 1200px
- horizontally centered
- padding-left/right: spacing.medium
- position: relative
- z-index: zIndex.base + 1

---

### Layout
- display: grid
- grid-template-columns: repeat(2, 1fr)
- gap: spacing.small
- align-items: stretch

---

### Children (DOM order)
1. SectionIntroCard
2. InterestCard (repeated)

---

### SectionIntroCard
- grid-column: 1 / -1
- background: colors.primary
- border-radius: radius.base
- padding: spacing.medium
- box-shadow: shadows.card

#### Contents
- title (h3): "What Keeps Me Curious"
- descriptive paragraph

#### Typography
- h3:
  - fontSize: typography.fontSize.h3
  - fontWeight: typography.fontWeight.semibold
  - margin-bottom: spacing.small
  - color: colors.text_primary
- paragraph:
  - fontSize: typography.fontSize.body
  - lineHeight: typography.lineHeight.normal
  - color: colors.text_secondary

---

### InterestCard (repeated)
- background: colors.primary
- border-radius: radius.base
- padding: spacing.medium
- box-shadow: shadows.card
- display: flex
- flex-direction: column

#### Contents
- title (h3)
- descriptive paragraph

#### Typography
- h3:
  - fontSize: typography.fontSize.h3
  - fontWeight: typography.fontWeight.semibold
  - margin-bottom: spacing.small
  - color: colors.text_primary
- paragraph:
  - fontSize: typography.fontSize.body
  - lineHeight: typography.lineHeight.normal
  - color: colors.text_secondary
---

### Interaction
- InterestCard hover:
  - transform: translateY(-4px)
  - box-shadow: shadows.cardHover
  - transition-duration: motion.duration.normal

---

### Responsive Behavior
- < 1024px:
  - grid-template-columns: 1fr
  - SectionIntroCard remains full-width
- < 640px:
  - gap: spacing.small
  - padding-top/bottom: spacing.medium

---

### Accessibility
- section element used
- interest titles use h3
- sufficient color contrast for body text
- decorative SVGs marked aria-hidden
