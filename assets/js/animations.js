/**
 * animations.js
 * GSAP 3 + ScrollTrigger scroll animations.
 *
 * Loading contract (index.html):
 *   <script defer src="gsap.min.js"></script>
 *   <script defer src="ScrollTrigger.min.js"></script>
 *   <script defer src="animations.js"></script>
 *
 * Using defer keeps execution order guaranteed without blocking parse.
 */

gsap.registerPlugin(ScrollTrigger);

// After all images are loaded, recalculate positions so pinned/triggered
// elements aren't offset by images that weren't yet sized at DOMContentLoaded.
window.addEventListener('load', () => ScrollTrigger.refresh());

/* ─── matchMedia context ─────────────────────────────────────────────────── */
const mm = gsap.matchMedia();

/* ─── Full-motion experience ─────────────────────────────────────────────── */
mm.add('(prefers-reduced-motion: no-preference)', () => {

  /* --- Hero name / tagline fade-in on first paint ------------------------- */
  gsap.from('.name', {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: 'power3.out',
    delay: 0.15,
  });

  gsap.from('.tagline', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.35,
  });

  /* --- Cover image parallax ------------------------------------------------ */
  gsap.to('.cover', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.header-wrapper',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  /* --- Staggered section reveal ------------------------------------------- */
  // Each .section fades up once it enters the viewport.
  ScrollTrigger.batch('.section', {
    onEnter: (els) =>
      gsap.from(els, {
        opacity: 0,
        y: 48,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'all',  // remove inline styles after animation completes
      }),
    once: true,           // only trigger once (no re-animation on scroll-back)
    start: 'top 88%',
  });

  /* --- Experience items staggered reveal ----------------------------------- */
  ScrollTrigger.batch('.experiences-section .item', {
    onEnter: (els) =>
      gsap.from(els, {
        opacity: 0,
        x: -24,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
      }),
    once: true,
    start: 'top 90%',
  });

  /* --- Skill badges bounce in --------------------------------------------- */
  ScrollTrigger.batch('.skill', {
    onEnter: (els) =>
      gsap.from(els, {
        opacity: 0,
        scale: 0.85,
        duration: 0.45,
        stagger: 0.04,
        ease: 'back.out(1.4)',
        clearProps: 'all',
      }),
    once: true,
    start: 'top 92%',
  });

  /* --- Sidebar contact / education / interests slide in -------------------- */
  gsap.from('.contact-container, .education-container, .interests-container', {
    opacity: 0,
    x: 30,
    duration: 0.7,
    stagger: 0.18,
    ease: 'power2.out',
    delay: 0.5,
  });

  // Return a cleanup function: kill all ScrollTriggers when context is reverted
  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
});

/* ─── Reduced-motion experience ─────────────────────────────────────────── */
// Immediately reveal everything; no positional animations, no ScrollTriggers.
mm.add('(prefers-reduced-motion: reduce)', () => {
  gsap.set(
    '.name, .tagline, .section, .experiences-section .item, .skill, .contact-container, .education-container, .interests-container',
    { opacity: 1, x: 0, y: 0, scale: 1 }
  );
});
