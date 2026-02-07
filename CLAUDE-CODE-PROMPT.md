# 🚀 CAKIR FACADES — Claude Code Master Prompt

> Bu dosyayı Claude Code'a doğrudan yapıştır. Claude Code tüm docs/ klasörünü okuyarak projeyi geliştirecek.

---

## PROMPT:

Sen bir kıdemli full-stack web geliştiricisisin. Aşağıdaki görevi adım adım gerçekleştireceksin.

### PROJE
`C:\Projects\cakirfacades.fr` klasöründe bir React + Vite web sitesi geliştireceksin. Bu site Fransa'daki bir cephe/sıva firması olan **CAKIR FACADES** için kurumsal bir web sitesidir.

### ÖNCELİKLİ OKUMA
Çalışmaya başlamadan önce şu dosyaları oku ve her birini tam olarak anla:

1. `docs/PROJECT-BLUEPRINT.md` — Genel proje planı, şirket bilgileri, site yapısı
2. `docs/CLAUDE-CODE-INSTRUCTIONS.md` — Teknik geliştirme talimatları, dosya yapısı, adım adım rehber
3. `docs/DESIGN-SYSTEM.md` — Renk paleti, tipografi, bileşen tasarımları
4. `docs/SEO-STRATEGY.md` — SEO stratejisi, meta bilgileri, schema markup, hedef şehirler
5. `docs/CONTENT-FR.md` — Sitenin TÜM Fransızca içeriği (birebir kullanılacak)
6. `docs/IMAGE-GROUPING.md` — 111 görselin gruplandırma rehberi
7. `docs/DEPLOYMENT-GUIDE.md` — Deployment stratejisi ve çalışma akışı

### KRİTİK KURALLAR
1. **ASLA `git push` YAPMA** — Ben "deploy et" demeden kesinlikle push yapılmayacak
2. **Fransızca native seviye** — Site tamamen Fransızca, çeviri değil doğal
3. **SEO en üst öncelik** — Her sayfada unique meta, schema markup, semantic HTML
4. **Mobil öncelikli** — Responsive, touch-friendly
5. **Performance** — Lighthouse 90+ hedef

### GÖREVLERİN SIRASI

#### Görev 1: Görsel Gruplama
`cakirfacades gorseller` klasöründeki 111 görseli incele ve proje bazlı grupla:
- Aynı binadan farklı açılarla çekilmiş görselleri bir gruba topla
- Her grup için bir `projet-XX-[kategori]-[açıklama]` klasörü oluştur
- Her grupta en kaliteli görseli `cover.jpg` olarak belirle
- `docs/IMAGE-GROUPING.md` dosyasındaki kurallara uy
- Hedef: `public/images/projects/` altında düzenli klasör yapısı

#### Görev 2: Proje Kurulumu
- Vite React projesi kur (mevcut dizinde)
- Tailwind CSS, React Router, Framer Motion ve diğer bağımlılıkları kur
- `docs/CLAUDE-CODE-INSTRUCTIONS.md` dosyasındaki konfigürasyonları uygula
- `public/` altına logo SVG dosyalarını taşı

#### Görev 3: Layout ve Temel Bileşenler
- Header (sticky, responsive, hamburger menu)
- Footer (4 kolonlu, koyu arka plan)
- Layout wrapper
- SEOHead bileşeni (react-helmet-async)
- StructuredData bileşeni (JSON-LD)
- `docs/DESIGN-SYSTEM.md` dosyasındaki tasarıma birebir uy

#### Görev 4: Data Dosyaları
- `src/data/services.js` — 4 hizmet detayı
- `src/data/projects.js` — Gruplandırılmış projeler
- `src/data/testimonials.js` — Müşteri yorumları
- `src/data/seo-meta.js` — Her sayfa için meta bilgileri
- `src/data/navigation.js` — Menü yapısı
- Tüm içerik `docs/CONTENT-FR.md` ve `docs/SEO-STRATEGY.md` dosyalarından alınacak

#### Görev 5: Sayfalar
Her sayfayı `docs/CONTENT-FR.md` dosyasındaki içerikle geliştir:
1. Ana Sayfa (Hero, Services, WhyUs, Featured Projects, Testimonials, CTA)
2. Nos Services (genel + 4 alt sayfa)
3. Nos Réalisations (galeri + lightbox + filtre)
4. À Propos
5. Contact (form + harita + bilgiler)
6. Devis Gratuit (detaylı form)
7. Mentions Légales

#### Görev 6: SEO Optimizasyonu
- Her sayfa için unique title, description, canonical
- Schema.org JSON-LD (LocalBusiness, Service, BreadcrumbList)
- OG tags
- Sitemap.xml
- robots.txt
- .htaccess (SPA routing)
- Alt text tüm görsellerde
- Semantic HTML

#### Görev 7: Performance & Polish
- Görsel optimizasyonu (boyut, format)
- Lazy loading
- Code splitting (React.lazy)
- Animasyonlar (Framer Motion)
- Mobile sticky CTA bar
- Cookie banner
- 404 sayfası

#### Görev 8: Build Test
- `npm run build` çalıştır ve hataları gider
- `npx vite preview` ile yerel test
- Console hatasız olmalı

### BEKLENTİLER
- Profesyonel, premium görünümlü bir site
- Kartvizitteki siyah-altın-beyaz estetik web'e taşınmalı
- Galeri sayfası etkileyici olmalı (111 görselle dolu)
- Fransa'daki rakiplerden daha iyi görünmeli
- SEO açısından Châteaubriant + 250km çevresinde üst sıralarda çıkmalı

Şimdi başla — önce tüm docs/ dosyalarını oku, sonra Görev 1'den itibaren sırayla ilerle.
