import {removeConnectedBanner, removeUpdateGalleryButton} from "../print/connectedBanner.js";

export function logout(event) {
    event.preventDefault();
    localStorage.removeItem('token');
    removeConnectedBanner();
    removeUpdateGalleryButton()
    window.location.reload();
}