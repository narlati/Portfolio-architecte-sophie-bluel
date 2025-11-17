import { sanitizeClassName } from '../utils/sanitizer.js';

export function renderCategories(categories) {
    let categoriesContainer = document.querySelector('.categories');

    if (categories && Array.isArray(categories)) {
        if (categories.length > 1) {
            const categoryContainer = document.createElement('button');
            categoryContainer.classList.add('category');
            categoryContainer.id = 'category-active';
            categoryContainer.innerHTML = "Tous";
            categoriesContainer.appendChild(categoryContainer);
        }

        categories.forEach(category => {
            const categoryContainer = document.createElement('button');
            categoryContainer.classList.add('category');
            categoryContainer.textContent = category.name;
            categoriesContainer.appendChild(categoryContainer);
        })

        let categoryList = document.querySelectorAll('.category');
        selectCategory(categoryList);
    }
}

export function selectCategory(categoryList) {
    categoryList.forEach(category => {
        let categoryNameSanitize = sanitizeClassName(category.textContent);
        category.addEventListener('click', function () {
            categoryList.forEach(category => {
                category.removeAttribute('id');
            });
            this.id = 'category-active';

            let workList = document.querySelectorAll('.work');
            workList.forEach(work => {
                if ('tous' === categoryNameSanitize) {
                    work.classList.remove('hide');
                } else if (!work.classList.contains(categoryNameSanitize)) {
                    work.classList.add('hide');
                } else {
                    work.classList.remove('hide');
                }
            })
        });
    })
}
