# Visual Refactor: Apple-Style CV Redesign

## TL;DR

> **Quick Summary**: Transform David Dyke's CV website from a dated Bootstrap 3 sidebar template into a modern, Apple product page-inspired single-column design with GSAP ScrollTrigger animations, dark/light alternating sections, fluid typography and a premium aesthetic.
> 
> **Deliverables**:
> - Completely rewritten `index.html` with semantic full-width sections
> - New `assets/css/style.css` built from scratch (CSS Grid, custom properties, clamp())
> - New `assets/js/main.js` with GSAP ScrollTrigger scroll animations
> - Cleaned asset directory (removed unused images, plugins, LESS files)
> - Updated `README.md` reflecting the new site
> - Fully responsive, mobile-first, `prefers-reduced-motion` compliant
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES — 3 waves + final verification
> **Critical Path**: Task 1 (strip old) → Task 2 (HTML) → Tasks 3+4 (CSS+JS in parallel) → Task 5 (content) → Task 6 (responsive) → Task 7 (cleanup) → Final QA

---

## Context

### Original Request
User wants to visually refactor their personal CV site (daviddykeuk.github.io) from a dated Bootstrap 3 sidebar template to a modern Apple product page-style design with parallax scrolling, scroll-driven animations and a premium aesthetic. Content was already updated in Phase 1 (commit `dbaa1a6`). This is Phase 2: the visual/structural overhaul.

### Interview Summary
**Key Discussions**:
- **Layout**: Full-width Apple-style, single-column, no sidebar — confirmed
- **Colour scheme**: Dark hero (#0a0a0a/near-black) + alternating white/off-white and dark sections — confirmed
- **Animation level**: Moderate — elegant fade-in reveals, subtle parallax text, staggered elements. Not full Apple intensity — confirmed
- **Technology**: GSAP ScrollTrigger via CDN. Drop Bootstrap 3, jQuery, Font Awesome entirely. No build tools — confirmed
- **Content trimming**: Cut 5 pre-2016 roles. Keep 7 roles (CMC Markets ×4, Contino ×2, Kantar Tech Lead ×1). Condense OSS to 1–2 highlights. Keep Codewars badge, certifications, interests — confirmed
- **Profile photo**: User will provide high-res replacement (current 150×147px too small for hero) — confirmed
- **Contact info**: Both hero area and footer — confirmed
- **Section order**: Dark Hero → Light Experience → Dark Skills → Light Education/Certs → Dark Interests → Light Footer — confirmed

**Research Findings**:
- Current site uses Bootstrap 3 "Orbit" template (2016), 537-line HTML, 319-line CSS, 25-line jQuery JS
- All dependencies local except Google Fonts — Bootstrap 3 CSS/JS loaded at bottom of body (unusual)
- LESS directory exists but no build process — leftover from template development
- HTML has mismatched heading tags (h2/h3 mismatch on lines 44, 69, 86)
- Profile photo only 150×147px — too small for retina hero
- GSAP available via CDN: gsap.min.js + ScrollTrigger.min.js (~50KB total)
- Apple design patterns: system font stack, clamp() fluid typography, generous whitespace, one idea per viewport

### Metis Review
**Identified Gaps** (all resolved):
- Profile photo resolution: User will provide high-res replacement
- Kantar Tech Lead role: Keep (shows progression)
- Open source section: Condense to 1–2 highlights
- Codewars badge: Keep (hands-on leader differentiator)
- Contact info placement: Both hero and footer
- Section ordering: Confirmed proposed dark/light alternation

---

## Work Objectives

### Core Objective
Transform the CV site from a Bootstrap 3 sidebar layout to a modern, Apple-inspired full-width design with scroll-driven animations, delivering a premium executive aesthetic that matches David's Head of Engineering positioning.

### Concrete Deliverables
- `index.html` — fully rewritten with semantic sections, no Bootstrap classes, GSAP script tags
- `assets/css/style.css` — new CSS from scratch with custom properties, CSS Grid, fluid typography
- `assets/js/main.js` — GSAP ScrollTrigger animations (fade-ins, parallax, stagger)
- `README.md` — updated to reflect the new site (replace old template README)
- Cleaned `assets/` directory — removed unused plugins, images, LESS files

### Definition of Done
- [ ] Site renders correctly at desktop (1440px), tablet (768px) and mobile (375px)
- [ ] All GSAP animations fire on scroll (verified via Playwright)
- [ ] `prefers-reduced-motion` disables all animations
- [ ] No Bootstrap, jQuery or Font Awesome references remain in any file
- [ ] All 7 career roles display correctly
- [ ] Contact links work in both hero and footer
- [ ] Certification badges display correctly
- [ ] Codewars badge displays correctly
- [ ] Page loads in under 3 seconds on throttled 3G (Lighthouse)
- [ ] No console errors
- [ ] HTML validates (no mismatched tags)

### Must Have
- Full-width single-column layout (no sidebar)
- Dark hero section with name, tagline, contact links, profile photo placeholder
- Alternating dark/light sections as you scroll
- GSAP ScrollTrigger fade-in reveal animations on each section
- System font stack (-apple-system, BlinkMacSystemFont, etc.)
- Fluid typography using clamp()
- Mobile-first responsive design
- `prefers-reduced-motion` media query support
- Contact info in both hero and footer
- 7 career roles (CMC ×4, Contino ×2, Kantar ×1)
- 1–2 condensed open source project highlights
- Certifications section with badge images
- Codewars badge
- Education section
- Interests section

### Must NOT Have (Guardrails)
- The word "spearheading" — user explicitly rejected it
- Bootstrap classes or framework remnants (no `col-xs-*`, no `container`, no `row` from Bootstrap)
- jQuery or jQuery plugins
- Font Awesome icons or CSS
- IE conditional comments or IE shims
- Cover image (cover.jpg removed)
- Build tools, bundlers, package.json
- Dark mode toggle (fixed colour scheme)
- Contact form or any dynamic server-side features
- Additional pages (remains single-page)
- Excessive comments or JSDoc (clean, minimal code)
- Over-abstracted CSS (no BEM nesting deeper than 2 levels)
- Roles before 2016 (Kantar TNS manager/architect, Bluecube, Volkswagen)

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (no test framework, no package.json)
- **Automated tests**: NO — this is a visual refactor of a static HTML page
- **Framework**: None

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Frontend/UI**: Use Playwright (playwright skill) — Navigate, interact, assert DOM, screenshot
- **File verification**: Use Bash/Grep — Check file contents, validate no forbidden patterns
- **Responsive**: Use Playwright viewport resizing — Screenshot at 1440px, 768px, 375px

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation — sequential dependency):
├── Task 1: Strip old dependencies and clean assets [quick]
└── Task 2: Rewrite HTML structure (depends: 1) [unspecified-high]

Wave 2 (Styling + Animation — PARALLEL after HTML exists):
├── Task 3: Build new CSS from scratch (depends: 2) [visual-engineering]
├── Task 4: Implement GSAP ScrollTrigger animations (depends: 2) [visual-engineering]
└── Task 5: Trim content and update sections (depends: 2) [quick]

Wave 3 (Polish — after CSS + JS exist):
├── Task 6: Responsive design and mobile optimisation (depends: 3, 4) [visual-engineering]
├── Task 7: Final cleanup — unused files, README, meta tags (depends: 5) [quick]
└── Task 8: Profile photo placeholder and image optimisation (depends: 3) [quick]

Wave FINAL (Verification — after ALL tasks):
├── F1: Plan compliance audit (oracle)
├── F2: Code quality review (unspecified-high)
├── F3: Visual QA across viewports (unspecified-high + playwright)
└── F4: Scope fidelity check (deep)

