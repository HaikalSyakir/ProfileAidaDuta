(function () {
  const languageSelect = document.getElementById("language-select");
  const cache = {};
  let currentTranslations = {};

  async function loadLanguage(language) {
    const code = language || localStorage.getItem("aida-language") || "id";

    try {
      if (!cache[code]) {
        const response = await fetch(`lang/${code}.json`);
        if (!response.ok) {
          throw new Error(`Language file not found: ${code}`);
        }
        cache[code] = await response.json();
      }

      currentTranslations = cache[code];
      document.documentElement.lang = code === "zh-tw" ? "zh-Hant" : code;
      localStorage.setItem("aida-language", code);

      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (currentTranslations[key]) {
          element.textContent = currentTranslations[key];
        }
      });

      if (languageSelect) {
        languageSelect.value = code;
      }

      window.dispatchEvent(new CustomEvent("language:changed", { detail: currentTranslations }));
    } catch (error) {
      console.warn(error.message);
      if (code !== "id") {
        loadLanguage("id");
      }
    }
  }

  window.AidaLanguage = {
    get: (key) => currentTranslations[key] || key,
    load: loadLanguage
  };

  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      loadLanguage(event.target.value);
    });
  }

  document.addEventListener("DOMContentLoaded", () => loadLanguage());
})();
