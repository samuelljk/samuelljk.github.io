const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});

sr.reveal(".navbar-title", { delay: 200, origin: "left" });
sr.reveal(".navbar-nav", { delay: 400, origin: "top" });
sr.reveal(".navbar-line", { delay: 520, origin: "right" });

sr.reveal(".home-page h2", { delay: 600, origin: "top" });
sr.reveal(".container", { delay: 680, origin: "left" });
