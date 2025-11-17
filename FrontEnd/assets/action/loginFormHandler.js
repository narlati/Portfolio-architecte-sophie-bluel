import { login } from '../client/auth.js';
import { showError } from '../print/errorDisplay.js';

export async function handleLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        const response = await login(email, password)
        if (!response.ok) {
            showError("Email ou mot de passe incorrect.");
            return;
        }

        const dataResponse = await response.json();
        const token = dataResponse.token;
        localStorage.setItem("token", token);
        window.location.href = "index.html";
    } catch(error) {
        showError("Une erreur est survenue. Veuillez réessayer.");
    }
}