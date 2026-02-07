# 🤖 CAKIR FACADES — Claude Code Geliştirme Talimatları

## ⚠️ KRİTİK KURALLAR

1. **ASLA `git push` YAPMA** — Fyned "deploy et" demeden kesinlikle push yapılmayacak
2. **Mevcut maintenance mode BOZULMAYACAK** — FTP'deki mevcut `index.html` değiştirilmeyecek
3. **Tüm geliştirme `src/` altında** yapılacak
4. **Fransızca native seviye** — Çeviri değil, doğal Fransızca
5. **SEO her şeyin üstünde** — Her satırda SEO düşünülecek

---

## 📋 Proje Başlatma Adımları

### 1. Proje Kurulumu
```bash
cd C:\Projects\cakirfacades.fr

# Vite React projesi oluştur (mevcut dizinde)
npm create vite@latest . -- --template react

# Bağımlılıkları kur
npm install

# Ek bağımlılıklar
npm install react-router-dom
npm install react-helmet-async
npm install framer-motion
npm install react-hook-form
npm install yet-another-react-lightbox
npm install @emailjs/browser
npm install lucide-react

# Tailwind CSS
npm install -D tailwindcss @tailwindcss/vite

# Geliştirme bağımlılıkları
npm install -D vite-plugin-sitemap
```

### 2. Vite Konfigürasyonu
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        }
      }
    }
  }
})
```

### 3. Tailwind Konfigürasyonu
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cakir': {
          'black': '#1A1C1A',
          'dark': '#181818',
          'gold': '#A98845',
          'gold-light': '#AB9159',
          'gold-dark': '#A78846',
          'silver': '#B5BAB9',
          'light': '#F5F5F0',
          'white': '#FFFFFF',
        }
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #A98845 0%, #AB9159 50%, #A78846 100%)',
      }
    },
  },
  plugins: [],
}
```

---

## 📁 Dosya Oluşturma Sırası

### Faz 1: Altyapı
1. `vite.config.js`
2. `tailwind.config.js`
3. `src/styles/globals.css`
4. `index.html` (root HTML — SPA entry)
5. `src/main.jsx`
6. `src/App.jsx` (Router setup)

### Faz 2: Layout Bileşenleri
1. `src/components/layout/Header.jsx`
2. `src/components/layout/Navbar.jsx`
3. `src/components/layout/Footer.jsx`
4. `src/components/layout/Layout.jsx`
5. `src/components/seo/SEOHead.jsx`
6. `src/components/seo/StructuredData.jsx`

### Faz 3: UI Bileşenleri
1. `src/components/ui/Button.jsx`
2. `src/components/ui/SectionTitle.jsx`
3. `src/components/ui/Card.jsx`
4. `src/components/ui/ContactForm.jsx`

### Faz 4: Data Dosyaları
1. `src/data/services.js`
2. `src/data/projects.js`
3. `src/data/testimonials.js`
4. `src/data/seo-meta.js`
5. `src/data/navigation.js`

### Faz 5: Ana Sayfa Bileşenleri
1. `src/components/home/HeroSection.jsx`
2. `src/components/home/ServicesPreview.jsx`
3. `src/components/home/WhyUs.jsx`
4. `src/components/home/FeaturedProjects.jsx`
5. `src/components/home/Testimonials.jsx`
6. `src/components/home/ContactCTA.jsx`

### Faz 6: Sayfalar
1. `src/pages/Home.jsx`
2. `src/pages/Services.jsx`
3. `src/pages/ServiceDetail.jsx`
4. `src/pages/Realisations.jsx`
5. `src/pages/About.jsx`
6. `src/pages/Contact.jsx`
7. `src/pages/DevisGratuit.jsx`
8. `src/pages/MentionsLegales.jsx`

### Faz 7: Galeri Bileşenleri
1. `src/components/gallery/ProjectGallery.jsx`
2. `src/components/gallery/ProjectCard.jsx`
3. `src/components/gallery/ProjectFilter.jsx`

### Faz 8: Public Dosyalar
1. `public/robots.txt`
2. `public/sitemap.xml`
3. Görsellerin taşınması ve optimize edilmesi
4. Logo SVG dosyalarının `public/images/logo/` altına kopyalanması

---

## 🎨 Tasarım Spesifikasyonları

### Header
- Sabit (sticky) header, scroll'da gölge efekti
- Sol: Logo (cakir-header-logo.svg)
- Orta: Navigation linkler
- Sağ: Tel + "Devis Gratuit" butonu
- Mobilde: Hamburger menü
- Background: `#1A1C1A` (koyu) veya `#FFFFFF` (açık, scroll sonrası)
- Yükseklik: Desktop 80px, Mobil 64px

### Hero Section
- Tam ekran yükseklik (100vh veya min-height)
- Arka plan: En iyi proje görseli veya AI üretilmiş banner
- Overlay: Koyu gradient (siyahtan transparan)
- Başlık: Büyük, beyaz, Montserrat Bold
- Alt başlık: Altın rengi
- 2 CTA butonu yan yana

