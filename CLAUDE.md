# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Production build**: `npm run build`
- **Start production**: `npm start`
- **Linting**: `npm run lint`

Uses Yarn as package manager (`yarn@1.22.22`).

## Project Architecture

This is a Next.js 15 TypeScript application built as a Twitter/X social media analytics dashboard.

### Core Structure

- **Framework**: Next.js 15 with App Router (`src/app/`)
- **UI Library**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS v4 with custom component variants
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React

### Application Layout

The app uses a consistent sidebar navigation structure:

- Root layout (`src/app/layout.tsx`) provides the main shell with SidebarProvider
- Navigation defined in `src/components/layout/AppSidebar.tsx` with hierarchical menu structure
- Main content areas organized by feature domains (Analytics, Engagement, Content, etc.)

### Key Features & Routes

- **Dashboard** (`/`) - Overview with metrics cards and recent interactions
- **Analytics** (`/analytics/*`) - Tweet performance, follower growth, reach metrics
- **Engagement** (`/engagement/*`) - Likes, retweets, comments analysis
- **Content** (`/content/*`) - Top tweets, hashtags, media performance
- **Interactions** (`/interactions/*`) - Mentions, replies, DMs
- **Social Graph** (`/social-graph`) - Network analysis
- **Schedule** (`/schedule`) - Content scheduling
- **Profile** (`/profile`) - User profile management

### Data Architecture

Mock data structure defined in `src/lib/mockData.ts`:

- `TwitterUser` interface for user profiles
- `Interaction` interface for social interactions (mentions, replies, likes, retweets, DMs)
- `SocialMetrics` interface for aggregated analytics
- Chart data arrays for visualization components

### Component Structure

- **UI Components**: Located in `src/components/ui/` - reusable shadcn/ui components
- **Layout Components**: Located in `src/components/layout/` - app-specific layout components
- **Page Components**: Each route has its own page.tsx file following Next.js App Router conventions

### TypeScript Configuration

- Path aliases configured: `@/*` maps to `./src/*`
- Strict TypeScript enabled
- Next.js plugin integration for optimal bundling

### Styling Approach

- Tailwind CSS v4 with utility-first approach
- Custom component variants using `class-variance-authority`
- Geist Sans and Geist Mono fonts integrated
- CSS custom properties for theme consistency

This application is designed as a comprehensive Twitter analytics dashboard with a focus on social media metrics, engagement tracking, and content performance analysis.