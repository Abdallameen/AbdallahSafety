/*
 * app.js — أدوات مشتركة لكل صفحات الموقع:
 * اللغة (AR/EN)، الثيم (فاتح/داكن)، الرأس والتذييل الموحدان، الطباعة،
 * تخزين localStorage، سجل التسجيلات (CSV)، والتحقق من صحة المدخلات.
 *
 * لإضافة أداة جديدة للموقع: أضف عنصراً واحداً في TOOLS_REGISTRY فقط،
 * وأنشئ صفحة tools/اسم-الأداة.html تستدعي initApp() كبقية الصفحات.
 */

// -------------------- سجل الأدوات (المصدر الوحيد للحقيقة) --------------------
const TOOLS_REGISTRY = [
  { id: "sanitizer",   icon: "🧴", href: "tools/sanitizer.html",   available: true },
  { id: "temperature", icon: "🌡️", href: "tools/temperature.html", available: true },
  { id: "haccp",       icon: "🌳", href: "#",                       available: false },
  { id: "risk",        icon: "📊", href: "#",                       available: false },
  { id: "haccpPlan",   icon: "📋", href: "#",                       available: false }
];

// -------------------- مفاتيح التخزين المحلي --------------------
const STORAGE_KEYS = {
  lang: "fst_lang",
  theme: "fst_theme",
  sanitizerLog: "fst_sanitizer_log"
};

// -------------------- حالة اللغة --------------------
function getLang() {
  return localStorage.getItem(STORAGE_KEYS.lang) || "ar";
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  applyLangToDocument(lang);
  applyI18n();
  document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang } }));
}

function toggleLang() {
  setLang(getLang() === "ar" ? "en" : "ar");
}

function applyLangToDocument(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
}

// -------------------- حالة الثيم --------------------
function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.theme) || "light";
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}

// -------------------- الترجمة --------------------
// t("sanitizer.tabs.recipe") => يرجع النص بلغة المستخدم الحالية مع fallback للعربية
function t(path) {
  const lang = getLang();
  const value = getNestedValue(I18N[lang], path);
  if (value !== undefined) return value;
  const fallback = getNestedValue(I18N.ar, path);
  return fallback !== undefined ? fallback : path;
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

// يطبّق الترجمة على كل عناصر الصفحة الموسومة بـ data-i18n / data-i18n-placeholder / data-i18n-title
function applyI18n(root) {
  const scope = root || document;
  scope.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  scope.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  scope.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });
  scope.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria-label")));
  });
  const titleKey = document.body && document.body.getAttribute("data-page-title-i18n");
  if (titleKey) {
    document.title = t(titleKey) + " | " + t("common.appName");
  }
}

// -------------------- الرأس والتذييل الموحدان --------------------
// basePath: "" لصفحة الرئيسية، "../" لصفحات داخل /tools
function renderHeader(basePath, activeToolId) {
  const el = document.getElementById("app-header");
  if (!el) return;
  el.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="${basePath}index.html">
        <span class="brand-icon" aria-hidden="true">🥗</span>
        <span class="brand-name" data-i18n="siteName"></span>
      </a>
      <nav class="header-actions" aria-label="header navigation">
        ${activeToolId ? `<a class="btn btn-ghost btn-sm" href="${basePath}index.html" data-i18n="nav.back"></a>` : ""}
        <button type="button" id="themeToggleBtn" class="btn btn-icon" aria-label="toggle theme">${getTheme() === "dark" ? "☀️" : "🌙"}</button>
        <button type="button" id="langToggleBtn" class="btn btn-ghost btn-sm" data-i18n="nav.langToggle"></button>
      </nav>
    </div>
  `;
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);
  document.getElementById("langToggleBtn").addEventListener("click", toggleLang);
}

function renderFooter() {
  const el = document.getElementById("app-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="footer-inner">
      <p class="footer-charity" data-i18n="footer.charity"></p>
      <p class="footer-disclaimer" data-i18n="footer.disclaimer"></p>
      <p class="footer-data-note" data-i18n="footer.dataNote"></p>
    </div>
  `;
}

// -------------------- تهيئة الصفحة --------------------
// basePath: "" للرئيسية أو "../" لأي صفحة داخل /tools
function initApp(options) {
  const opts = options || {};
  applyLangToDocument(getLang());
  setTheme(getTheme());
  renderHeader(opts.basePath || "", opts.activeToolId || null);
  renderFooter();
  applyI18n();
  registerServiceWorker(opts.basePath || "");
}

function registerServiceWorker(basePath) {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol === "file:") return;
  navigator.serviceWorker.register(basePath + "sw.js").catch(() => {});
}

// -------------------- تخزين محلي عام --------------------
function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// -------------------- تصدير CSV --------------------
function downloadCsv(filename, headers, rows) {
  const escapeCell = (cell) => {
    const str = String(cell === undefined || cell === null ? "" : cell);
    if (/[",\n]/.test(str)) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  };
  const lines = [headers.map(escapeCell).join(",")];
  rows.forEach((row) => lines.push(row.map(escapeCell).join(",")));
  const csvContent = "﻿" + lines.join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// -------------------- أدوات مساعدة عامة --------------------
function formatDateTime(date) {
  const d = date || new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// يتحقق من أن النص المُدخل رقم صالح، ضمن حدود اختيارية [min, max]
function parseNumberField(rawValue, options) {
  const opts = options || {};
  const trimmed = String(rawValue == null ? "" : rawValue).trim();
  if (trimmed === "") {
    return { ok: false, error: t("common.required") };
  }
  const num = Number(trimmed);
  if (!Number.isFinite(num)) {
    return { ok: false, error: t("common.invalidNumber") };
  }
  if (opts.positive && num <= 0) {
    return { ok: false, error: t("common.mustBePositive") };
  }
  if (opts.min !== undefined && num < opts.min) {
    return { ok: false, error: t("common.outOfRange") };
  }
  if (opts.max !== undefined && num > opts.max) {
    return { ok: false, error: t("common.outOfRange") };
  }
  return { ok: true, value: num };
}

function printPage() {
  window.print();
}

// يبني ورقة سجل قابلة للطباعة داخل #printArea ثم يستدعي الطباعة.
// rows: مصفوفة من [تسمية, قيمة]
function printRecordSheet(options) {
  const area = document.getElementById("printArea");
  if (!area) return;
  area.innerHTML = `
    <h1>${t(options.titleKey)} — ${t("common.recordSheetTitle")}</h1>
    <p>${t("common.date")}: ${formatDateTime()}</p>
    <table>
      <tbody>
        ${options.rows.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join("")}
      </tbody>
    </table>
    ${options.note ? `<p>${options.note}</p>` : ""}
    <div class="record-sign-line">
      <div class="sign-block">${t("common.executedBy")}</div>
      <div class="sign-block">${t("common.signature")}</div>
      <div class="sign-block">${t("common.recordDate")}</div>
    </div>
  `;
  window.print();
}
