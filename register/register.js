function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date<span>*</span></label>
                <input id="date${count}" type="date" name="date" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select id="grade${count}">
                    <option value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const addButton = document.getElementById('add');
    const participantsFieldset = document.querySelector('.participants');
    
    addButton.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        
        addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });
});

// Function to calculate the total fees
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]"); // Select all fee fields
    feeElements = [...feeElements];
    
    // Calculate the sum of all fees using reduce()
    let total = feeElements.reduce((sum, feeElement) => {
        return sum + parseFloat(feeElement.value) || 0;
    }, 0);
    
    return total;
}

// Function to generate the success message template
function successTemplate(info) {
    return `
        <p>Thank you ${info.adultName} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFees} in Fees.</p>
    `;
}

// Register form submission event handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const summarySection = document.getElementById('summary');
    const formContainer = document.querySelector('.testbox');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload
        
        // Get the adult's name
        const adultName = document.getElementById('adult_name').value;

        // Count the number of participants
        const participantCount = document.querySelectorAll('.participant1').length;

        // Calculate the total fees
        const totalFeesAmount = totalFees();

        // Generate success message
        const info = {
            adultName: adultName,
            participantCount: participantCount,
            totalFees: totalFeesAmount.toFixed(2) // Format to 2 decimal places
        };
        const successMessage = successTemplate(info);

        // Hide the form and show the summary
        formContainer.style.display = 'none'; // Hide the form
        summarySection.style.display = 'block'; // Show the summary
        summarySection.innerHTML = successMessage; // Insert the success message
    });
});