Critical Path: Task 1 → Task 2 → Task 3 → Task 6 → F1-F4
Parallel Speedup: ~40% faster than sequential
Max Concurrent: 3 (Wave 2)
```

### Dependency Matrix

| Task | Blocked By | Blocks |
|------|-----------|--------|
| 1 | — | 2 |
| 2 | 1 | 3, 4, 5 |
| 3 | 2 | 6, 8 |
| 4 | 2 | 6 |
| 5 | 2 | 7 |
| 6 | 3, 4 | F1-F4 |
| 7 | 5 | F1-F4 |
| 8 | 3 | F1-F4 |
| F1-F4 | 6, 7, 8 | — |

### Agent Dispatch Summary

- **Wave 1**: 2 tasks — T1 → `quick`, T2 → `unspecified-high`
- **Wave 2**: 3 tasks — T3 → `visual-engineering`, T4 → `visual-engineering`, T5 → `quick`
- **Wave 3**: 3 tasks — T6 → `visual-engineering`, T7 → `quick`, T8 → `quick`
- **FINAL**: 4 tasks — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Strip old dependencies and clean asset structure

  **What to do**:
  - Remove all Bootstrap CSS/JS files from `assets/plugins/bootstrap/`
  - Remove jQuery files from `assets/plugins/` (`jquery.min.js`, `jquery-1.11.3.min.js`)
  - Remove Font Awesome directory `assets/plugins/font-awesome/`
  - Remove the entire `assets/plugins/` directory (nothing in it will be reused)
  - Remove the entire `assets/less/` directory (leftover from template, no build process)
  - Remove `assets/images/cover.jpg` (cover image explicitly excluded)
  - Remove unused images: `assets/images/aws-d-a.png`, `assets/images/google-ws.png`, `assets/images/wordcloud.png`
  - Keep: `assets/images/profile.jpg`, `assets/images/aws-sa-a.png`, `assets/images/ckad.png`
  - Keep: `assets/css/` directory (will be rewritten), `assets/js/` directory (will be rewritten), `assets/images/` directory (with kept files)
  - In `index.html`: Remove IE conditional comments (lines 2–6), remove IE shim scripts (lines 26–29), remove Font Awesome CSS link (line 22), remove Bootstrap CSS link (line 528), remove jQuery script tag (line 530), remove Bootstrap JS script tag (line 531), remove Google Fonts Roboto link (line 534)
  - In `index.html`: Add GSAP CDN script tags before closing `</body>`: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js` and `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`
  - In `index.html`: Keep the link to `assets/css/style.css` and `assets/js/main.js` (but move CSS to `<head>` if not already there)

  **Must NOT do**:
  - Do NOT rewrite the HTML structure yet — that is Task 2
  - Do NOT delete `profile.jpg`, `aws-sa-a.png`, or `ckad.png`
  - Do NOT add new CSS or JS content yet

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: File deletion and simple find-replace operations in a single HTML file. No complex logic.
  - **Skills**: []
    - No specialised skills needed for file deletion and HTML editing.
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed — no browser verification at this stage
    - `git-master`: Not committing in this task

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 (sequential — must complete before Task 2)
  - **Blocks**: Task 2
  - **Blocked By**: None (can start immediately)

  **References**:

  **Pattern References**:
  - `index.html:1-31` — Head section containing IE conditionals (lines 2-6), IE shims (lines 26-29), Font Awesome link (line 22), theme CSS link (line 30) — these need editing
  - `index.html:528-534` — Bottom-of-body section with Bootstrap CSS (528), jQuery (530), Bootstrap JS (531), Google Fonts (534) — all to be removed
  - `index.html:36-37` — Cover image reference `<img class="cover" src="assets/images/cover.jpg">` — parent div to be cleaned up

  **File References** (files/directories to delete):
  - `assets/plugins/` — entire directory (contains bootstrap/, font-awesome/, jquery files)
  - `assets/less/` — entire directory (unused LESS source files)
  - `assets/images/cover.jpg` — cover image (excluded from design)
  - `assets/images/aws-d-a.png` — unused cert badge (commented out in HTML)
  - `assets/images/google-ws.png` — unused cert badge (commented out in HTML)
  - `assets/images/wordcloud.png` — unused image (not referenced in HTML)

  **External References**:
  - GSAP CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`
  - GSAP ScrollTrigger CDN: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js`

  **WHY Each Reference Matters**:
  - The head/body script references show exactly which lines to edit/remove in index.html
  - The file references are the exact paths to delete — don't guess, use these paths
  - GSAP CDN URLs are the exact URLs to add as script tags

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: All old dependencies removed from filesystem
    Tool: Bash
    Preconditions: Repository at commit dbaa1a6 (clean working tree)
    Steps:
      1. Run: ls assets/plugins/ 2>/dev/null && echo "FAIL: plugins dir exists" || echo "PASS: plugins dir removed"
      2. Run: ls assets/less/ 2>/dev/null && echo "FAIL: less dir exists" || echo "PASS: less dir removed"
      3. Run: ls assets/images/cover.jpg 2>/dev/null && echo "FAIL: cover.jpg exists" || echo "PASS: cover.jpg removed"
      4. Run: ls assets/images/aws-d-a.png 2>/dev/null && echo "FAIL" || echo "PASS"
      5. Run: ls assets/images/google-ws.png 2>/dev/null && echo "FAIL" || echo "PASS"
      6. Run: ls assets/images/wordcloud.png 2>/dev/null && echo "FAIL" || echo "PASS"
    Expected Result: All 6 checks output "PASS"
    Failure Indicators: Any check outputs "FAIL"
    Evidence: .sisyphus/evidence/task-1-filesystem-cleanup.txt

  Scenario: No Bootstrap/jQuery/FA references remain in HTML
    Tool: Bash (grep)
    Preconditions: index.html has been edited
    Steps:
      1. Run: grep -i "bootstrap" index.html && echo "FAIL" || echo "PASS: no bootstrap"
      2. Run: grep -i "jquery" index.html && echo "FAIL" || echo "PASS: no jquery"
      3. Run: grep -i "font-awesome" index.html && echo "FAIL" || echo "PASS: no font-awesome"
      4. Run: grep -i "IE 8\|IE 9\|html5shiv\|respond.min" index.html && echo "FAIL" || echo "PASS: no IE shims"
      5. Run: grep -i "roboto" index.html && echo "FAIL" || echo "PASS: no Roboto"
    Expected Result: All 5 checks output "PASS"
    Failure Indicators: Any grep matches found
    Evidence: .sisyphus/evidence/task-1-html-cleanup.txt

  Scenario: GSAP CDN scripts are present
    Tool: Bash (grep)
    Steps:
      1. Run: grep "gsap.min.js" index.html
      2. Run: grep "ScrollTrigger.min.js" index.html
    Expected Result: Both grep commands return matches showing CDN script tags
    Failure Indicators: Either grep returns no match
    Evidence: .sisyphus/evidence/task-1-gsap-added.txt

  Scenario: Kept files still exist
    Tool: Bash
    Steps:
      1. Run: ls assets/images/profile.jpg && echo "PASS" || echo "FAIL"
      2. Run: ls assets/images/aws-sa-a.png && echo "PASS" || echo "FAIL"
      3. Run: ls assets/images/ckad.png && echo "PASS" || echo "FAIL"
      4. Run: ls assets/css/style.css && echo "PASS" || echo "FAIL"
      5. Run: ls assets/js/main.js && echo "PASS" || echo "FAIL"
    Expected Result: All 5 checks output "PASS"
    Failure Indicators: Any file missing
    Evidence: .sisyphus/evidence/task-1-kept-files.txt
  ```

  **Commit**: YES
  - Message: `Stripped Bootstrap and old dependencies`
  - Files: `index.html`, deleted files/directories
  - Pre-commit: grep checks for no Bootstrap/jQuery/FA references

- [x] 2. Rewrite HTML structure — full-width semantic sections

  **What to do**:
  - Completely rewrite the `<body>` content of `index.html` to a full-width, single-column layout
  - Replace the sidebar+main wrapper structure with semantic `<section>` elements
  - Structure the page as follows:

  **HTML Section Structure:**
  ```
  <body>
    <!-- Hero Section (dark) -->
    <section class="hero" id="hero">
      <div class="hero-content">
        <img class="hero-photo" src="assets/images/profile.jpg" alt="David Dyke" />
        <h1>David Dyke</h1>
        <p class="hero-tagline">Engineering leader, organisational psychologist and coach</p>
        <a class="codewars-badge" href="..."><img ... /></a>
        <nav class="hero-contact">
          <!-- Email, LinkedIn, GitHub links with inline SVG icons -->
        </nav>
      </div>
    </section>

    <!-- Career Profile (light) -->
    <section class="section section-light" id="profile">
      <div class="section-inner">
        <h2>Career Profile</h2>
        <!-- Existing career profile paragraphs (keep all 4) -->
      </div>
    </section>

    <!-- Experience (light, continues from profile) -->
    <section class="section section-light" id="experience">
      <div class="section-inner">
        <h2>Experience</h2>
        <!-- 7 roles: each as an <article class="role"> -->
        <!-- Role structure: h3.role-title, span.role-meta (dates + company), div.role-details -->
      </div>
    </section>

    <!-- Skills (dark) -->
    <section class="section section-dark" id="skills">
      <div class="section-inner">
        <h2>Skills</h2>
        <!-- Skills as a CSS Grid of items (no Bootstrap grid classes) -->
      </div>
    </section>

    <!-- Open Source (transition, part of skills or standalone) -->
    <section class="section section-dark" id="projects">
      <div class="section-inner">
        <h2>Open Source</h2>
        <!-- 1-2 condensed project highlights -->
      </div>
    </section>

    <!-- Education & Certifications (light) -->
    <section class="section section-light" id="education">
      <div class="section-inner">
        <h2>Education</h2>
        <!-- MSc + BSc -->
        <h2>Certifications</h2>
        <!-- AWS SA + CKAD badges -->
      </div>
    </section>

    <!-- Interests (dark) -->
    <section class="section section-dark" id="interests">
      <div class="section-inner">
        <h2>Interests</h2>
        <!-- Interest items -->
      </div>
    </section>

    <!-- Footer (light) -->
    <footer class="footer" id="footer">
      <div class="footer-inner">
        <!-- Contact links repeated: Email, LinkedIn, GitHub -->
        <p class="footer-credit"><!-- Minimal credit line --></p>
      </div>
    </footer>

    <!-- GSAP scripts (already added in Task 1) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    <script src="assets/js/main.js"></script>
  </body>
  ```

  - Use inline SVG icons for email, LinkedIn, GitHub (simple 24×24 paths — no icon library)
  - Fix mismatched heading tags (h2/h3 mismatches on current lines 44, 69, 86)
  - Keep `<head>` meta tags, OG tags, favicon link, and CSS link from Task 1's output
  - Ensure all text content is preserved exactly (copy from current index.html — do NOT rewrite any body copy)
  - Do NOT use the word "spearheading" anywhere

  **Must NOT do**:
  - Do NOT write CSS yet — that is Task 3
  - Do NOT write JavaScript yet — that is Task 4
  - Do NOT use Bootstrap classes (`col-*`, `row`, `container`, `list-unstyled`, etc.)
  - Do NOT use Font Awesome classes (`fa fa-*`)
  - Do NOT add any roles before 2016 (see "Roles to Keep" list below)
  - Do NOT rewrite the career profile text — copy it exactly as-is

  **Roles to Keep** (in order, newest first):
  1. Head of Engineering, Executive Director — CMC Markets (2025–present)
  2. Head of Engineering - Wealth — CMC Markets (2024–2025)
  3. Interim Head of CMC Invest — CMC Invest (2023–2024)
  4. Head of Technology — CMC Invest (2020–2023)
  5. Technical Principal — Contino (2019–2020)
  6. Principal Consultant — Contino (2018–2019)
  7. Tech Lead — Kantar (2016–2018)

  **Open Source — Condense to 2 highlights:**
  1. `event-hub-sidecar` — "A sidecar container for sending events from ActiveMQ to containers via REST APIs"
  2. `api-gateway` — "A sub-millisecond API Gateway for microservice applications"
  (Drop `damage-report` and `runtime-migrate`)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Substantial HTML rewrite requiring careful content preservation and semantic structure. Not purely visual (that's CSS), but significant structural work.
  - **Skills**: []
    - No specialised skills needed — this is HTML authoring.
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed yet — visual verification comes later
    - `frontend-ui-ux`: This task is structure only, not styling

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 (sequential — depends on Task 1)
  - **Blocks**: Tasks 3, 4, 5
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `index.html:33-526` — Current body content. ALL text content must be preserved exactly (career profile, role descriptions, skills list, education, interests). Copy text verbatim — do not rephrase.
  - `index.html:40-97` — Current sidebar structure (profile, contact, education, interests) — content moves to hero/sections/footer
  - `index.html:100-516` — Current main content (career profile, experience, projects, skills, certifications) — restructure into semantic sections
  - `index.html:42` — Profile image: `<img class="profile" src="assets/images/profile.jpg" alt="profile picture" width="150" height="147" />`
  - `index.html:44` — Tagline text: "Engineering leader, organisational psychologist and coach"
  - `index.html:45-47` — Codewars badge markup
  - `index.html:52-66` — Contact links (email, LinkedIn, GitHub) — to be duplicated in hero AND footer
  - `index.html:502-514` — Certification badges (AWS SA, CKAD) with image paths

  **WHY Each Reference Matters**:
  - Lines 33-526 contain ALL the text content that must be preserved verbatim during restructure
  - The sidebar content (40-97) moves to different locations (hero, footer, sections) — understand current placement
  - Contact links (52-66) must be duplicated in hero and footer — copy the URLs exactly
  - Certification images (502-514) have specific src paths that must be preserved

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: HTML has correct semantic section structure
    Tool: Bash (grep)
    Preconditions: index.html rewritten with new structure
    Steps:
      1. Run: grep -c '<section' index.html
      2. Run: grep 'class="hero"' index.html
      3. Run: grep 'id="experience"' index.html
      4. Run: grep 'id="skills"' index.html
      5. Run: grep 'id="education"' index.html
      6. Run: grep 'id="interests"' index.html
      7. Run: grep '<footer' index.html
    Expected Result: At least 6 sections found (step 1), all section IDs present (steps 2-7)
    Failure Indicators: Missing sections or IDs
    Evidence: .sisyphus/evidence/task-2-section-structure.txt

  Scenario: Correct number of career roles (exactly 7)
    Tool: Bash (grep)
    Preconditions: index.html has new structure
    Steps:
      1. Run: grep -c 'role-title\|job-title' index.html (use whatever class the roles use)
      2. Run: grep "Head of Engineering, Executive Director" index.html
      3. Run: grep "Head of Engineering - Wealth" index.html
      4. Run: grep "Interim Head of CMC Invest" index.html
      5. Run: grep "Head of Technology" index.html
      6. Run: grep "Technical Principal" index.html
      7. Run: grep "Principal Consultant" index.html
      8. Run: grep "Tech Lead" index.html | grep "Kantar"
    Expected Result: Step 1 returns 7. Steps 2-8 all return matches.
    Failure Indicators: Count is not 7, or any role is missing
    Evidence: .sisyphus/evidence/task-2-roles-count.txt

  Scenario: No pre-2016 roles remain
    Tool: Bash (grep)
    Steps:
      1. Run: grep -i "Bluecube" index.html && echo "FAIL" || echo "PASS"
      2. Run: grep -i "Volkswagen" index.html && echo "FAIL" || echo "PASS"
      3. Run: grep -i "Business Solutions Development Manager" index.html && echo "FAIL" || echo "PASS"
      4. Run: grep -i "Business Solutions Architect" index.html && echo "FAIL" || echo "PASS"
    Expected Result: All 4 checks output "PASS"
    Failure Indicators: Any grep matches pre-2016 roles
    Evidence: .sisyphus/evidence/task-2-no-old-roles.txt

  Scenario: No Bootstrap/jQuery/FA classes remain
    Tool: Bash (grep)
    Steps:
      1. Run: grep 'col-xs-\|col-md-\|col-lg-' index.html && echo "FAIL" || echo "PASS"
      2. Run: grep 'list-unstyled\|img-responsive' index.html && echo "FAIL" || echo "PASS"
      3. Run: grep 'fa fa-\|fa-envelope\|fa-linkedin\|fa-github\|fa-briefcase\|fa-rocket\|fa-user\|fa-archive\|fa-certificate' index.html && echo "FAIL" || echo "PASS"
    Expected Result: All 3 checks output "PASS"
    Failure Indicators: Any Bootstrap or FA class found
    Evidence: .sisyphus/evidence/task-2-no-bootstrap-classes.txt

  Scenario: Contact links present in both hero and footer
    Tool: Bash (grep)
    Steps:
      1. Run: grep -c "daviddykeuk@gmail.com" index.html
      2. Run: grep -c "linkedin.com/in/david-j-dyke" index.html
      3. Run: grep -c "github.com/daviddykeuk" index.html
    Expected Result: Each grep returns 2 (once in hero, once in footer)
    Failure Indicators: Any count less than 2
    Evidence: .sisyphus/evidence/task-2-contact-links.txt

  Scenario: Word "spearheading" not present
    Tool: Bash (grep)
    Steps:
      1. Run: grep -i "spearheading" index.html && echo "FAIL" || echo "PASS"
    Expected Result: "PASS"
    Failure Indicators: Grep finds the word
    Evidence: .sisyphus/evidence/task-2-no-spearheading.txt
  ```

  **Commit**: YES
  - Message: `Restructured HTML to modern full-width layout`
  - Files: `index.html`
  - Pre-commit: grep checks for section structure, role count, no Bootstrap classes

