document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Préparer le tracé
  const path = document.querySelector("path");
  const pathLength = path.getTotalLength();

  // Initialiser le style pour masquer le tracé
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  // Animation au scroll
  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "path",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      markers: true,
    },
  });
});

//////////////////script pour la compatibilité avec GSAP////////////////////////
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
