# @max930201/portfolio

把「人」當作 npm 套件來介紹的作品集：`npm install @max930201/portfolio`。

> 跨越意外，持續前進的資管系學生。前端開發 — 每件作品都是真實上線、有真網址的成品。

[Live Demo](https://app.netlify.com/drop) · 李瑞勳 · 嘉南藥理大學 資訊管理學系（進修部）

---

## 這個專案是什麼

一份純靜態的個人履歷網站，主題是「人即套件」：把整頁首屏設計成一張 npm registry 套件卡，用網頁開發的語言介紹一位前端學習者。

全站不依賴任何框架或建置工具，開啟就能跑，也方便直接拖曳到 Netlify Drop 部署。

## 內容結構

- **生日網頁 ×18**：為家人、朋友與治療師老師製作的客製化生日祝福網頁，每頁都是獨立部署的真實網址。
- **功能性系統 ×5**：真實上線的系統，多數串接 Firebase / Google Sheets 後端：
  - Ya3s 線上商城系統（前後台分離、會員訂單、Firestore）
  - 治療師病人衛教卡系統（驗證碼登入、每日備份至 Notion）
  - 工廠薪水計算系統（簽到簽退 → Google Sheets）
  - 洗衣店代收款記錄系統（雙門市即時記錄）
  - 家庭聚餐紀錄網頁
- **證照 ×3**：ESG 初級管理師、經濟部產業 AI 人才培訓完訓、claude101 完訓。

## 技術棧

| 領域 | 工具 |
| --- | --- |
| 前端 | HTML · CSS · JavaScript |
| 後端／資料庫 | Firebase（Authentication、Firestore）· Google Apps Script · Google Sheets |
| 部署 | Git · GitHub · Netlify |

## 開發與維護

```
opencode/
├── index.html     # 頁面結構
├── styles.css     # 設計系統與樣式
├── app.js         # 渲染與互動
├── data.js        # 所有內容資料（改這裡就好）
└── assets/images/ # 大頭照與證照圖片
```

想更新任何內容（專案、連結、技能、證照），只要編輯 `data.js`，不需要動其他檔案。

## 部署

1. 把整個資料夾推到 GitHub（例如 repo：`max930201/portfolio`）。
2. 在 Netlify 選擇 **Deploy manually**，或直接拖曳資料夾到 [app.netlify.com/drop](https://app.netlify.com/drop)。
3. 靜態網站無需建置指令，上傳後即可生效。

## 聯絡

- 信箱：max99296@gmail.com
- GitHub：[@max930201](https://github.com/max930201)

---

© 2026 李瑞勳
