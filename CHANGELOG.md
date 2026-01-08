# 📝 FANA UI - Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-01-07

### 🎉 Initial Release

#### ✨ Core Features
- **Design System Variables** - Comprehensive design tokens
  - Color system with 10 shades per color
  - Spacing system (4px to 128px)
  - Typography scale
  - Border radius, shadows, transitions
  
- **CSS Reset** - Modern, minimal reset for consistency
  
- **Utility Classes** - Powerful utilities for:
  - Display & Layout (flex, grid)
  - Spacing (margin, padding, gap)
  - Typography (sizes, weights, alignment)
  - Colors (text, background)
  - Borders & Shadows
  - Responsive design

#### 🎨 Components

##### Buttons
- 5 color variants (primary, secondary, success, warning, danger)
- Outline variants
- Ghost variant
- 4 sizes (sm, default, lg, xl)
- Loading state
- Disabled state
- Icon buttons
- Button groups
- Block buttons

##### Cards
- Flexible card structure (header, body, footer)
- Card variants (bordered, elevated, flat)
- Colored cards (primary, secondary)
- Horizontal cards
- Interactive cards
- Card groups

##### Forms
- Input fields with validation states
- Select dropdowns
- Textareas
- Checkboxes & Radio buttons
- Toggle switches
- Input groups
- Floating labels
- Form validation feedback

##### Navigation
- Responsive navbar
- Tabs
- Pills
- Breadcrumbs
- Sidebar navigation

#### 📐 Layout System
- Responsive containers
- Bootstrap-style row/column grid
- CSS Grid utilities
- Section spacing

#### 📱 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive utility classes

#### 📚 Documentation
- Comprehensive README
- Quick Start Guide
- Demo page with all components
- Starter template
- Custom theme template

---

## [1.1.0] - 2026-01-08

### ✨ New Features

#### 🌙 Dark Mode Support
- Added native dark mode support using CSS variables
- Support for automatic detection via `prefers-color-scheme`
- Support for manual toggle via `[data-theme="dark"]` or `.dark` class
- Updated all core components to be theme-aware:
  - Buttons (ghost & variants)
  - Cards (backgrounds, borders, shadows)
  - Forms (inputs, selects, switches, groups)
  - Navigation (navbar, tabs, pills, breadcrumbs, sidebar)
- Added theme-aware utility classes (`.text-main`, `.text-muted`, `.bg-body`, etc.)
- Added dark mode toggle functionality to demo page

---

## [1.2.0] - 2026-01-08

### ✨ New Features

#### 📦 New Components
- **Modals** - Beautiful, responsive, and customizable dialogs
- **Dropdowns** - Toggleable menus for navigation and actions
- **Tooltips** - Informative hover tooltips (CSS-based)
- **Interactive States** - All new components are fully theme-aware

#### ⚙️ JavaScript Core (`fana.js`)
- Initial release of the FANA UI JavaScript plugin
- Automated handling for:
  - Modal opening/closing and backdrops
  - Dropdown toggles and outside-click closing
  - Tab switching logic
  - Dark mode persistence and toggling
  - Mobile menu interactions
  - Smooth scrolling for internal links

---

## 🚀 Upcoming Features

### [1.3.0] - Planned
- [ ] Alerts/Notifications
- [ ] Progress bars
- [ ] Badges
- [ ] Accordion component
- [ ] Carousel/Slider
- [ ] Loading spinners

### [2.0.0] - Future
- [ ] React components
- [ ] Vue components
- [ ] NPM package
- [ ] CDN hosting
- [ ] Theme builder
- [ ] VS Code extension

---

## 📋 Version Format

We use [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality (backwards compatible)
- **PATCH** version for bug fixes (backwards compatible)

---

## 🤝 Contributing

Want to contribute? Check out our [README.md](README.md) for guidelines!

---

**Made with ❤️ by FANA UI Team**