- [x] 3. Build new CSS from scratch — dark/light sections, fluid typography, modern layout

  **What to do**:
  - **Delete all existing content** in `assets/css/style.css` and write a completely new stylesheet from scratch
  - Do NOT incrementally modify the old Bootstrap-based CSS — start from an empty file

  **CSS Custom Properties (define at `:root`):**
  ```css
  :root {
    /* Colours */
    --color-bg-dark: #0a0a0a;
    --color-bg-light: #ffffff;
    --color-bg-off-white: #f8f8f8;
    --color-text-dark: #1d1d1f;
    --color-text-light: #f5f5f7;
    --color-text-muted: #86868b;
    --color-accent: #2d7788;       /* Carried from old design — subtle teal for links */
    --color-accent-hover: #42A8C0;
    --color-border-light: #d2d2d7;
    --color-border-dark: #424245;

    /* Typography */
    --font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    --font-size-hero-name: clamp(2.5rem, 5vw, 4rem);
    --font-size-hero-tagline: clamp(1.1rem, 2.5vw, 1.5rem);
    --font-size-section-heading: clamp(1.8rem, 3.5vw, 2.5rem);
    --font-size-body: clamp(1rem, 1.2vw, 1.125rem);
    --font-size-small: clamp(0.85rem, 1vw, 0.9375rem);

    /* Spacing */
    --section-padding: clamp(4rem, 8vw, 8rem);
    --content-max-width: 860px;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;

    /* Transitions */
    --transition-default: 0.3s ease;
  }
  ```

  **CSS Reset / Base:**
  - Include minimal reset: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
  - `html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }`
  - `body { font-family: var(--font-stack); font-size: var(--font-size-body); line-height: 1.6; color: var(--color-text-dark); background: var(--color-bg-light); }`
  - `img { max-width: 100%; height: auto; display: block; }`
  - `a { color: var(--color-accent); text-decoration: none; transition: color var(--transition-default); }` with hover: `var(--color-accent-hover)`

  **Section Layout System:**
  - `.section` — full-width block, padding `var(--section-padding) 1.5rem`
  - `.section-inner` — max-width `var(--content-max-width)`, margin `0 auto`, constrains content to readable width
  - `.section-dark` — background `var(--color-bg-dark)`, color `var(--color-text-light)`
  - `.section-light` — background `var(--color-bg-light)`, color `var(--color-text-dark)`
  - `.section-off-white` — background `var(--color-bg-off-white)`, color `var(--color-text-dark)`
  - Section headings (`h2`) — font-size `var(--font-size-section-heading)`, font-weight 700, margin-bottom `var(--spacing-xl)`, letter-spacing `-0.02em`
  - Dark section links — colour override to `var(--color-text-light)` with underline on hover

  **Hero Section (`.hero`):**
  - Background: `var(--color-bg-dark)`
  - Min-height: `100vh` (or close to it — `min-height: 90vh` is acceptable)
  - Display: `flex`, align-items `center`, justify-content `center`
  - `.hero-content` — text-align `center`, max-width `var(--content-max-width)`
  - Profile photo (`.hero-photo`): `width: 160px; height: 160px; border-radius: 50%; object-fit: cover; margin: 0 auto var(--spacing-lg);` with subtle border `3px solid var(--color-border-dark)`
  - Hero name (`h1`): font-size `var(--font-size-hero-name)`, font-weight 700, color `var(--color-text-light)`, letter-spacing `-0.03em`, margin-bottom `var(--spacing-sm)`
  - Hero tagline (`.hero-tagline`): font-size `var(--font-size-hero-tagline)`, color `var(--color-text-muted)`, font-weight 300, margin-bottom `var(--spacing-lg)`
  - SMF18 badge (`.hero-badge`): inline-block, small text `var(--font-size-small)`, border `1px solid var(--color-border-dark)`, border-radius `4px`, padding `0.25rem 0.75rem`, colour `var(--color-text-muted)`, letter-spacing `0.05em`, text-transform `uppercase`
  - Contact nav (`.hero-contact`): flex row of links (Email, LinkedIn, GitHub) with inline SVG icons, gap `var(--spacing-lg)`, margin-top `var(--spacing-lg)`, colour `var(--color-text-muted)` with hover to `var(--color-text-light)`

  **Career Profile Section:**
  - `.career-profile` — standard section with `.section-inner`
  - Paragraph text at `var(--font-size-body)`, line-height 1.7 for readability
  - Generous paragraph spacing: `margin-bottom: var(--spacing-md)`

  **Experience Section (`.experience`):**
  - `.role` — margin-bottom `var(--spacing-xl)`, padding-bottom `var(--spacing-xl)`, border-bottom `1px solid var(--color-border-light)` (last child: no border)
  - `.role:last-child { border-bottom: none; padding-bottom: 0; }`
  - `.role-header` — display flex, justify-content space-between, align-items baseline, flex-wrap wrap, gap `var(--spacing-sm)`, margin-bottom `var(--spacing-md)`
  - `.role-title` — font-size `clamp(1.2rem, 2vw, 1.5rem)`, font-weight 600
  - `.role-company` — font-size `var(--font-size-body)`, colour `var(--color-text-muted)`
  - `.role-dates` — font-size `var(--font-size-small)`, colour `var(--color-text-muted)`, white-space `nowrap`
  - `.role-description` — standard body text, `ul` with `padding-left: 1.25rem`, `li` with `margin-bottom: var(--spacing-sm)`
  - In dark sections: role borders use `var(--color-border-dark)` instead

  **Skills Section (`.skills`):**
  - CSS Grid layout for skill categories: `display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-lg);`
  - Each skill group (`.skill-group`) — has a heading (`h3`, font-size `var(--font-size-body)`, font-weight 600) and list
  - Skill items: clean list (no bullets — `list-style: none`), each item `padding: 0.25rem 0`, font-size `var(--font-size-small)`
  - No progress bars — just clean text lists (Apple-style simplicity)

  **Education & Certifications Section:**
  - Education entries: similar layout to roles but simpler (degree, institution, dates)
  - Certification badges: flex row, `gap: var(--spacing-lg)`, align-items center
  - Badge images: `max-height: 80px`, `width: auto`
  - Codewars badge: `img { max-height: 30px; }` (it's a small inline badge)

  **Open Source Section:**
  - Project entries: `.oss-project` — margin-bottom `var(--spacing-lg)`
  - Project name as link, description as paragraph
  - Clean, minimal — no cards or borders, just text

  **Interests Section:**
  - Simple paragraph text, same styling as career profile

  **Footer (`.footer`):**
  - Background: `var(--color-bg-light)`, border-top `1px solid var(--color-border-light)`
  - `.footer-inner` — max-width `var(--content-max-width)`, margin `0 auto`, text-align `center`, padding `var(--spacing-xl) 1.5rem`
  - Contact links repeated (flex row, centred), same style as hero contact
  - Footer credit: font-size `var(--font-size-small)`, colour `var(--color-text-muted)`, margin-top `var(--spacing-lg)`

  **GSAP Animation Initial States (CRITICAL):**
  - `.section-inner, .footer-inner { opacity: 0; transform: translateY(60px); }` — elements start invisible and shifted down; GSAP animates them in on scroll
  - `.hero-content > * { opacity: 0; transform: translateY(30px); }` — hero children start invisible; GSAP timeline reveals them on page load
  - Without these CSS states, animations won't work — elements would be visible before GSAP triggers

  **Reduced Motion Override:**
  - `@media (prefers-reduced-motion: reduce) { .section-inner, .footer-inner, .hero-content > * { opacity: 1; transform: none; } }` — makes content visible immediately when user prefers no animation

  **Must NOT do**:
  - Do NOT use Bootstrap classes or import Bootstrap CSS
  - Do NOT use `!important` anywhere
  - Do NOT use pixel values for font sizes (use `clamp()` and `rem`)
  - Do NOT add responsive breakpoints yet — that is Task 6. Write the base mobile-first styles only (single column, full width). Task 6 handles `@media` queries.
  - Do NOT nest selectors deeper than 2 levels (e.g., `.section .role-header` is fine, `.section .experience .role .role-header` is not)
  - Do NOT add animation/transition properties to elements that GSAP controls (GSAP sets its own inline styles — CSS transitions on the same properties cause conflicts)
  - Do NOT use Google Fonts or any external font resources

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: This is core visual/styling work — CSS architecture, colour system, typography, layout. Directly in the visual-engineering wheelhouse.
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Design-to-code translation — the task requires implementing a specific visual design (Apple-style aesthetic) with attention to spacing, typography, and colour.
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed — visual verification comes in QA scenarios, not during CSS authoring
    - `dev-browser`: Not needed — no browser interaction during CSS writing

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 4 and 5)
  - **Blocks**: Tasks 6, 8
  - **Blocked By**: Task 2

  **References**:

  **Pattern References** (existing code to understand what's being replaced):
  - `assets/css/style.css:1-30` — Current base styles showing font-family, colours, font-size to understand the old design system being replaced
  - `assets/css/style.css:43-92` — Current `.sidebar-wrapper` and `.main-wrapper` layout — this entire layout system is being discarded in favour of full-width sections
  - `assets/css/style.css:94-150` — Current section styles (`.profile-section`, `.skills-section`, `.experiences-section`) — shows the naming and structure being replaced

  **HTML Structure References** (the HTML that CSS must style — written by Task 2):
  - Task 2's HTML skeleton (lines 310-396 in this plan) — the definitive reference for all CSS class names and DOM structure. The CSS MUST target exactly these classes: `.hero`, `.hero-content`, `.hero-photo`, `.hero-tagline`, `.hero-badge`, `.hero-contact`, `.section`, `.section-inner`, `.section-dark`, `.section-light`, `.section-off-white`, `.role`, `.role-header`, `.role-title`, `.role-company`, `.role-dates`, `.role-description`, `.skill-group`, `.oss-project`, `.footer`, `.footer-inner`, `.footer-credit`

  **External References**:
  - Apple's design system typography: Uses `-apple-system` font stack, fluid `clamp()` sizing, tight letter-spacing on headings, generous line-height on body text
  - CSS Custom Properties guide: `https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties`
  - `clamp()` function: `https://developer.mozilla.org/en-US/docs/Web/CSS/clamp`

  **WHY Each Reference Matters**:
  - The old CSS shows what's being replaced — understanding the old system prevents accidentally re-introducing similar patterns
  - Task 2's HTML skeleton is the SINGLE SOURCE OF TRUTH for class names — CSS must match exactly or elements won't be styled
  - The GSAP animation initial states (`opacity: 0; transform: translateY(...)`) are critical — without them, scroll-triggered animations won't have a starting state to animate from
  - MDN references for `clamp()` and custom properties — ensure correct syntax for fluid typography

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: CSS file is completely new (no Bootstrap remnants)
    Tool: Bash (grep)
    Preconditions: assets/css/style.css has been rewritten
    Steps:
      1. Run: grep -i "bootstrap\|orbit\|3rdwave\|3rd Wave" assets/css/style.css && echo "FAIL" || echo "PASS"
      2. Run: grep -i "font-awesome\|\.fa-\|\.fa " assets/css/style.css && echo "FAIL" || echo "PASS"
      3. Run: grep -c "!important" assets/css/style.css | xargs -I{} sh -c 'if [ {} -gt 0 ]; then echo "FAIL: {} uses of !important"; else echo "PASS"; fi'
    Expected Result: All 3 checks output "PASS"
    Failure Indicators: Any grep matches Bootstrap, old template, Font Awesome references, or !important usage
    Evidence: .sisyphus/evidence/task-3-no-old-css.txt

  Scenario: CSS custom properties defined correctly
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep -c "\-\-color-bg-dark" assets/css/style.css
      2. Run: grep -c "\-\-color-bg-light" assets/css/style.css
      3. Run: grep -c "\-\-font-stack" assets/css/style.css
      4. Run: grep -c "\-\-font-size-hero-name" assets/css/style.css
      5. Run: grep -c "\-\-section-padding" assets/css/style.css
      6. Run: grep -c "\-\-content-max-width" assets/css/style.css
    Expected Result: Each grep returns at least 1 (defined in :root) — most will return 2+ (defined + used)
    Failure Indicators: Any count returns 0
    Evidence: .sisyphus/evidence/task-3-custom-properties.txt

  Scenario: System font stack used (no Google Fonts)
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep "\-apple-system" assets/css/style.css && echo "PASS: system font found" || echo "FAIL"
      2. Run: grep -i "roboto\|google" assets/css/style.css && echo "FAIL: Google font found" || echo "PASS: no Google fonts"
    Expected Result: System font present, no Google fonts
    Failure Indicators: Missing system font or Google Fonts reference found
    Evidence: .sisyphus/evidence/task-3-fonts.txt

  Scenario: Fluid typography uses clamp()
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep -c "clamp(" assets/css/style.css
    Expected Result: At least 5 uses of clamp() (hero name, hero tagline, section heading, body, small)
    Failure Indicators: Count less than 5
    Evidence: .sisyphus/evidence/task-3-clamp-usage.txt

  Scenario: Dark and light section styles exist
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep "\.section-dark" assets/css/style.css && echo "PASS" || echo "FAIL"
      2. Run: grep "\.section-light" assets/css/style.css && echo "PASS" || echo "FAIL"
      3. Run: grep "#0a0a0a\|--color-bg-dark" assets/css/style.css | head -3
      4. Run: grep "\.hero" assets/css/style.css | head -5
    Expected Result: Dark section, light section, hero styles all present
    Failure Indicators: Missing any section variant
    Evidence: .sisyphus/evidence/task-3-section-styles.txt

  Scenario: GSAP animation initial states present
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep "\.section-inner" assets/css/style.css | grep "opacity" && echo "PASS" || echo "FAIL: missing section-inner opacity"
      2. Run: grep "\.hero-content" assets/css/style.css | grep "opacity" && echo "PASS" || echo "FAIL: missing hero-content opacity"
      3. Run: grep "prefers-reduced-motion" assets/css/style.css && echo "PASS" || echo "FAIL: missing reduced motion"
    Expected Result: All 3 checks pass — initial animation states and reduced motion override present
    Failure Indicators: Missing opacity initial states or reduced motion media query
    Evidence: .sisyphus/evidence/task-3-animation-states.txt

  Scenario: CSS Grid used for skills layout
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep "grid-template-columns" assets/css/style.css && echo "PASS" || echo "FAIL"
      2. Run: grep "auto-fit\|auto-fill" assets/css/style.css && echo "PASS" || echo "FAIL"
    Expected Result: Grid layout with auto-fit/auto-fill for responsive skills grid
    Failure Indicators: No CSS Grid usage found
    Evidence: .sisyphus/evidence/task-3-grid-layout.txt

  Scenario: No responsive breakpoints yet (Task 6 handles those)
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep -c "@media" assets/css/style.css
    Expected Result: Exactly 1 @media query (the prefers-reduced-motion one). No viewport-width breakpoints.
    Failure Indicators: More than 1 @media query (means responsive breakpoints were added prematurely)
    Evidence: .sisyphus/evidence/task-3-no-breakpoints.txt

  Scenario: No pixel font sizes
    Tool: Bash (grep)
    Preconditions: assets/css/style.css exists
    Steps:
      1. Run: grep -E "font-size:\s*[0-9]+px" assets/css/style.css && echo "FAIL: pixel font sizes found" || echo "PASS: no pixel font sizes"
    Expected Result: "PASS" — all font sizes use rem or clamp()
    Failure Indicators: Any pixel-based font-size declarations
    Evidence: .sisyphus/evidence/task-3-no-pixel-fonts.txt
  ```

  **Evidence to Capture:**
  - [ ] Each evidence file named: task-3-{scenario-slug}.txt
  - [ ] Terminal output for all grep checks

  **Commit**: YES
  - Message: `New CSS with dark/light sections and fluid typography`
  - Files: `assets/css/style.css`
  - Pre-commit: grep checks for custom properties, clamp(), system font stack, no Bootstrap remnants

- [x] 4. Implement GSAP ScrollTrigger animations — fade-in reveals, parallax text, stagger

  **What to do**:
  - Completely rewrite `assets/js/main.js` from scratch (delete all existing jQuery content)
  - Register GSAP ScrollTrigger plugin: `gsap.registerPlugin(ScrollTrigger);`
  - Implement the following scroll-driven animations:

  **Animation 1 — Section fade-in reveals:**
  - Target: every `.section-inner` and `.footer-inner` element
  - Behaviour: Each section starts `opacity: 0, y: 60` (translated 60px down, invisible)
  - On scroll into viewport (ScrollTrigger `start: "top 85%"`), animate to `opacity: 1, y: 0` over `duration: 1, ease: "power2.out"`
  - Use `gsap.utils.toArray('.section-inner')` to batch-target all sections

  **Animation 2 — Hero content entrance:**
  - Target: `.hero-content` children (photo, h1, tagline, badge, contact nav)
  - Behaviour: Staggered entrance on page load (not scroll-triggered — hero is visible immediately)
  - Timeline: `gsap.timeline()` with stagger `0.15s` between elements
  - Start from `opacity: 0, y: 30` → animate to `opacity: 1, y: 0`
  - `ease: "power3.out"`, total duration ~1.2s for all elements

  **Animation 3 — Career role stagger:**
  - Target: `.role` articles within the experience section
  - Behaviour: As experience section scrolls in, each role staggers in from below
  - `stagger: 0.12`, `duration: 0.8`, `y: 40 → 0`, `opacity: 0 → 1`
  - ScrollTrigger `start: "top 80%"`, `toggleActions: "play none none none"` (plays once)

  **Animation 4 — Skills grid stagger:**
  - Target: individual skill items within the skills section
  - Similar stagger effect to career roles but with slightly different timing
  - `stagger: 0.08`, `duration: 0.6`

  **Animation 5 — Subtle parallax on section headings:**
  - Target: `h2` elements within sections (NOT the hero h1)
  - Behaviour: Slight upward parallax — heading moves slightly faster than surrounding content
  - Use ScrollTrigger with `scrub: true` (tied to scroll position, not time)
  - `y: "20px" → "-20px"` as the section scrolls through viewport
  - Keep subtle — this is a finishing touch, not a dominant effect

  **Reduced motion support (MANDATORY):**
  - Wrap ALL animations in a `prefers-reduced-motion` check:
    ```javascript
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      // All GSAP animations here
    }
    ```
  - If reduced motion is preferred: skip ALL animations, ensure all elements remain `opacity: 1, transform: none` (visible without animation)
  - Add CSS class `no-motion` to body when reduced motion detected (for any CSS transitions that need disabling)

  **Performance considerations:**
  - Use `will-change: transform, opacity` sparingly (only on elements about to animate, remove after)
  - Use `ScrollTrigger.batch()` for the role and skill stagger animations (more efficient)
  - Ensure all ScrollTrigger instances use `toggleActions: "play none none none"` (animate once, don't reverse/re-trigger)
  - Do NOT use `scrub: true` on fade-in reveals (only on the subtle parallax headings)

  **Must NOT do**:
  - Do NOT use jQuery or any jQuery syntax (`$(...)`)
  - Do NOT use CSS animations/transitions for scroll effects — GSAP handles everything
  - Do NOT make animations intense or distracting — moderate, elegant, Apple-like
  - Do NOT use `scrub: true` on fade-in reveals (causes jerky behaviour)
  - Do NOT forget `prefers-reduced-motion` — this is a hard requirement
  - Do NOT animate on every scroll — use `toggleActions: "play none none none"` so each animation fires once

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Scroll animation is a core UI/UX concern — timing, easing, and visual polish. Visual-engineering agents handle animation well.
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Needed for animation timing sensibility — Apple-like easing, stagger rhythm, knowing when "enough is enough"
  - **Skills Evaluated but Omitted**:
    - `playwright`: Not needed during JS authoring — visual verification is Final Wave
    - `dev-browser`: Could be useful for testing, but not essential for writing the code

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3, 5)
  - **Blocks**: Task 6
  - **Blocked By**: Task 2 (needs HTML structure with correct class names)

  **References**:

  **Pattern References**:
  - `index.html` (after Task 2) — The HTML class names that animations target: `.hero-content`, `.section-inner`, `.role`, `.footer-inner`, section `h2` elements
  - `assets/js/main.js` (current) — Lines 1-25: Current jQuery animation (skill bar widths) — this is what we're REPLACING. Delete entirely.

  **External References**:
  - GSAP ScrollTrigger docs: `https://gsap.com/docs/v3/Plugins/ScrollTrigger/`
  - GSAP `utils.toArray`: `https://gsap.com/docs/v3/GSAP/gsap.utils.toArray()`
  - GSAP `ScrollTrigger.batch()`: `https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.batch()`
  - `prefers-reduced-motion` MDN: `https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion`

  **WHY Each Reference Matters**:
  - The HTML class names from Task 2 are the exact selectors for GSAP animations — must match
  - GSAP ScrollTrigger.batch() is critical for performant stagger animations (roles, skills)
  - prefers-reduced-motion is a hard accessibility requirement — must be checked before any animation runs

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: GSAP ScrollTrigger is registered
    Tool: Bash (grep)
    Preconditions: main.js has been rewritten
    Steps:
      1. Run: grep "registerPlugin" assets/js/main.js
      2. Run: grep "ScrollTrigger" assets/js/main.js
    Expected Result: Both return matches — ScrollTrigger is registered
    Failure Indicators: Missing registration means animations won't work
    Evidence: .sisyphus/evidence/task-4-gsap-registered.txt

  Scenario: Section fade-in animations are defined
    Tool: Bash (grep)
    Preconditions: main.js rewritten
    Steps:
      1. Run: grep "section-inner\|\.section" assets/js/main.js
      2. Run: grep "opacity" assets/js/main.js
      3. Run: grep "toggleActions\|play none" assets/js/main.js
    Expected Result: All 3 return matches — sections have scroll-triggered fade-in
    Failure Indicators: Missing opacity animation or ScrollTrigger config
    Evidence: .sisyphus/evidence/task-4-section-animations.txt

  Scenario: Hero stagger timeline exists
    Tool: Bash (grep)
    Steps:
      1. Run: grep "timeline\|hero" assets/js/main.js
      2. Run: grep "stagger" assets/js/main.js
    Expected Result: Both return matches — hero has staggered entrance
    Failure Indicators: No timeline or stagger for hero content
    Evidence: .sisyphus/evidence/task-4-hero-stagger.txt

  Scenario: Reduced motion check is present
    Tool: Bash (grep)
    Steps:
      1. Run: grep "prefers-reduced-motion" assets/js/main.js
      2. Run: grep "matchMedia" assets/js/main.js
    Expected Result: Both return matches — reduced motion is checked before animations
    Failure Indicators: Missing accessibility check — hard requirement failure
    Evidence: .sisyphus/evidence/task-4-reduced-motion.txt

  Scenario: No jQuery remains in JS
    Tool: Bash (grep)
    Steps:
      1. Run: grep "jQuery\|\\$(" assets/js/main.js && echo "FAIL" || echo "PASS"
    Expected Result: "PASS" — no jQuery syntax
    Failure Indicators: jQuery code found
    Evidence: .sisyphus/evidence/task-4-no-jquery.txt

  Scenario: Animations actually fire in browser (visual verification)
    Tool: Playwright (playwright skill)
    Preconditions: Local server running (python3 -m http.server 8080), CSS (Task 3) applied
    Steps:
      1. Navigate to http://localhost:8080
      2. Wait 2 seconds for hero animation to complete
      3. Screenshot the hero section (above-the-fold)
      4. Scroll to the experience section slowly
      5. Wait 1 second for fade-in to complete
      6. Screenshot the experience section
      7. Verify hero content is visible (opacity > 0 on .hero-content children)
    Expected Result: Hero content visible after load. Experience section fades in on scroll.
    Failure Indicators: Elements invisible, no animation, console errors
    Evidence: .sisyphus/evidence/task-4-animations-visual.png
  ```

  **Commit**: YES (grouped with Tasks 3, 5 as Wave 2 commit)
  - Message: `Rebuilt site with modern layout and animations`
  - Files: `assets/js/main.js`
  - Pre-commit: grep for ScrollTrigger registration, prefers-reduced-motion check, no jQuery

- [x] 5. Trim content and update section text

  **What to do**:
  - This task verifies and adjusts the content inside the HTML structure created by Task 2
  - **NOTE**: Task 2 should have already handled the bulk of content trimming (keeping only 7 roles, condensing OSS to 2 highlights). This task is a verification pass and handles any content adjustments that Task 2 couldn't anticipate.
  - Verify exactly 7 career roles are present (see list in Task 2)
  - Verify pre-2016 roles are fully removed (no Bluecube, Volkswagen, Kantar TNS manager/architect roles)
  - Verify open source section has exactly 2 projects: `event-hub-sidecar` and `api-gateway`
  - Verify `damage-report` and `runtime-migrate` projects are removed
  - Verify Codewars badge is present and linked correctly
  - Verify certifications display correctly (AWS SA Associate, CKAD)
  - Verify education section is complete (MSc + BSc)
  - Verify interests section is present
  - Verify the word "spearheading" does not appear ANYWHERE in the file
  - If any content was accidentally omitted or duplicated by Task 2, fix it
  - Ensure all text reads naturally in the new layout (no orphaned sentences, no references to sidebar elements)

  **Must NOT do**:
  - Do NOT rewrite David's career profile text — it was already updated in Phase 1
  - Do NOT change role descriptions beyond what's needed for the new layout
  - Do NOT add new content that wasn't in the original site
  - Do NOT use the word "spearheading"

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: This is primarily a verification task with minor edits. Grep checks + targeted HTML fixes.
  - **Skills**: []
    - No specialised skills needed — text verification and HTML editing.
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Not needed — no visual design decisions in this task
    - `playwright`: Not needed — no browser verification at this stage

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 3, 4)
  - **Blocks**: Task 7
  - **Blocked By**: Task 2 (needs the rewritten HTML to verify)

  **References**:

  **Pattern References**:
  - `index.html` (after Task 2) — The rewritten HTML with new section structure. This task verifies content within it.
  - Task 2's "Roles to Keep" list — 7 roles to verify presence
  - Task 2's "Open Source — Condense to 2 highlights" — 2 projects to verify

  **Content References**:
  - `index.html` (original, pre-Task 1) — NOT needed (Phase 1 already updated content)
  - `index.html` (current, post-Phase 1 commit `dbaa1a6`) — Source of truth for all text content

  **WHY Each Reference Matters**:
  - Task 2's output HTML is what we're verifying — must match the content decisions
  - The original commit `dbaa1a6` has the authoritative text content from Phase 1

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Exactly 7 career roles present
    Tool: Bash (grep)
    Steps:
      1. Run: grep "Head of Engineering, Executive Director" index.html
      2. Run: grep "Head of Engineering - Wealth" index.html
      3. Run: grep "Interim Head of CMC Invest" index.html
      4. Run: grep "Head of Technology" index.html
      5. Run: grep "Technical Principal" index.html
      6. Run: grep "Principal Consultant" index.html
      7. Run: grep "Tech Lead" index.html | grep -i "Kantar"
    Expected Result: All 7 return matches
    Failure Indicators: Any role missing
    Evidence: .sisyphus/evidence/task-5-roles-verified.txt

  Scenario: Pre-2016 roles removed
    Tool: Bash (grep)
    Steps:
      1. Run: grep -i "Bluecube" index.html && echo "FAIL" || echo "PASS"
      2. Run: grep -i "Volkswagen" index.html && echo "FAIL" || echo "PASS"
      3. Run: grep -i "Business Solutions Development Manager" index.html && echo "FAIL" || echo "PASS"
      4. Run: grep -i "Business Solutions Architect" index.html && echo "FAIL" || echo "PASS"
      5. Run: grep -i "Systems Developer" index.html && echo "FAIL" || echo "PASS"
    Expected Result: All 5 output "PASS"
    Failure Indicators: Any pre-2016 role found
    Evidence: .sisyphus/evidence/task-5-no-old-roles.txt

  Scenario: OSS condensed to exactly 2 projects
    Tool: Bash (grep)
    Steps:
      1. Run: grep "event-hub-sidecar" index.html
      2. Run: grep "api-gateway" index.html
      3. Run: grep -i "damage-report" index.html && echo "FAIL" || echo "PASS"
      4. Run: grep -i "runtime-migrate" index.html && echo "FAIL" || echo "PASS"
    Expected Result: Steps 1-2 return matches. Steps 3-4 output "PASS"
    Failure Indicators: Missing kept projects or removed projects still present
    Evidence: .sisyphus/evidence/task-5-oss-condensed.txt

  Scenario: No "spearheading" anywhere
    Tool: Bash (grep)
    Steps:
      1. Run: grep -ri "spearheading" index.html assets/css/ assets/js/ && echo "FAIL" || echo "PASS"
    Expected Result: "PASS"
    Failure Indicators: Word found in any file
    Evidence: .sisyphus/evidence/task-5-no-spearheading.txt
  ```

  **Commit**: YES (grouped with Tasks 3, 4 as Wave 2 commit)
  - Message: `Rebuilt site with modern layout and animations`
  - Files: `index.html` (content fixes if any)
  - Pre-commit: grep checks for role count, no old roles, no spearheading

