document.addEventListener("DOMContentLoaded", () => {
  // Fade in on page load
  document.body.classList.add("fade-in");

  // Fade out before going to another page
  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href.startsWith("#")) { // ignore same-page anchors
          e.preventDefault();
          document.body.classList.remove("fade-in"); // fade out
          setTimeout(() => {
            window.location = href;
          }, 500); // matches CSS transition time
        }
      });
    }
  });
});