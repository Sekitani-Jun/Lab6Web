![Logo Pelita Bangsa](media/1.png)

# Laporan Praktikum 6

**UNIVERSITAS PELITA BANGSA**

- **Nama:** Jumari
- **NIM:** 312510077
- **Mata Kuliah:** Struktur Data


## A. Identitas dan Capaian Praktikum

| Detail          | Keterangan                                                                             |
| --------------- | -------------------------------------------------------------------------------------- |
| **Mata Kuliah** | Pemrograman Web                                                                        |
| **Pertemuan**   | 7                                                                                      |
| **Topik**       | JavaScript DOM dan event handling                                                      |
| **Cakupan**     | Pemilihan dan manipulasi elemen, event listener, validasi form, dan interaksi pengguna |
| **Perangkat**   | Laptop/PC, browser modern, editor kode seperti Visual Studio Code                      |

## B. Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan `id`, `class`, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

## C. Latihan

### 1. Buat Struktur Html

![Kode index.html](media/2.png)

Atribut `defer` membuat JavaScript dijalankan setelah HTML selesai diparsing, sehingga elemen yang dipilih sudah tersedia.

### 2. Mengubah teks DOM berdasarkan 'id' pada Javascript menggunakan textContent

![Kode script.js textContent](media/3.png)

### 3. Event Click

a. Karena adanya kesalahan pada penulisan syntax javascript berdasarkan modul yaitu variabel pesan ditulis dua kali

![Salah variabel pesan](media/4.png)

b. Jadi saya memperbaiki dengan menghilangkan `const.pesan` dibawah `const tombol`

![Perbaikan variabel pesan](media/5.png)

### 4. Hasil HTML sampai event click

a. Base Html tanpa Javascript

![Hasil Base HTML](media/6.png)

b. Setelah ditambahkan javascript untuk mengubah teks dengan DOM

![Hasil DOM Ubah Teks](media/7.png)

c. Menambahkan syntax `addEventListener` pada Klik Saya, akan menghasilkan tanggal di klik.

![Hasil Click Event Waktu](media/8.png)

### 5. Mengubah Kelas dan Gaya CSS

Mengatur CSS berikut ke `style.css` dan buat paragraf id `teksGaya` serta tombol id `tombolGaya`.

a. Namun pada modul yang diberikan, terdapat kesalahan syntax yaitu `tombolGaya` belum terdefinisi pada `index.html` dan syntax `const` tidak ada di css

![Kesalahan syntax style.css 1](media/9.png)

Sehingga hasil tidak berubah

![Hasil belum berubah](media/10.png)

b. Memperbaiki kesalahan penulisan

- Menambah syntax pada `index.html`

![Tambah syntax index.html](media/11.png)

- Mengubah syntax `script.js`

![Ubah syntax script.js](media/12.png)

- Mengubah syntax `style.css`

![Ubah syntax style.css](media/13.png)

c. Sehingga Hasil

- Setelah penambahan pada paragraf html

![Hasil penambahan HTML](media/14.png)

- Jika di klik Ubah Gaya Teks

![Hasil Ubah Gaya Teks](media/15.png)

### 6. Even Input dan Penghitung Karakter

a. Tambahkan label input pada html

![HTML label input](media/16.png)

Hasil

![Hasil label input](media/17.png)

b. Menambah syntax javascript sehingga jumlah karakter berfungsi

![JavaScript jumlah karakter](media/18.png)

Hasil setelah menambah syntax html dan javascript

jumlah karakter bertambah disetiap

![Hasil counter karakter](media/19.png)

### 7. Validasi Form Pendaftaran

Buat form nama, email, dan usia. Program menampilkan pesan jika input tidak sesuai.

a. Membuat form pendaftaran di html

![Form Pendaftaran HTML](media/20.png)

b. Menciptakan peraturan terkait pengisian form menggunakan javascript

![Validasi Form JavaScript](media/21.png)

Hasil jika semua kosong, nama kosong, email tidak valid, usia di bawah 17, dan semua input valid.

- semua Kosong

![Semua Kosong](media/22.png)

- nama tidak valid

![Nama Tidak Valid](media/23.png)

- email tidak valid

![Email Tidak Valid](media/24.png)

- usia dibawah 17

![Usia Dibawah 17](media/25.png)

- semua input valid. saat validasi berhasil, form kembali kosong

![Semua Validasi Berhasil](media/26.png)

### 8. To Do List

a. Membuat daftar tugas dibungkus section pada html

![To Do List HTML](media/27.png)

b. Mengatur logika daftar tugas di javascript

![To Do List JavaScript](media/28.png)

c. Merapihkan hasil daftar tugas yang ditambahkan menggunakan css list

![To Do List CSS](media/29.png)

d. Hasil

![To Do List Hasil](media/30.png)

## D. Mini Project

Judul = "Form Pendaftaran Workshop"

