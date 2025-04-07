const msToDays = 86400000;
const theDateToday = new Date();

const sidebarContent = document.getElementById('visits');
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    sidebarContent.innerHTML = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = new Date(lastVisit);
    const timeDifference = theDateToday - lastVisitDate;
    const daysSinceLastVisit = Math.floor(timeDifference / msToDays);

    if (daysSinceLastVisit < 1) {
        sidebarContent.innerHTML = "Back so soon! Awesome!";
    } else {
        const dayText = daysSinceLastVisit === 1 ? 'day' : 'days';
        sidebarContent.innerHTML = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
    }
}

// Always update localStorage with the current visit date
localStorage.setItem('lastVisit', theDateToday.toISOString());

