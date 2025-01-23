const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".header-nav ul");

// Toggle menu on button click
menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

function handleResize() {
  const menu = document.querySelector(".header-nav ul");
  if (window.innerWidth > 900) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);


// Function to create the viewer modal
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }
  
  // Function to handle clicks on gallery images
  function viewHandler(event) {
    const clickedElement = event.target;
  
    if (clickedElement.tagName === "IMG") {
      const srcParts = clickedElement.src.split("-");
      const fullSrc = `${srcParts[0]}-full.jpeg`;
  
      const modalHTML = viewerTemplate(fullSrc, clickedElement.alt);
  
      document.body.insertAdjacentHTML("afterbegin", modalHTML);
  
      const closeButton = document.querySelector(".close-viewer");
      closeButton.addEventListener("click", closeViewer);
    }
  }
  
  // Function to close the modal
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
      viewer.remove();
    }
  }
  
  // Add event listener to the gallery
  const gallery = document.querySelector(".gridarea"); // Adjust selector to match your HTML
  gallery.addEventListener("click", viewHandler);