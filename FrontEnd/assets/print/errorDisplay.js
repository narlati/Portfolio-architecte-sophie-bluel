export function showError(message) {
    const errorElement = document.getElementById("login-error-message");
    errorElement.textContent = message;
}

export function showWorkFormError(message) {
    const errorElement = document.getElementById("work-form-error-message");
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
}

export function clearWorkFormError() {
    const errorElement = document.getElementById("work-form-error-message");
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
}