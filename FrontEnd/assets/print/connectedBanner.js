export function createConnectedBanner() {
    if (document.getElementById('connected-banner')) {
        return;
    }

    const connectedBanner = document.createElement('div');
    connectedBanner.id = 'connected-banner';
    connectedBanner.innerHTML = '<p>Mode édition</p>';

    document.body.insertBefore(connectedBanner, document.body.firstChild);
}

export function createUpdateGalleryButton() {
    const updateGalleryButton = document.getElementById('administrateGallery');
    updateGalleryButton.style.display = 'flex';
}

export function removeConnectedBanner() {
    const connectedBanner = document.getElementById('connected-banner');
    if (connectedBanner) {
        connectedBanner.remove();
    }
}

export function removeUpdateGalleryButton() {
    const updateGalleryButton = document.getElementById('administrateGallery');
    updateGalleryButton.style.display = 'none';
}