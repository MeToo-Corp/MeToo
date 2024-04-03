document.addEventListener('DOMContentLoaded', (event) => {
    const navbarHTML = `
        <div class="navbar">
            <a href="Home_Page.html">Home</a>
            <a href="Bank_Files.html" class="current">Bank Files</a>
            <a href="Data_and_Links.html">Links and Data for Calculation</a>
        </div>
    `;

    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});