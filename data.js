// ============================================================
// 作品集資料 — 所有內容都在這裡改，不需要動其他檔案
//
// 資料來源：my_new_resume（李瑞勳的履歷內容已匯入）
// ============================================================

const PORTFOLIO = {
  profile: {
    scope: "max930201",
    name: "李瑞勳",
    version: "v1.0.0",
    tag: "資管系",
    license: "公開 public",
    position: "前端網頁開發 · 嘉南藥理大學資管系（進修部）",
    school: "嘉南藥理大學 資訊管理學系（進修部）",
    titleZh: "跨越意外，持續前進的資管系學生。",
    //titleEn: "Front-end development — real, deployed systems.",
    installCmd: "npm install @max930201/portfolio",
    email: "max99296@gmail.com",
    phone: "0983637717",
    github: "https://github.com/max930201",
    birthday: "93/02/01",
    bloodType: "O",
  },

  stats: {
    birthday: 18,
    systems: 5,
    backend: 5,
  },

  // ── 生日祝福網頁（18 個，真實連結）──────────────────
  birthday: [
    { group: "家人", title: "爸爸的生日網頁", url: "https://dad-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "家人", title: "媽媽的生日網頁", url: "https://mom-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "家人", title: "姐姐的生日網頁", url: "https://phyllies-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "家人", title: "雙胞胎姊姊的生日網頁", url: "https://mina-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "家人", title: "表姑姑的生日網頁", url: "https://liu-hsing-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "朋友", title: "龔致豪的生日網頁", url: "https://zackyia-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "朋友", title: "龔致豪道別信網頁", url: "https://zackyia-save-travels.netlify.app/", stack: ["HTML", "CSS"], desc: "", note: "跟朋友道別的網頁" },
    { group: "朋友", title: "思淼的生日網頁", url: "https://si-miao-hbd.netlify.app/", stack: ["HTML", "CSS", "JS", "資料庫"], db: true, note: "後端資料庫，可儲存訪客留言" },
    { group: "朋友", title: "徐振軒的生日網頁", url: "https://enderson-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "朋友", title: "張仕翰的生日網頁", url: "https://ditto-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "朋友", title: "呂宗展的生日網頁", url: "https://jameslu-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "朋友", title: "阿辰的生日網頁", url: "https://lin-chen-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "朋友", title: "方欣宜的生日網頁", url: "https://eve-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "朋友", title: "翁宸品的生日網頁", url: "https://leo-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "治療師", title: "阿慶老師的生日網頁", url: "https://r-ching-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "治療師", title: "羿均老師的生日網頁", url: "https://yi-chun-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "治療師", title: "育均老師的生日網頁", url: "https://yu-chun-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
    { group: "治療師", title: "鄒老師的生日網頁", url: "https://zou-therapist-hbd.netlify.app/", stack: ["HTML", "CSS"], note: "" },
  ],

  // ── 功能性系統（5 個，真實專案）────────────────────
  functional: [
    {
      slug: "ya3s-shop",
      title: "Ya3s 線上商城系統",
      status: "個人開發完成",
      desc: "會員制線上商城：收藏商品、訂單紀錄，前後台分離部署。",
      detail:
        "獨立完成需求分析、前後台開發與資料庫串接。會員資料存放於 Firebase Firestore，並以安全規則限制一般會員僅能存取自己的訂單與資料；「按下詢問／建立訂單」加入 30 秒節流機制避免惡意刷單。後台限有權限管理者登入，可上下架商品與查看所有訂單；資料每日透過 Google Apps Script 自動同步至 Notion。",
      stack: ["Firebase Auth", "Firestore", "Google Apps Script", "Netlify"],
      db: true,
      links: [
        { label: "前台商城 →", href: "https://yasss-online-shop.netlify.app/" },
        { label: "後台管理 →", href: "https://ya3s-admin-interface.netlify.app/" },
      ],
    },
    {
      slug: "medical-card",
      title: "治療師病人衛教卡系統",
      status: "個人開發完成",
      desc: "治療師管理病人衛教資訊，病人以驗證碼登入專屬衛教卡。",
      detail:
        "治療師登入後台前須先通過 Firestore Authentication 白名單驗證；新增病人時系統自動產生 8 位數驗證碼，作為病人登入專屬衛教卡的密碼（以姓名作為帳號）。系統每日固定時間自動備份治療師與病人資料至 Notion。",
      stack: ["Firebase", "Firestore", "Authentication", "Notion"],
      db: true,
      links: [
        { label: "衛教卡系統 →", href: "https://zou-therapist-medical-card.netlify.app/" },
        { label: "使用說明 →", href: "https://medical-card-system-instruction.netlify.app/" },
      ],
    },
    {
      slug: "factory-salary",
      title: "工廠薪水計算系統",
      status: "個人開發完成",
      desc: "依簽到簽退自動計算工時，同步至 Google Sheets 計算薪資。",
      detail:
        "依員工上下班的簽到、簽退時間自動計算總工時，並將紀錄同步至 Google Sheet，用以計算並記錄員工薪資。",
      stack: ["HTML", "CSS", "JavaScript", "Google Sheets"],
      db: true,
      links: [{ label: "前往系統 →", href: "https://factory-salary.netlify.app/" }],
    },
    {
      slug: "wash-coin",
      title: "洗衣店代收款記錄系統",
      status: "個人開發完成",
      desc: "兩間門市的每日代收款記錄，輸入即存入 Google Sheet。",
      detail:
        "可自由選擇兩間洗衣店門市，記錄當天現場收取的金額，輸入完成後自動存入 Google Sheet 保存紀錄。",
      stack: ["HTML", "CSS", "JavaScript", "Google Sheets"],
      db: true,
      links: [{ label: "前往系統 →", href: "https://wash-coin.netlify.app/" }],
    },
    {
      slug: "family-dinner",
      title: "家庭聚餐紀錄網頁",
      status: "個人開發完成",
      desc: "以網頁形式保存家人假日聚餐的生活點滴。",
      detail: "記錄家人假日聚餐的生活點滴，練習以網頁形式保存與呈現生活紀錄。",
      stack: ["HTML", "CSS", "JavaScript"],
      db: false,
      links: [{ label: "前往網頁 →", href: "https://family-sunday-dinner.netlify.app/" }],
    },
  ],

  // ── 技能 dependencies ─────────────────────────────
  skills: [
    { name: "frontend", version: "HTML·CSS·JS", desc: "前端：結構、樣式與互動。" },
    { name: "backend-db", version: "Firebase·Sheets", desc: "後端／資料庫：Firebase（Authentication、Firestore）、Google Apps Script。", },
    { name: "deploy", version: "Git·Netlify", desc: "版本控制與部署：Git（commit／push／branch／clone）、GitHub、Netlify。", },
    { name: "tools", version: "Notion·Sheets", desc: "協作與文件工具：Notion、Google Sheets。", },
    { name: "gtep", version: "初級·中級", desc: "語言能力：全民英檢初級通過、全民英檢中級（初試合格）。", },
  ],

  // ── 學習歷程（releases／milestones）───────────────
  releases: [
    { version: "2022", title: "學測考完，準備進入靜宜大學法律系", desc: "" },
    { version: "2022", title: "車禍受傷，中斷原有升學計畫", desc: "" },
    { version: "2022–2024", title: "到各間醫院治療、復健", desc: "" },
    { version: "2024", title: "進入嘉南藥理大學資管系進修部", desc: "" },
    { version: "2025", title: "在學校學到如何寫出前端網頁", desc: "" },
    { version: "2025–2026", title: "學習運用 AI 技術開發網站與應用", desc: "" },
  ],

  // ── 證照證書 ─────────────────────────────────────
  certificates: [
    { id: "cert-01", name: "初級管理師證書", issuer: "American ESG Sustainable Development Association", date: "2025 年 2 月至 2025 年 6 月", image: "assets/images/certs/cert-01.jpg" },
    { id: "cert-02", name: "經濟部產業 AI 人才培訓完訓證書", issuer: "台北市電腦公會", date: "115 年 6 月 16 日", image: "assets/images/certs/cert-02.jpg" },
    { id: "cert-03", name: "claude101 完訓證書", issuer: "Anthropic", date: "115 年 8 月 2 日", image: "assets/images/certs/cert-03.png" },
  ],

  // ── 關於我（README）──────────────────────────────
  about: {
    photo: "assets/images/profile-photo.jpg",
    photoAlt: "李瑞勳的個人照片",
    story: [
      {
        h: "那一場意外",
        p: "高中畢業前我發生了一場車禍。當時把機車停靠在路邊，只想拿下安全帽擤個鼻涕，卻在那瞬間被車撞上。這場意外中斷了原本的升學計畫：車禍前我考上靜宜大學法律系，但因為早晨需要復健，只好改讀進修部；進修部的科系不多，我選擇了較有興趣的資管系。",
      },
      {
        h: "重新出發",
        p: "即使起步比別人晚，我仍選擇持續進入大學學習，一步一步把落後的進度補回來。也因為起步的時間點，讓我剛好跟上這個時代最重要的新技術——「AI」，它能大幅縮短學習時間、減少重複性的工作。",
      },
      {
        h: "用所學做出成果",
        p: "透過學校課堂的知識與技術，加上運用 AI 協作開發（Vibe Coding），我陸續完成了多個實作專案：從前端生日祝福網頁，到串接 Google Sheets、Notion、Firebase 等後端服務的系統——具備會員與訂單功能的線上商城、提供治療師管理病人資料的衛教卡系統。這些作品都收錄在下方。",
      },
      {
        h: "持續前進",
        p: "這段經歷讓我更珍惜能夠坐在教室裡學習的每一天。我相信只要持續累積，即使起步比別人晚，也一定能走出屬於自己的路。",
      },
    ],
  },
};

// 讓 <script> 以外的渲染函式也讀得到
window.PORTFOLIO = PORTFOLIO;