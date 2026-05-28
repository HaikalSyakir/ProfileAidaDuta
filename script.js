// script.js - Logika Interaktif & Multibahasa PT Aida Duta Indonesia Sejahtera

// 1. Kamus Data Multi-Bahasa (Indonesia, English, Traditional Chinese)
const translations = {
  id: {
    nav_home: "Home",
    nav_about: "Tentang Kami",
    nav_services: "Layanan Kami",
    nav_network: "Sektor Penempatan",
    nav_lpk: "Negara Penempatan",
    nav_gallery: "Gallery",

    btn_contact: "Hubungi Kami",

    hero_tag: "INTEGRITAS TERPERCAYA",
    hero_desc:
      "Membangun Masa Depan dengan Integritas dan Jangkauan Global. Menghubungkan Tenaga Kerja Indonesia dengan Peluang Internasional Terbaik.",

    btn_explore: "JELAJAHI SOLUSI",
    btn_legacy: "WARISAN KAMI",

    about_tag: "TENTANG KAMI",

    about_title:
      "Meningkatkan Standar Global dalam Penempatan Profesional",

    about_p1:
      "PT Aida Duta Indonesia Sejahtera adalah agen perekrutan dan penempatan tenaga kerja internasional terkemuka yang didedikasikan untuk menjembatani talenta terbaik Indonesia dengan peluang global.",

    about_p2:
      "Fondasi kami dibangun di atas integritas mutlak, memastikan bahwa setiap profesional yang kami tempatkan dan setiap mitra yang kami layani mendapatkan standar keunggulan terbaik yang melampaui batas negara.",

    about_hub_title: "Pusat Operasional Global",
    about_hub_desc:
      "PT Aida Duta Indonesia Sejahtera - Pelayanan Berstandar Internasional.",

    vision_title: "Visi Kami",

    vision_desc:
      "Menjadi perusahaan penempatan tenaga kerja yang terpercaya, profesional, dan berorientasi pada kesejahteraan pekerja migran Indonesia.",

    mission_title: "Misi Kami",

    mission_1:
      "Menyediakan layanan penempatan pekerja migran yang aman, transparan, dan sesuai dengan peraturan yang berlaku.",

    mission_2:
      "Meningkatkan kompetensi tenaga kerja melalui pelatihan yang berkualitas sebelum diberangkatkan.",

    mission_3:
      "Memberikan perlindungan dan pendampingan kepada pekerja migran sebelum, selama, dan setelah bekerja di luar negeri.",

    mission_4:
      "Membangun kemitraan strategis dengan perusahaan pengguna tenaga kerja di luar negeri.",

    org_tag: "TENTANG KAMI",
    org_title: "Struktur Organisasi",
    org_director: "Direktur Utama",
    org_director_desc:
      "Memimpin arah strategis perusahaan dan memastikan seluruh operasional berjalan sesuai visi, misi, serta standar profesional.",
    org_ops: "Direktur Operasional",
    org_ops_desc:
      "Mengkoordinasikan proses rekrutmen, pelatihan, penempatan, dan administrasi agar layanan berjalan terintegrasi.",
    org_recruitment: "Manajer Rekrutmen",
    org_recruitment_desc:
      "Menangani seleksi, verifikasi, dan kesiapan calon pekerja migran.",
    org_training: "Manajer Pelatihan",
    org_training_desc:
      "Mengelola program peningkatan kompetensi, bahasa, dan adaptasi budaya kerja.",
    org_admin: "Manajer Administrasi",
    org_admin_desc:
      "Mengatur dokumen, perizinan, dan kebutuhan administrasi keberangkatan tenaga kerja.",

    srv_tag: "LAYANAN KAMI",
    srv_title: "Layanan Profesional Komprehensif",

    srv1_title: "Rekrutmen dan seleksi calon pekerja Migran",
    srv1_desc:
      "Proses screening dan penempatan tenaga kerja yang terstandarisasi guna memastikan kecocokan kompetensi antara calon karyawan dan perusahaan.",

    srv2_title: "Pelatihan dan Peningkatan Keterampilan",
    srv2_desc:
      "Program pelatihan yang dirancang untuk meningkatkan kompetensi dan kemampuan teknis, soft skill, serta adaptasi budaya kerja.",

    srv3_title: "Pengurusan Dokumen dan Perizinan Keberangkatan Tenaga Kerja",
    srv3_desc:
      "Bimbingan lengkap mulai dari persiapan dokumen, legalisasi, hingga proses pengurusan visa dan izin kerja sesuai peraturan imigrasi yang berlaku.",

    net_tag: "Sektor Penempatan",
    net_title: "SEKTOR PENEMPATAN",

    sector1_title: "Perkebunan",
    sector1_desc:
      "Bekerja di bidang perawatan tanaman, pemupukan, hingga proses panen dengan sistem kerja yang teratur dan didukung lingkungan kerja profesional.",
    sector2_title: "Pabrik",
    sector2_desc:
      "Pekerjaan meliputi operator produksi, packing, sortir barang, dan quality control dengan sistem kerja yang disiplin dan terstruktur.",
    sector3_title: "Konstruksi",
    sector3_desc:
      "Terlibat dalam pekerjaan pembangunan dan proyek konstruksi seperti pembangunan gedung, infrastruktur, dan pekerjaan teknis lapangan dengan standar kerja profesional.",
    sector4_title: "Perikanan",
    sector4_desc:
      "Peluang kerja di bidang pengolahan hasil laut, budidaya ikan, dan industri perikanan modern dengan kebutuhan tenaga kerja yang tinggi.",
    sector5_title: "Panti Jompo",
    sector5_desc:
      "Memberikan pendampingan dan perawatan lansia dalam aktivitas sehari-hari dengan penuh kesabaran, perhatian, dan kepedulian.",
    sector6_title: "Pekerja Domestik (ART)",
    sector6_desc:
      "Membantu kebutuhan rumah tangga seperti membersihkan rumah, memasak, mencuci, dan menjaga anak secara profesional dan bertanggung jawab.",

    net_stat1: "NEGARA MITRA",
    net_stat2: "KORPORASI GLOBAL",

    net_desc:
      "Dengan jaringan kemitraan yang mencakup Eropa, Asia, dan Timur Tengah, jangkauan kami benar-benar global. Kami menjaga hubungan kuat dengan korporasi papan atas.",

    net_sub1_title: "Konektivitas & Jangkauan Digital",

    net_sub1_desc:
      "Memanfaatkan teknologi digital canggih untuk menghubungkan talenta secara aman dan cepat dengan peluang korporat internasional.",

    net_sub2_tag: "ARAH STRATEGIS",

    net_sub2_title: "Memberdayakan Talenta Global",

    net_sub2_desc:
      "Memberikan panduan ahli, orientasi yang jelas, dan dukungan navigasi bagi individu untuk memasuki lanskap karir global dengan aman.",

    lpk_hub_title: "Negara Penempatan",

    lpk_hub_desc:
      "Jalur penempatan tenaga kerja ke negara mitra utama di Asia.",

    lpk_tag: "NEGARA PENEMPATAN",

    lpk_title:
      "Tujuan Kerja Internasional",

    lpk_desc:
      "Kami menyiapkan jalur penempatan ke negara mitra utama di Asia dengan proses yang terarah, transparan, dan sesuai kebutuhan sektor kerja.",

    lpk_f1: "Pendampingan Dokumen",
    lpk_f2: "Orientasi Negara Tujuan",
    lpk_stat1: "Negara Tujuan",
    lpk_stat2: "Asia Pasifik",
    country1_region: "Asia Timur",
    country1_watermark: "Hong Kong",
    country1_title: "Hong Kong",
    country1_desc:
      "Peluang penempatan untuk sektor domestik, layanan, perawatan, dan kebutuhan rumah tangga profesional.",
    country2_region: "Asia Timur",
    country2_watermark: "Taiwan",
    country2_title: "Taiwan",
    country2_desc:
      "Tujuan penempatan untuk manufaktur, pabrik, perawatan lansia, dan sektor pendukung industri.",
    country3_region: "Asia Tenggara",
    country3_watermark: "Singapore",
    country3_title: "Singapore",
    country3_desc:
      "Penempatan tenaga kerja untuk domestik, hospitality, layanan umum, dan kebutuhan operasional perkotaan.",
    country4_region: "Asia Tenggara",
    country4_watermark: "Malaysia",
    country4_title: "Malaysia",
    country4_desc:
      "Pilihan kerja untuk perkebunan, pabrik, konstruksi, perikanan, dan sektor layanan.",
    country5_region: "Asia Timur",
    country5_watermark: "Japan",
    country5_title: "Japan",
    country5_desc:
      "Program penempatan untuk manufaktur, perawatan, pertanian, pengolahan makanan, dan industri teknis.",

    gal_tag: "DOKUMENTASI",
    gal_title: "Momen Keunggulan",

    gal1_title: "Kelas Diklat LPK",

    gal1_desc:
      "Proses bimbingan intensif bahasa, fisik, dan kedisiplinan kerja asing.",

    gal2_title: "Pelepasan Pekerja",

    gal2_desc:
      "Seremoni pelepasan keberangkatan resmi pekerja migran menuju negara penempatan.",

    gal3_title: "MoU Internasional",

    gal3_desc:
      "Penandatanganan ekspansi aliansi strategis bersama dengan korporasi dunia.",

    gal4_title: "Uji Kompetensi",

    gal4_desc:
      "Sertifikasi resmi dan validasi keahlian teknis calon pekerja migran.",

    cont_title: "Mulai Perjalanan Global Anda",

    cont_desc:
      "Hubungi tim kami untuk mengeksplorasi peluang karir internasional terpercaya atau bermitra untuk kebutuhan rekrutmen perusahaan Anda.",

    cont_add:
      "Jl. Lkr. Bar. Kepanjen, Ngadilangkung, Kec. Kepanjen, Kabupaten Malang, Jawa Timur",

    btn_whatsapp: "DUKUNGAN WHATSAPP",

    lbl_name: "NAMA LENGKAP",
    lbl_email: "ALAMAT EMAIL",
    lbl_msg: "PESAN",

    btn_send: "KIRIM PERTANYAAN",

    foot_copy:
      "© 2026 PT Aida Duta Indonesia Sejahtera. Hak Cipta Dilindungi Undang-Undang.",

    foot_priv: "Kebijakan Privasi",
    foot_terms: "Syarat & Ketentuan",

    form_success_title: "Terima Kasih",

    form_success_desc:
      "Pesan Anda telah berhasil dikirimkan. Tim kami akan segera meninjau pertanyaan Anda dalam waktu 1x24 jam kerja."
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_network: "Placement Sector",
    nav_lpk: "Country of Placement",
    nav_gallery: "Gallery",

    btn_contact: "Contact Us",

    hero_tag: "ESTABLISHED INTEGRITY",

    hero_desc:
      "Building the Future with Integrity and Global Reach. Connecting Indonesian Talents with Top International Opportunities.",

    btn_explore: "EXPLORE SOLUTIONS",
    btn_legacy: "OUR LEGACY",

    about_tag: "WHO WE ARE",

    about_title:
      "Elevating Global Standards in Professional Placement",

    about_p1:
      "PT Aida Duta Indonesia Sejahtera is a leading international recruitment and placement agency dedicated to bridging Indonesia's finest talents with global opportunities.",

    about_p2:
      "Our foundation is built upon absolute integrity, ensuring that every professional we place and every partner we serve receives the highest standard of excellence beyond borders.",

    about_hub_title: "Global Operations Hub",

    about_hub_desc:
      "PT Aida Duta Indonesia Sejahtera - International Standard Service.",

    vision_title: "Our Vision",

    vision_desc:
      "To become a trusted, professional, and welfare-oriented labor placement company for Indonesian migrant workers.",

    mission_title: "Our Mission",

    mission_1:
      "Providing migrant worker placement services that are safe, transparent, and in accordance with applicable regulations.",

    mission_2:
      "Improving workforce competency through quality training before departure.",

    mission_3:
      "Providing protection and assistance to migrant workers before, during and after working abroad.",

    mission_4:
      "Building strategic partnerships with companies using labor abroad.",

    org_tag: "ABOUT US",
    org_title: "Organizational Structure",
    org_director: "President Director",
    org_director_desc:
      "Leads the company's strategic direction and ensures all operations align with the vision, mission, and professional standards.",
    org_ops: "Operations Director",
    org_ops_desc:
      "Coordinates recruitment, training, placement, and administration so services run in an integrated way.",
    org_recruitment: "Recruitment Manager",
    org_recruitment_desc:
      "Handles selection, verification, and readiness of prospective migrant workers.",
    org_training: "Training Manager",
    org_training_desc:
      "Manages competency, language, and workplace culture adaptation programs.",
    org_admin: "Administration Manager",
    org_admin_desc:
      "Manages documents, permits, and administrative needs for worker departure.",

    srv_tag: "OUR EXPERTISE",
    srv_title: "Comprehensive Professional Services",

    srv1_title: "Global Recruitment",

    srv1_desc:
      "Strategic screening of high-quality Indonesian talent for international market needs.",

    srv2_title: "Job Placement",

    srv2_desc:
      "Matching worker expertise with global industry demands such as hospitality, healthcare, and engineering.",

    srv3_title: "Competency Training",

    srv3_desc:
      "Standardized training programs through internal LPK facilities to achieve world-class competency standards.",

    net_tag: "Placement Sector",
    net_title: "Placement Sector",

    sector1_title: "Plantation",
    sector1_desc:
      "Work in crop care, fertilization, and harvesting with organized systems supported by a professional working environment.",
    sector2_title: "Factory",
    sector2_desc:
      "Roles include production operator, packing, product sorting, and quality control within a disciplined and structured work system.",
    sector3_title: "Construction",
    sector3_desc:
      "Participate in building and construction projects such as buildings, infrastructure, and technical field work with professional standards.",
    sector4_title: "Fisheries",
    sector4_desc:
      "Career opportunities in seafood processing, fish farming, and modern fisheries industries with high workforce demand.",
    sector5_title: "Elderly Care",
    sector5_desc:
      "Provide assistance and care for seniors in daily activities with patience, attention, and compassion.",
    sector6_title: "Domestic Worker",
    sector6_desc:
      "Support household needs such as cleaning, cooking, laundry, and childcare in a professional and responsible manner.",

    net_stat1: "PARTNER COUNTRIES",
    net_stat2: "GLOBAL CORPORATIONS",

    net_desc:
      "With a partnership network spanning Europe, Asia, and the Middle East, our reach is truly global. We maintain strong relationships with top-tier corporations.",

    net_sub1_title: "Digital Connectivity & Reach",

    net_sub1_desc:
      "Leveraging advanced digital technology to securely and swiftly connect talent with international corporate opportunities.",

    net_sub2_tag: "STRATEGIC DIRECTION",

    net_sub2_title: "Empowering Global Talents",

    net_sub2_desc:
      "Providing expert guidance, clear orientation, and navigational support for individuals to safely enter the global career landscape.",

    lpk_hub_title: "Countries of Placement",

    lpk_hub_desc:
      "Worker placement pathways to key partner countries in Asia.",

    lpk_tag: "COUNTRIES OF PLACEMENT",

    lpk_title:
      "International Work Destinations",

    lpk_desc:
      "We prepare placement pathways to key partner countries in Asia through a guided, transparent process aligned with sector needs.",

    lpk_f1: "Document Assistance",
    lpk_f2: "Destination Orientation",
    lpk_stat1: "Destination Countries",
    lpk_stat2: "Asia Pacific",
    country1_region: "East Asia",
    country1_watermark: "Hong Kong",
    country1_title: "Hong Kong",
    country1_desc:
      "Placement opportunities for domestic work, services, care support, and professional household needs.",
    country2_region: "East Asia",
    country2_watermark: "Taiwan",
    country2_title: "Taiwan",
    country2_desc:
      "Placement destination for manufacturing, factories, elderly care, and supporting industrial sectors.",
    country3_region: "Southeast Asia",
    country3_watermark: "Singapore",
    country3_title: "Singapore",
    country3_desc:
      "Worker placement for domestic work, hospitality, public services, and urban operational needs.",
    country4_region: "Southeast Asia",
    country4_watermark: "Malaysia",
    country4_title: "Malaysia",
    country4_desc:
      "Work options for plantations, factories, construction, fisheries, and service sectors.",
    country5_region: "East Asia",
    country5_watermark: "Japan",
    country5_title: "Japan",
    country5_desc:
      "Placement programs for manufacturing, care work, agriculture, food processing, and technical industries.",

    gal_tag: "DOCUMENTATION",
    gal_title: "Moments of Excellence",

    gal1_title: "LPK Training Class",

    gal1_desc:
      "Intensive guidance process for language, physical conditioning, and foreign work discipline.",

    gal2_title: "Worker Deployment",

    gal2_desc:
      "Official send-off ceremony for migrant workers departing to their destination countries.",

    gal3_title: "International MoU",

    gal3_desc:
      "Signing of strategic alliance expansions together with global corporations.",

    gal4_title: "Competency Test",

    gal4_desc:
      "Official certification and validation of technical skills for prospective migrant workers.",

    cont_title: "Start Your Global Journey",

    cont_desc:
      "Contact our team to explore trusted international career opportunities or partner with us for your corporate recruitment needs.",

    cont_add:
      "Jl. Lkr. Bar. Kepanjen, Ngadilangkung, Kepanjen District, Malang Regency, East Java",

    btn_whatsapp: "WHATSAPP SUPPORT",

    lbl_name: "FULL NAME",
    lbl_email: "EMAIL ADDRESS",
    lbl_msg: "MESSAGE",

    btn_send: "SEND INQUIRY",

    foot_copy:
      "© 2026 PT Aida Duta Indonesia Sejahtera. All Rights Reserved.",

    foot_priv: "Privacy Policy",
    foot_terms: "Terms of Service",

    form_success_title: "Thank You",

    form_success_desc:
      "Your message has been successfully sent. Our team will review your inquiry and respond within 24 working hours."
  },

  zh: {
    nav_home: "首頁",
    nav_about: "關於我們",
    nav_services: "專業服務",
    nav_network: "安置業",
    nav_lpk: "工作地點",
    nav_gallery: "活動紀錄",

    btn_contact: "聯絡我們",

    hero_tag: "誠信服務・連結國際",

    hero_desc:
      "以誠信與全球視野開創未來，致力於連結印尼優秀人才與國際工作發展機會。",

    btn_explore: "探索服務",
    btn_legacy: "品牌歷程",

    about_tag: "關於我們",

    about_title: "提升國際人才派遣服務品質",

    about_p1:
      "PT Aida Duta Indonesia Sejahtera 是一家專業的國際人才招募與派遣公司，致力於協助印尼優秀人才獲得更好的海外工作機會。",

    about_p2:
      "我們始終以誠信為企業核心，確保每位被派遣的專業人才與合作夥伴，都能獲得安心、專業且符合國際標準的服務。",

    about_hub_title: "全球營運中心",

    about_hub_desc:
      "PT Aida Duta Indonesia Sejahtera－提供值得信賴的國際專業服務。",

    vision_title: "我們的願景",

    vision_desc:
      "成為一家值得信賴、專業且以福利為導向的印尼移工勞工派遣公司。",

    mission_title: "我們的使命",

    mission_1:
      "提供安全、透明且符合適用法規的移工安置服務。",

    mission_2:
      "透過出國前高品質培訓提升員工能力。",

    mission_3:
      "為移徙工人出國前、出國期間和出國後提供保護和援助。",

    mission_4:
      "與使用海外勞動力的公司建立策略夥伴關係。",

    org_tag: "About Us",
    org_title: "Organizational Structure",
    org_director: "President Director",
    org_director_desc:
      "Leads the company's strategic direction and ensures all operations align with the vision, mission, and professional standards.",
    org_ops: "Operations Director",
    org_ops_desc:
      "Coordinates recruitment, training, placement, and administration so services run in an integrated way.",
    org_recruitment: "Recruitment Manager",
    org_recruitment_desc:
      "Handles selection, verification, and readiness of prospective migrant workers.",
    org_training: "Training Manager",
    org_training_desc:
      "Manages competency, language, and workplace culture adaptation programs.",
    org_admin: "Administration Manager",
    org_admin_desc:
      "Manages documents, permits, and administrative needs for worker departure.",

    srv_tag: "我們的專業",

    srv_title: "專業國際人力服務",

    srv1_title: "國際人才招募",

    srv1_desc:
      "依據國際市場需求，精選優秀印尼專業人才。",

    srv2_title: "海外工作派遣",

    srv2_desc:
      "協助人才媒合海外工作機會，涵蓋飯店、醫療與工程等產業。",

    srv3_title: "專業技能培訓",

    srv3_desc:
      "透過內部 LPK 培訓中心提供標準化課程，提升人才國際競爭力。",

    net_tag: "安置產業",

    net_title: "工作安置產業",

    sector1_title: "種植園",
    sector1_desc:
      "從事作物照護、施肥到採收等工作，採用有秩序的工作制度，並由專業工作環境支持。",
    sector2_title: "工廠",
    sector2_desc:
      "工作內容包括生產操作、包裝、貨品分類與品質控管，具備紀律且結構化的工作制度。",
    sector3_title: "建築工程",
    sector3_desc:
      "參與建築與工程專案，例如大樓、基礎設施及現場技術工作，並遵循專業工作標準。",
    sector4_title: "漁業",
    sector4_desc:
      "提供水產品加工、養殖與現代漁業相關工作機會，產業具備高度人力需求。",
    sector5_title: "養老照護",
    sector5_desc:
      "以耐心、關懷與責任感，協助長者日常生活並提供照護服務。",
    sector6_title: "家庭幫傭",
    sector6_desc:
      "以專業且負責的態度協助清潔、烹飪、洗衣與照顧孩童等家庭需求。",

    net_stat1: "合作國家",
    net_stat2: "國際合作企業",

    net_desc:
      "我們的合作網絡遍及歐洲、亞洲與中東地區，並與多家國際企業建立穩定合作關係。",

    net_sub1_title: "數位連結與國際接軌",

    net_sub1_desc:
      "運用現代數位技術，快速且安全地協助人才連結海外工作機會。",

    net_sub2_tag: "發展方向",

    net_sub2_title: "培育國際專業人才",

    net_sub2_desc:
      "提供完整培訓、文化適應與工作指導，協助人才安心進入海外職場。",

    lpk_hub_title: "安置國家",

    lpk_hub_desc:
      "通往亞洲主要合作國家的勞工安置管道。",

    lpk_tag: "安置國家",

    lpk_title:
      "國際工作目的地",

    lpk_desc:
      "我們為亞洲主要合作國家準備安置管道，流程明確、透明，並符合各產業需求。",

    lpk_f1: "文件協助",
    lpk_f2: "目的地說明",
    lpk_stat1: "目的地國家",
    lpk_stat2: "亞太地區",
    country1_region: "東亞",
    country1_watermark: "香港",
    country1_title: "香港",
    country1_desc:
      "提供家庭工作、服務、照護支援與專業家務需求等安置機會。",
    country2_region: "東亞",
    country2_watermark: "台灣",
    country2_title: "台灣",
    country2_desc:
      "適合製造業、工廠、長者照護與產業支援部門的工作安置。",
    country3_region: "東南亞",
    country3_watermark: "新加坡",
    country3_title: "新加坡",
    country3_desc:
      "提供家庭工作、餐旅服務、公共服務與城市營運需求相關職位。",
    country4_region: "東南亞",
    country4_watermark: "馬來西亞",
    country4_title: "馬來西亞",
    country4_desc:
      "涵蓋種植園、工廠、建築、漁業與服務業等工作選擇。",
    country5_region: "東亞",
    country5_watermark: "日本",
    country5_title: "日本",
    country5_desc:
      "提供製造、照護、農業、食品加工與技術產業的安置計畫。",

    gal_tag: "精彩紀錄",

    gal_title: "企業精彩紀實",

    gal1_title: "LPK 培訓課程",

    gal1_desc:
      "針對語言、體能與海外工作紀律進行專業培訓。",

    gal2_title: "海外勞工歡送儀式",

    gal2_desc:
      "為即將前往海外工作的勞工舉辦正式出發儀式。",

    gal3_title: "國際合作備忘錄",

    gal3_desc:
      "與國際企業簽署合作協議，拓展全球合作機會。",

    gal4_title: "專業技能測試",

    gal4_desc:
      "進行正式技能認證與專業能力評估。",

    cont_title: "開啟您的海外工作旅程",

    cont_desc:
      "歡迎聯絡我們的專業團隊，了解更多可靠的海外工作機會與人才招募服務。",

    cont_add:
      "Jl. Lkr. Bar. Kepanjen, Ngadilangkung, Kepanjen, Malang Regency, East Java",

    btn_whatsapp: "WHATSAPP 支援",

    lbl_name: "姓名",
    lbl_email: "電子郵件",
    lbl_msg: "留言內容",

    btn_send: "送出諮詢",

    foot_copy:
      "© 2026 PT Aida Duta Indonesia Sejahtera．保留所有權利。",

    foot_priv: "隱私權政策",
    foot_terms: "服務條款",

    form_success_title: "感謝您的來訊",

    form_success_desc:
      "您的訊息已成功送出，我們的專業團隊將儘快與您聯繫。"
  }
};

