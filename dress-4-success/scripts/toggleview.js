document.addEventListener("DOMContentLoaded", () => {
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const display = document.querySelector("article");
    const gridIcon = gridButton.querySelector("i");
    const listIcon = listButton.querySelector("i");
  
    // Set default view to grid
    if (!display.classList.contains("grid") && !display.classList.contains("list")) {
      toggleView("grid");
    }
  
    function toggleView(view) {
      // Toggle the display view
      display.classList.toggle("grid", view === "grid");
      display.classList.toggle("list", view === "list");
  
      // Update button styling
      gridButton.classList.toggle("active", view === "grid");
      listButton.classList.toggle("active", view === "list");
  
      // Update icons (assuming Font Awesome or similar)
      gridIcon.className = view === "grid" ? "fa-solid fa-th-large" : "fa-regular fa-th-large";
      listIcon.className = view === "list" ? "fa-solid fa-list" : "fa-regular fa-list";
    }
  
    gridButton.addEventListener("click", () => toggleView("grid"));
    listButton.addEventListener("click", () => toggleView("list"));
  });
  