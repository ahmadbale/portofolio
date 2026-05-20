# Portfolio Ahmad Iqbal Firmansyah

Portfolio website modern yang dibangun dengan Next.js 16, TypeScript, dan Tailwind CSS.

## 🚀 Fitur

- ✨ Desain modern dengan glassmorphism effect
- 🎨 Custom color palette dengan Material Design 3
- 📱 Fully responsive untuk semua ukuran layar
- ⚡ Optimized dengan Next.js 16 dan Turbopack
- 🎯 TypeScript untuk type safety
- 🌙 Dark mode by default
- 🔤 Custom fonts: Space Grotesk, Hanken Grotesk, JetBrains Mono

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Material Symbols
- **Fonts**: Google Fonts (Space Grotesk, Hanken Grotesk, JetBrains Mono)

## 📦 Instalasi

1. Clone repository:
```bash
git clone <repository-url>
cd portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:3000`

## 🏗️ Struktur Project

```
portofolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   └── Footer.tsx      # Footer
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## 🎨 Customization

### Mengubah Warna

Edit file `tailwind.config.ts` untuk mengubah color palette:

```typescript
colors: {
  primary: "#cfbcff",
  secondary: "#cdc0e9",
  tertiary: "#e7c365",
  // ... dan lainnya
}
```

### Mengubah Font

Edit file `app/layout.tsx` untuk mengubah font:

```typescript
import { Your_Font } from "next/font/google";
```

## 📝 Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## 🌐 Deployment

Project ini siap untuk di-deploy ke Vercel:

```bash
npm run build
```

Atau deploy langsung ke Vercel dengan satu klik.

## 📄 License

© 2024 Ahmad Iqbal Firmansyah. All rights reserved.

## 👤 Author

**Ahmad Iqbal Firmansyah**
- Full-Stack & Front-End Developer
- Business Information Systems Student at Politeknik Negeri Malang
