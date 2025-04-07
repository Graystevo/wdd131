document.addEventListener("DOMContentLoaded", () => {
  const url = "./data/rentals.json";
  const tableBody = document.querySelector("table tbody");

  async function getRentalData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      updateRentalTable(data.pricing.max_rental_pricing.reservation);
    } catch (error) {
      console.error("Error fetching rental data:", error);
    }
  }

  function updateRentalTable(rentals) {
    // Clear any existing rows in the tbody
    tableBody.innerHTML = "";

    for (let rentalType in rentals) {
      const rental = rentals[rentalType];
      const row = document.createElement("tr");

      // Rental Type
      const cellType = document.createElement("td");
      cellType.textContent = rentalType;
      cellType.style.padding = "8px";
      row.appendChild(cellType);

      // Max Persons
      const cellMaxPersons = document.createElement("td");
      cellMaxPersons.textContent = rental.max_persons;
      cellMaxPersons.style.padding = "8px";
      row.appendChild(cellMaxPersons);

      // Half Day (Reservation)
      const cellHalfDay = document.createElement("td");
      cellHalfDay.textContent = `$${rental.half_day}`;
      cellHalfDay.style.padding = "8px";
      row.appendChild(cellHalfDay);

      // Full Day (Reservation)
      const cellFullDay = document.createElement("td");
      cellFullDay.textContent = `$${rental.full_day}`;
      cellFullDay.style.padding = "8px";
      row.appendChild(cellFullDay);

      tableBody.appendChild(row);
    }
  }

  getRentalData();
});
