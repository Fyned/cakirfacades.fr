# CLAUDE.md — Cakir Facades (React)

## Proje
- **Tip:** website
- **Musteri:** Cakir Facades (Fransa)
- **Domain:** cakirfacades.fr
- **Durum:** Production

## Teknoloji
- React 18 + Vite 6 + JSX
- Tailwind CSS 4 (@tailwindcss/vite)
- Framer Motion (animasyon)
- React Hook Form (form yonetimi)
- EmailJS (iletisim formu e-posta)
- yet-another-react-lightbox (gorsel galerisi)
- Lucide React (ikonlar)
- React Router DOM 7
- React Helmet Async (SEO)

## Yapi
```
src/
  components/    # UI bilesenleri
  data/          # Statik veri (blog, projeler, hizmetler, SSS, SEO)
  hooks/         # Ozel React hook'lari
  pages/         # Sayfa bilesenleri
  styles/        # CSS dosyalari
  utils/         # Yardimci fonksiyonlar
  main.jsx       # Uygulama giris noktasi
  App.jsx        # Root bilesen
public/          # Statik dosyalar ve gorseller
docs/            # Proje dokumantasyonu
```

## Kurallar
- Icerik Fransizca olmali; tum metin ve SEO etiketleri Fransizca yazilmali.
- Tailwind CSS 4 kullanilir; `@tailwindcss/vite` eklentisi ile entegre.
- Veri dosyalari `src/data/` klasorunde JS modulleri olarak tutulur.
- Gorsel galerisi icin `yet-another-react-lightbox` kullanilir.
- Form gonderimi EmailJS uzerinden yapilir.
