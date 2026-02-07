# 🎨 CAKIR FACADES — Tasarım Sistemi (Design System)

## Renk Paleti

### Ana Renkler (Logo'dan türetilmiştir)

#### Koyu Tonlar
| İsim | Hex | RGB | Kullanım |
|------|-----|-----|----------|
| `cakir-black` | `#1A1C1A` | 26, 28, 26 | Header, footer, dark sections |
| `cakir-dark` | `#181818` | 24, 24, 24 | Body text, dark backgrounds |
| `cakir-darker` | `#161616` | 22, 22, 22 | Hover states on dark |
| `cakir-darkest` | `#151615` | 21, 22, 21 | Deepest dark (shadows) |

#### Altın Tonları (Brand Color)
| İsim | Hex | RGB | Kullanım |
|------|-----|-----|----------|
| `cakir-gold` | `#A98845` | 169, 136, 69 | CTA, links, accents |
| `cakir-gold-light` | `#AB9159` | 171, 145, 89 | Hover, secondary accent |
| `cakir-gold-dark` | `#A78846` | 167, 136, 70 | Active states |
| `cakir-gold-muted` | `#A6894B` | 166, 137, 75 | Subtle accents |
| `cakir-gold-warm` | `#AA8949` | 170, 137, 73 | Warm accent variant |

#### Açık Tonlar
| İsim | Hex | RGB | Kullanım |
|------|-----|-----|----------|
| `cakir-silver` | `#B5BAB9` | 181, 186, 185 | Dividers, muted text |
| `cakir-light` | `#F5F5F0` | 245, 245, 240 | Light section bg |
| `cakir-white` | `#FFFFFF` | 255, 255, 255 | Main backgrounds |
| `cakir-offwhite` | `#FAFAF8` | 250, 250, 248 | Card backgrounds |

### Gradientler
```css
/* Gold gradient — CTA butonlar, decorative elements */
background: linear-gradient(135deg, #A98845 0%, #AB9159 50%, #A78846 100%);

/* Dark overlay — Hero banner */
background: linear-gradient(180deg, rgba(26,28,26,0.85) 0%, rgba(26,28,26,0.4) 50%, rgba(26,28,26,0.7) 100%);

/* Gold subtle — section divider */
background: linear-gradient(90deg, transparent 0%, #A98845 50%, transparent 100%);
```

---

## Tipografi

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
```

### Heading Scale
| Element | Font | Weight | Size (Desktop) | Size (Mobile) | Line-Height |
|---------|------|--------|----------------|---------------|-------------|
| H1 | Montserrat | 800 | 48px / 3rem | 32px / 2rem | 1.15 |
| H2 | Montserrat | 700 | 36px / 2.25rem | 26px / 1.625rem | 1.2 |
| H3 | Montserrat | 600 | 24px / 1.5rem | 20px / 1.25rem | 1.3 |
| H4 | Montserrat | 600 | 20px / 1.25rem | 18px / 1.125rem | 1.4 |
| Body | Inter | 400 | 16px / 1rem | 15px / 0.9375rem | 1.6 |
| Body lg | Inter | 400 | 18px / 1.125rem | 16px / 1rem | 1.7 |
| Small | Inter | 400 | 14px / 0.875rem | 13px / 0.8125rem | 1.5 |
| Caption | Inter | 500 | 12px / 0.75rem | 11px / 0.6875rem | 1.4 |

### Başlık Stilleri
```css
/* Hero title */
.hero-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}

/* Section titles */
.section-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1A1C1A;
}

/* Gold accent subtitle */
.subtitle-gold {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #A98845;
  font-size: 14px;
}
```

---

## Spacing Sistemi

```
4px   → xs
8px   → sm  
12px  → md
16px  → base (1rem)
24px  → lg
32px  → xl
48px  → 2xl
64px  → 3xl
80px  → section-gap (desktop)
96px  → section-gap-lg
128px → hero-padding
```

### Section Spacing
```css
/* Her section arası */
.section { padding: 80px 0; }  /* Desktop */
.section { padding: 48px 0; }  /* Mobile */

