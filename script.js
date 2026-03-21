const revealTargets = document.querySelectorAll(
  ".hero, .grid-section, .contact-section",
);

if (!("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
}
