document.addEventListener("DOMContentLoaded", () => {
    const url = "./data/members.json";
  
    async function getMemberData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        displaySpotlightMembers(data.companies);
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    }
  
    function displaySpotlightMembers(members) {
      // Filter for members with Silver or Gold membership levels
      const filteredMembers = members.filter(member => 
        member.membership_level === "Silver" || member.membership_level === "Gold"
      );
  
      // Shuffle the filtered members randomly
      const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());
  
      // Select up to three members for the spotlight
      const selectedMembers = shuffledMembers.slice(0, 2);
  
      // For each selected member, update the corresponding spotlight card
      selectedMembers.forEach((member, index) => {
        const cardId = `spotlight-card${index + 1}`;
        const card = document.getElementById(cardId);
        if (card) {
          card.innerHTML = `
            <h4>${member.name}</h4>
            <img src="./images/${member.image}" alt="${member.name} Logo" loading="lazy">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
          `;
        }
      });
    }
  
    getMemberData();
  });
  