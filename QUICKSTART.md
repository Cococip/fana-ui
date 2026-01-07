# 🚀 FANA UI - Quick Start Guide

## Cara Pakai dalam 3 Langkah

### 1️⃣ Link CSS
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="fana.css">
</head>
<body>
  <!-- Your content here -->
</body>
</html>
```

### 2️⃣ Pakai Komponen
```html
<!-- Button -->
<button class="btn btn-primary">Click Me!</button>

<!-- Card -->
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Hello World</h3>
    <p class="card-text">This is a card</p>
  </div>
</div>

<!-- Form -->
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-input" placeholder="your@email.com">
</div>
```

### 3️⃣ Pakai Utilities
```html
<!-- Layout dengan Flexbox -->
<div class="flex justify-between items-center gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Grid Layout -->
<div class="grid grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

<!-- Spacing & Colors -->
<div class="p-6 m-4 bg-primary text-white rounded-lg shadow-lg">
  Beautiful Box!
</div>
```

## 📚 Cheat Sheet

### Buttons
- `btn btn-primary` - Primary button
- `btn btn-outline-primary` - Outline button
- `btn btn-lg` - Large button
- `btn btn-sm` - Small button

### Colors
- `bg-primary` `bg-secondary` `bg-success` `bg-warning` `bg-danger`
- `text-primary` `text-secondary` `text-success` `text-warning` `text-danger`

### Spacing
- `m-4` `p-4` - Margin/Padding 16px
- `mt-4` `pt-4` - Top only
- `mb-4` `pb-4` - Bottom only
- `gap-4` - Gap between flex/grid items

### Layout
- `flex` - Flexbox
- `grid grid-cols-3` - 3 column grid
- `justify-center` - Center horizontally
- `items-center` - Center vertically

### Typography
- `text-xl` `text-2xl` `text-3xl` - Font sizes
- `font-bold` `font-semibold` - Font weights
- `text-center` `text-left` `text-right` - Alignment

### Borders & Shadows
- `rounded-lg` `rounded-xl` `rounded-full` - Border radius
- `shadow-sm` `shadow` `shadow-lg` `shadow-xl` - Box shadows

## 🎯 Common Patterns

### Hero Section
```html
<section class="section bg-primary text-white text-center">
  <div class="container">
    <h1 class="text-5xl font-bold mb-6">Welcome!</h1>
    <p class="text-xl mb-8">Your tagline here</p>
    <button class="btn btn-lg bg-white text-primary">Get Started</button>
  </div>
</section>
```

### Card Grid
```html
<div class="container">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Feature 1</h3>
        <p class="card-text">Description here</p>
      </div>
    </div>
    <!-- Repeat for more cards -->
  </div>
</div>
```

### Contact Form
```html
<form class="container-sm">
  <div class="form-group">
    <label class="form-label">Name</label>
    <input type="text" class="form-input">
  </div>
  
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="email" class="form-input">
  </div>
  
  <div class="form-group">
    <label class="form-label">Message</label>
    <textarea class="form-textarea"></textarea>
  </div>
  
  <button class="btn btn-primary btn-block">Send Message</button>
</form>
```

## 💡 Tips

1. **Combine utilities** - Mix and match untuk hasil terbaik
   ```html
   <div class="p-6 bg-white rounded-xl shadow-lg">...</div>
   ```

2. **Responsive design** - Gunakan prefix `md:` dan `lg:`
   ```html
   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">...</div>
   ```

3. **Customize colors** - Edit `core/variables.css` untuk brand colors kamu

4. **Check demo** - Buka `index.html` untuk lihat semua contoh

## 🎨 Next Steps

- Lihat `README.md` untuk dokumentasi lengkap
- Buka `index.html` untuk demo interaktif
- Explore `components/` untuk lihat semua komponen
- Customize `core/variables.css` sesuai brand kamu

**Happy coding! 🚀**
