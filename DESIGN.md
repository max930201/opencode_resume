---
name: "@your-name · Frontend Engineer Portfolio"
description: 人即套件 — npm registry 世界的前端工程師作品集
colors:
  primary: "#c12127"
  primary-deep: "#a81d22"
  primary-ink: "#a11f24"
  birthday-coral: "#d4574a"
  birthday-coral-bg: "#fbe9e4"
  birthday-coral-ink: "#a93a30"
  functional-teal: "#0c726a"
  functional-teal-bg: "#e2f1ee"
  functional-teal-ink: "#0b5d57"
  neutral-paper: "#fbfaf6"
  neutral-card: "#ffffff"
  neutral-ink: "#161a20"
  neutral-ink-2: "#454e5c"
  neutral-ink-3: "#5b6270"
  neutral-line: "#e7e3d8"
  neutral-line-2: "#efece2"
  neutral-wash: "#f3f0e6"
  chip-stack-bg: "#f0ede3"
  terminal-bg: "#14171c"
  terminal-text: "#cef0d2"
typography:
  display:
    fontFamily: "Sora, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(2.4rem, 6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Sora, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Sora, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "16.5px"
    fontWeight: 600
  body:
    fontFamily: "Sora, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "16px"
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, Noto Sans TC, PingFang TC, Microsoft JhengHei, monospace"
    fontSize: "12px"
    fontWeight: 500
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    typography: "{typography.title}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
  button-pill:
    backgroundColor: "{colors.neutral-paper}"
    textColor: "{colors.neutral-ink}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  chip-rose:
    backgroundColor: "{colors.birthday-coral-bg}"
    textColor: "{colors.birthday-coral-ink}"
    rounded: "{rounded.sm}"
  chip-teal:
    backgroundColor: "{colors.functional-teal-bg}"
    textColor: "{colors.functional-teal-ink}"
    rounded: "{rounded.sm}"
  chip-stack:
    backgroundColor: "{colors.chip-stack-bg}"
    textColor: "{colors.neutral-ink-2}"
    rounded: "{rounded.sm}"
  chip-db:
    backgroundColor: "{colors.neutral-ink}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
  install-line:
    backgroundColor: "{colors.terminal-bg}"
    textColor: "{colors.terminal-text}"
    rounded: "{rounded.lg}"
  badge-v:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
---

# Design System: @your-name · Frontend Engineer Portfolio

## Overview

**Creative North Star: "The Installable Self"**

The portfolio presents its owner as an installable npm package: the first viewport is a package card (`@你的名字/frontend-engineer`), complete with version badge, license, keywords, and an install command that types itself in like a real terminal. The world is the npm registry felt as a material: warm paper ground, hairline rules, monospaced metadata, and one unmistakable signal red.

Density is registry-calm, not decorative. Big ink type carries identity, mono carries data (versions, commands, slugs), and the two category families — coral for 生日網頁, teal for 功能性網頁 — are the only other saturated voices, held to small chips so the red stays the star. The page slows down in the README card and accelerates at the terminal line. It is a portfolio for the person who ships: every screen is structured the way the registry structures a package page, because the interviewer spends their life there.

**Key Characteristics:**
- Warm paper ground with ink text and one npm-red accent carried by badges, links, and the primary button
- Monospace metadata layer (JetBrains Mono) for versions, commands, slugs, and panel labels
- Institutional spacing: 96px section rhythm, 1px hairlines, generous air above every heading
- Two category voices (coral / teal) restricted to chips and small dots
- One authored motion moment: the install command types itself in; everything else is a quiet rise-on-scroll

## Colors

A registry paper surface with an ink text layer and a single committed red accent; coral and teal classify the two project families without competing with the accent.