// 2. Fungsi Menerapkan Terjemahan Halaman
function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-key]");

  elements.forEach(element => {
    const key = element.getAttribute("data-lang-key");

    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Update lang attribute
  document.documentElement.lang =
    lang === "zh" ? "zh-TW" : lang;
}

// 3. Inisialisasi Utama
document.addEventListener("DOMContentLoaded", function () {

  // Init AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: false,
      duration: 800,
      easing: "ease-out-cubic",
      mirror: true
    });
  }

  // Ambil bahasa tersimpan
  const savedLang =
    localStorage.getItem("preferredLanguage") || "id";

  const langSelector =
    document.getElementById("lang-selector");

  if (langSelector) {
    langSelector.value = savedLang;

    applyLanguage(savedLang);

    // Saat bahasa diganti
    langSelector.addEventListener("change", function (e) {

      const selectedLang = e.target.value;

      localStorage.setItem(
        "preferredLanguage",
        selectedLang
      );

      applyLanguage(selectedLang);

      // Refresh AOS
      setTimeout(() => {
        if (typeof AOS !== "undefined") {
          AOS.refresh();
        }
      }, 300);
    });
  }

  const mobileMenuButton =
    document.getElementById("mobile-menu-button");

  const mobileMenu =
    document.getElementById("mobile-menu");

  function closeMobileMenu() {
    if (!mobileMenu || !mobileMenuButton) return;

    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", "false");

    const icon = mobileMenuButton.querySelector(".material-icons-outlined");
    if (icon) {
      icon.textContent = "menu";
    }
  }

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      const isOpen = !mobileMenu.classList.contains("hidden");

      mobileMenu.classList.toggle("hidden", isOpen);
      mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));

      const icon = mobileMenuButton.querySelector(".material-icons-outlined");
      if (icon) {
        icon.textContent = isOpen ? "menu" : "close";
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    });
  }

  const navLinks = Array.from(
    document.querySelectorAll('nav a[data-lang-key][href^="#"]')
  );

  function setActiveNavLink(activeLink) {
    navLinks.forEach(link => {
      link.classList.remove(
        "text-[#f39a12]",
        "border-b-2",
        "border-[#f39a12]",
        "pb-1"
      );
      link.classList.add("text-[#e9e2d0]/70");
    });

    if (activeLink) {
      activeLink.classList.remove("text-[#e9e2d0]/70");
      activeLink.classList.add(
        "text-[#f39a12]",
        "border-b-2",
        "border-[#f39a12]",
        "pb-1"
      );
    }
  }

  function updateActiveNav() {
    const scrollPosition = window.scrollY + 160;
    let activeLink = navLinks[0];

    navLinks.forEach(link => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection && targetSection.offsetTop <= scrollPosition) {
        activeLink = link;
      }
    });

    setActiveNavLink(activeLink);
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      setActiveNavLink(link);
      closeMobileMenu();
    });
  });

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav);
  updateActiveNav();
});