Kembangkan halaman pendaftaran workshop dengan minimal tiga fungsi interaktif.

- Validasi nama, email, dan pilihan sesi.
- Penghitung karakter atau ringkasan input secara langsung.
- Pesan kesalahan dan pesan sukses yang tampil pada halaman.
- Tombol reset atau hapus input.

Gunakan `addEventListener()` untuk event `input`, `change`, `click`, atau `submit`.

Struktur Folder dan File

```
miniproject
├── index.html
├── script.js
└── style.css
```

### 1. Input Nama dan Penghitung Karakter

a. HTML

Atribut `maxlength="50"` membatasi pengguna agar tidak mengetik lebih dari 50 karakter. Elemen `<span id="jumlahKarakter">0</span>` disiapkan sebagai wadah kosong yang angkanya akan diubah oleh JavaScript.

![Mini Project HTML Nama](media/32.png)

b. Css

Css membuat input teks mengisi lebar penuh kontainernya (`width: 100%`) agar mudah diklik. Elemen `<small>` diberi warna abu-abu agar visualnya tidak mendominasi layar utama.

![Mini Project CSS Nama](media/33.png)

c. Javascript

Event `input` akan memicu fungsi setiap kali pengguna mengetik atau menghapus karakter. Properti `.value.length` mengambil total karakter saat ini dan mencetaknya ke dalam elemen `jumlahKarakter`. Pada bagian validasi saat disubmit, `namaInput.value.trim()` digunakan untuk memastikan spasi kosong di awal/akhir tidak dihitung sebagai nama.

![Mini Project JS Nama](media/34.png)

d. Hasil

![Mini Project Hasil Nama](media/35.png)

### 2. Input Email

a. HTML

Penggunaan `type="email"` memberikan validasi bawaan dari browser, serta memunculkan keyboard khusus email (dengan tombol '@') jika dibuka melalui smartphone.

![Mini Project HTML Email](media/36.png)

b. Css

mengaturnya melalui `.form-group`

![Mini Project CSS Email](media/37.png)

c. Javascript

JavaScript menggunakan Regular Expression (Regex) `polaEmail` untuk memverifikasi struktur teks. Fungsi `.test(email)` akan mengembalikan nilai `true` jika struktur email valid, dan `false` jika tidak valid (memunculkan pesan error).

![Mini Project JS Email](media/38.png)

### 3. Pilihan Sesi

a. HTML

Elemen `<select>` membungkus beberapa `<option>`. Opsi pertama dibiarkan dengan `value=""` sebagai placeholder (teks instruksi).

![Mini Project HTML Sesi](media/39.png)

b. Css

Pemilihan `font-size: 1rem` sangat penting pada perangkat mobile (khususnya iOS) agar browser tidak otomatis melakukan zoom-in saat form dropdown diklik.

![Mini Project CSS Sesi](media/40.png)

c. Javascript

Membaca properti `value` dari elemen `select`. Jika nilainya masih kosong (artinya pengguna belum memilih selain opsi placeholder), pendaftaran ditahan dan error ditampilkan.
![Mini Project JS Sesi](media/41.png)
![Mini Project JS Sesi](media/42.png)

### 4. Tombol Aksi

a. HTML

Atribut `type="submit"` akan memicu event `submit` pada form pembungkusnya, sedangkan `type="reset"` otomatis mengosongkan semua isian form bawaan HTML tanpa perlu kode JavaScript tambahan.

![Mini Project HTML Tombol](media/43.png)

b. Css

Flexbox digunakan pada kontainer `.aksi-tombol` dengan `flex: 1` pada `<button>`, sehingga kedua tombol akan merentang sejajar dan membagi lebar ruang (50%: 50%) secara otomatis.

![Mini Project CSS Tombol](media/44.png)

c. Javascript

Method `event.preventDefault()` pada tombol submit sangat vital karena perilaku bawaan browser saat form dikirim adalah memuat ulang (reload) halaman. Untuk tombol reset, event `click` ditambahkan guna mereset elemen manipulasi DOM (seperti angka karakter dan pesan error) yang tidak bisa direset oleh mekanisme bawaan HTML.

![Mini Project JS Tombol](media/45.png)
![Mini Project JS Tombol](media/46.png)

### 5. Area Pesan Notifikasi

Wadah dinamis untuk memberikan umpan balik (feedback) visual kepada pengguna apakah tindakan mereka gagal atau berhasil.

a. HTML

![Mini Project HTML Notifikasi](media/47.png)

b. Css

Secara default pesan ini disembunyikan (`display: none`). Kelas `error` dan `sukses` bertugas memberikan warna (merah untuk gagal, biru untuk sukses) sekaligus memunculkan elemen tersebut (`display: block !important`).

![Mini Project CSS Notifikasi](media/48.png)

c. Javascript

