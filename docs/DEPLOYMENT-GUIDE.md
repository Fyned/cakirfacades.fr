# 🚀 CAKIR FACADES — Deployment Rehberi

## Mevcut Durum

### Aktif Deployment
- **Platform:** Hostinger (FTP)
- **Domain:** cakirfacades.fr
- **Repo:** github.com/Fyned/cakirfacades.fr
- **Branch:** main
- **CI/CD:** GitHub Actions → FTP Deploy
- **Mevcut site:** Maintenance page (tek sayfa index.html + logo SVG)

### GitHub Secrets (Aktif)
- `FTP_USERNAME` ✅ Tanımlı
- `FTP_PASSWORD` ✅ Tanımlı

### Mevcut Workflow
- `Deploy to FTP` workflow'u çalışıyor
- Son başarılı deploy: Jan 31, 2026
- 2 commit mevcut

---

## Deployment Stratejisi

### Aşama 1: Geliştirme (ŞİMDİ)
```
cakirfacades.fr/ → Maintenance page (DEĞİŞMEZ)
Local dev       → npm run dev (localhost:5173)
```

### Aşama 2: Test & Onay
```
Local build     → npm run build → dist/ kontrol
Preview         → npx vite preview (localhost:4173)
Fyned onayı     → "Deploy et" komutu
```

### Aşama 3: Deployment
```
git add .
git commit -m "Launch: Full website v1.0"
git push origin main
→ GitHub Actions tetiklenir
→ npm install + npm run build
→ dist/ klasörü FTP'ye deploy edilir
→ cakirfacades.fr CANLI!
```

---

## GitHub Actions Workflow (Güncellenecek)

### Yeni Workflow: `.github/workflows/deploy.yml`

```yaml
name: Build and Deploy to FTP

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

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
          dangerous-clean-slate: true
          exclude: |
            **/.git*
            **/.git*/**
            **/node_modules/**
            **/docs/**
            **/src/**
```

### Önemli Notlar
- `dangerous-clean-slate: true` → FTP'deki eski dosyaları temizler (maintenance dahil)
- Bu SADECE final deploy'da kullanılacak
- İlk deploy'da `dangerous-clean-slate: false` ile test edilebilir

---

## SPA Routing (Hostinger)

React SPA olduğu için, tüm route'lar `index.html`'e yönlendirilmeli.

### `.htaccess` (dist/ klasörüne eklenmeli)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript application/json image/svg+xml
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

Bu `.htaccess` dosyası `public/` klasörüne yerleştirilmeli ki build sırasında `dist/` içine kopyalansın.

---

## Checklist: Deploy Öncesi

- [ ] Tüm sayfalar çalışıyor
- [ ] Responsive test (320px - 1920px)
- [ ] SEO meta taglar doğru
- [ ] Schema.org markup doğru
- [ ] Görseller optimize (WebP)
- [ ] Lazy loading aktif
- [ ] Contact form çalışıyor
- [ ] robots.txt doğru
- [ ] sitemap.xml doğru
- [ ] .htaccess hazır
- [ ] favicon.svg doğru
- [ ] OG image hazır
- [ ] Performance: Lighthouse 90+
- [ ] Accessibility: A11y check
- [ ] Console'da hata yok
- [ ] 404 sayfası hazır
- [ ] HTTPS yönlendirme (Hostinger panelinden)
- [ ] Build başarılı (`npm run build`)

---

## Rollback Planı

Eğer deploy sonrası sorun çıkarsa:
1. GitHub'da önceki commit'e dön
2. Push yap → Actions otomatik deploy eder
3. Veya FTP'ye manuel olarak eski maintenance page yükle