// 4. Refresh AOS saat navigasi
document
  .querySelectorAll(
    'nav a, nav button, [onclick*="scrollIntoView"]'
  )
  .forEach(element => {

    element.addEventListener("click", function () {

      setTimeout(() => {
        if (typeof AOS !== "undefined") {
          AOS.refresh();
        }
      }, 600);

    });

  });

// 5. Form Submit Handler
function handleFormSubmit(event) {

  event.preventDefault();

  const currentLang =
    localStorage.getItem("preferredLanguage") || "id";

  const nameInput =
    document.getElementById("form-name");

  const emailInput =
    document.getElementById("form-email");

  const userName =
    nameInput ? nameInput.value : "User";

  const userEmail =
    emailInput ? emailInput.value : "";

  const formContainer =
    document.getElementById("form-container");

  if (formContainer) {

    const titleText =
      currentLang === "id"
        ? `Terima Kasih, ${userName}!`
        : currentLang === "en"
        ? `Thank You, ${userName}!`
        : `感謝您的來訊，${userName}！`;

    const descText =
      translations[currentLang]["form_success_desc"];

    formContainer.innerHTML = `
      <div class="text-center py-12 flex flex-col items-center justify-center h-full" style="animation: fadeIn 0.5s ease;">
        <span class="material-icons-outlined text-[#d4af37] text-6xl mb-4">
          check_circle
        </span>

        <h3 class="text-2xl text-[#d4af37] mb-2 font-bold font-display">
          ${titleText}
        </h3>

        <p class="text-[#e9e2d0]/70 text-sm max-w-xs leading-relaxed mx-auto">
          ${descText}
          <br><br>
          <strong>${userEmail}</strong>
        </p>
      </div>
    `;
  }
}