Fungsi ini menyuntikkan teks yang diberikan ke dalam paragraf, lalu menimpa atribut kelasnya (menggunakan properti `.className`) menjadi "error" atau "sukses" berdasarkan hasil kondisi validasi (`if-else`) pada bagian event submit.

![Mini Project JS Notifikasi](media/49.png)

Hasil Mini Project Keseluruhn

![Mini Project Hasil Keseluruhan](media/50.png)
![Mini Project Hasil Keseluruhan](media/51.png)


## E. Pertanyaan Evaluasi

### 1. DOM (Document Object Model) dan Manfaatnya

- **Pengertian:** DOM adalah antarmuka pemrograman (API) yang merepresentasikan dokumen HTML atau XML sebagai struktur pohon (tree). Setiap elemen, atribut, dan teks di dalam dokumen diubah menjadi objek (node) yang bisa diakses.
- **Manfaat:** Memungkinkan bahasa pemrograman seperti JavaScript untuk berinteraksi dengan halaman web secara dinamis seperti menambah, mengubah, atau menghapus elemen dan desain (CSS) tanpa perlu memuat ulang (refresh) halaman.

### 2. Perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`

- `getElementById()`: Memilih satu elemen secara spesifik berdasarkan atribut `id`. Performanya sangat cepat, namun terbatas hanya untuk ID.
- `querySelector()`: Memilih satu elemen pertama yang cocok dengan selektor CSS apa pun (seperti `.class`, `#id`, atau tag). Lebih lambat dari pencarian ID, tetapi sangat fleksibel.
- `querySelectorAll()`: Memilih semua elemen yang cocok dengan selektor CSS dan mengembalikannya dalam bentuk kumpulan data statis bernama `NodeList`.

### 3. Fungsi `addEventListener()` dan Tiga Contoh Event

**Fungsi:** Metode ini digunakan untuk "mendengarkan" dan merespons interaksi pada suatu elemen dengan menjalankan fungsi (callback) ketika event terjadi, tanpa menimpa event listener lain yang sudah ada pada elemen tersebut.

**Contoh Event:**

- `click`: Terpicu ketika pengguna mengklik elemen (misal: mengklik tombol kirim).
- `submit`: Terpicu ketika pengguna mengirimkan (submit) sebuah form.
- `keydown`: Terpicu ketika pengguna menekan tombol apa saja pada keyboard.

### 4. Mengapa `event.preventDefault()` Digunakan pada Event Submit Form?

Secara bawaan (default), ketika form disubmit, browser akan memuat ulang halaman untuk mengirim data ke server. `event.preventDefault()` memblokir perilaku bawaan ini sehingga Anda bisa memproses, memvalidasi, atau mengirim data secara asinkron (misalnya menggunakan Fetch API atau AJAX) tanpa kehilangan status (state) pada halaman web yang sedang aktif.

### 5. Perbedaan `textContent` dan `innerHTML` (Penggunaan dan Keamanan)

**Penggunaan:**

- `textContent` mengatur atau mengekstrak konten murni sebagai teks biasa. Jika Anda memasukkan tag HTML, tag tersebut akan dicetak mentah-mentah di layar.
- `innerHTML` mengatur atau mengekstrak konten dalam format HTML. Tag yang dimasukkan (misal `<b>teks</b>`) akan diproses dan dirender langsung oleh browser.


**Keamanan:**

- `textContent` aman dari serangan Cross-Site Scripting (XSS) karena semua karakter diperlakukan sebagai string murni.
- `innerHTML` sangat rentan terhadap XSS jika menerima input pengguna tanpa disanitasi, karena script berbahaya (`<script>`) dapat dimasukkan dan dieksekusi.

### 6. Bagaimana `classList.toggle()` Membantu Mengubah Tampilan Elemen?

`classList.toggle()` bekerja seperti tombol sakelar $(on/off)$. Jika class CSS tertentu belum ada pada elemen, metode ini akan menambahkannya. Jika class tersebut sudah ada, metode ini akan menghapusnya. Hal ini menyingkirkan kebutuhan logika `if-else` manual dan membuat kode jauh lebih bersih saat membangun fitur seperti dark mode atau membuka-tutup menu dropdown.

### 7. Tiga Skenario Pengujian Validasi Form

- **Uji Input Kosong (Required Fields):** Memastikan sistem menolak formulir dan memunculkan error jika pengguna membiarkan kolom wajib (seperti nama atau alamat email) tetap kosong.
- **Uji Format Data (Pattern/Type Matching):** Memastikan data yang diinput sesuai dengan format yang diminta. Misalnya, kolom email harus memiliki simbol @ dan nama domain, atau kolom nomor telepon tidak boleh menerima huruf.
- **Uji Batasan Nilai (Boundary/Length):** Memeriksa batasan karakter dan angka, seperti memvalidasi bahwa password harus berjumlah minimal 8 karakter atau batasan umur pengguna tidak boleh bernilai negatif.

