# 🏗️ CAKIR FACADES — Proje Ana Planı (Master Blueprint)

## 📋 Proje Özeti

**Proje Adı:** cakirfacades.fr — Kurumsal Web Sitesi  
**Müşteri:** CAKIR FACADES (SARL)  
**Teknoloji:** React + Vite (SPA)  
**Dil:** Tamamen Fransızca (Native seviyede)  
**Domain:** https://cakirfacades.fr  
**Deployment:** GitHub Actions → FTP (Hostinger)  
**Repo:** https://github.com/Fyned/cakirfacades.fr

---

## 🏢 Şirket Bilgileri (Kbis'ten)

| Alan | Bilgi |
|------|-------|
| **Şirket Adı** | CAKIR FACADES |
| **Yasal Durum** | SARL (Société à responsabilité limitée — Associé unique) |
| **RCS Numarası** | 942 401 407 R.C.S. Nantes |
| **N° gestion** | 2025B01142 |
| **Sermaye** | 3 000,00 € |
| **Kuruluş Tarihi** | 26/03/2025 |
| **Faaliyet Başlangıcı** | 01/03/2025 |
| **Adres** | 4 rue de Metz, 44110 Châteaubriant |
| **Yönetici** | Cakir Emin |
| **Faaliyet Alanı** | Travaux d'enduits et ravalement des façades d'immeuble d'habitations, professionnel et tous types de constructions |
| **Süre** | 25/03/2124'e kadar |
| **Telefon** | 06 28 82 19 08 |
| **E-posta** | ets-cakir@hotmail.fr |
| **Web** | www.cakirfacades.fr |

---

## 🎯 Hizmetler (Services)

Kartvizit ve Kbis belgelerine göre sunulan hizmetler:

1. **Enduit de façade** — Cephe sıvası (dekoratif taş efekti enduit dahil)
2. **Ravalement de façades** — Cephe yenileme/onarım
3. **Isolation thermique par l'extérieur (ITE)** — Dış cephe ısı yalıtımı
4. **Neuf & Rénovation** — Yeni yapılar ve tadilat
5. **Enduit décoratif / Pierre sculptée** — Dekoratif enduit / Taş efekti süsleme (görsellerde belirgin)
6. **Crépi** — Dış cephe sıvası

---

## 🎨 Tasarım Sistemi

### Renk Paleti (Logo SVG'lerden çıkarılmıştır)

| Renk | Hex Kodu | Kullanım |
|------|----------|----------|
| **Siyah (Primary Dark)** | `#1A1C1A` | Arka plan, header, footer |
| **Koyu Siyah** | `#181818` | Metin, arka plan varyant |
| **Altın (Primary Gold)** | `#A98845` | Vurgular, CTA, başlıklar |
| **Açık Altın** | `#AB9159` | Hover, secondary accent |
| **Koyu Altın** | `#A78846` | Border, ince detaylar |
| **Gümüş Gri** | `#B5BAB9` | Paragraf metni, divider |
| **Beyaz** | `#FFFFFF` | Arka plan açık bölümler |
| **Açık Gri** | `#F5F5F0` | Section arka plan |
| **Koyu Gri (metin)** | `#2D2D2D` | Body text on light bg |

### Tipografi

- **Başlıklar:** Montserrat (700, 600) — Premium, modern
- **Body:** Inter veya Open Sans (400, 500) — Okunabilir
- **Accent (Logo):** Kartvizitteki "CAKIR" yazısı özel font — Montserrat Bold + letter-spacing

### Tasarım İlkeleri

1. **Kartvizit uyumu:** Siyah-altın-beyaz renk dengesi korunmalı
2. **Premium hissi:** Fazla renkten kaçın, altın vurgular zarif olmalı
3. **Görsel ağırlıklı:** Projeler galerisi en önemli bölüm
4. **Mobil öncelikli:** Fransa'da mobil kullanım %60+
5. **Hızlı yükleme:** Görseller optimize edilmeli (WebP, lazy loading)

---

## 🗂️ Site Yapısı (Sayfa Mimarisi)

