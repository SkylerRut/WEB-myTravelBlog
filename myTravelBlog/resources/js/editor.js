// Map overlay
const openMapBtn = document.getElementById('openMap');
const closeMapBtn = document.getElementById('closeMap');
const mapOverlay = document.getElementById('mapOverlay');

openMapBtn.addEventListener("click", () => {
    mapOverlay.classList.add("open");
    setTimeout(() => map.invalidateSize(), 100);
});
closeMapBtn.addEventListener("click", () => {
    mapOverlay.classList.remove("open");
});


// Text formatting
const boldTextBtn = document.getElementById('boldTextBtn');
const italicTextBtn = document.getElementById('italicTextBtn');
const underlineTextBtn = document.getElementById('underlineTextBtn');
const listTaskBtn = document.getElementById('listTaskBtn');

let savedSelection = null;

document.getElementById('album-description').addEventListener('mouseup', () => {
    savedSelection = window.getSelection().getRangeAt(0);
});

function applyFormat(command) {
    if (savedSelection) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedSelection);
    }
    document.execCommand(command);
}

boldTextBtn.addEventListener("click", () => applyFormat('bold'));
italicTextBtn.addEventListener("click", () => applyFormat('italic'));
underlineTextBtn.addEventListener("click", () => applyFormat('underline'));
listTaskBtn.addEventListener("click", () => applyFormat('insertUnorderedList'));


// Date range picker
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

// Image preview
document.getElementById('uploadImageBtn').addEventListener('click', () => {
    document.getElementById('imageUploadInput').click();
});

const fileInput = document.getElementById('imageUploadInput');
const previewBox = document.getElementById('imagePreviewBox');

function loadFile() {
    previewBox.innerHTML +=
        `<img src="${this.result}"/>`;
}

function addMultipleFiles() {
    for (const file of this.files) {
        let reader = new FileReader();
        reader.addEventListener("load", loadFile);
        reader.readAsDataURL(file);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fileInput.addEventListener("change", addMultipleFiles);
});