- [x] 6. Responsive design and mobile optimisation

  **What to do**:
  - Add responsive breakpoints to `assets/css/style.css` using mobile-first approach
  - **Breakpoints** (mobile-first — styles go FROM small TO large):
    - Base styles: 0–767px (mobile — this is the default)
    - `@media (min-width: 768px)` — tablet
    - `@media (min-width: 1024px)` — desktop
    - `@media (min-width: 1440px)` — large desktop (optional, for generous spacing)
  - **Mobile (base styles, no media query needed)**:
    - Hero: stack content vertically, photo above name, full-width
    - Sections: full-width padding `1.5rem`
    - Career roles: stack vertically (title above meta, no side-by-side)
    - Skills grid: single column
    - Font sizes: smallest end of `clamp()` range
    - Contact nav in hero: wrap to multiple lines if needed
    - Cert badges: stack or wrap
  - **Tablet (768px)**:
    - Career roles: title and meta can sit side by side if space allows
    - Skills grid: 2 columns
    - Section padding increases
    - Cert badges: inline row
  - **Desktop (1024px+)**:
    - Full Apple-like generous whitespace
    - Career roles: title and meta side by side with space-between
    - Skills grid: 3 columns (via `auto-fit, minmax(250px, 1fr)`)
    - Hero content can be larger
  - **Critical responsive checks**:
    - No horizontal scrollbar at ANY viewport width (check `overflow-x: hidden` on body if needed)
    - All text readable without zooming at 375px
    - Tap targets minimum 44×44px on mobile (links, buttons)
    - Images scale correctly (`max-width: 100%` on all `img`)
    - Hero photo doesn't overflow on small screens
    - Codewars badge doesn't break layout
  - Test at 3 viewport sizes using Playwright: 1440×900, 768×1024, 375×667 (iPhone SE)

  **Must NOT do**:
  - Do NOT use Bootstrap's grid system or breakpoints
  - Do NOT use `max-width` media queries (mobile-first means `min-width`)
  - Do NOT add JavaScript for responsive behaviour — CSS only
  - Do NOT hide content on mobile (all content visible at all sizes)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Responsive design requires visual judgement — how layouts reflow, spacing adjustments, mobile UX.
  - **Skills**: [`frontend-ui-ux`, `playwright`]
    - `frontend-ui-ux`: Mobile-first design decisions, spacing, readability
    - `playwright`: Browser testing at multiple viewports to verify responsive behaviour visually
  - **Skills Evaluated but Omitted**:
    - `dev-browser`: Playwright skill is more appropriate for viewport testing

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 7, 8)
  - **Blocks**: Final Verification (F1-F4)
  - **Blocked By**: Tasks 3, 4 (needs CSS and JS to exist before testing responsive)

  **References**:

  **Pattern References**:
  - `assets/css/style.css` (after Task 3) — The new CSS with custom properties and base styles. This task ADDS responsive rules to this file.
  - `index.html` (after Tasks 2, 5) — The HTML structure to test responsive behaviour against

  **External References**:
  - CSS Grid `auto-fit` + `minmax()`: `https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_CSS_grid_layout`
  - Mobile-first responsive design: breakpoints go `min-width` from small to large
  - Apple.com responsive patterns: generous padding on desktop, tighter on mobile, content stacks vertically

  **WHY Each Reference Matters**:
  - Task 3's CSS is what we're extending with responsive rules — must understand existing selectors
  - The HTML structure determines what needs to reflow (roles side-by-side → stacked, grid columns → single column)

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: No horizontal overflow at any viewport
    Tool: Playwright (playwright skill)
    Preconditions: Local server running, CSS applied
    Steps:
      1. Navigate to http://localhost:8080
      2. Set viewport to 375×667
      3. Execute JS: document.documentElement.scrollWidth > document.documentElement.clientWidth
      4. Set viewport to 768×1024
      5. Repeat scrollWidth check
      6. Set viewport to 1440×900
      7. Repeat scrollWidth check
    Expected Result: All 3 checks return false (no horizontal overflow)
    Failure Indicators: scrollWidth > clientWidth at any viewport
    Evidence: .sisyphus/evidence/task-6-no-overflow.txt

  Scenario: Mobile layout renders correctly (375px)
    Tool: Playwright (playwright skill)
    Preconditions: Local server running
    Steps:
      1. Set viewport to 375×667
      2. Navigate to http://localhost:8080
      3. Screenshot hero section
      4. Scroll to experience section, screenshot
      5. Scroll to skills section, screenshot
      6. Scroll to footer, screenshot
      7. Verify hero content is stacked vertically
      8. Verify all text is readable (no overflow, no tiny text)
    Expected Result: Clean mobile layout, stacked content, no broken elements
    Failure Indicators: Overlapping elements, text overflow, broken layout
    Evidence: .sisyphus/evidence/task-6-mobile-375.png

  Scenario: Tablet layout renders correctly (768px)
    Tool: Playwright (playwright skill)
    Steps:
      1. Set viewport to 768×1024
      2. Navigate to http://localhost:8080
      3. Full-page screenshot
    Expected Result: Tablet-appropriate layout, skills in 2 columns, proper spacing
    Evidence: .sisyphus/evidence/task-6-tablet-768.png

  Scenario: Desktop layout renders correctly (1440px)
    Tool: Playwright (playwright skill)
    Steps:
      1. Set viewport to 1440×900
      2. Navigate to http://localhost:8080
      3. Full-page screenshot
    Expected Result: Full Apple-like layout, generous whitespace, roles side by side
    Evidence: .sisyphus/evidence/task-6-desktop-1440.png

  Scenario: Media queries use min-width (mobile-first)
    Tool: Bash (grep)
    Steps:
      1. Run: grep "min-width" assets/css/style.css
      2. Run: grep "max-width" assets/css/style.css | grep -v "max-width.*100%\|max-width.*var\|max-width.*860\|max-width.*content" && echo "FAIL: max-width media query found" || echo "PASS"
    Expected Result: min-width queries present, no max-width media queries (only max-width on elements like images/content)
    Failure Indicators: max-width media queries indicate desktop-first approach
    Evidence: .sisyphus/evidence/task-6-mobile-first.txt
  ```

  **Commit**: YES (grouped with Tasks 7, 8 as Wave 3 commit)
  - Message: `Responsive polish and final cleanup`
  - Files: `assets/css/style.css` (responsive additions)
  - Pre-commit: Playwright screenshots at 3 viewports

- [x] 7. Rewrite README and add meta tags

  **What to do**:
  - **Rewrite `README.md`** — Replace the old Orbit template README entirely with a brief project description:
    ```
    # David Dyke — Personal CV

    Personal CV/resume website for David Dyke, Head of Engineering at CMC Markets.

    Built with vanilla HTML, CSS, and GSAP ScrollTrigger for scroll-driven animations.

    Live at: https://daviddykeuk.github.io/
    ```
  - **Add/update HTML meta tags** in the `<head>` of `index.html`:
    - `<meta name="description" content="David Dyke — Head of Engineering at CMC Markets. Engineering leader, organisational psychologist and coach.">`
    - `<meta property="og:title" content="David Dyke — CV">`
    - `<meta property="og:description" content="Head of Engineering at CMC Markets. Engineering leader, organisational psychologist and coach.">`
    - `<meta property="og:type" content="website">`
    - `<meta property="og:url" content="https://daviddykeuk.github.io/">`
    - `<meta property="og:image" content="https://daviddykeuk.github.io/assets/images/profile.jpg">` (will be a small preview but functional)
    - `<meta name="twitter:card" content="summary">`
  - **Verify no dangling references**: Final check that `index.html` doesn't reference any files deleted in Task 1 (cover.jpg, aws-d-a.png, google-ws.png, wordcloud.png, bootstrap, jquery, font-awesome) — ensure zero matches

  **Must NOT do**:
  - Do NOT delete any files — file cleanup is handled by Task 1
  - Do NOT add analytics scripts, cookie banners, or tracking pixels
  - Do NOT add a build process, package.json, or node_modules
  - Do NOT modify CSS or JS — only `README.md` and `index.html` `<head>` section

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Text replacement in README and simple meta tag insertion — straightforward, no design or logic complexity
  - **Skills**: []
    - No specialised skills needed — this is simple text editing
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Not needed — no design work, just metadata
    - `git-master`: Not needed — commit is handled by orchestrator

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 6, 8)
  - **Blocks**: Final Verification (F1-F4)
  - **Blocked By**: Task 5 (needs final content to write accurate meta description)

  **References**:

  **Pattern References**:
  - `index.html` (after Task 2) — Check the `<head>` section for where to insert meta tags
  - `README.md` (current) — The old template README to be completely replaced (it's the Orbit theme's README about Bootstrap, FontAwesome, LESS etc. — entirely irrelevant to the refactored site)

  **WHY Each Reference Matters**:
  - The current README is entirely about the Orbit template — completely irrelevant to the refactored site
  - Meta tags need the correct `<head>` insertion point from the rewritten HTML
  - The meta description must match the actual tagline/content from the final site

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: README.md is rewritten
    Tool: Bash (grep)
    Steps:
      1. Run: grep -i "bootstrap\|orbit\|3rdwave\|FontAwesome\|LESS" README.md && echo "FAIL: old content remains" || echo "PASS: old content removed"
      2. Run: grep "David Dyke" README.md && echo "PASS: new content present" || echo "FAIL: new content missing"
      3. Run: grep "daviddykeuk.github.io" README.md && echo "PASS: live URL present" || echo "FAIL: live URL missing"
    Expected Result: Old template content gone, new project description present
    Failure Indicators: Any Bootstrap/Orbit/3rdWave references remain
    Evidence: .sisyphus/evidence/task-7-readme.txt

  Scenario: Meta tags present in HTML head
    Tool: Bash (grep)
    Steps:
      1. Run: grep 'og:title' index.html && echo "PASS" || echo "FAIL"
      2. Run: grep 'og:description' index.html && echo "PASS" || echo "FAIL"
      3. Run: grep 'og:image' index.html && echo "PASS" || echo "FAIL"
      4. Run: grep 'meta name="description"' index.html && echo "PASS" || echo "FAIL"
      5. Run: grep 'twitter:card' index.html && echo "PASS" || echo "FAIL"
    Expected Result: All 5 meta tag checks pass
    Failure Indicators: Missing social sharing or SEO meta tags
    Evidence: .sisyphus/evidence/task-7-meta-tags.txt

  Scenario: No dangling references to deleted files
    Tool: Bash (grep)
    Steps:
      1. Run: grep -i "cover\.jpg\|aws-d-a\|google-ws\|wordcloud" index.html && echo "FAIL: dangling reference found" || echo "PASS"
      2. Run: grep -i "bootstrap\|jquery\|font-awesome\|fontawesome" index.html && echo "FAIL: old dependency reference" || echo "PASS"
      3. Run: grep -i "plugins/" index.html && echo "FAIL: plugins dir reference" || echo "PASS"
    Expected Result: All 3 checks pass — zero references to deleted assets
    Failure Indicators: HTML references files that no longer exist (would cause 404s)
    Evidence: .sisyphus/evidence/task-7-no-dangling-refs.txt
  ```

  **Commit**: YES (grouped with Tasks 6, 8 as Wave 3 commit)
  - Message: `Responsive polish and final cleanup`
  - Files: `README.md`, `index.html` (meta tags in `<head>` only)
  - Pre-commit: Verify README rewritten and meta tags present

