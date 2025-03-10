const form = document.getElementById("form");
document.addEventListener("DOMContentLoaded", function () {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const contactField = document.getElementById("contact");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirmpassword");
    const cityField = document.getElementById("city");
    const countryField = document.getElementById("country");
    const successMessage = document.getElementById("successMessage");

    const togglePassword = document.getElementById("togglePassword");
    const toggleConfirmPassword = document.getElementById("togglePasswordconfirm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let isValid = true;

        // Name Validation
        if (nameField.value.trim() === "") {
            showError(nameField, "Full Name is required");
            isValid = false;
        } else {
            showSuccess(nameField);
        }

        // Email Validation
        if (!validateEmail(emailField.value)) {
            showError(emailField, "Enter a valid email address");
            isValid = false;
        } else {
            showSuccess(emailField);
        }

        // Contact Number Validation
        if (!validateContact(contactField.value)) {
            showError(contactField, "Enter a valid 10-digit contact number");
            isValid = false;
        } else {
            showSuccess(contactField);
        }

        // Password Validation
        if (passwordField.value.length < 6) {
            showError(passwordField, "Password must be at least 6 characters");
            isValid = false;
        } else {
            showSuccess(passwordField);
        }

        // Confirm Password Validation
        if (confirmPasswordField.value !== passwordField.value) {
            showError(confirmPasswordField, "Passwords do not match");
            isValid = false;
        } else {
            showSuccess(confirmPasswordField);
        }

        // City Validation
        if (cityField.value.trim() === "") {
            showError(cityField, "City is required");
            isValid = false;
        } else {
            showSuccess(cityField);
        }

        // Country Validation
        if (countryField.value.trim() === "") {
            showError(countryField, "Country is required");
            isValid = false;
        } else {
            showSuccess(countryField);
        }

        // show success message
        if (isValid) {
            successMessage.textContent = "Form submitted successfully!";
            successMessage.style.color = "green";
            successMessage.style.display = "block";
            form.reset();
        } else {
            successMessage.textContent = "";
        }
    });

    // Function to show error message
    function showError(input, message) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.style.color = "red";
        errorSpan.style.display = "block";
    }

    // Function to clear error message
    function showSuccess(input) {
        const errorSpan = input.nextElementSibling;
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
    }

    // Function to validate email 
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }

    // Function to validate contact number 
    function validateContact(contact) {
        const re = /^[0-9]{10}$/;
        return re.test(contact);
    }

    // Toggle password visibility
    togglePassword.addEventListener("click", function () {
        toggleVisibility(passwordField, togglePassword);
    });

    toggleConfirmPassword.addEventListener("click", function () {
        toggleVisibility(confirmPasswordField, toggleConfirmPassword);
    });

    function toggleVisibility(field, button) {
        if (field.type === "password") {
            field.type = "text";
            button.textContent = "👁️‍🗨️"; // Change icon
        } else {
            field.type = "password";
            button.textContent = "👁️"; // Reset icon
        }
    }
});
