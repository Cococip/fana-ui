# 🎨 FANA UI Framework

<div align="center">

![FANA UI](https://img.shields.io/badge/FANA%20UI-v1.0.0-blue?style=for-the-badge)
![CSS](https://img.shields.io/badge/CSS-Framework-1572B6?style=for-the-badge&logo=css3)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![GitHub Stars](https://img.shields.io/github/stars/Cococip/fana-ui?style=for-the-badge)

**Simple, Powerful, Beautiful** - CSS Framework yang menggabungkan kelebihan Tailwind CSS dan Bootstrap

[🚀 Live Demo](https://cococip.github.io/fana-ui/) • [📚 Documentation](#-cara-penggunaan) • [⚡ Quick Start](#-quick-start) • [🎨 Components](#-apa-yang-ada-di-dalam)

</div>

---

## ✨ Kenapa FANA UI?

FANA UI adalah framework CSS modern yang dirancang untuk developer yang menginginkan:
- ✅ **Utility classes** yang fleksibel seperti Tailwind
- ✅ **Komponen siap pakai** yang indah seperti Bootstrap  
- ✅ **Naming yang intuitif** dan mudah diingat
- ✅ **Lebih simple** tapi tetap powerful

### 🌐 Live Demo
Lihat framework dalam aksi: **[https://cococip.github.io/fana-ui/](https://cococip.github.io/fana-ui/)**

---

## 🚀 Quick Start

### Installation

1. **Download** atau clone repository ini
2. **Link** file CSS ke HTML kamu:

```html
<link rel="stylesheet" href="path/to/fana.css">
```

3. **Mulai coding!** 🎉

### CDN (Coming Soon)
```html
<link rel="stylesheet" href="https://cdn.fana-ui.com/fana.css">
```

### 📸 Screenshots

<div align="center">

**Hero Section & Features**
![FANA UI Demo](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=Beautiful+Components)

**Buttons & Cards**
![Components](https://via.placeholder.com/800x400/a855f7/ffffff?text=Powerful+Utilities)

</div>

> 💡 **Lihat live demo lengkap di:** [https://cococip.github.io/fana-ui/](https://cococip.github.io/fana-ui/)

---

## 📦 Apa yang Ada di Dalam?

### Core System
- **Variables** - Design tokens lengkap (colors, spacing, typography)
- **Reset** - Modern CSS reset untuk konsistensi
- **Utilities** - Utility classes untuk layout, spacing, colors, dll

### Layout
- **Container** - Responsive container system
- **Grid** - Flexbox & CSS Grid utilities
- **Row & Column** - Bootstrap-style grid system

### Components
- **Buttons** - 6 variants, 4 sizes, outline, ghost, loading states
- **Cards** - Flexible card components dengan berbagai style
- **Forms** - Input, select, textarea, checkbox, radio, switch
- **Navigation** - Navbar, tabs, pills, breadcrumb, sidebar

---

## 💡 Cara Penggunaan

### 1. Buttons

```html
<!-- Basic Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>

<!-- Outline Buttons -->
<button class="btn btn-outline-primary">Outline</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-primary btn-loading">Loading</button>
```

### 2. Cards

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Subtitle here</p>
  </div>
  <div class="card-body">
    <p class="card-text">Your content here</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<!-- Card Variants -->
<div class="card card-primary">...</div>
<div class="card card-elevated">...</div>
<div class="card card-bordered">...</div>
```

### 3. Forms

```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-input" placeholder="Enter email">
  <span class="form-help">We'll never share your email</span>
</div>

<!-- Checkbox -->
<div class="form-check">
  <input type="checkbox" class="form-check-input" id="check1">
  <label class="form-check-label" for="check1">Remember me</label>
</div>

<!-- Switch -->
<div class="form-switch">
  <input type="checkbox" class="form-switch-input" id="switch1">
  <label for="switch1">Enable notifications</label>
</div>
```

### 4. Layout

```html
<!-- Container -->
<div class="container">
  <!-- Your content -->
</div>

<!-- Grid System -->
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Column 1</div>
  <div class="col-12 col-md-6 col-lg-4">Column 2</div>
  <div class="col-12 col-md-6 col-lg-4">Column 3</div>
</div>

<!-- CSS Grid -->
<div class="grid grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### 5. Utility Classes

```html
<!-- Spacing -->
<div class="m-4 p-6">Margin 4, Padding 6</div>
<div class="mt-8 mb-4">Margin top 8, bottom 4</div>

<!-- Flexbox -->
<div class="flex justify-between items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Colors -->
<div class="bg-primary text-white">Primary background</div>
<p class="text-success">Success text</p>

<!-- Typography -->
<h1 class="text-4xl font-bold">Large heading</h1>
<p class="text-lg text-gray-600">Paragraph text</p>

<!-- Shadows & Borders -->
<div class="shadow-lg rounded-xl">Card with shadow</div>
```

---

## 🎨 Color System

FANA UI menggunakan color palette yang comprehensive:

- **Primary** - Blue (default brand color)
- **Secondary** - Purple  
- **Success** - Green
- **Warning** - Yellow
- **Danger** - Red
- **Gray** - Neutral colors

Setiap warna memiliki 10 shades (50-900) yang bisa diakses via CSS variables:
```css
var(--primary-500)  /* Default primary */
var(--primary-600)  /* Darker primary */
var(--gray-100)     /* Light gray */
```

---

## 📐 Spacing System

Spacing menggunakan sistem yang konsisten:

| Class | Value | Pixels |
|-------|-------|--------|
| `m-1`, `p-1` | 0.25rem | 4px |
| `m-2`, `p-2` | 0.5rem | 8px |
| `m-3`, `p-3` | 0.75rem | 12px |
| `m-4`, `p-4` | 1rem | 16px |
| `m-6`, `p-6` | 1.5rem | 24px |
| `m-8`, `p-8` | 2rem | 32px |
| `m-12`, `p-12` | 3rem | 48px |

Gunakan prefix untuk specific sides:
- `mt-` - margin-top
- `mb-` - margin-bottom
- `ml-` - margin-left
- `mr-` - margin-right
- `pt-`, `pb-`, `pl-`, `pr-` - padding

---

## 📱 Responsive Design

FANA UI menggunakan mobile-first approach dengan breakpoints:

| Breakpoint | Min Width | Prefix |
|------------|-----------|--------|
| Small | 640px | `sm:` |
| Medium | 768px | `md:` |
| Large | 1024px | `lg:` |
| Extra Large | 1280px | `xl:` |

Contoh penggunaan:
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  <!-- 1 column on mobile, 2 on tablet, 4 on desktop -->
</div>
```

---

## 🎯 Philosophy

### 1. **Simple > Complex**
Kami percaya bahwa framework yang baik harus mudah dipelajari dan digunakan. Tidak perlu belajar berhari-hari untuk mulai produktif.

### 2. **Intuitive Naming**
Class names yang jelas dan mudah diingat. Kalau kamu butuh margin top, ya tinggal pakai `mt-4`. Sesimple itu!

### 3. **Beautiful by Default**
Komponen yang sudah indah dari awal. Tidak perlu styling tambahan untuk membuat UI yang menarik.

### 4. **Flexible & Powerful**
Kombinasi utility classes dan komponen siap pakai memberikan fleksibilitas maksimal.

---

## 📂 File Structure

```
fana-ui/
├── core/
│   ├── variables.css      # Design tokens
│   ├── reset.css          # CSS reset
│   └── utilities.css      # Utility classes
├── layout/
│   └── containers.css     # Container & grid
├── components/
│   ├── buttons.css        # Button components
│   ├── cards.css          # Card components
│   ├── forms.css          # Form elements
│   └── navigation.css     # Navigation components
├── fana.css               # Main file (import all)
├── index.html             # Demo page
└── README.md              # Documentation
```

---

## 🛠️ Customization

### Mengubah Design Tokens

Edit file `core/variables.css` untuk customize colors, spacing, typography, dll:

```css
:root {
  /* Ubah primary color */
  --primary-500: #your-color;
  
  /* Ubah font */
  --font-sans: 'Your Font', sans-serif;
  
  /* Ubah spacing */
  --space-4: 1.5rem;
}
```

### Menambah Komponen Sendiri

Buat file CSS baru di folder `components/` dan import di `fana.css`:

```css
@import url('components/your-component.css');
```

---

## 🎓 Examples

Lihat `index.html` untuk contoh lengkap semua komponen dan utility classes.

Buka file tersebut di browser untuk melihat demo interaktif!

---

## 🤝 Contributing

Contributions are welcome! Silakan:
1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buat Pull Request

---

## 📝 License

MIT License - feel free to use in your projects!

---

## 💬 Support

Punya pertanyaan atau butuh bantuan?
- 📧 Email: support@fana-ui.com
- 💬 Discord: [Join our community](#)
- 🐦 Twitter: [@fana_ui](#)

---

## 🙏 Credits

Dibuat dengan ❤️ oleh developer untuk developer.

Terinspirasi dari:
- **Tailwind CSS** - Utility-first approach
- **Bootstrap** - Component library
- **Modern CSS** - Best practices

---

## 🚀 Roadmap

- [x] Dark mode support
- [x] More components (modals, tooltips, dropdowns, alerts, badges, progress, accordions)
- [x] JavaScript plugins
- [ ] React/Vue components
- [ ] CDN hosting
- [ ] NPM package
- [ ] Theme builder
- [ ] VS Code extension

---

## ⭐ Star This Repository

Jika kamu suka FANA UI, jangan lupa kasih **⭐ Star** di GitHub!

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/Cococip/fana-ui?style=social)](https://github.com/Cococip/fana-ui/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Cococip/fana-ui?style=social)](https://github.com/Cococip/fana-ui/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/Cococip/fana-ui?style=social)](https://github.com/Cococip/fana-ui/watchers)

</div>

---

<div align="center">

## 🎉 **Happy Coding!**

**Made with ❤️ by FANA UI Team**

[🌐 Live Demo](https://cococip.github.io/fana-ui/) • [📦 GitHub](https://github.com/Cococip/fana-ui) • [📚 Docs](#-cara-penggunaan)

---

![Footer](https://img.shields.io/badge/FANA%20UI-Simple%20%7C%20Powerful%20%7C%20Beautiful-blue?style=for-the-badge)

**© 2026 FANA UI. All rights reserved.**

</div>
