document.getElementById('upload-form').addEventListener('submit', function(event) {
    const fileInput = document.getElementById('file-input');
    const loadingDiv = document.getElementById('loading');

    if (fileInput.files.length === 0) {
        event.preventDefault();
        alert('Please select an image file.');
        return;
    }

    loadingDiv.style.display = 'block';
});
