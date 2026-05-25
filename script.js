// script.js - Logika Interaktif PT Aida Duta Indonesia Sejahtera

// 1. Inisialisasi Pustaka Animasi Efek Gulir Halaman (AOS)
document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,      // Animasi hanya berjalan 1 kali saat di-scroll
      duration: 1000,   // Durasi pergerakan animasi (1 detik)
      offset: 120      // Jarak piksel trigger sebelum komponen muncul
    });
  }
});

// 2. Fungsi Navigasi Halus ke Bagian Form Kontak
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 3. Interaksi Respons Sukses pada Formulir Inquiry
function handleFormSubmit(event) {
  event.preventDefault(); // Menahan reload browser bawaan HTML
  
  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  
  const userName = nameInput ? nameInput.value : 'Pengguna';
  const userEmail = emailInput ? emailInput.value : '';
  
  const formContainer = document.getElementById('form-container');
  if (formContainer) {
    formContainer.innerHTML = `
      <div class="text-center py-12 flex flex-col items-center justify-center h-full" style="animation: fadeIn 0.5s ease;">
        <span class="material-icons-outlined text-[#d4af37] text-6xl mb-4">check_circle</span>
        <h3 class="text-2xl text-[#d4af37] mb-2 font-bold" style="font-family: 'Playfair Display', serif;">Terima Kasih, ${userName}!</h3>
        <p class="text-[#e9e2d0]/70 text-sm max-w-xs leading-relaxed mx-auto">
          Pesan Anda telah berhasil dikirimkan. Tim PT Aida Duta Indonesia Sejahtera akan segera meninjau pertanyaan Anda dan mengirimkan balasan ke alamat email <strong>${userEmail}</strong> dalam waktu 1x24 jam kerja.
        </p>
      </div>
    `;
  }
}