### Kartlar
- Beyaz arka plan, hafif gölge
- Hover'da hafif yükselme (translateY + shadow artışı)
- Border-radius: 8px
- Altın accent (top border veya ikon rengi)

### Footer
- Koyu arka plan (#1A1C1A)
- 4 kolon: Logo+Desc | Liens | Services | Contact
- Alt: Copyright + Mentions Légales
- Altın vurgular

### Butonlar
```css
/* Primary (Gold) */
background: linear-gradient(135deg, #A98845, #AB9159);
color: white;
border-radius: 6px;
padding: 12px 28px;
font-weight: 600;
transition: all 0.3s;

/* Secondary (Outline) */
border: 2px solid #A98845;
color: #A98845;
background: transparent;

/* Dark */
background: #1A1C1A;
color: white;
```

---

## 🔧 Özel Bileşen Detayları

### SEOHead Bileşeni
```jsx
// react-helmet-async kullan
// Her sayfa için:
// - title
// - meta description
// - canonical URL
// - og:title, og:description, og:image, og:url
// - twitter:card
// - hreflang (fr)
```

### StructuredData Bileşeni
```jsx
// JSON-LD script etiketi
// LocalBusiness schema (tüm sayfalar)
// BreadcrumbList (tüm sayfalar)
// Service schema (hizmet sayfaları)
```

### ContactForm
```jsx
// react-hook-form ile validasyon
// EmailJS ile gönderim (veya Formspree)
// Alanlar: nom, email, telephone, sujet, message
// Başarı/hata mesajları Fransızca
// Anti-spam: honeypot field
```

### ProjectGallery
```jsx
// Masonry veya grid layout
// Filtreleme (kategori bazlı)
// yet-another-react-lightbox ile lightbox
// Lazy loading
// Proje başına birden fazla görsel
// Cover image + açılınca tüm görseller
```

---

## 📱 Responsive Breakpoints

```css
/* Tailwind defaults */
sm: 640px   /* Büyük telefon */
md: 768px   /* Tablet */
lg: 1024px  /* Küçük laptop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Büyük ekran */
```

### Mobil Özel Davranışlar
- Hamburger menü (slide-in)
- Sticky bottom bar: "Appeler" + "Devis"
- Tek sütun layout
- Daha küçük font-size'lar
- Touch-friendly butonlar (min 44x44px)

---

## 🚀 Build & Deploy

### Build Komutu
```bash
npm run build
# Çıktı: dist/ klasörü
```

### GitHub Actions Workflow (güncellenecek)
```yaml
name: Deploy to FTP

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ftp.cakirfacades.fr
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: /public_html/
          exclude: |
            **/.git*
            **/.git*/**
            **/node_modules/**
            **/docs/**
```

### ⚠️ DEPLOY ETMEYECEĞİZ
- Bu workflow hazır olacak ama PUSH YAPILMAYACAK
- Fyned "deploy et" deyince:
  1. Workflow güncellenir
  2. `git add . && git commit && git push`
  3. GitHub Actions otomatik build + FTP deploy yapar

---

## 📐 Kod Kalite Standartları

### Genel
- ES6+ syntax
- Functional components + Hooks
- PropTypes veya TypeScript (tercihen PropTypes)
- Consistent naming: PascalCase (components), camelCase (functions/variables)

### Dosya Yapısı
- Her component kendi dosyasında
- İlgili stiller component içinde (Tailwind)
- Data dosyaları `src/data/` altında

### Performance
- React.lazy + Suspense (code splitting)
- useMemo/useCallback gereksiz render önleme
- Image lazy loading
- Font preloading

### Erişilebilirlik (a11y)
- Semantic HTML (header, main, nav, section, footer)
- aria-labels
- Keyboard navigation
- Focus indicators
- Alt text tüm görsellerde
- Kontrast oranı WCAG AA

---

## 📖 Referans Dokümanlar

Claude Code geliştirme sırasında şu dokümanları okumalı:

1. **`docs/PROJECT-BLUEPRINT.md`** — Genel proje planı
2. **`docs/SEO-STRATEGY.md`** — SEO stratejisi ve meta bilgileri
3. **`docs/CONTENT-FR.md`** — Tüm Fransızca içerik
4. **`docs/DESIGN-SYSTEM.md`** — Tasarım sistemi detayları
5. **`docs/IMAGE-GROUPING.md`** — Görsel gruplama rehberi
6. **`docs/DEPLOYMENT-GUIDE.md`** — Deployment talimatları

---

## 🔄 Geliştirme Akışı

1. `npm run dev` ile development server başlat
2. Her component'i tek tek geliştir ve test et
3. Responsive kontrolü yap (Chrome DevTools)
4. `npm run build` ile production build al
5. `dist/` klasörünü kontrol et
6. Deploy ETME — Fyned'in onayını bekle
