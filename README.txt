# Surprise Birthday Website — siap untuk VS Code

## Cara menjalankan
1. Ekstrak ZIP ini.
2. Buka folder `surprise-birthday-website` dengan VS Code.
3. Buka `index.html`.
4. Cara termudah: pasang extension **Live Server** di VS Code, lalu klik kanan `index.html` → **Open with Live Server**.

## Cara mengedit isi
Semua konten utama ada di:

`script.js`

Cari bagian:

`const birthdayData = {`

Di sana kamu bisa mengubah:
- `partnerName`
- `myName`
- `intro`
- `mainMessage`
- `loveLetter`
- `wishes`
- `closingMessage`
- `birthdayDate`
- `photos`
- `timeline`
- `music`
- `modalText`

## Cara mengganti foto
Masukkan foto ke folder `images/` lalu sesuaikan nama file:
- foto1.jpg
- foto2.jpg
- foto3.jpg
- foto4.jpg
- foto5.jpg
- foto6.jpg

## Cara mengganti musik
Masukkan MP3 ke folder `music/` dengan nama `lagu.mp3`, atau ubah nilai `music` di `script.js`.

## Catatan countdown
Gunakan format:
`YYYY-MM-DDTHH:MM:SS`

Contoh:
`2026-12-31T00:00:00`

## Publikasi
Setelah website sudah sesuai, folder ini dapat dipublikasikan ke hosting statis seperti GitHub Pages, Netlify, atau Vercel.
