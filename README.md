# Portfolio Website

A terminal-themed portfolio website built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** with experimental React Compiler
- **TypeScript** for type safety
- **Vite 7** for fast development and building
- **Tailwind CSS 4** for styling
- **Biome** for linting and formatting
- **React Three Fiber** for 3D graphics

## Features

- Terminal-style UI with file explorer navigation
- Keyboard shortcuts (Alt+1/2/3/4 for section navigation)
- Responsive design with mobile support
- Project timeline with role and period information
- Skills showcase
- Contact information

## Development

### Prerequisites

- Node.js 22+
- pnpm

### Installation

```bash
pnpm install
```

### Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint

# Fix linting and formatting issues
pnpm lint:fix

# Format code
pnpm format
```

## Project Structure

```
src/
├── components/         # UI components
│   ├── sections/      # Main content sections
│   ├── ui/           # Reusable UI primitives
│   └── *.tsx         # Layout components
├── constants/         # Static data (projects, skills)
├── types/            # TypeScript type definitions
└── App.tsx           # Main application component
```

## Configuration

- **Biome**: Configured for linting and formatting (see `biome.json`)
- **TypeScript**: Multiple config files for different contexts
- **Tailwind CSS**: Using the new Vite plugin approach
- **Path Aliases**: `@/` is configured for src directory imports

## License

MIT