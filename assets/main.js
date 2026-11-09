/* Progressive enhancements only; all tutorial content works without JavaScript. */
(() => {
  "use strict";

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-nav");

  if (menuButton && navigation) {
    document.documentElement.classList.add("js");
    menuButton.hidden = false;

    const setMenu = (open) => {
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.innerHTML = `${open ? "Close" : "Menu"} <span aria-hidden="true">${open ? "−" : "+"}</span>`;
      navigation.classList.toggle("is-open", open);
    };

    menuButton.addEventListener("click", () => {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".header-inner")) setMenu(false);
    });

    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const resetMenu = () => setMenu(false);
    if (mobileQuery.addEventListener) mobileQuery.addEventListener("change", resetMenu);
  }

  const modules = Array.from(document.querySelectorAll("details.module"));
  const expandButton = document.querySelector("#expand-modules");

  if (expandButton && modules.length) {
    expandButton.hidden = false;
    const updateExpandButton = () => {
      const allOpen = modules.every((module) => module.open);
      expandButton.innerHTML = `${allOpen ? "Collapse" : "Expand"} all modules <span aria-hidden="true">${allOpen ? "−" : "+"}</span>`;
    };
    expandButton.addEventListener("click", () => {
      const shouldOpen = !modules.every((module) => module.open);
      modules.forEach((module) => { module.open = shouldOpen; });
      updateExpandButton();
    });
    modules.forEach((module) => module.addEventListener("toggle", updateExpandButton));
  }

  // A direct #module-3 link also reveals its description.
  const revealLinkedModule = () => {
    const module = document.getElementById(window.location.hash.slice(1));
    if (module && module.matches("details.module")) module.open = true;
  };
  revealLinkedModule();
  window.addEventListener("hashchange", revealLinkedModule);

  // Highlight the section currently being read, including tall sections.
  const sectionLinks = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  let scrollQueued = false;
  const updateCurrentSection = () => {
    const marker = Math.min(window.innerHeight * 0.3, 180);
    let activeId = "";
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) activeId = section.id;
    });
    sectionLinks.forEach((link) => {
      if (link.hash === `#${activeId}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    scrollQueued = false;
  };
  window.addEventListener("scroll", () => {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(updateCurrentSection);
    }
  }, { passive: true });
  window.addEventListener("resize", updateCurrentSection);
  updateCurrentSection();
})();
