// Author: Sebastian Hilger
// Course: ID3 / WS 2025/26
// Assignment: P06 - Portfolio Website

export const colors = {
  primary: "#1A1B1C",
  background: "#292929",
  accent: "#2ECC71",
  text_primary: "#EDEDED",
  text_secondary: "#A1A1AA",
};

export const spacing = {
  xs: "0.5rem",     // 8px
  small: "1.5rem",  // 24px
  medium: "2rem",   // 32px
  large: "4rem",    // 64px
  xxl: "7.5rem",    // 120px
};

export const radius = {
  none: 0,
  base: "0.5rem",   // 8px
  large: "1rem",    // 16px
};

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  modal: 30,
};

export const shadows = {
  surface: "0 2px 6px rgba(0,0,0,0.35)",
  card: "0 6px 16px rgba(0,0,0,0.45)",
  cardHover: "0 10px 28px rgba(0,0,0,0.55)",
  floating: "0 14px 36px rgba(0,0,0,0.6)",
  modal: "0 24px 56px rgba(0,0,0,0.65)",
};

export const typography = {
  fontFamily: {
    serif: "'Crimson Text', serif",
    mono: "'Oxygen', monospace",
  },
  fontSize: {
    h1: "6rem",        // 96px
    h2: "3.75rem",     // 60px
    h3: "2.125rem",    // 34px
    h4: "1.5rem",      // 24px
    body: "1rem",      // 16px
    body_small: "0.875rem",  // 14px
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.7,
  },
};

export const motion = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },
  easing: {
    standard: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};
