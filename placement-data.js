(function () {
  const placementData = {
    countries: [
      {
        id: "taiwan",
        name: "Taiwan",
        region: "Asia Timur",
        image: "assets/images/taiwan.webp",
        thumb: "assets/images/taiwan.webp",
        focalPoint: "60% center"
      },
      {
        id: "hong-kong",
        name: "Hong Kong",
        region: "Asia Timur",
        image: "assets/images/hongkong.webp",
        thumb: "assets/images/hongkong.webp",
        focalPoint: "58% center"
      },
      {
        id: "singapura",
        name: "Singapura",
        region: "Asia Tenggara",
        image: "assets/images/singapore.webp",
        thumb: "assets/images/singapore.webp",
        focalPoint: "62% center"
      },
      {
        id: "malaysia",
        name: "Malaysia",
        region: "Asia Tenggara",
        image: "assets/images/malaysia.webp",
        thumb: "assets/images/malaysia.webp",
        focalPoint: "55% center"
      }
    ],
    sectors: [
      {
        id: "perikanan",
        index: 1,
        name: "Perikanan",
        image: "assets/images/perikanan.webp",
        cardDescription: "Program penempatan tenaga kerja pada sektor perikanan dan industri pengolahan hasil laut.",
        description: "Sektor perikanan membuka peluang kerja pada pengolahan hasil laut, budidaya ikan, pemrosesan produk, hingga operasional industri perikanan modern dengan standar kerja internasional.",
        positions: ["Pekerja Pengolahan Ikan", "Operator Produksi Seafood", "Packing", "Budidaya Perikanan"],
        requirements: ["Sehat jasmani dan rohani", "Disiplin mengikuti standar kerja", "Siap bekerja dalam sistem shift", "Bersedia mengikuti pelatihan"],
        benefits: ["Gaji kompetitif", "Asuransi kerja", "Pelatihan pra keberangkatan", "Pendampingan dokumen"],
        destinations: [
          { countryId: "taiwan", gender: "Laki-laki", status: "Formal" }
        ]
      },
      {
        id: "pabrik",
        index: 2,
        name: "Pabrik",
        image: "assets/images/pabrik.webp",
        cardDescription: "Program penempatan tenaga kerja pada sektor manufaktur dan produksi industri.",
        description: "Sektor pabrik dan manufaktur cocok untuk kandidat yang siap bekerja dalam proses produksi, perakitan, quality control, sortir, dan pengemasan di lingkungan industri yang terstruktur.",
        positions: ["Operator Produksi", "Quality Control", "Packing", "Sortir Barang"],
        requirements: ["Teliti dan bertanggung jawab", "Mampu mengikuti target produksi", "Sehat jasmani dan rohani", "Bersedia mengikuti aturan perusahaan"],
        benefits: ["Gaji kompetitif", "Asuransi", "Pelatihan kerja", "Kontrak kerja resmi"],
        destinations: [
          { countryId: "taiwan", gender: "Laki-laki", status: "Formal" },
          { countryId: "taiwan", gender: "Perempuan", status: "Formal" }
        ]
      },
      {
        id: "perkebunan-pertanian",
        index: 3,
        name: "Perkebunan & Pertanian",
        image: "assets/images/perkebunan.webp",
        cardDescription: "Program penempatan tenaga kerja pada sektor perkebunan, pertanian, dan agrikultur modern.",
        description: "Sektor perkebunan dan pertanian menyediakan peluang pada perawatan tanaman, pengelolaan lahan, pemupukan, panen, sortasi hasil, dan dukungan agrikultur modern dengan sistem kerja yang jelas.",
        positions: ["Pekerja Perkebunan", "Pekerja Pertanian", "Perawatan Tanaman", "Panen", "Sortasi Hasil"],
        requirements: ["Siap bekerja di lapangan", "Memiliki fisik yang baik", "Disiplin dan kooperatif", "Bersedia mengikuti pelatihan"],
        benefits: ["Akomodasi sesuai program", "Gaji stabil", "Pelatihan keselamatan kerja", "Pendampingan keberangkatan", "Kontrak kerja resmi"],
        destinations: [
          { countryId: "taiwan", gender: "Laki-laki", status: "Formal" },
          { countryId: "taiwan", gender: "Perempuan", status: "Formal" }
        ]
      },
      {
        id: "panti-jompo",
        index: 4,
        name: "Panti Jompo",
        image: "assets/images/pantijompo.webp",
        cardDescription: "Program penempatan tenaga kerja untuk pelayanan dan perawatan lansia profesional.",
        description: "Sektor panti jompo berfokus pada layanan pendampingan dan perawatan lansia, termasuk bantuan aktivitas harian, kebersihan, mobilitas, serta dukungan emosional secara profesional.",
        positions: ["Caregiver", "Asisten Perawat Lansia", "Pendamping Harian", "Staf Panti Jompo"],
        requirements: ["Sabar dan peduli", "Mampu berkomunikasi baik", "Siap mengikuti pelatihan caregiver", "Sehat jasmani dan rohani"],
        benefits: ["Pelatihan caregiver", "Asuransi", "Lingkungan kerja profesional", "Pendampingan penempatan"],
        destinations: [
          { countryId: "taiwan", gender: "Perempuan", status: "Formal" }
        ]
      },
      {
        id: "konstruksi",
        index: 5,
        name: "Konstruksi",
        image: "assets/images/kontruksi.webp",
        cardDescription: "Program penempatan tenaga kerja pada proyek konstruksi dan pembangunan infrastruktur.",
        description: "Sektor konstruksi menawarkan kesempatan kerja pada proyek bangunan, infrastruktur, perawatan fasilitas, dan pekerjaan teknis lapangan dengan standar keselamatan yang terarah.",
        positions: ["Pekerja Konstruksi", "Helper Proyek", "Finishing", "Pekerja Infrastruktur"],
        requirements: ["Fisik kuat dan sehat", "Mengutamakan keselamatan kerja", "Siap bekerja dalam tim", "Bersedia mengikuti pelatihan teknis"],
        benefits: ["Gaji kompetitif", "Perlengkapan kerja sesuai program", "Pelatihan keselamatan", "Kontrak kerja resmi"],
        destinations: [
          { countryId: "taiwan", gender: "Laki-laki", status: "Formal" }
        ]
      },
      {
        id: "pekerja-domestik",
        index: 6,
        name: "Pekerja Domestik (ART)",
        image: "assets/images/art.webp",
        cardDescription: "Program penempatan tenaga kerja untuk layanan rumah tangga profesional.",
        description: "Sektor pekerja domestik mencakup layanan rumah tangga profesional seperti kebersihan, memasak, mencuci, merawat anak, dan membantu kebutuhan harian keluarga pengguna.",
        positions: ["Asisten Rumah Tangga", "Housekeeper", "Pengasuh Anak", "Cook Helper"],
        requirements: ["Bertanggung jawab dan jujur", "Mampu mengelola pekerjaan rumah", "Sopan dalam berkomunikasi", "Bersedia mengikuti orientasi budaya"],
        benefits: ["Akomodasi sesuai ketentuan", "Gaji kompetitif", "Perlindungan kontrak", "Pendampingan sebelum keberangkatan"],
        destinations: [
          { countryId: "taiwan", gender: "Perempuan", status: "Informal" },
          { countryId: "hong-kong", gender: "Perempuan", status: "Informal" },
          { countryId: "singapura", gender: "Perempuan", status: "Informal" },
          { countryId: "malaysia", gender: "Perempuan", status: "Informal" }
        ]
      }
    ],
    countrySectorOrder: {
      taiwan: ["pabrik", "konstruksi", "perkebunan-pertanian", "perikanan", "panti-jompo", "pekerja-domestik"],
      "hong-kong": ["pekerja-domestik"],
      singapura: ["pekerja-domestik"],
      malaysia: ["pekerja-domestik"]
    }
  };

  window.placementData = placementData;
}());
