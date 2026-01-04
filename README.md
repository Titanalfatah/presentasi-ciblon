# CIBLON Presentation

**Web-Based Swimming Competition Registration System**

Presentasi modern dan interaktif untuk sistem CIBLON menggunakan React.js, Tailwind CSS, dan Framer Motion.

## 🎯 Fitur

- ✨ **12 Slide Lengkap** - Mencakup semua aspek sistem CIBLON
- 🎨 **Desain Modern** - Palet warna ocean-inspired (biru laut & cyan)
- 🎭 **Animasi Smooth** - Framer Motion untuk transisi yang halus
- 📱 **Fully Responsive** - Desktop-first, mobile-friendly
- 🎪 **Scroll-based Navigation** - Navigasi vertikal yang intuitif
- 🎯 **Progress Indicator** - Dot navigation di sisi kiri

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 atau lebih baru)
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Struktur Slide

1. **Slide 1** - Title: CIBLON branding dan tagline
2. **Slide 2** - Latar Belakang: Konteks dan masalah sistem manual
3. **Slide 3** - Permasalahan: 4 masalah utama yang diidentifikasi
4. **Slide 4** - Solusi yang Diusulkan: Pengenalan CIBLON
5. **Slide 5** - Jenis Pengguna: 3 tipe user (Umum, Atlet, Admin)
6. **Slide 6** - Fitur Utama Sistem: 4 fitur kunci
7. **Slide 7** - Metode Penelitian: Timeline 4 tahapan
8. **Slide 8** - Arsitektur Sistem: Frontend-Backend separation
9. **Slide 9** - Hasil Pengujian: Testing results
10. **Slide 10** - Validasi & Konsistensi Data: Data validation features
11. **Slide 11** - Efisiensi Administratif: Administrative improvements
12. **Slide 12** - Kesimpulan & Pengembangan: Summary & future plans

## 🎨 Tech Stack

- **React.js** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Inter Font** - Modern typography

## 🎭 Animasi

- **Fade + Slide-up** - Entrance animations
- **Stagger Children** - Sequential bullet points
- **Hover Effects** - Interactive card animations
- **Scroll-triggered** - Animations on viewport entry
- **Background Pulse** - Subtle ambient animations

## 🎨 Color Palette

```css
Ocean Dark:  #0a1929
Ocean Blue:  #1e3a5f
Ocean Light: #2d5f8d
Cyan Bright: #00d4ff
Cyan Light:  #4dd4ff
```

## 📁 Project Structure

```
presentasi/
├── src/
│   ├── components/
│   │   └── Slide.jsx          # Reusable slide component
│   ├── slides/
│   │   ├── Slide1.jsx          # Title slide
│   │   ├── Slide2.jsx          # Background
│   │   ├── Slide3.jsx          # Problems
│   │   ├── Slide4.jsx          # Solution
│   │   ├── Slide5.jsx          # User types
│   │   ├── Slide6.jsx          # Main features
│   │   ├── Slide7.jsx          # Methodology
│   │   ├── Slide8.jsx          # Architecture
│   │   ├── Slide9.jsx          # Testing results
│   │   ├── Slide10.jsx         # Data validation
│   │   ├── Slide11.jsx         # Administrative efficiency
│   │   └── Slide12.jsx         # Conclusion
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🎯 Navigasi

### Keyboard
- **Arrow Down / Page Down** - Slide berikutnya
- **Arrow Up / Page Up** - Slide sebelumnya
- **Home** - Kembali ke slide pertama
- **End** - Ke slide terakhir

### Mouse
- **Scroll** - Navigasi vertikal
- **Dot Navigation** - Klik dot di sisi kiri untuk jump ke slide tertentu

## 🎨 Customization

### Mengubah Warna

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'ocean-dark': '#0a1929',
      'ocean-blue': '#1e3a5f',
      // ... ubah sesuai kebutuhan
    },
  },
}
```

### Mengubah Font

Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800;900&display=swap');
```

### Menambah Slide Baru

1. Buat file baru di `src/slides/SlideX.jsx`
2. Import dan tambahkan di `src/App.jsx`
3. Update progress indicator count

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

## 📝 License

This project is created for academic purposes.

## 👨‍💻 Author

CIBLON Development Team

---

**Made with ❤️ for swimming competition management**
