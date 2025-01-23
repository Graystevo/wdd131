const themeSelector = document.querySelector('#theme'); // replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {
    // Check the value of the themeSelector
    if (themeSelector.value === 'dark') {
        // Add the dark class to the body
        document.body.classList.add('dark');
        // Change the logo to the white version
        document.querySelector('.logo').src = './images/byui-logo_white.png';
    } else {
        // Remove the dark class from the body
        document.body.classList.remove('dark');
        // Change the logo to the blue version
        document.querySelector('.logo').src = './images/byui-logo_blue.webp';
    }
}
// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);