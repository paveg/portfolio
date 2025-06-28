# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a terminal-themed portfolio website built with React 19, TypeScript, and Vite. It features a file explorer interface with keyboard navigation and showcases projects, skills, and contact information in a developer-friendly terminal UI.

## Tech Stack

- **Framework**: React 19 with experimental React Compiler (`babel-plugin-react-compiler`)
- **Build Tool**: Vite 7
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 4 (using `@tailwindcss/vite` plugin)
- **Linting/Formatting**: Biome (replaces ESLint/Prettier)
- **3D Graphics**: Three.js with React Three Fiber
- **Animation**: Framer Motion
- **State Management**: Zustand
- **UI Components**: Radix UI primitives with custom components

## Key Commands

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (runs TypeScript check first)
- `pnpm preview` - Preview production build

### Code Quality
- `pnpm lint` - Run Biome linter checks
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm format` - Format code with Biome

Note: This project uses Biome instead of ESLint/Prettier for linting and formatting.

### Testing
- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:ui` - Run tests with UI interface

## Architecture

### Project Structure
```
src/
├── components/         # UI components
│   ├── sections/      # Main content sections (About, Skills, Projects, Contact)
│   ├── ui/           # Reusable UI primitives (Button, Card)
│   └── *.tsx         # Layout components (Terminal, FileExplorer, StatusBar)
├── constants/         # Static data (projects, skills)
├── types/            # TypeScript type definitions
└── App.tsx           # Main application component
```

### Key Components

1. **Terminal Layout**: The app simulates a terminal interface with:
   - `TerminalHeader`: Window controls and mobile menu
   - `FileExplorer`: Side navigation styled as file tree
   - `StatusBar`: Bottom status bar with time and active section
   - `KeyboardShortcuts`: Alt+1/2/3/4 navigation

2. **Section Components**: Content is organized into four main sections:
   - `AboutSection`: Personal introduction
   - `SkillsSection`: Technical skills display
   - `ProjectsSection`: Portfolio projects showcase
   - `ContactSection`: Contact information

3. **Data Flow**: 
   - All project and skill data is centralized in `src/constants/data.ts`
   - Section navigation is managed via `activeSection` state in App.tsx
   - No routing library - sections are switched via state

## Development Guidelines

### Code Style
- **Formatting**: 2 spaces indentation, double quotes for strings
- **Imports**: Organized automatically by Biome
- **Path Aliases**: Use `@/` for src directory imports

### TypeScript Configuration
- Three tsconfig files for different contexts:
  - `tsconfig.json`: Base configuration
  - `tsconfig.app.json`: Application code
  - `tsconfig.node.json`: Build tool configuration

### Component Patterns
- Functional components with TypeScript interfaces
- Consistent use of Tailwind CSS classes
- Accessibility attributes (aria-label, role) on interactive elements
- Responsive design with mobile-first approach

### State Management
- Local component state for UI interactions
- Zustand for global state (if needed)
- No prop drilling - components are relatively flat

## Important Notes

- **No Test Setup**: Currently no testing framework is configured
- **React Compiler**: Using experimental React Compiler for optimizations
- **Tailwind CSS 4**: Using the new Vite plugin approach
- **Mobile Support**: Includes mobile menu and responsive design
- **Keyboard Navigation**: Alt+number keys for section navigation
- **Internationalization**: Currently all content is in English; i18n support is planned for future implementation