    // JavaScript for basic form validation
    document.getElementById('loginForm').onsubmit = function(event) {
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();

        if (email === "" || password === "") {
            alert('Please enter both email and password to login.');
            event.preventDefault(); // Prevent form submission
        }
    };