gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add(
  {
    isMobile: "(max-width: 767px)",
    isDesktop: "(min-width: 768px)",
  },
  (context) => {
    let { isMobile, isDesktop } = context.conditions;

    // ✅ HERO PARALLAX HANYA DI DESKTOP
    if (isDesktop) {
      // HERO TEXT
      gsap.fromTo(
        "#hero-text",
        { x: 0, y: 0 },
        {
          x: -120,
          y: -130,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,
          },
        }
      );

      // HERO IMAGE
      gsap.fromTo(
        "#hero-img",
        { x: 0, y: 0 },
        {
          x: 160,
          y: 130,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top top",
            scrub: 1,
            immediateRender: false,
          },
        }
      );
    }

    // ✅ HERO MOBILE: animasi dikit gambar naik halus
    if (isMobile) {
      gsap.fromTo(
        "#hero-img",
        { y: 0 },
        {
          y: -20,
          ease: "power1.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top top",
            scrub: 1.5,
            immediateRender: false,
          },
        }
      );
    }

    // ✅ MARQUEE PARALLAX TETAP JALAN DI SEMUA DEVICE
    gsap.fromTo(
      "#marquee-text",
      { x: 0 },
      {
        x: -400,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#marquee",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          immediateRender: false,
        },
      }
    );
  }
);

// Refresh on resize
window.addEventListener("resize", () => ScrollTrigger.refresh());

