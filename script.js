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

    about_tag: "SIAPA KAMI",

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

    srv_tag: "KEAHLIAN KAMI",
    srv_title: "Layanan Profesional Komprehensif",

    srv1_title: "Perekrutan Global",
    srv1_desc:
      "Penyaringan strategis talenta Indonesia berkualitas tinggi untuk kebutuhan pasar internasional.",

    srv2_title: "Penempatan Kerja",
    srv2_desc:
      "Menghubungkan keahlian pekerja dengan permintaan industri global seperti perhotelan, kesehatan, dan teknik.",

    srv3_title: "Pelatihan Kompetensi",
    srv3_desc:
      "Program pelatihan terstandarisasi melalui fasilitas LPK internal untuk mencapai standar kompetensi dunia.",

    net_tag: "JANGKAUAN LUAS",
    net_title: "Menjembatani Benua",

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

    lpk_hub_title: "Standar Internasional",

    lpk_hub_desc:
      "Pusat pelatihan kompetensi dengan kurikulum adaptif industri global.",

    lpk_tag: "PUSAT PELATIHAN PROFESIONAL",

    lpk_title:
      "LPK: Pembelajaran Lanjutan untuk Keunggulan Profesional",

    lpk_desc:
      "Pusat pelatihan khusus kami dilengkapi dengan fasilitas modern yang dirancang untuk mensimulasikan lanskap lingkungan kerja internasional yang nyata. Kami fokus pada kefasihan bahasa, adaptasi budaya, dan penguasaan teknis.",

    lpk_f1: "Sertifikasi Standar Internasional",
    lpk_f2: "Instruktur Bahasa Profesional",

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
      "Jl. Raya Global No. 88, Jakarta Selatan, Indonesia",

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
    nav_network: "Network",
    nav_lpk: "LPK",
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

    net_tag: "EXPANSIVE REACH",
    net_title: "Bridging Continents",

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

    lpk_hub_title: "International Standards",

    lpk_hub_desc:
      "Competency training center with adaptive global industry curriculum.",

    lpk_tag: "PROFESSIONAL TRAINING CENTER",

    lpk_title:
      "LPK: Advanced Learning for Professional Excellence",

    lpk_desc:
      "Our specialized training center is equipped with modern facilities designed to simulate real international working environments. We focus on language fluency, cultural adaptation, and technical mastery.",

    lpk_f1: "International Standard Certification",
    lpk_f2: "Professional Language Instructors",

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
      "Jl. Raya Global No. 88, South Jakarta, Indonesia",

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
    nav_network: "全球網絡",
    nav_lpk: "培訓中心",
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

    net_tag: "全球布局",

    net_title: "連結全球工作機會",

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

    lpk_hub_title: "國際標準",

    lpk_hub_desc:
      "符合國際產業需求的專業技能培訓中心。",

    lpk_tag: "專業人才培訓中心",

    lpk_title:
      "LPK：培育國際專業人才的培訓中心",

    lpk_desc:
      "我們的培訓中心配備現代化設施，模擬真實海外工作環境，並著重於語言能力、文化適應與專業技能培養。",

    lpk_f1: "國際標準專業認證",
    lpk_f2: "專業語言培訓講師",

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
      "Jl. Raya Global No. 88, Jakarta Selatan, Indonesia",

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