# Serge Cantin Custom Metal Store Fixtures

## Overview

This is a modern, responsive website for Serge Cantin, a Montreal-based manufacturer of custom metal store fixtures. The application is built as a single-page application (SPA) using React with TypeScript, featuring a professional B2B industrial design system. The site showcases the company's 30+ years of experience, 20,000 sq ft manufacturing facility, and portfolio of work for major retail clients across North America and internationally.

The website maintains specific URL structures for SEO purposes, including legacy `.html` extensions, while providing a modern user experience with smooth navigation, responsive design, and clean typography focused on credibility and professionalism.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript as the primary UI framework
- Vite as the build tool and development server
- Client-side routing using Wouter (lightweight alternative to React Router)
- Single-page application with client-side navigation that preserves legacy URL structure

**UI Component System**
- Shadcn/ui components built on Radix UI primitives for accessibility
- Tailwind CSS for styling with a custom design system
- Component library follows "new-york" style variant
- Custom theme system with CSS variables for light/dark mode support

**Design System**
- Industrial/professional B2B aesthetic with clean typography
- Primary fonts: Inter and Open Sans via Google Fonts CDN
- Responsive-first approach with mobile, tablet, and desktop breakpoints
- Consistent spacing system using Tailwind's spacing scale
- Custom color palette focused on primary (blue), secondary (amber/orange), and neutral tones

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- Local component state using React hooks
- No global state management library (Redux, Zustand, etc.) currently implemented

**Page Structure**
The application maintains SEO-friendly URLs with legacy `.html` extensions:
- `/` or `/eng.html` - Homepage
- `/sc_e.html` - Company presentation (Serge Cantin page)
- `/real_e.html` - Realisations/Portfolio with client list
- `/stand_e.html` - Stands & exhibition products
- `/cw_e.html` - Workshop & manufacturing process
- `/contact_e.html` - Contact information
- `/blog` - Blog placeholder (planned WordPress integration)

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server
- Node.js runtime environment
- TypeScript for type safety across the stack

**API Design**
- RESTful API architecture with routes prefixed with `/api`
- Currently minimal backend logic - primarily serving static content
- Modular route registration system via `registerRoutes` function

**Development vs Production**
- Development: Vite middleware integrated with Express for HMR (Hot Module Replacement)
- Production: Pre-built static assets served from `dist/public`
- Separate build process that bundles both client and server code

**Build Process**
- Client: Vite bundles React application into static assets
- Server: esbuild bundles Node.js server with selective dependency bundling
- Allowlist approach for bundling specific dependencies to reduce cold start times
- External dependencies for common packages to reduce bundle size

### Data Storage Solutions

**Database Configuration**
- Drizzle ORM configured for PostgreSQL
- Neon Database serverless driver (`@neondatabase/serverless`)
- Schema definition in shared TypeScript files for type safety across client/server
- Database migrations managed via Drizzle Kit

**Current Schema**
- Minimal user table with id, username, and password fields
- UUID-based primary keys
- Schema uses Zod for validation via `drizzle-zod`

**In-Memory Storage**
- `MemStorage` class implements `IStorage` interface for development/testing
- Map-based storage for users
- Easily swappable with database implementation

**Note**: The application is currently set up for PostgreSQL but may not be actively using the database connection. The storage layer is abstracted to allow switching between in-memory and database storage.

### Authentication & Authorization

**Current State**
- Basic user schema defined with username/password fields
- No active authentication middleware implemented
- No session management currently in use
- Infrastructure in place for adding Passport.js (listed in dependencies)

**Available Dependencies**
- `express-session` for session management
- `connect-pg-simple` for PostgreSQL session store
- `passport` and `passport-local` for authentication strategies
- `jsonwebtoken` for JWT-based auth (if needed)

**Session Configuration**
- Session store options: `connect-pg-simple` (PostgreSQL) or `memorystore` (development)

### External Dependencies

**UI Libraries**
- Radix UI primitives (@radix-ui/*) - Accessible component primitives
- Lucide React - Icon library
- Embla Carousel - Carousel/slider functionality
- CMDK - Command palette component
- React Hook Form with Hookform Resolvers - Form handling
- Class Variance Authority - Component variant management
- Tailwind Merge & CLSX - CSS class name utilities

**Development Tools**
- Vite plugins:
  - `@vitejs/plugin-react` - React Fast Refresh
  - `@replit/vite-plugin-runtime-error-modal` - Error overlay
  - `@replit/vite-plugin-cartographer` - Replit integration (dev only)
  - `@replit/vite-plugin-dev-banner` - Development banner (dev only)

**Utility Libraries**
- date-fns - Date manipulation
- nanoid - Unique ID generation
- Zod - Schema validation
- zod-validation-error - Better Zod error messages

**Optional/Unused Dependencies**
The package.json includes several dependencies that may not be actively used:
- Stripe - Payment processing
- Nodemailer - Email sending
- OpenAI, @google/generative-ai - AI integrations
- Multer - File uploads
- XLSX - Excel file handling
- WS - WebSocket support

### TypeScript Configuration

**Module System**
- ESNext modules with bundler resolution
- Path aliases configured:
  - `@/*` → `client/src/*`
  - `@shared/*` → `shared/*`
  - `@assets/*` → `attached_assets/*`

**Strict Mode**
- Full TypeScript strict mode enabled
- No implicit any types
- Comprehensive type checking across client, server, and shared code

### Asset Management

**Static Assets**
- Assets referenced from `/attached_assets` directory
- Favicon and images served as static files
- Google Fonts loaded via CDN (no local font files)
- Images use lazy loading for performance

**Build Output**
- Client bundle: `dist/public`
- Server bundle: `dist/index.cjs`
- Incremental TypeScript builds cached in `node_modules/typescript/tsbuildinfo`