# 📸 CAKIR FACADES — Görsel Gruplama Rehberi (Image Grouping Guide)

## Amaç

111 adet görsel (109 JPEG + 2 MP4 video) mevcut. Bu görseller aynı projelerin farklı açılardan çekilmiş halleri ve farklı projeler içermektedir. Bu dosya, görsellerin proje bazlı gruplandırılması için Claude Code'a rehberlik eder.

## Kaynak Klasör
```
C:\Projects\cakirfacades.fr\cakirfacades gorseller\
```

## Hedef Klasör Yapısı
```
C:\Projects\cakirfacades.fr\public\images\projects\
├── projet-01-enduit-pierre-maison/
│   ├── cover.jpg (en iyi görsel)
│   ├── 01.jpg
│   ├── 02.jpg
│   └── ...
├── projet-02-enduit-decoratif-cloture/
│   ├── cover.jpg
│   ├── 01.jpg
│   └── ...
├── projet-03-ravalement-facade/
│   └── ...
└── ...
```

## Gruplama Kriterleri

### Aynı Proje Belirleme
Görseller aynı projeye ait ise:
1. Aynı bina/duvar/yapı farklı açılardan çekilmiştir
2. Aynı enduit deseni/rengi/dokusu görünür
3. Aynı çevre elemanları (pencere, kapı, bahçe, çatı) tekrar eder
4. Aynı tarih damgasına yakın zamanda çekilmiştir (dosya adındaki timestamp)

### Proje Kategorileri (Etiketler)
Her proje için aşağıdaki kategorilerden biri veya birkaçı uygulanmalı:

| Kategori Kodu | Fransızca Adı | Açıklama |
|---------------|---------------|----------|
| `enduit-decoratif` | Enduit Décoratif | Dekoratif taş efekti enduit |
| `enduit-pierre` | Enduit Imitation Pierre | Taş taklidi enduit (en yaygın) |
| `ravalement` | Ravalement de Façade | Cephe yenileme |
| `isolation` | Isolation Extérieure | Dış cephe yalıtım |
| `cloture` | Clôture / Muret | Çit/duvar çalışması |
| `neuf` | Construction Neuve | Yeni yapı |
| `renovation` | Rénovation | Tadilat |
| `detail` | Détail / Gros Plan | Yakın çekim detay |

### Dosya Adlandırma Kuralları
```
projet-XX-[kategori]-[kisa-aciklama]/
  cover.jpg       → Projenin en iyi görseli (vitrin)
  01.jpg          → Sıralı görseller
  02.jpg
  ...
```

Örnekler:
```
projet-01-enduit-pierre-maison-grise/
projet-02-enduit-decoratif-palmier/
projet-03-enduit-pierre-cloture-beige/
projet-04-ravalement-facade-maison/
projet-05-enduit-pierre-maison-jaune/
```

## Claude Code İçin Gruplama Talimatları

### Adım 1: Tüm görselleri incele
```bash
# Görselleri listele ve boyutlarını gör
ls -la "C:\Projects\cakirfacades.fr\cakirfacades gorseller\"
```

### Adım 2: Görselleri görsel olarak incele
Her görseli aç ve şu özelliklere dikkat et:
- Bina türü (maison individuelle, clôture, immeuble)
- Enduit deseni (pierre régulière, pierre irrégulière, crépi lisse)
- Renk (gris, beige, jaune, blanc)
- Çekim açısı (genel, yakın plan, detay)
- Tamamlanmış mı yoksa çalışma sürecinde mi

### Adım 3: Grupla ve taşı
```bash
# Hedef dizinleri oluştur
mkdir -p "C:\Projects\cakirfacades.fr\public\images\projects\projet-01-enduit-pierre-xxx"

# Görselleri kopyala ve yeniden adlandır
cp "kaynak.jpeg" "hedef/01.jpg"
```

### Adım 4: Metadata dosyası oluştur
Her proje klasörü için `meta.json`:
```json
{
  "id": "projet-01",
  "title": "Enduit Imitation Pierre — Maison à Châteaubriant",
  "titleFr": "Enduit Imitation Pierre — Maison à Châteaubriant",
  "description": "Réalisation d'un enduit décoratif imitation pierre sur l'ensemble de la façade d'une maison individuelle.",
  "category": ["enduit-decoratif", "enduit-pierre"],
  "location": "Châteaubriant, Loire-Atlantique",
  "images": ["cover.jpg", "01.jpg", "02.jpg"],
  "coverImage": "cover.jpg",
  "featured": true
}
```

## Görsel Optimizasyonu

### Build Sırasında
Claude Code, görselleri optimize etmek için şunları yapmalı:

1. **Boyut:** Maksimum 1920px genişlik (büyük ekranlar için)
2. **Thumbnail:** 600px genişlik (kart görünümü için)
3. **Format:** WebP (fallback JPEG)
4. **Kalite:** %80 (WebP), %85 (JPEG)
5. **Lazy Loading:** Tüm görsellerde `loading="lazy"`

### Alt Text Kuralları
Her görsel için SEO-friendly alt text:
```
alt="Enduit décoratif imitation pierre sur façade de maison à Châteaubriant — Cakir Facades"
alt="Détail d'enduit sculpté motif pierre naturelle — Artisan façadier Loire-Atlantique"
alt="Ravalement de façade avec enduit pierre — Cakir Facades Châteaubriant"
```

## Videoları İçin
2 adet MP4 video mevcut. Bunlar:
- `public/images/projects/videos/` altına taşınmalı
- HTML5 `<video>` ile lazy load edilmeli
- Poster image (thumbnail) oluşturulmalı

## Önemli Notlar

1. **Küçük dosyalar (< 50KB):** Muhtemelen düşük kaliteli veya thumbnail — dikkatli değerlendir
2. **Büyük dosyalar (> 500KB):** Yüksek kaliteli çekimler — bunlar cover olarak tercih edilsin
3. **"a3t" typo:** `WhatsApp Image 2026-02-01 a3t 16.41.11.jpeg` — "at" yerine "a3t" yazılmış, bu da bir görsel
4. **İlk görsel farklı isim:** `4eeff75ef9e3feea9a1f3ad45a2e5128213.jpeg` — muhtemelen farklı bir kaynaktan
