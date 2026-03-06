# Technology Stack

## Core Technologies
- React 19.2.0
- Vite 7.3.1 (build tool and dev server)
- CSS3 (modern features including animations, scroll-driven animations)

## External Dependencies
- React Icons: Lightweight SVG icon library
  - Only loads the specific icons used in the project
  - Social icons: FaGithub, FaLinkedinIn, FaEnvelope (from react-icons/fa)
  - Tech skill icons: Mix of Font Awesome and Simple Icons
    - Font Awesome: FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase
    - Simple Icons: SiCsharp, SiDotnet
  - All icons are SVG-based for perfect scaling and minimal file size

## Browser Features Used
- CSS scroll-driven animations (`animation-timeline: scroll()`, `animation-timeline: view()`)
- CSS backdrop filters
- CSS transforms and transitions
- Flexbox and Grid layouts

## Build System
Vite with React plugin for fast development and optimized production builds.

## Common Commands
- `npm run dev`: Start development server (usually http://localhost:5173)
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

## Project Location
React project is located in `portafolio-react/` directory. All development should be done within this folder.

## File Serving
`public/img/` directory available for project screenshots and images. Skill icons use SVG from React Icons (no image files needed).

## Performance Optimizations
- React Icons instead of Font Awesome CDN (reduces bundle size by ~90%)
- SVG icons instead of PNG images (reduces image payload by ~127KB to near 0KB)
- Only imports specific icons needed
- Tree-shaking eliminates unused code
- CSS Modules for scoped styling
- No external CDN dependencies (everything bundled locally)
- Vite's fast HMR (Hot Module Replacement) for instant updates during development
