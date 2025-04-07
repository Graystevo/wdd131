const menuButton = document.querySelector(".header-nav #menu");
const menu = document.querySelector(".header-nav .navigation");

// Toggle menu on button click
menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuButton.classList.toggle("open");
});

function handleResize() {
  const menu = document.querySelector(".navigation");
  if (window.innerWidth >= 840) {
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// the stuff for dark mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌑")) {
		body.style.background = "#666";
		body.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		body.style.background = "#eee";
		body.style.color = "#666";
		modeButton.textContent = "🌑";
	}
});