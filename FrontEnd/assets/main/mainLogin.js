import { handleLoginForm } from '../action/loginFormHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("login-form").addEventListener("submit", handleLoginForm);
});