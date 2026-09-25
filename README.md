
# 🌐 Kadali Aditya Viveka Vardhan — Portfolio

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Features a clean design with dark/light theme toggle, animated particle background, scroll-reveal animations, and fully responsive layout.

> 🔗 **Live Demo**: _[Add your deployed URL here]_

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌗 **Dark / Light Theme** | One-click toggle with system preference detection & `localStorage` persistence |
| ✨ **Particle Background** | Custom HTML5 Canvas animation with twinkling dots & four-point sparkles |
| 📜 **Scroll Reveal** | Smooth fade-in animations triggered by `IntersectionObserver` |
| 📱 **Fully Responsive** | Mobile-first design adapts to all screen sizes |
| 🎨 **Glassmorphism Cards** | Frosted-glass card components with backdrop blur |
| 🖼️ **Certificate Lightbox** | Click-to-expand certificate viewer with modal overlay |
| 📧 **Contact Form** | Opens visitor's email client with the message pre-filled |
| ♿ **Accessibility** | `prefers-reduced-motion` support, focus-visible outlines, semantic HTML |

---

## 🛠️ Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | `18.3.1` | Component-based UI library |
| [Vite](https://vitejs.dev/) | `5.3.4` | Lightning-fast build tool & dev server |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | — | Application logic |

### Styling

| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com/) | `3.4.6` | Utility-first CSS framework |
| [PostCSS](https://postcss.org/) | `8.4.39` | CSS transformation pipeline |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | `10.4.19` | Automatic vendor prefixing |

### Fonts & Design

| Resource | Usage |
|---|---|
| [Manrope](https://fonts.google.com/specimen/Manrope) (Google Fonts) | Body text — weights 400, 500, 600, 700 |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Google Fonts) | Headings & display text — weights 500, 700 |

### Browser APIs Used

| API | Purpose |
|---|---|
| **HTML5 Canvas** | Animated particle background |
| **IntersectionObserver** | Scroll-triggered reveal animations |
| **localStorage** | Theme persistence across sessions |
| **matchMedia** | System dark mode detection & reduced-motion check |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.jpeg              # Profile photo
│   ├── Aditya Resume.pdf         # Downloadable resume
│   ├── welding-nptel.jpg         # NPTEL certificate image
│   └── energy-literacy.jpg       # Energy Swaraj certificate image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navigation with theme toggle
│   │   ├── Hero.jsx              # Landing section with profile picture
│   │   ├── About.jsx             # About me, career objective & hobbies
│   │   ├── Skills.jsx            # Technical skills & tools
│   │   ├── Education.jsx         # Academic timeline
│   │   ├── Experience.jsx        # Work experience & internships
│   │   ├── Certifications.jsx    # Certificates with lightbox viewer
│   │   ├── Contact.jsx           # Contact form & details
│   │   ├── Footer.jsx            # Footer with quick links & socials
│   │   ├── ParticlesBackground.jsx  # Canvas-based animated particles
│   │   ├── Section.jsx           # Reusable section wrapper
│   │   ├── ThemeToggle.jsx       # Dark/Light mode toggle button
│   │   └── Hobbies.jsx           # Hobbies & interests section
│   ├── data/
│   │   └── portfolio.js          # All portfolio content (single source of truth)
│   ├── hooks/
│   │   ├── useTheme.js           # Custom hook for theme management
│   │   └── useReveal.js          # Custom hook for scroll-reveal
│   ├── App.jsx                   # Root component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles & Tailwind directives
├── index.html                    # HTML entry point with SEO meta tags
├── tailwind.config.js            # Tailwind configuration & custom theme
├── postcss.config.js             # PostCSS configuration
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16
- **npm** ≥ 7

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The build output will be in the `dist/` directory.

---

## 📸 Sections Overview

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-screen intro with animated profile picture, name, role & CTA buttons |
| 2 | **About** | Summary, career objective, languages & extracurricular activities |
| 3 | **Skills** | Design & analysis tools and productivity tools |
| 4 | **Education** | Academic timeline — B.Tech, Diploma & Secondary education |
| 5 | **Experience** | Work experience at Reliance Industries & internship history |
| 6 | **Certifications** | NPTEL & Energy Swaraj certificates with lightbox viewer |
| 7 | **Contact** | Email, phone, location details with a contact form |
| 8 | **Footer** | Quick navigation links, social icons & back-to-top button |

---

## 🎨 Customization

All portfolio content is managed from a **single data file**:

```
src/data/portfolio.js
```

Edit the exported objects (`profile`, `education`, `experience`, `skills`, `certifications`, etc.) to update your portfolio content — **no component code changes needed**.

### Theme Colors

Custom accent colors are defined in [`tailwind.config.js`](tailwind.config.js):

```js
colors: {
  accent: {
    DEFAULT: '#0f8b8d',  // Light mode accent (teal)
    dark: '#3ed6d8'       // Dark mode accent (bright teal)
  }
}
```

---

## 📄 License

© 2026 Kadali Aditya Viveka Vardhan. All rights reserved.

---

<p align="center">
  <b>⭐ Star this repo if you like it!</b>
</p>
