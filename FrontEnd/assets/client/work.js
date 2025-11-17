export async function getWorks() {
    return await fetch('http://localhost:5678/api/works');
}

export async function deleteWork(id) {
    const url = `http://localhost:5678/api/works/${id}`;
    return await fetch(url, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        }
    });
}

export async function addWork(formData) {
    const url = 'http://localhost:5678/api/works';
    return await fetch(url, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: formData
    });
}