## [Task 1] Dependency Strip

- Deleted: `assets/plugins/` (all Bootstrap, Font Awesome, jQuery), `assets/less/` (all theme LESS source files)
- Deleted images: `cover.jpg`, `aws-d-a.png`, `google-ws.png`, `wordcloud.png`
- Removed from `index.html`:
  - IE conditional comments (lines 2–6)
  - IE shim scripts (`html5shiv`, `respond.min.js`)
  - Font Awesome CSS link (line 22)
  - Bootstrap CSS link (line 528 — loaded at bottom of body, not head)
  - jQuery script tag (line 530)
  - Bootstrap JS script tag (line 531)
  - Google Fonts Roboto link (line 534)
- Added GSAP 3.12.5 + ScrollTrigger CDN script tags before `</body>`
- Kept: `assets/css/style.css`, `assets/js/main.js`, `profile.jpg`, `aws-sa-a.png`, `ckad.png`
- CSS link already in `<head>` (line 30), no move needed
- All 4 QA scenarios passed ✓

## [Task 2] HTML Rewrite
- New structure: hero + 7 semantic sections + footer
- Section IDs: hero, profile, experience, skills, projects, education, interests, footer
- Roles: 7 roles, 2016–present only (pre-2016 cut: Bluecube ×2, Volkswagen, Kantar TNS ×2)
- Contact links: duplicated in hero nav and footer nav
- Inline SVG icons used for email, LinkedIn, GitHub (no icon library)
- Skills: 22 skill-tags in .skills-grid div
- OSS: 2 projects only (event-hub-sidecar, api-gateway)
- Certs: 2 badges (aws-sa-a.png, ckad.png)
- Class naming: .hero, .section, .section-light, .section-dark, .section-inner, .role, .role-title, .role-meta, .role-details, .skill-tag, .skills-grid, .project, .cert-badge, .footer

## [Task 5] Content Verification

- Typo check: ✓ "architecutre" NOT FOUND. Correct spelling "Event-based architecture" present on line 164.
- Roles check: ✓ All 7 roles present, correct titles, companies, dates, timeframes (2016–present).
  - Head of Engineering, Executive Director (CMC Markets, 2025–present)
  - Head of Engineering - Wealth (CMC Markets, 2024–2025)
  - Interim Head of CMC Invest (CMC Invest, 2023–2024)
  - Head of Technology (CMC Invest, 2020–2023)
  - Technical Principal (Contino London, 2019–2020)
  - Principal Consultant (Contino Melbourne, 2018–2019)
  - Tech Lead (Kantar, 2016–2018)
- Spearheading check: ✓ NOT FOUND anywhere in file.
- Codewars badge: ✓ URL correct: `https://www.codewars.com/users/daviddykeuk/badges/micro` with height="20" width="120".
- Skills count: ✓ Exactly 22 .skill-tag spans (lines 153–174).
- Placeholder/lorem ipsum: ✓ None found. All content is authentic.
- Fixes applied: None needed. File is clean.

## F3 Visual QA Across Viewports (2026-03-15)

### Playwright Setup
- Chromium at `~/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome`
- Playwright module at `~/.npm/_npx/9833c18b2d85bc59/node_modules/playwright`
- Node at `~/.nvm/versions/node/v22.18.0/bin/node`
- Run headless with `--no-sandbox --disable-setuid-sandbox`

### QA Results
- All 3 viewports (1440×900, 768×1024, 375×812) render correctly
- No horizontal overflow at any viewport
- Hero: dark bg rgb(10,10,10), "David Dyke" visible, profile photo present
- Section alternation: profile/experience/education = white; hero/skills/projects/interests = dark
- 7 sections all render with substantial height
- GSAP + ScrollTrigger both loaded from CDN successfully
- Animations: 6 .section-inner elements start opacity:0, trigger on scroll — WORKING
- Reduced-motion: 0 elements hidden (CSS media query properly bypasses GSAP opacity:0)
- 2 cert badges in #education, 7 contact/nav links in hero area, 3 footer links
- mailto: click triggers no crash
