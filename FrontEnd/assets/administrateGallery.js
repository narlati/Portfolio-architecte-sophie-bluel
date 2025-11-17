import { getWorks } from './client/work.js';
import { getCategories } from './client/category.js';
import { renderWorks } from './print/galleryWorksDisplay.js';
import {showAddWorkForm, showGallery, showAddWorkButton, removeWorkContainer, populateCategorySelect } from './print/modalDisplay.js';
import {createDeleteWorkButton, createImageWork, createWorkContainer } from "./print/modalWorkContainer.js";
import { handleWorkDeletion, handleAddWorkForm } from "./action/modalHandler.js";

const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");
const closeButton2 = document.querySelector(".close-slide2");
const backButton = document.getElementById('backButton');
const backButton2 = document.getElementById('backButton2');

function printWorkInModal(work) {

    const galleryModalContainer = document.querySelector(".galleryModal");
    const workContainer = createWorkContainer(work.category.name);
    galleryModalContainer.appendChild(workContainer);
    createImageWork(work.imageUrl, work.title, workContainer);
    const closeButton = createDeleteWorkButton(workContainer);
    closeButton.addEventListener('click', () => {
        handleWorkDeletion(workContainer, work.imageUrl, work.id)
    });
}

export async function printWorksOnModal(works) {
    works.forEach(work => {
        printWorkInModal(work);
    })
}

async function openModal() {
    modal.style.display = "block";
    const works = await getWorks();

    if (works.ok) {
        const dataWorks = await works.json();
        await printWorksOnModal(dataWorks);
    }
    
    const categories = await getCategories();
    if (categories.ok) {
        const dataCategories = await categories.json();
        await populateCategorySelect(dataCategories);
    }
    
    showAddWorkButton();
    document.querySelector('.addWorkButton').addEventListener('click', showAddWorkForm);
    showGallery();
    
    const form = document.getElementById('formAddWork');
    form.addEventListener('submit', handleAddWorkForm);
}

async function closeModal() {
    removeWorkContainer();
    const works = await getWorks();
    if (!works.ok) {
        throw new Error(`Erreur HTTP: ${works.status}`);
    }
    const dataWorks = await works.json();
    await renderWorks(dataWorks);

    modal.style.display = "none";
}

document.getElementById("administrateGallery").addEventListener('click', openModal);

closeButton.addEventListener("click", closeModal);
closeButton2.addEventListener("click", closeModal);
backButton.addEventListener('click', showGallery);
backButton2.addEventListener('click', showGallery);

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});


