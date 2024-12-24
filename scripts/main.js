function countWords() {
    const fileInput = document.getElementById('fileInput').files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const text = event.target.result;
        const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
        const charCount = text.length;

        document.getElementById('result').innerText = `Words: ${wordCount}, Characters: ${charCount}`;
    };

    if (fileInput) {
        reader.readAsText(fileInput);
    } else {
        document.getElementById('result').innerText = "Please select a file.";
    }
}