```
cakirfacades.fr/
├── / (Accueil — Ana Sayfa)
├── /nos-services (Nos Services — Hizmetlerimiz)
│   ├── /nos-services/enduit-de-facade
│   ├── /nos-services/ravalement-de-facades
│   ├── /nos-services/isolation-exterieure
│   └── /nos-services/neuf-et-renovation
├── /nos-realisations (Nos Réalisations — Projelerimiz/Galeri)
├── /a-propos (À Propos — Hakkımızda)
├── /contact (Contact — İletişim)
├── /devis-gratuit (Devis Gratuit — Ücretsiz Teklif)
└── /mentions-legales (Mentions Légales — Yasal Bilgiler)
```

### Sayfa Açıklamaları

#### 1. Accueil (Ana Sayfa) — `/`
- **Hero Section:** Tam ekran backdrop (AI üretilmiş banner veya en iyi proje görseli), başlık, alt başlık, CTA butonları
- **Hizmetler Özeti:** 4 hizmet kartı (ikon + kısa açıklama)
- **Neden Biz:** Avantajlar (devis gratuit, garantie décennale, artisan qualifié, etc.)
- **Öne Çıkan Projeler:** 4-6 proje görseli (galeri teaser)
- **Müşteri Yorumları:** Testimonials slider (başlangıçta mock data, sonra gerçek eklenir)
- **İletişim CTA:** Harita + hızlı iletişim formu
- **SEO:** H1 = "Cakir Facades — Ravalement de Façades à Châteaubriant et ses Environs"

#### 2. Nos Services — `/nos-services`
- Her hizmet için detaylı alt sayfa
- Hizmet açıklaması, avantajları, ilgili görseller
- CTA: "Demander un devis gratuit"

#### 3. Nos Réalisations (GALERİ) — `/nos-realisations`
- **EN ÖNEMLİ SAYFA**
- Proje bazlı görsel galeri (lightbox ile büyütme)
- Filtreleme: Hizmet türüne göre (enduit, ravalement, ITE, etc.)
- Her proje: Birden fazla görsel (farklı açılar)
- Proje kartları: Öncesi/Sonrası (varsa), açıklama

#### 4. À Propos — `/a-propos`
- Şirket hikayesi
- Değerler ve vizyon
- Neden CAKIR FACADES seçilmeli
- Sertifikalar / Garantiler

#### 5. Contact — `/contact`
- İletişim bilgileri (telefon, e-posta, adres)
- İletişim formu (EmailJS veya Formspree ile)
- Google Maps embed (4 rue de Metz, 44110 Châteaubriant)
- Çalışma saatleri

#### 6. Devis Gratuit — `/devis-gratuit`
- Detaylı teklif formu
- Hizmet seçimi, fotoğraf yükleme
- Proje açıklaması alanı

