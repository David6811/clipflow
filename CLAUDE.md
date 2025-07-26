# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ClipFlow is a React.js website for an Android clipboard management application. The app features offline functionality, OCR capabilities, and comprehensive clipboard management.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173/)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: CSS with modern features
- **Build Tool**: Vite for fast development and building
- **Linting**: ESLint with React-specific rules

## Project Structure

```
src/
├── App.jsx          # Main App component
├── App.css          # App-specific styles
├── main.jsx         # React entry point
└── index.css        # Global styles

public/              # Static assets
index.html           # HTML template
package.json         # Dependencies and scripts
vite.config.js       # Vite configuration
```

## Architecture Notes

- Modern React functional components with hooks
- Responsive design with CSS Grid and Flexbox
- Professional gradient design for app promotion
- Component-based architecture for scalability

## Design System & Principles

### Color Palette (Modern Professional)
- **Primary**: Deep Slate (#1E293B) - Modern, sophisticated, professional
- **Secondary**: Vibrant Blue (#3B82F6) - Innovation, trust, energy
- **Tertiary**: Modern Purple (#8B5CF6) - Creativity, premium, tech
- **Success**: Emerald (#10B981) - Positive actions, offline functionality
- **Surface**: Pure White (#FFFFFF) - Clean, modern, minimalist
- **Background**: White/Light Gray gradient - Elegant, subtle depth

### Typography System
- **Font Family**: Inter (primary), with system font fallbacks
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Scale**: Modern hierarchical scaling from 0.75rem to 5.5rem
- **Letter Spacing**: Tight (-0.03em) for headings, normal for body text

### Animation & Transitions
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions
- **Duration**: 
  - Fast: 150ms (micro-interactions)
  - Standard: 300ms (most UI transitions)
  - Slow: 500ms (complex animations)
- **Hover Effects**: Subtle lift (translateY(-2px to -4px)) with enhanced shadows
- **Entry Animations**: fadeInUp with staggered delays for content hierarchy

### Spacing & Layout
- **Border Radius**: 
  - Small elements: 12px
  - Cards/components: 16-20px
  - Buttons: 12-16px
  - Chips/badges: 50px (pill shape)
- **Shadows**: Layered shadow system from subtle (1px) to dramatic (25px)
- **Spacing Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Component Design Principles

#### Buttons
- **Primary**: Gradient backgrounds with enhanced hover states
- **Secondary**: Outlined with backdrop blur effects
- **Hover**: Scale (1.02) + translateY(-2px) + enhanced shadows
- **Focus**: 2px solid secondary color outline with offset

#### Cards
- **Background**: Semi-transparent white with backdrop blur
- **Border**: Subtle 1px border with transparency
- **Hover**: Lift effect with enhanced shadows
- **Border Radius**: 20px for modern aesthetic

#### Geometric Background Elements
- **Shapes**: Rounded rectangles and circles
- **Colors**: Brand colors with low opacity (0.1-0.2)
- **Animation**: Slow, continuous floating motion
- **Blur**: 1-2px blur for depth without distraction

### Accessibility Considerations
- **Focus Indicators**: 2px solid outline with proper contrast
- **Color Contrast**: WCAG AA compliant text contrast ratios
- **Animation**: Respects prefers-reduced-motion settings
- **Font Smoothing**: Anti-aliased text rendering

### Responsive Design
- **Breakpoints**: xs (0px), sm (600px), md (900px), lg (1200px), xl (1536px)
- **Mobile First**: Progressive enhancement approach
- **Touch Targets**: Minimum 44px for interactive elements
- **Viewport**: Flexible layouts that adapt to different screen sizes

### Performance Optimization
- **CSS-in-JS**: Material-UI's sx prop for component-scoped styles
- **Animation**: GPU-accelerated transforms (translateY, scale)
- **Images**: Optimized loading and responsive images
- **Bundle**: Efficient component imports and tree shaking