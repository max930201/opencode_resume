/* 作品集渲染與互動 · 「人即套件」npm 世界 */
(function () {
  "use strict";

  var P = window.PORTFOLIO;

  /* ── 小工具 ────────────────────────────── */

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 填寫個人資訊 ───────────────────────── */

  function fillProfile() {
    var p = P.profile;
    var scope = "@" + p.scope;

    $$("[data-field=navScope]").forEach(function (el) { el.textContent = scope; });
    $$("[data-field=pkgScope]").forEach(function (el) { el.textContent = scope; });
    $$("[data-field=breadcrumb]").forEach(function (el) { el.textContent = scope + "/frontend-engineer"; });
    $$("[data-field=footScope]").forEach(function (el) { el.textContent = scope; });
    $$("[data-field=pkgVersion]").forEach(function (el) { el.textContent = p.version; });
    $$("[data-field=pkgTag]").forEach(function (el) { el.textContent = p.tag; });
    $$("[data-field=titleZh]").forEach(function (el) { el.textContent = p.titleZh; });
    $$("[data-field=titleEn]").forEach(function (el) { el.textContent = p.titleEn; });
    $$("[data-field=position]").forEach(function (el) { el.textContent = p.position; });
    $$("[data-field=school]").forEach(function (el) { el.textContent = p.school; });
    $$("[data-field=birthday]").forEach(function (el) { el.textContent = p.birthday; });
    $$("[data-field=bloodType]").forEach(function (el) { el.textContent = p.bloodType; });
    $$("[data-field=authorName]").forEach(function (el) { el.textContent = p.name; });
    $$("[data-field=authorHandle]").forEach(function (el) { el.textContent = scope; });
    $$("[data-field=emailText]").forEach(function (el) { el.textContent = p.email; });
    $$("[data-field=avatar]").forEach(function (el) { el.setAttribute("src", P.about.photo); });
    $$("[data-field=statsLine]").forEach(function (el) {
      el.textContent = P.stats.birthday + " 個生日祝福 + " + P.stats.systems + " 個系統";
    });

    var mailto = "mailto:" + p.email;
    var tel = "tel:" + p.phone;
    $$("[data-field=email]").forEach(function (el) { el.href = mailto; });
    $$("[data-field=phone]").forEach(function (el) { el.href = tel; });
    $$("[data-field=github]").forEach(function (el) { el.href = p.github; });

    var install = $(".install-line");
    if (install) {
      install.setAttribute("data-copy", p.installCmd);
      $(".install-cmd", install).textContent = p.installCmd;
    }

    var emailHref = $("[data-field=emailHref]");
    if (emailHref) emailHref.href = mailto;
    var phoneHref = $("[data-field=phoneHref]");
    if (phoneHref) phoneHref.href = tel;
    var ghHref = $("[data-field=githubHref]");
    if (ghHref) ghHref.href = p.github;
    var note = $(".contact-note[data-field=email]");
    if (note) note.textContent = "mailto: " + p.email;
  }

  /* ── 作品卡 ─────────────────────────────── */

  var KIND = {
    birthday: { chip: "chip--rose", dot: true },
    functional: { chip: "chip--teal", dot: true },
  };

  function slugOf(url) {
    return String(url || "")
      .replace(/^https?:\/\//, "")
      .replace(/\.netlify\.app\/?$/, "")
      .replace(/\/+$/, "");
  }

  function cardHTML(item, kind) {
    var k = KIND[kind];
    var url = item.url || (item.links && item.links[0] && item.links[0].href) || "";
    var catLabel = kind === "birthday" ? item.group : item.status;
    var slug = kind === "birthday" ? slugOf(url) : item.slug;
    var demoCls = url ? "" : " is-missing";
    var demoText = url ? "網頁 ↗" : "demo 待補";
    var demoTitle = url ? "開啟線上網頁" : "此項目網址待補上";
    var demoHref = url ? esc(url) : "#";

    var stackChips = item.stack.map(function (s) {
      return '<span class="chip chip--stack">' + esc(s) + "</span>";
    }).join("");

    var dbChip = item.db ? '<span class="chip chip--db">含資料庫</span>' : "";
    var noteLine = item.note ? '<p class="card-note">' + esc(item.note) + "</p>" : "";

    var detailText = item.detail || item.desc || "";
    var descText = item.desc || (kind === "birthday" ? "送給" + item.group + "的專屬生日祝福網頁。" : "");

    var linkHTML;
    if (kind === "functional" && item.links && item.links.length) {
      linkHTML = item.links.map(function (l) {
        return '<a href="' + esc(l.href) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
      }).join("");
    } else {
      linkHTML = url ? '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + esc(url) + "</a>" : "待補上網址";
    }

    var panel =
      "<div><dt>說明</dt><dd>" + esc(detailText) + "</dd></div>" +
      "<div><dt>技術</dt><dd>" + esc(item.stack.join(" · ")) + "</dd></div>" +
      '<div><dt>連結</dt><dd class="panel-links">' + linkHTML + "</dd></div>";

    return (
      '<article class="card reveal">' +
        '<div class="card-top">' +
          '<span class="card-name">' + esc(slug || item.title) + "</span>" +
          '<a class="card-demo' + demoCls + '" href="' + demoHref + '" target="_blank" rel="noopener" title="' + esc(demoTitle) + '">' + esc(demoText) + "</a>" +
        "</div>" +
        '<h3 class="card-title">' + esc(item.title) + "</h3>" +
        '<p class="card-desc">' + esc(descText) + "</p>" +
        noteLine +
        '<div class="card-tags">' +
          '<span class="chip ' + k.chip + '">' + esc(catLabel) + "</span>" +
          dbChip + stackChips +
        "</div>" +
        '<div class="card-foot">' +
          '<button type="button" class="card-toggle" aria-expanded="false">' +
            "readme <svg class=\"ic\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 9l6 6 6-6\"/></svg>" +
          "</button>" +
        "</div>" +
        '<div class="card-panel"><div class="panel-inner"><div class="panel-fields">' + panel + "</div></div></div>" +
      "</article>"
    );
  }

  function renderCards() {
    ["birthday", "functional"].forEach(function (kind) {
      var grid = $('[data-grid="' + kind + '"]');
      if (!grid) return;
      P[kind].forEach(function (item, i) {
        var div = document.createElement("div");
        div.innerHTML = cardHTML(item, kind);
        var card = div.firstElementChild;
        card.style.setProperty("--d", (i % 3) * 70 + "ms");
        grid.appendChild(card);
      });
    });
  }

  /* ── 證照證書 ───────────────────────────── */

  function renderCertificates() {
    var grid = $('[data-grid="certificates"]');
    if (!grid || !P.certificates) return;
    P.certificates.forEach(function (c, i) {
      var card = document.createElement("article");
      card.className = "card cert-card reveal";
      card.style.setProperty("--d", (i % 3) * 70 + "ms");
      card.innerHTML =
        '<img class="cert-img" src="' + esc(c.image) + '" alt="' + esc(c.name) + " 證書圖片" + '" loading="lazy">' +
        '<h3 class="card-title">' + esc(c.name) + "</h3>" +
        '<p class="cert-issuer">' + esc(c.issuer) + "</p>" +
        '<p class="cert-date">' + esc(c.date) + "</p>";
      grid.appendChild(card);
    });
  }

  /* ── 關於我故事 ─────────────────────────── */

  function renderAbout() {
    var grid = $('[data-grid="about-story"]');
    if (!grid || !P.about) return;
    (P.about.story || []).forEach(function (s) {
      var block = document.createElement("section");
      block.className = "story-block reveal";
      block.innerHTML = "<h3>" + esc(s.h) + "</h3><p>" + esc(s.p) + "</p>";
      grid.appendChild(block);
    });
  }

  /* ── 技能表與學習歷程 ───────────────────── */

  function renderSkills() {
    var grid = $('[data-grid="skills"]');
    if (!grid || !P.skills) return;
    P.skills.forEach(function (s) {
      var row = document.createElement("div");
      row.className = "dep-row reveal";
      row.setAttribute("role", "row");
      row.innerHTML =
        '<span class="dep-name" role="cell">' + esc(s.name) + "</span>" +
        '<span class="dep-version" role="cell">' + esc(s.version) + "</span>" +
        '<span class="dep-desc" role="cell">' + esc(s.desc) + "</span>";
      grid.appendChild(row);
    });
  }

  function renderReleases() {
    var grid = $('[data-grid="releases"]');
    if (!grid || !P.releases) return;
    P.releases.forEach(function (r) {
      var li = document.createElement("li");
      li.className = "reveal";
      li.innerHTML =
        '<span class="release-ver">' + esc(r.version) + "</span>" +
        '<span class="release-title">' + esc(r.title) + "</span>" +
        '<span class="release-desc">' + esc(r.desc) + "</span>";
      grid.appendChild(li);
    });
  }

  /* ── Hero 進場 ──────────────────────────── */

  function heroEntrance() {
    var hero = $(".hero");
    if (!hero || reduceMotion) return;
    var els = $$(".hero .breadcrumb, .hero .pkg-name, .hero .pkg-badges, .hero .pkg-desc-zh, .hero .pkg-desc-en, .hero .pkg-keywords, .hero .hero-actions, .hero .meta-card");
    els.forEach(function (el, i) {
      el.classList.add("hero-fade");
      el.style.animationDelay = (0.08 + i * 0.07) + "s";
    });
  }

  /* ── install 指令打字機效果 ──────────────── */

  function typeCommand() {
    var line = $(".install-line");
    if (!line) return;
    var target = $(".install-cmd", line);
    var full = target.textContent;
    if (reduceMotion) { target.textContent = full; return; }
    target.textContent = "";
    var i = 0;
    var timer = window.setInterval(function () {
      i += 1;
      target.textContent = full.slice(0, i);
      if (i >= full.length) window.clearInterval(timer);
    }, 34);
  }

  /* ── 複製指令 ───────────────────────────── */

  function copyCommand() {
    var line = $(".install-line");
    if (!line) return;
    line.addEventListener("click", function () {
      var text = line.getAttribute("data-copy") || "";
      var done = function () {
        line.classList.add("is-copied");
        var label = $(".copy-label", line);
        var prev = label.textContent;
        label.textContent = "已複製";
        window.setTimeout(function () {
          line.classList.remove("is-copied");
          label.textContent = prev;
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, legacyCopy(text, done));
      } else {
        legacyCopy(text, done)();
      }
    });
  }

  function legacyCopy(text, done) {
    return function () {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) { /* noop */ }
      document.body.removeChild(ta);
      done();
    };
  }

  /* ── readme 展開 ────────────────────────── */

  function cardToggles() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest(".card-toggle");
      if (!btn) return;
      var card = btn.closest(".card");
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      if (card) card.classList.toggle("is-open", !open);
    });
  }

  /* ── 滾動 reveal ────────────────────────── */

  function initReveals() {
    var els = $$(".sec-head, .dep-table, .about-readme, .meta-card--about, .contact-inner, .reveal");
    if (reduceMotion) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── 起動。附帶「特別空格」demo 連結守門 ── */

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a.card-demo.is-missing");
    if (a) { e.preventDefault(); }
  });

  document.addEventListener("DOMContentLoaded", function () {
    fillProfile();
    renderCards();
    renderCertificates();
    renderAbout();
    renderSkills();
    renderReleases();
    heroEntrance();
    typeCommand();
    copyCommand();
    cardToggles();
    initReveals();
  });
})();