### Primary
- **Registry Red** (#c12127): the accent that carries the brand. Version badge fill, primary button, link text at the darker #a11f24 (> 4.5:1 on paper), hover state #a81d22, brand package icon, timeline dots, checklist checks.
- **Red Ink** (#a11f24): link and emphasis text variant of the accent; used wherever red text must read at 14px and under.

### Secondary
- **Birthday Coral** (#d4574a, chip bg #fbe9e4, chip ink #a93a30): 生日網頁 category. Appears only as a chip with a coral dot and inside the section's card tags.
- **Functional Teal** (#0c726a, chip bg #e2f1ee, chip ink #0b5d57): 功能性網頁 category. Same chip discipline as coral; the dark "含資料庫" chip (#161a20 fill) marks backend projects.

### Neutral
- **Registry Paper** (#fbfaf6): page ground.
- **Card White** (#ffffff): cards, meta panels, dependency table.
- **Ink** (#161a20): primary text; also the terminal strip background and dark contact section.
- **Ink Mid** (#454e5c): secondary text (descriptions, leads).
- **Ink Muted** (#5b6270): metadata, mono slugs, panel labels — ≥ 4.5:1 on both paper and white.
- **Hairline** (#e7e3d8): 1px borders on cards and tables.
- **Inner Rule** (#efece2): dividers inside cards and meta rows.
- **Wash** (#f3f0e6): the skills section ground.
- **Stack Chip** (#f0ede3): neutral tech-stack chips.
- **Terminal** (#14171c) with echo text (#cef0d2): the install command line.

### Named Rules
**The Rarity Rule.** Coral and teal never leave their chips. The red is the only voice allowed to be large, and large red is reserved for the package name's scope, version badges, and the primary button.

**The Muted-Not-Gray Rule.** Secondary and muted text are tinted with the paper hue or a blue-slate; never flat gray, never pure #999.

## Typography

**Display Font:** Sora (fallback: Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif) — geometric, engineered, confident; carries names, headings, and the CJK body where Chinese characters fall back to the system stack.
**Body Font:** Sora with the CJK stack; 16px / 1.7, max measure 56–62ch on lead paragraphs.
**Label/Mono Font:** JetBrains Mono (fallback CJK) — versions, commands, package slugs, breadcrumbs, table headers, release tags. Mono is reserved for data and measurement, never for decoration.

**Character:** A registry voice: big grotesk statements and pin-precise mono annotations sitting on the same line of thought. The pair reads as "engineer, with taste" — the current version, the exact command, the tidy slug all belong to the mono layer.

### Hierarchy
- **Display** (Sora 700, clamp(2.4rem, 6vw, 3.6rem), 1.08, -0.035em letter-spacing): the package name in the hero card. One use per page.
- **Headline** (Sora 700, clamp(1.7rem, 3vw, 2.2rem), 1.2, -0.02em): section titles; the English `sec-en` tag rides inside the heading as a small mono annotation, never as a separate eyebrow.
- **Title** (Sora 600, 16.5px): card titles, release titles, control labels on buttons.
- **Body** (Sora 400, 16px, 1.7): section leads (max 56ch) and card descriptions (14.5px at 1.6).
- **Label** (JetBrains Mono 500, 11.5–14px): breadcrumbs, version badges, table headers (uppercase, letter-spacing .08em), meta table labels, panel field labels.

### Named Rules
**The Mono-Data Rule.** JetBrains Mono appears only where a number, command, slug, or field name is being stated. If a label carries no data, it does not earn the mono.

## Layout

One column rhythm on a 1120px container (24px gutters, 16px below 720px). The hero is a two-column grid (1.25fr / 0.9fr) that stacks to one column at 960px: the package card on the left, the meta sidebar on the right. Project grids are `repeat(auto-fill, minmax(280px, 1fr))`, one column below 520px, two columns below 960px, three columns at desktop.

Vertical rhythm is institutional: 96px section padding (72px below 720px), more space above every heading than below it, cards separated by 18px, meta rows divided by 1px inner rules. Section backgrounds alternate paper and wash to cue the change of register (registry → dependencies). The skills table is a single white panel with hairline rows (230px name / 130px version / flexible description; stacked to one column below 720px). The about area is a README card beside a releases timeline; the contact section inverts to ink.

Responsive rules: breakpoints at 960, 720, 520. At 720px the nav wraps to two rows instead of hiding; the dependency table stacks rows; the about columns collapse to one at 960px.

## Elevation & Depth

A flat registry coat with restrained, offset-and-blurred elevation as the only depth. No tonal gradients, no hard offset shadows.

### Shadow Vocabulary
- **Resting** (`0 1px 2px rgba(22,26,32,.05), 0 6px 18px rgba(22,26,32,.05)`): cards, meta panels, the dependency table, the README card.
- **Raised** (`0 2px 4px rgba(22,26,32,.06), 0 14px 32px rgba(22,26,32,.10)`): card hover — paired with a –2px rise and a red-tinted border.

### Named Rules
**The Flat-by-Default Rule.** Surfaces are flat at rest. Depth appears only as a response to hover or a state change; elevation is evidence the interface is alive, never ambient decoration.

## Shapes

Gently rounded rectangles throughout, tuned by density: 10px on cards, meta panels, and the terminal line; 8–9px on buttons; 6px on chips and the smaller mono version tokens; full pill only for version badges and the pill nav button. Everything else is 1px hairline geometry. Project cards carry no internal card nesting — the expandable panel is one card changing state, not cards inside cards.

## Components

### Buttons
- **Shape:** rounded rectangle (8–9px), inline-flex, 12px × 20px padding; the pill variant rounds fully.
- **Primary:** Registry Red (#c12127) fill, white text, darkens to #a81d22 on hover; the "瀏覽 23 個作品" hero CTA carries a down-chevron that nudges downward on hover.
- **Light (on ink):** white fill, ink text, paper-tinted hover.
- **Ghost (on ink):** transparent, 1px white border at 30%, 65% on hover.
- **Pill (nav):** transparent paper, 1px hairline, ink border on hover.
- **Focus:** outline: 2px solid red with a 2px offset; :active compresses 1px down.

### The Install Line
- **The signature control.** A full-width terminal strip: near-black (#14171c), pale-green mono echo, a blinking block caret while typing, and a copy affordance that flips to "已複製" for 1.6s after copying. Clicking anywhere copies the command.

### Chips
- **Category chips:** coral/teal tinted backgrounds with a colored dot prefix and their darker ink text — the dot and the tint pair so the category reads at a glance.
- **Stack chips:** neutral #f0ede3 with mid-ink text, no dot.
- **Database chip:** solid ink (#161a20) fill, white mono text — visually heavier, signalling the differentiator.

### Cards / Containers
- **Corner Style:** 10px radius.
- **Background:** card white. **Border:** 1px hairline. **Internal padding:** 20px.
- **Shadow Strategy:** resting elevation; raised on hover with the –2px rise and red-fading border.
- **Structure:** mono slug + demo link top row / title / one-line description (flexible, pushes the footer down) / tag row / readme toggle + expandable panel listing 用途・技術・連結.

### Navigation
- Sticky hairline toolbar on the paper ground; brand = package icon in red + mono scope name. Links are plain ink-mid text with a wash hover chip; the contact CTA is the pill button. Below 720px the toolbar wraps to a second scrolling link row rather than hiding the category anchors.

### Data Tables
- The dependencies table is a card white panel with hairline row dividers: mono name in red-ink, mono version in a wash token, description in mid-ink. It reads like the registry's own dependency list.

## Do's and Don'ts

### Do:
- **Do** keep category color to chips, the red to identity (name scope, badges, buttons, timeline dots, checklist checks).
- **Do** put every version, command, slug, and header in JetBrains Mono, and every sentence in the grotesk/CJK stack.
- **Do** keep lead paragraphs within 56–62 characters of measure.
- **Do** give more space above a heading than below it, and keep sections at the 96px rhythm.
- **Do** state every real action with the world's own grammar (install, copy, readme, demo).

### Don't:
- **Don't** use hard offset shadows, gradient text, glass, emoji glyphs, or the OS display face as the page's voice.
- **Don't** place a kicker or eyebrow above a heading; the heading carries itself, and section English tags live inside the heading.
- **Don't** let coral or teal appear outside chips and category markers.
- **Don't** invent metrics, customer counts, or deploy claims: any unready product fact stays a clearly marked placeholder (`demo 待補`, `mailto: …`), never a fabricated statement.
- **Don't** nest cards; a card changes state (expanded), it never contains another card.