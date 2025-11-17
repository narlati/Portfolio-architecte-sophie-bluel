import { getCategories } from '../client/category.js';
import { renderCategories } from '../print/categoryDisplay.js';
import { getWorks } from '../client/work.js';
import { renderWorks } from '../print/galleryWorksDisplay.js';
import { updateAuthButton } from "../print/menuDisplay.js";

export async function handleHomePage(event) {
    const categories = await getCategories();
    if (!categories.ok) {
        throw new Error(`Erreur HTTP: ${categories.status}`);
    }

    const dataCategories = await categories.json();
    renderCategories(dataCategories);

    const works = await getWorks();

    if (!works.ok) {
        throw new Error(`Erreur HTTP: ${works.status}`);
    }

    const dataWorks = await works.json();
    renderWorks(dataWorks);

    updateAuthButton();
}