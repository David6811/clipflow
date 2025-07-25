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