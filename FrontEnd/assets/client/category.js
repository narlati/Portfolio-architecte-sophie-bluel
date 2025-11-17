export async function getCategories() {
    return await fetch('http://localhost:5678/api/categories');
}