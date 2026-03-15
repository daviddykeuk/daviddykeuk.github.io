gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  document.body.classList.add('no-motion');
}

if (!prefersReducedMotion) {

  gsap.utils.toArray('.section-inner, .footer-inner').forEach(function(el) {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  gsap.timeline()
    .to('.hero-content > *', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15
    });

  ScrollTrigger.batch('.role', {
    start: 'top 80%',
    onEnter: function(batch) {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out'
      });
    },
    once: true
  });

  ScrollTrigger.batch('.skill-tag', {
    start: 'top 80%',
    onEnter: function(batch) {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out'
      });
    },
    once: true
  });

  gsap.utils.toArray('.section-inner h2').forEach(function(heading) {
    gsap.fromTo(heading,
      { y: 20 },
      {
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heading,
          scrub: true
        }
      }
    );
  });

}
