const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);
