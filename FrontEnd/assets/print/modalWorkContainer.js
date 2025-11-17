import {sanitizeClassName} from "../utils/sanitizer.js";

export function createWorkContainer(categoryName) {
    const workContainer = document.createElement('figure');

    workContainer.classList.add('workItem');
    workContainer.classList.add(sanitizeClassName(categoryName));

    return workContainer;
}

export function createDeleteWorkButton(workContainer) {
    const closeButton = document.createElement('button');
    closeButton.classList.add('deleteWork');
    closeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    closeButton.setAttribute('aria-label', 'Supprimer le projet');
    workContainer.appendChild(closeButton);
    return closeButton;
}

export function createImageWork(url, title, workContainer) {
    const workImage = document.createElement('img');
    workImage.src = url
    workImage.alt = title
    workContainer.appendChild(workImage);
}