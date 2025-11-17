import { sanitizeClassName } from '../utils/sanitizer.js';

export function renderWorks(works) {
    let galleryContainer = document.querySelector('.gallery');

    galleryContainer.innerHTML = '';

    if (works && Array.isArray(works)) {
        works.forEach(work => {
            const workContainer = document.createElement('figure');
            workContainer.classList.add('work');
            workContainer.classList.add(sanitizeClassName(work.category.name));
            galleryContainer.appendChild(workContainer);

            const workImage = document.createElement('img');
            workImage.src = work.imageUrl
            workImage.alt = work.title
            workContainer.appendChild(workImage);

            const workFigCaption = document.createElement('figcaption');
            workFigCaption.textContent = work.title;
            workContainer.appendChild(workFigCaption);
        })
    }
}