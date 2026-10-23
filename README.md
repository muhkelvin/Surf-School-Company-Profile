# Kala Surf Co. — Surf School Multi-Page Company Profile

**Project:** Tinkerbench Portfolio Demo 05  
**Product Type:** Multi-Page Company Profile Website  
**Technology:** HTML5 + Tailwind CSS (Production Build) + Vanilla JS  
**Design Concept:** Coastal Editorial — Surf Culture & Ocean Lifestyle  
**Location Focus:** Batu Karas, West Java, Indonesia  
**Primary Conversion:** Contextual WhatsApp Inquiries  

---

## 1. Project Overview

Kala Surf Co. adalah website profil multi-halaman untuk sekolah surfing kontemporer yang berlokasi di teluk berombak tenang Batu Karas, Pangandaran, Jawa Barat.

Website ini dirancang untuk:
1. Membangun identitas digital sekolah surfing yang kredibel, tenang, dan berorientasi pada alam samudra.
2. Memperkenalkan filosofi mengajar berbasis pemahaman arus dan biomekanik tubuh.
3. Menampilkan profil instruktur berlisensi ISA (International Surfing Association).
4. Menjelaskan rincian kurikulum program belajar (Pemula, Privat 1-on-1, Sesi Grup/Keluarga, dan Intermediate).
5. Menyajikan galeri visual fotografi editorial otentik tanpa elemen AI dekoratif berlebihan.
6. Menyediakan informasi lokasi, rute transportasi, dan formulir konsultasi terintegrasi WhatsApp.

---

## 2. Struktur Halaman & File

Website menggunakan arsitektur 6 halaman independen yang saling terhubung:

| Halaman | File | Deskripsi & Tujuan |
|---|---|---|
| **Home** | `index.html` | Gerbang utama pengenalan identitas, kutipan filosofi, highlight lesson & instruktur, serta ikhtisar kondisi ombak Batu Karas. |
| **About Us** | `about.html` | Kisah pendirian di Batu Karas, 4 pilar metodologi belajar, nilai konservasi pesisir & etika lineup. |
| **Lessons** | `lessons.html` | Rincian komprehensif seluruh program (Beginner, Private, Group, Intermediate), standar papan, dan panduan persiapan siswa. |
| **Instructors** | `instructors.html` | Profil mendalam para pelatih (Wayan "Boma", Sarah Lindqvist, Rizki Pratama), lisensi ISA & sertifikasi keselamatan laut. |
| **Gallery** | `gallery.html` | Dokumentasi fotografi editorial dengan filter kategori (Semua, Sesi Ombak, Instruktur, Pantai & Peralatan). |
| **Contact & Location** | `contact.html` | Alamat fisik, jam operasional air, rute perjalanan (kereta/pesawat/mobil), dan form penyusun pesan WhatsApp otomatis. |

---

## 3. Visual Identity & Color System

Sesuai arahan PRD **Coastal Editorial**:

- **Deep Tide (`#153A3A`)**: Teks utama, kontras header, dan footer editorial.
- **Salt White (`#F7F5EF`)**: Background utama yang hangat dan nyaman di mata.
- **Sea Glass (`#D9E6D9`)**: Aksen kontras lembut antar-section.
- **Surf Coral (`#F16D4F`)**: Warna aksen selektif untuk Call-to-Action (CTA) dan indikator penting.
- **Ocean Mist (`#A9C9C3`)**: Detail label dan aksen sekunder.
- **Warm Sand (`#E8D7BB`)**: Surface detail dan kartu editorial.

### Tipografi
- **Display Serif:** Fraunces (Google Fonts)
- **Body & Sans:** Plus Jakarta Sans / Inter

---

## 4. Setup & Pengembangan Lokal

### Prasyarat
- Node.js (v18 ke atas) & npm

### Menjalankan Build Tailwind CSS
```bash
# Instalasi dependensi
npm install

# Kompilasi CSS produksi (minified)
npm run build:css

# Mode pantau (watch mode) saat pengembangan
npm run watch:css
```

### Menjalankan Server Lokal
Anda dapat membuka file HTML secara langsung di browser atau menggunakan server HTTP statis:
```bash
npx serve .
```

---

## 5. Fitur Aksesibilitas & Teknis
- **Semantic HTML5:** `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<nav>`, `<footer>`, dan `<address>`.
- **Keyboard Navigation & ARIA:** Mobile drawer dengan toggle `aria-expanded` dan tombol Escape, serta accordion FAQ dengan state `aria-expanded`.
- **Zero Heavy Dependencies:** Tidak menggunakan framework JavaScript yang berat atau animasi berlebihan (`prefers-reduced-motion` didukung).
- **SEO Ready:** Unique meta description, meta viewport, Open Graph tags, dan struktur Heading H1–H3 yang teratur di setiap halaman.
