# Project Structure

## React Project (portafolio-react/)
- `index.html`: HTML entry point (optimized, no external CDN dependencies)
- `src/main.jsx`: React app entry point
- `src/App.jsx`: Main app component that composes all sections
- `src/index.css`: Global CSS styles and resets
- `src/components/`: React components for each section
  - `Header.jsx` + `Header.module.css`: Navigation header
  - `Home.jsx` + `Home.module.css`: Hero section with introduction
  - `SobreMi.jsx` + `SobreMi.module.css`: About me section
  - `Proyectos.jsx` + `Proyectos.module.css`: Projects showcase
  - `Habilidades.jsx` + `Habilidades.module.css`: Skills with SVG icons
  - `Footer.jsx` + `Footer.module.css`: Contact footer
- `public/img/`: Directory for project screenshots and images

## Root Directory
- `portafolio-react/`: Main React application
- `Fonts/`: Custom fonts directory (currently empty)
- `.kiro/`: Kiro AI assistant configuration and steering rules
  - `.kiro/steering/`: Steering documents for AI guidance

## Architecture Pattern
Single-page React application with component-based architecture. Navigation uses anchor links (#SobreMi, #Proyectos, #Habilidades, #Contacto).

## Component Structure
- Each section is a separate React component
- Each component has its own CSS Module file for scoped styling
- Components return semantic HTML5 elements: `<header>`, `<section>`, `<footer>`
- Main App.jsx composes: Header → Home → SobreMi → Proyectos → Habilidades → Footer

## CSS Organization
- CSS Modules for component-scoped styles (*.module.css)
- index.css for global styles (body, h1, h2, etc.)
- Media queries for responsive design (breakpoint: 768px)
- Animations defined with @keyframes
- Scroll-driven animations using modern CSS features

## Naming Conventions
- React components: PascalCase (e.g., `SobreMi.jsx`, `Header.jsx`)
- CSS Modules: ComponentName.module.css
- CSS classes in modules: camelCase (e.g., `homePage`, `logoLink`)
- IDs: PascalCase for section anchors (e.g., `#SobreMi`, `#Proyectos`)
- Spanish naming for content-related classes and IDs

## Icon System
- React Icons library (from react-icons/fa and react-icons/si)
- Social icons: `import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'`
- Tech skill icons: Mix of Font Awesome and Simple Icons for best compatibility
  - `import { SiCsharp, SiDotnet } from 'react-icons/si'`
  - `import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa'`
- Use as React components: `<FaGithub />` or `<SiCsharp />`
- Icons are SVG-based, infinitely scalable, and extremely lightweight

## Responsive Design
Mobile-first approach with media queries at 768px breakpoint. Adjustments include font sizes, spacing, and layout changes for smaller screens.
