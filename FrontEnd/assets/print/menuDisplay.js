import {createConnectedBanner, createUpdateGalleryButton} from "./connectedBanner.js";
import { logout} from "../utils/logout.js";

export function updateAuthButton() {
    const loginButton = document.querySelector('.login');
    const token = localStorage.getItem('token');

    if (token) {
        loginButton.textContent = 'Logout';
        loginButton.addEventListener('click', function(event) {
            logout(event);
        });

        createConnectedBanner();
        createUpdateGalleryButton();
    }
}
