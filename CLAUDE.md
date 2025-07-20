# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev
# or
yarn dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Development server runs on http://localhost:3000

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.4.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Icons**: Lucide React
- **Charts**: Recharts
- **Package Manager**: Yarn (specified in packageManager field)

### Application Structure

This is a **Twitter Social Metrics Dashboard** providing analytics and insights for Twitter/X accounts. The application uses a dashboard layout with collapsible sidebar navigation.

#### Key Architecture Patterns

**Layout System**:
- Root layout implements `SidebarProvider` wrapper with `AppSidebar` component
- Responsive sidebar with collapsible icon mode and mobile sheet overlay
- All pages follow consistent metric card layouts using shadcn Card components

**Routing Structure**:
```
/                    # Dashboard overview
/social-graph        # User relationship analytics  
/interactions/       # User interaction analytics
  ├── mentions       # @ mentions analysis
  ├── replies        # Reply analytics
  └── dms           # Direct message metrics
/engagement/         # Content engagement metrics
  ├── likes         # Like analytics
  ├── retweets      # Retweet analytics
  └── comments      # Comment analytics
/analytics/          # Performance analytics
  ├── tweets        # Tweet performance
  ├── followers     # Follower growth
  └── reach         # Reach and impressions
/content/           # Content analysis
  ├── top-tweets    # Best performing content
  ├── hashtags      # Hashtag performance
  └── media         # Media content analytics
/schedule           # Tweet scheduling
/profile            # User profile and settings
```

**Data Layer**:
- Mock data system in `src/lib/mockData.ts` with TypeScript interfaces
- Main types: `TwitterUser`, `Interaction`, `SocialMetrics`
- Centralized mock data for consistent development
- Real data integration points defined through interfaces

**Component Architecture**:
- UI components in `src/components/ui/` following shadcn/ui pattern
- Layout components in `src/components/layout/`
- Self-contained pages with metrics visualizations
- Path aliases: `@/*` maps to `./src/*`

**Navigation Structure**:
The sidebar navigation in `AppSidebar` contains hierarchical menu items with subpages. When adding new routes, ensure they match the navigation structure defined in the `navMain` array.
```
