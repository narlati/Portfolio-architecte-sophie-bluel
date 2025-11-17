export function showAddWorkForm() {
    const backButton = document.getElementById('backButton');
    const slide1 = document.getElementById("modalSlide1");
    const slide2 = document.getElementById("modalSlide2");

    slide1.style.display = 'none';
    backButton.style.display = 'block';
    slide2.style.display = 'block';
    
    const errorElement = document.getElementById("work-form-error-message");
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
    
    setupImagePreview();
}

export function showGallery() {
    const backButton = document.getElementById('backButton');
    const slide1 = document.getElementById("modalSlide1");
    const slide2 = document.getElementById("modalSlide2");

    slide1.style.display = 'block';
    backButton.style.display = 'none';
    slide2.style.display = 'none';
}

export function showAddWorkButton() {
    const slide1 = document.getElementById("modalSlide1");
    const addWorkButton = document.createElement("button");

    addWorkButton.classList.add("addWorkButton");
    addWorkButton.textContent = "Ajouter une photo";
    slide1.appendChild(addWorkButton);
}

export function removeWorkContainer() {
    const galleryModalContainer = document.querySelector(".galleryModal");
    galleryModalContainer.innerHTML = '';

    const addWorkButton = document.querySelector(".addWorkButton");
    if (addWorkButton) {
        addWorkButton.remove();
    }
}

export function clearGalleryModal() {
    const galleryModalContainer = document.querySelector(".galleryModal");
    galleryModalContainer.innerHTML = '';
}

export function resetAddWorkForm() {
    const form = document.getElementById("formAddWork");
    form.reset();
    
    const preview = document.getElementById("imagePreview");
    const placeholder = document.getElementById("uploadPlaceholder");
    
    if (preview) {
        preview.src = "";
        preview.style.display = "none";
    }
    
    if (placeholder) {
        placeholder.style.display = "flex";
    }
    
    const errorElement = document.getElementById("work-form-error-message");
    if (errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }
}

function setupImagePreview() {
    const workImageInput = document.getElementById("workImage");
    const imagePreview = document.getElementById("imagePreview");
    const uploadPlaceholder = document.getElementById("uploadPlaceholder");
    
    const newWorkImageInput = workImageInput.cloneNode(true);
    workImageInput.parentNode.replaceChild(newWorkImageInput, workImageInput);
    
    newWorkImageInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const maxSize = 4 * 1024 * 1024;
            if (file.size > maxSize) {
                alert("La taille du fichier ne doit pas dépasser 4 Mo.");
                newWorkImageInput.value = "";
                return;
            }
            
            const allowedTypes = ["image/jpeg", "image/png"];
            if (!allowedTypes.includes(file.type)) {
                alert("Seuls les fichiers JPG et PNG sont acceptés.");
                newWorkImageInput.value = "";
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
                uploadPlaceholder.style.display = "none";
            };
            reader.readAsDataURL(file);
        }
    });
}

export async function populateCategorySelect(categories) {
    const selectElement = document.getElementById("workCategory");
    
    selectElement.innerHTML = "";
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Sélectionnez une catégorie";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);
    
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.textContent = category.name;
        selectElement.appendChild(option);
    });
}