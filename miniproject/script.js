// Mengambil elemen-elemen DOM yang dibutuhkan
const formPendaftaran = document.getElementById("formPendaftaran");
const namaInput = document.getElementById("namaInput");
const emailInput = document.getElementById("emailInput");
const sesiInput = document.getElementById("sesiInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

const pesanNotifikasi = document.getElementById("pesanNotifikasi");
const tombolReset = document.getElementById("tombolReset");

const ringkasanInput = document.getElementById("ringkasanInput");
const ringkasanNama = document.getElementById("ringkasanNama");
const ringkasanEmail = document.getElementById("ringkasanEmail");
const ringkasanSesi = document.getElementById("ringkasanSesi");

//Event Input: Penghitung Karakter Langsung
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

//Event Submit: Validasi Form secara terurut
formPendaftaran.addEventListener("submit", function (event) {
  event.preventDefault();

  // Menghapus spasi berlebih pada awal/akhir
  const nama = namaInput.value.trim();
  const email = emailInput.value.trim();
  const sesi = sesiInput.value;

  // Reset tampilan notifikasi dan ringkasan sebelum validasi ulang
  pesanNotifikasi.className = "";
  ringkasanInput.classList.add("sembunyi");

  // Regex sederhana untuk memvalidasi format email
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Proses validasi satu per satu
  if (nama === "") {
    tampilkanPesan("Nama lengkap wajib diisi.", "error");
  } else if (!polaEmail.test(email)) {
    tampilkanPesan("Masukkan format email yang valid.", "error");
  } else if (sesi === "") {
    tampilkanPesan(
      "Silakan pilih jadwal sesi workshop terlebih dahulu.",
      "error",
    );
  } else {
    // Validasi berhasil
    tampilkanPesan("Pendaftaran berhasil! Form telah divalidasi.", "sukses");

    // Tampilkan ringkasan data pendaftaran
    ringkasanNama.textContent = nama;
    ringkasanEmail.textContent = email;
    ringkasanSesi.textContent = sesiInput.options[sesiInput.selectedIndex].text;

    ringkasanInput.classList.remove("sembunyi");
  }
});

// 3. Event Click: Mengatur ulang UI saat form direset
tombolReset.addEventListener("click", function () {
  jumlahKarakter.textContent = "0";
  pesanNotifikasi.className = "";
  pesanNotifikasi.textContent = "";
  ringkasanInput.classList.add("sembunyi");

  // Mengembalikan fokus ke input nama agar mudah memulai ulang
  namaInput.focus();
});

// Fungsi tampilkan pesan
function tampilkanPesan(teks, tipe) {
  pesanNotifikasi.textContent = teks;
  pesanNotifikasi.className = tipe;
}
