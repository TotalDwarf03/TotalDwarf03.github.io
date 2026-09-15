document.documentElement.classList.add("js");

window.requestAnimationFrame(() => {
  document.documentElement.classList.add("page-ready");
});

const sectionLinks = document.querySelectorAll(".section-index a");
const sections = document.querySelectorAll(".content-section");
const backToTop = document.querySelector(".back-to-top");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      sectionLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isCurrent);
        link.toggleAttribute("aria-current", isCurrent);
      });
    });
  },
  { rootMargin: "-20% 0px -65%", threshold: 0 },
);

sections.forEach((section) => sectionObserver.observe(section));

const updateBackToTop = () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
};

window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();