#### 7. Mentions Légales — `/mentions-legales`
- Yasal bilgiler (Kbis'ten)
- RGPD uyumu
- Cookie politikası

---

## 🛠️ Teknik Altyapı

### Framework & Build
```
React 18+ (SPA)
Vite (Build tool)
React Router DOM (Routing)
```

### Stil & UI
```
Tailwind CSS (Utility-first)
Framer Motion (Animasyonlar)
Headless UI veya Radix (Accessible components)
```

### SEO & Performance
```
react-helmet-async (Meta taglar)
vite-plugin-sitemap (Sitemap)
sharp (Görsel optimizasyonu — build sırasında)
lazysizes veya native lazy loading
```

### Form & İletişim
```
EmailJS veya Formspree (Form backend)
react-hook-form (Form validasyon)
```

### Galeri
```
yet-another-react-lightbox (Lightbox)
masonry layout veya grid
```

### Deployment
```
GitHub Actions → FTP
Mevcut workflow kullanılacak
```

---

## 📁 Proje Dosya Yapısı

```
cakirfacades.fr/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .claude/
│   └── settings.json
├── docs/
│   ├── PROJECT-BLUEPRINT.md (bu dosya)
│   ├── DESIGN-SYSTEM.md
│   ├── SEO-STRATEGY.md
│   ├── CONTENT-FR.md
│   ├── IMAGE-GROUPING.md
│   ├── DEPLOYMENT-GUIDE.md
│   └── CLAUDE-CODE-INSTRUCTIONS.md
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo/
│       │   ├── cakir-logo.svg
│       │   ├── cakir-header-logo.svg
│       │   └── cakir-favicon-logo.svg
│       ├── projects/
│       │   ├── projet-01/ (gruplandırılmış görseller)
│       │   ├── projet-02/
│       │   └── ...
│       ├── hero/
│       │   └── hero-banner.webp (AI üretilecek veya en iyi görsel)
│       └── services/
│           ├── enduit.webp
│           ├── ravalement.webp
│           ├── isolation.webp
│           └── neuf-renovation.webp
├── src/
│   ├── assets/
│   │   └── fonts/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ServicesPreview.jsx
│   │   │   ├── WhyUs.jsx
│   │   │   ├── FeaturedProjects.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── ContactCTA.jsx
│   │   ├── gallery/
│   │   │   ├── ProjectGallery.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectFilter.jsx
│   │   │   └── Lightbox.jsx
│   │   └── seo/
│   │       ├── SEOHead.jsx
│   │       └── StructuredData.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Realisations.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── DevisGratuit.jsx
│   │   └── MentionsLegales.jsx
│   ├── data/
│   │   ├── services.js
│   │   ├── projects.js
│   │   ├── testimonials.js
│   │   ├── seo-meta.js
│   │   └── navigation.js
│   ├── hooks/
│   │   ├── useScrollToTop.js
│   │   └── useIntersectionObserver.js
│   ├── utils/
│   │   ├── seo.js
│   │   └── imageOptimizer.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Deployment Stratejisi

### Mevcut Durum
- `index.html` (maintenance page) + `cakir facades logo.svg` → FTP root
- GitHub Actions ile FTP deploy aktif ve çalışıyor

### Strateji
1. **Aşama 1:** React + Vite projeyi `src/` altında oluştur
2. **Aşama 2:** Build çıktısı `dist/` klasörüne alınır
3. **Aşama 3:** GitHub Actions workflow güncellenir → `dist/` klasörünü FTP'ye deploy eder
4. **Aşama 4:** Maintenance mode kaldırılır

### Önemli: Maintenance Mode Korunması
- Mevcut `index.html` (maintenance) FTP root'ta kalmalı
- Yeni site hazır olana kadar deploy ETMEYECEĞİZ
- Son aşamada `dist/` içindeki yeni `index.html` ile değiştirilir
- Workflow'da `dist/` dizininin deploy edilmesi sağlanır

### GitHub Actions Workflow Güncellemesi
```yaml
# .github/workflows/deploy.yml
# Build step eklenmeli:
# 1. npm install
# 2. npm run build
# 3. FTP upload → dist/ klasörü
```

---

## 📊 Proje Zaman Çizelgesi (Tahmini)

| Aşama | Görev | Süre |
|-------|-------|------|
| 1 | Görsel gruplama + optimizasyon | 1-2 saat |
| 2 | Proje kurulumu (Vite + deps) | 30 dk |
| 3 | Tasarım sistemi + layout | 2 saat |
| 4 | Ana sayfa | 3 saat |
| 5 | Hizmet sayfaları | 2 saat |
| 6 | Galeri/Réalisations sayfası | 3 saat |
| 7 | İletişim + Devis sayfaları | 1.5 saat |
| 8 | Hakkımızda + Mentions Légales | 1 saat |
| 9 | SEO optimizasyonu | 2 saat |
| 10 | Test + Performance | 1 saat |
| 11 | Deployment | 30 dk |

---

## 🔑 Kritik Notlar

1. **ASLA deploy etme** — Ben (Fyned) "deploy et" demeden push yapılmayacak
2. **Görsel gruplama öncelikli** — 111 görsel gruplandırılmadan galeri oluşturulmayacak
3. **SEO en üst öncelik** — Her sayfa için unique meta, schema markup, semantic HTML
4. **Fransızca native seviye** — Çeviri değil, doğal Fransızca içerik
5. **Performance** — Lighthouse 90+ hedeflenmeli
6. **Mobil öncelikli** — Responsive design, touch-friendly
7. **Erişilebilirlik** — WCAG 2.1 AA uyumu
