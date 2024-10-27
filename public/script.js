document.getElementById('getTextBtn').addEventListener('click', () => {
    uploadImage('/get-text');
});

document.getElementById('getBBoxesBtn').addEventListener('click', () => {
    uploadImage('/get-bboxes', { type: 'word' });
});

function uploadImage(endpoint, additionalData = {}) {
    const fileInput = document.getElementById('image');
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    // Append additional data if any
    for (const key in additionalData) {
        formData.append(key, additionalData[key]);
    }

    fetch(endpoint, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error('Error:', error));
}
