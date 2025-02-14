const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****",
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐",
  },
];

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

const booksContainer = document.querySelector(".books"); // Select the container

// Function to create an article element
function createArticleHTML(article) {
  return `
    <div class="details-column">
      <h3>${article.date}</h3>
      <h4>${article.ages}</h4>
      <h4>${article.genre}</h4>
      <h4>${article.stars}</h4>
    </div>
    <div class="center-column-books">
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}">
      <p>${article.description}<a href="#article"> Read More..</a></p> 
    </div>
  `;
}

// Loop through the articles array and render each article
articles.forEach((article) => {
  const articleElement = document.createElement("div"); // Create a wrapper div for the article
  articleElement.classList.add("article"); // Add a class if needed
  articleElement.innerHTML = createArticleHTML(article); // Set the inner HTML
  booksContainer.appendChild(articleElement); // Append to the container
});

// // Function to create the viewer modal
// function viewerTemplate(pic, alt) {
//     return `<div class="viewer">
//       <button class="close-viewer">X</button>
//       <img src="${pic}" alt="${alt}">
//     </div>`;
//   }

//   // Function to handle clicks on gallery images
//   function viewHandler(event) {
//     const clickedElement = event.target;

//     if (clickedElement.tagName === "IMG") {
//       const srcParts = clickedElement.src.split("-");
//       const fullSrc = `${srcParts[0]}-full.jpeg`;

//       const modalHTML = viewerTemplate(fullSrc, clickedElement.alt);

//       document.body.insertAdjacentHTML("afterbegin", modalHTML);

//       const closeButton = document.querySelector(".close-viewer");
//       closeButton.addEventListener("click", closeViewer);
//     }
//   }

//   // Function to close the modal
//   function closeViewer() {
//     const viewer = document.querySelector(".viewer");
//     if (viewer) {
//       viewer.remove();
//     }
//   }

//   // Add event listener to the gallery
//   const gallery = document.querySelector(".gridarea"); // Adjust selector to match your HTML
//   gallery.addEventListener("click", viewHandler);
