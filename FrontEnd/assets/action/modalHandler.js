import {deleteWork, getWorks, addWork} from '../client/work.js';
import { printWorksOnModal } from '../administrateGallery.js';
import { showGallery, resetAddWorkForm, clearGalleryModal } from '../print/modalDisplay.js';
import { renderWorks } from '../print/galleryWorksDisplay.js';
import { showWorkFormError, clearWorkFormError } from '../print/errorDisplay.js';

export async function handleWorkDeletion(workContainer, imageUrl, workId) {
    try {
        await deleteWork(workId);
        const works = await getWorks();

        if (works.ok) {
            const dataWorks = await works.json();
            
            await renderWorks(dataWorks);
            
            clearGalleryModal();
            await printWorksOnModal(dataWorks);
        }

    } catch (error) {
        throw error;
    }
}

export async function handleAddWorkForm(event) {
    event.preventDefault();
    
    clearWorkFormError();
    
    try {
        const workImage = document.getElementById("workImage").files[0];
        const workTitle = document.getElementById("workTitle").value;
        const workCategory = document.getElementById("workCategory").value;

        if (!workImage) {
            showWorkFormError("Veuillez sélectionner une image.");
            return;
        }

        if (!workTitle.trim()) {
            showWorkFormError("Veuillez saisir un titre.");
            return;
        }

        if (!workCategory) {
            showWorkFormError("Veuillez sélectionner une catégorie.");
            return;
        }

        const formData = new FormData();
        formData.append("image", workImage);
        formData.append("title", workTitle);
        formData.append("category", workCategory);

        const response = await addWork(formData);

        if (!response.ok) {
            if (response.status === 400) {
                showWorkFormError("Les données du formulaire sont invalides.");
            } else if (response.status === 401) {
                showWorkFormError("Vous devez être connecté pour ajouter un projet.");
            } else if (response.status === 500) {
                showWorkFormError("Erreur serveur. Veuillez réessayer plus tard.");
            } else {
                showWorkFormError("Une erreur est survenue lors de l'ajout du projet.");
            }
            return;
        }

        const works = await getWorks();
        if (works.ok) {
            const dataWorks = await works.json();
            
            await renderWorks(dataWorks);
            
            clearGalleryModal();
            await printWorksOnModal(dataWorks);
        }

        resetAddWorkForm();
        clearWorkFormError();
        showGallery();

    } catch (error) {
        showWorkFormError("Une erreur est survenue. Veuillez réessayer.");
    }
}