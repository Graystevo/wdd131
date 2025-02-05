const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".header-nav ul");

// Toggle menu on button click
menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
});

function handleResize() {
  const menu = document.querySelector(".header-nav ul");
  if (window.innerWidth >= 600) {
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