- [x] 8. Profile photo preparation and image optimisation

  **What to do**:
  - **Assess current `profile.jpg`** (150×147px): This image is too small for a hero-scale display. The CSS (Task 3) will use `clamp(120px, 15vw, 180px)` for the photo — at 180px display size, the 150px source will appear slightly blurry.
  - **Add a CSS safeguard**: Ensure the `.hero-photo` CSS includes `object-fit: cover` and `image-rendering: auto` so the browser handles upscaling as gracefully as possible
  - **Add an HTML comment** above the `<img>` tag in the hero section: `<!-- TODO: Replace with high-resolution photo (recommended: 360×360px or larger for Retina) -->` so it's obvious where to swap the image
  - **Optimise kept images**: Check file sizes of `profile.jpg`, `aws-sa-a.png`, `ckad.png` — if any are unreasonably large, note in evidence but do NOT re-encode (user may replace profile photo anyway)
  - **Verify image paths**: Ensure all `<img>` tags in `index.html` point to files that exist in `assets/images/`
  - **Test visual rendering**: Open the site and verify the profile photo renders acceptably in the circular hero frame — it won't be perfect at 150px source, but should be passable until user provides a high-res replacement

  **Must NOT do**:
  - Do NOT use AI image generation or upscaling to "fix" the low-res photo
  - Do NOT download or fetch images from external sources
  - Do NOT rename profile.jpg or change its path (other tasks reference it)
  - Do NOT add lazy loading to above-the-fold hero image (it should load immediately)
  - Do NOT re-encode or compress images without explicit instruction

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Minor CSS tweak, HTML comment insertion, and file verification — minimal complexity
  - **Skills**: []
    - No specialised skills needed — basic file checks and small edits
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Not needed — no design decisions, just safeguard CSS
    - `playwright`: Could be used for visual check but overkill for a single image verification; Final Wave F3 will do comprehensive visual QA

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Tasks 6, 7)
  - **Blocks**: Final Verification (F1-F4)
  - **Blocked By**: Task 2 (needs HTML structure), Task 3 (needs CSS with hero styles)

  **References**:

  **Pattern References**:
  - `index.html` (after Task 2) — Hero section with the `<img>` tag for profile photo — need to add `<!-- TODO -->` comment above it
  - `assets/css/style.css` (after Task 3) — `.hero-photo` styles — verify `object-fit: cover` is present, add if missing

  **File References**:
  - `assets/images/profile.jpg` — Current profile photo (150×147px, the image to assess)
  - `assets/images/aws-sa-a.png` — AWS cert badge (to check file size)
  - `assets/images/ckad.png` — CKAD cert badge (to check file size)

  **WHY Each Reference Matters**:
  - The hero photo is the first visual element users see — even with CSS safeguards, a 150px source at 180px display will be noticeably soft
  - The `<!-- TODO -->` comment serves as a clear instruction for when the user provides their high-res photo
  - `object-fit: cover` ensures the circular crop works correctly regardless of photo aspect ratio

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Profile photo renders in hero section
    Tool: Playwright
    Preconditions: Site served on localhost:8080, Tasks 1-5 complete
    Steps:
      1. Navigate to http://localhost:8080
      2. Wait for .hero-photo img to be visible
      3. Verify the image has natural dimensions (naturalWidth > 0)
      4. Verify border-radius creates circular frame (computed border-radius is 50%)
      5. Screenshot the hero section
    Expected Result: Profile photo visible in circular frame, no broken image icon
    Failure Indicators: Broken image, square frame, image not visible
    Evidence: .sisyphus/evidence/task-8-hero-photo.png

  Scenario: object-fit: cover applied to hero photo
    Tool: Bash (grep)
    Steps:
      1. Run: grep "object-fit" assets/css/style.css
      2. Run: grep -A5 "hero-photo\|hero.*img" assets/css/style.css | grep "object-fit"
    Expected Result: object-fit: cover found in hero photo styles
    Failure Indicators: Missing object-fit — photo may distort in circular frame
    Evidence: .sisyphus/evidence/task-8-object-fit.txt

  Scenario: TODO comment present for photo replacement
    Tool: Bash (grep)
    Steps:
      1. Run: grep -i "TODO.*photo\|TODO.*resolution\|TODO.*Replace.*photo" index.html
    Expected Result: HTML comment with replacement instructions found
    Failure Indicators: No TODO comment — user won't know where to swap the photo
    Evidence: .sisyphus/evidence/task-8-todo-comment.txt

  Scenario: All image paths resolve to existing files
    Tool: Bash (script)
    Steps:
      1. Run: grep -oP 'src="([^"]+)"' index.html | grep -oP '"([^"]+)"' | tr -d '"' | while read img; do [ -f "$img" ] && echo "OK: $img" || echo "MISSING: $img"; done
      2. Verify no "MISSING" lines in output
    Expected Result: All image src paths resolve to existing files
    Failure Indicators: Any "MISSING" output — would cause broken images on the live site
    Evidence: .sisyphus/evidence/task-8-image-paths.txt

  Scenario: Image file sizes are reasonable
    Tool: Bash (ls/du)
    Steps:
      1. Run: ls -lh assets/images/profile.jpg assets/images/aws-sa-a.png assets/images/ckad.png
      2. Run: file assets/images/profile.jpg (verify it's a valid JPEG)
    Expected Result: All images under 500KB, valid file types
    Failure Indicators: Any image over 1MB (performance concern) or corrupted
    Evidence: .sisyphus/evidence/task-8-image-sizes.txt
  ```

  **Commit**: YES (grouped with Tasks 6, 7 as Wave 3 commit)
  - Message: `Responsive polish and final cleanup`
  - Files: `index.html` (TODO comment), `assets/css/style.css` (object-fit if missing)
  - Pre-commit: Verify profile photo renders, all image paths valid

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, check DOM selectors, grep for patterns). For each "Must NOT Have": search codebase for forbidden patterns (Bootstrap classes, jQuery, Font Awesome, "spearheading", pre-2016 roles) — reject with file:line if found. Check evidence files exist in `.sisyphus/evidence/`. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Validate HTML (no mismatched tags, proper semantic structure). Check CSS for unused selectors, specificity issues, missing responsive rules. Check JS for console errors, proper GSAP cleanup. Grep for: `as any`, empty catches, `console.log` in production, commented-out code blocks, Bootstrap/jQuery/Font Awesome remnants. Run Lighthouse audit (performance, accessibility, best practices).
  Output: `HTML [VALID/INVALID] | CSS [CLEAN/N issues] | JS [CLEAN/N issues] | Lighthouse [scores] | VERDICT`

- [ ] F3. **Visual QA Across Viewports** — `unspecified-high` + `playwright` skill
  Start a local HTTP server (`python3 -m http.server 8080`). Open site in Playwright at 1440px, 768px, 375px. Screenshot each section at each viewport. Verify: hero section renders with dark background and name/tagline visible, sections alternate dark/light, animations fire on scroll (scroll down and screenshot mid-animation), contact links clickable in hero and footer, cert badges visible, no horizontal overflow on mobile, no layout broken at any viewport. Test `prefers-reduced-motion` by setting media feature and verifying no animations fire.
  Save all screenshots to `.sisyphus/evidence/final-qa/`.
  Output: `Viewports [3/3] | Sections [N/N rendered] | Animations [WORKING/BROKEN] | Responsive [PASS/FAIL] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", compare with actual file contents. Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check "Must NOT Have" compliance: no Bootstrap, no jQuery, no Font Awesome, no "spearheading", no pre-2016 roles, no build tools, no dark mode toggle. Flag unaccounted files or changes. Verify unused files were actually deleted (cover.jpg, LESS dir, plugin dir, unused images).
  Output: `Tasks [N/N compliant] | Scope Creep [CLEAN/N issues] | Cleanup [CLEAN/N remaining] | VERDICT`

---

## Commit Strategy

Commits should use PLAIN English style to match the repository's existing commit messages (e.g., "Small updates", "Added new role").

- **After Wave 1**: `Stripped Bootstrap and old dependencies`
- **After Wave 2**: `Rebuilt site with modern layout and animations`
- **After Wave 3**: `Responsive polish and final cleanup`
- OR a single commit if preferred: `Visual refactor - modern Apple-style design`

---

## Success Criteria

### Verification Commands
```bash
# Serve locally and verify
python3 -m http.server 8080  # Expected: serves site on localhost:8080

# Check no Bootstrap/jQuery/FA remnants
grep -r "bootstrap" index.html assets/css/ assets/js/  # Expected: no matches
grep -r "jquery" index.html assets/js/  # Expected: no matches
grep -r "font-awesome" index.html assets/css/  # Expected: no matches
grep -ri "spearheading" index.html  # Expected: no matches

# Check GSAP is referenced
grep "gsap" index.html  # Expected: CDN script tags for gsap.min.js and ScrollTrigger.min.js

# Check old files removed
ls assets/plugins/  # Expected: directory does not exist or is empty
ls assets/less/  # Expected: directory does not exist
ls assets/images/cover.jpg  # Expected: file does not exist

# Check roles count (should be 7)
grep -c "job-title\|role-title" index.html  # Expected: 7 (or equivalent class name)
```

### Final Checklist
- [ ] All "Must Have" items present and verified
- [ ] All "Must NOT Have" items absent (zero matches)
- [ ] Site loads and renders at all 3 viewport sizes
- [ ] GSAP animations fire on scroll
- [ ] `prefers-reduced-motion` disables animations
- [ ] No console errors
- [ ] HTML validates (no mismatched tags)
- [ ] All evidence screenshots captured