/* Container max-width */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
```

---

## Bileşen Tasarımları

### Butonlar

#### Primary (Gold)
```css
background: linear-gradient(135deg, #A98845, #AB9159);
color: #FFFFFF;
font-family: 'Montserrat', sans-serif;
font-weight: 600;
font-size: 15px;
padding: 14px 32px;
border-radius: 6px;
border: none;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 2px 8px rgba(169, 136, 69, 0.3);

/* Hover */
filter: brightness(1.1);
box-shadow: 0 4px 16px rgba(169, 136, 69, 0.4);
transform: translateY(-1px);
```

#### Secondary (Outline Gold)
```css
background: transparent;
color: #A98845;
border: 2px solid #A98845;
font-weight: 600;
padding: 12px 30px;
border-radius: 6px;

/* Hover */
background: #A98845;
color: #FFFFFF;
```

#### Dark
```css
background: #1A1C1A;
color: #FFFFFF;
padding: 14px 32px;
border-radius: 6px;

/* Hover */
background: #2D2D2D;
```

### Kartlar

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.04);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

/* Gold top accent */
.card-accent {
  border-top: 3px solid #A98845;
}
```

### Service Cards
```css
.service-card {
  text-align: center;
  padding: 40px 24px;
}

.service-card .icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  color: #A98845;
}

.service-card h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1A1C1A;
}

.service-card p {
  color: #555;
  line-height: 1.6;
}
```

### Gallery Cards
```css
.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 4/3;
  cursor: pointer;
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.gallery-card .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  background: linear-gradient(transparent, rgba(26,28,26,0.85));
  color: white;
}
```

---

## İkonlar

### Lucide React İkonları (önerilen)
```
Services:
- PaintBrush (Enduit)
- Building2 (Ravalement)
- Thermometer (Isolation)
- Hammer (Neuf & Rénovation)

Avantages:
- FileText (Devis Gratuit)
- Award (Qualifié)
- Shield (Garantie)
- Zap (Rapide)

Contact:
- Phone
- Mail
- MapPin
- Clock

Navigation:
- Menu (Hamburger)
- X (Close)
- ChevronDown (Dropdown)
- ArrowRight (CTA)
- ExternalLink
```

---

## Animasyonlar (Framer Motion)

### Sayfa Geçişleri
```jsx
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20 }
};
```

### Scroll Reveal
```jsx
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};
```

### Stagger Children
```jsx
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};
```

---

## Responsive Tasarım

### Grid Sistemi
```css
/* Desktop: 4 kolon */
grid-template-columns: repeat(4, 1fr);

/* Tablet: 2 kolon */
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr);
}

/* Mobile: 1 kolon */
@media (max-width: 640px) {
  grid-template-columns: 1fr;
}
```

### Galeri Grid
```css
/* Desktop: 3 kolon masonry */
/* Tablet: 2 kolon */
/* Mobile: 1 kolon (veya 2 küçük) */
```

---

## Hero Banner İçin AI Görsel Gereksinimleri

Eğer mevcut görseller hero banner için yeterli değilse, şu spesle bir AI görsel üretilebilir:

**Prompt örneği:**
```
Professional facade renovation in progress, French countryside house with beautiful stone-effect decorative plaster (enduit décoratif imitation pierre), warm beige and gold tones, artisan worker finishing details, Loire-Atlantique landscape in background, golden hour sunlight, premium quality, architectural photography, 16:9 ratio, cinematic
```

**Alternatif (sadece arka plan):**
```
Beautiful French residential home exterior with elegant stone-pattern facade coating, luxury appearance, soft natural lighting, well-maintained garden, professional quality facade work, warm cream and gold colors, Loire-Atlantique region architecture, wide angle, 16:9 format, architectural photography
```

**Boyut:** 1920x1080px minimum (16:9)
**Format:** WebP veya high-quality JPEG
