# CIBLON Presentation - User Guide

## 🎯 Cara Menggunakan Presentasi

### Menjalankan Presentasi

1. **Development Mode** (untuk editing):
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173`

2. **Production Mode** (untuk presentasi final):
   ```bash
   npm run build
   npm run preview
   ```

### Navigasi Presentasi

#### 1. Scroll Navigation
- **Scroll ke bawah** untuk slide berikutnya
- **Scroll ke atas** untuk slide sebelumnya
- Smooth scroll otomatis aktif

#### 2. Dot Navigation (Sidebar Kiri)
- Klik dot untuk langsung jump ke slide tertentu
- 12 dots mewakili 12 slide
- Dot akan highlight saat hover

#### 3. Keyboard Shortcuts
- `↓` atau `Page Down` - Slide berikutnya
- `↑` atau `Page Up` - Slide sebelumnya
- `Home` - Kembali ke slide 1
- `End` - Ke slide 12

### Tips Presentasi

#### Untuk Presenter

1. **Persiapan**
   - Buka presentasi di browser sebelum mulai
   - Test scroll dan animasi
   - Pastikan fullscreen (F11)
   - Tutup tab/aplikasi lain

2. **Saat Presentasi**
   - Scroll perlahan untuk trigger animasi
   - Beri jeda di setiap slide untuk audience membaca
   - Gunakan dot navigation untuk jump jika perlu
   - Animasi akan replay saat scroll kembali ke slide

3. **Highlight Points**
   - Slide 1: Branding CIBLON
   - Slide 3: 4 Masalah utama (card layout)
   - Slide 5: 3 Jenis pengguna (icon cards)
   - Slide 8: Arsitektur (diagram interaktif)
   - Slide 12: Kesimpulan & future plans

#### Untuk Audience

- Presentasi responsive, bisa dibuka di mobile/tablet
- Animasi smooth dan tidak mengganggu
- Konten mudah dibaca dengan kontras tinggi
- Scroll natural seperti website biasa

### Troubleshooting

#### Animasi Tidak Muncul
- Refresh browser (Ctrl+R atau Cmd+R)
- Clear cache (Ctrl+Shift+R atau Cmd+Shift+R)
- Pastikan JavaScript enabled

#### Scroll Tidak Smooth
- Pastikan browser modern (Chrome, Firefox, Edge, Safari)
- Update browser ke versi terbaru
- Disable browser extensions yang mengganggu scroll

#### Tampilan Tidak Sesuai
- Zoom browser harus 100%
- Resolusi minimal 1280x720
- Gunakan landscape mode untuk mobile

### Fullscreen Mode

#### Windows/Linux
- Tekan `F11` untuk fullscreen
- Tekan `F11` lagi untuk keluar

#### Mac
- Tekan `Cmd+Ctrl+F` untuk fullscreen
- Atau klik icon fullscreen di browser

### Presentasi Mode Tips

1. **Dual Monitor Setup**
   - Monitor 1: Presentasi fullscreen
   - Monitor 2: Notes atau slides overview

2. **Single Monitor**
   - Fullscreen mode (F11)
   - Gunakan keyboard navigation
   - Alt+Tab untuk switch aplikasi jika perlu

3. **Remote Presentation (Zoom/Teams)**
   - Share screen dengan "Share Computer Sound" OFF
   - Pilih browser window, bukan entire screen
   - Test animasi sebelum meeting

### Customization untuk Presentasi

#### Mempercepat/Memperlambat Animasi

Edit file slide yang ingin diubah, cari `duration`:

```javascript
transition={{ duration: 0.8 }} // Ubah angka ini
```

- 0.3-0.5: Cepat
- 0.6-0.8: Normal (default)
- 1.0-1.5: Lambat

#### Menonaktifkan Animasi

Jika perlu presentasi tanpa animasi (untuk screenshot/print):

Edit `src/components/Slide.jsx`, ubah:
```javascript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```
Menjadi:
```javascript
initial={{ opacity: 1 }}
animate={{ opacity: 1 }}
```

### Export untuk Offline

#### PDF Export (untuk backup)

1. Buka presentasi di browser
2. Print (Ctrl+P)
3. Pilih "Save as PDF"
4. Settings:
   - Layout: Landscape
   - Margins: None
   - Background graphics: ON

#### Static HTML Export

```bash
npm run build
```

Folder `dist/` berisi semua file yang bisa dibuka offline.

### Performance Tips

1. **Untuk Laptop Lama**
   - Tutup aplikasi lain
   - Gunakan Chrome/Edge (hardware acceleration)
   - Disable browser extensions

2. **Untuk Koneksi Lambat**
   - Build production version
   - Serve locally dengan `npm run preview`
   - Atau buka dari folder `dist/` langsung

### Backup Plan

Jika terjadi masalah teknis saat presentasi:

1. **Plan A**: Presentasi web (primary)
2. **Plan B**: PDF export (backup)
3. **Plan C**: Screenshot setiap slide (emergency)

### Recording Presentasi

Untuk merekam presentasi dengan animasi:

1. **OBS Studio** (recommended)
   - Free dan open source
   - Bisa record screen + audio
   - Export ke MP4

2. **Browser Built-in**
   - Chrome: Extensions seperti "Loom"
   - Edge: Built-in screen recorder

3. **Windows Game Bar**
   - Win+G untuk buka
   - Record browser window

---

**Selamat Presentasi! 🎉**
