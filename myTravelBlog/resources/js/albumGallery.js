const album = document.getElementById('album');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');

const page1 = document.querySelector('#p1');
const page2 = document.querySelector('#p2');
const page3 = document.querySelector('#p3');
const frontCover = document.querySelector('#album-front-cover');
const backCover = document.querySelector('#album-back-cover');

prevPage.addEventListener('click', goPrevPage);
nextPage.addEventListener('click', goNextPage);

let currentPage = 1;
let numOfPages = 3;
let maxPage = numOfPages + 3;

function openAlbum() {
    album.style.transform = 'translateX(50%)';
    prevPage.style.transform = 'translateX(-180px)';
    nextPage.style.transform = 'translateX(180px)';
}

function closeAlbum(isAtBeginning) {
    if (isAtBeginning) {
        album.style.transform = 'translateX(0%)';
    } else {
        album.style.transform = 'translateX(100%)';
    }
    prevPage.style.transform = 'translateX(0px)';
    nextPage.style.transform = 'translateX(0px)';
}

function goNextPage() {
    if (currentPage < maxPage) {
        switch (currentPage) {
            case 1:
                openAlbum();
                frontCover.classList.add('flipped');
                frontCover.style.zIndex = 1;
                break;
            case 2:
                page1.classList.add('flipped');
                page1.style.zIndex = 2;
                break;
            case 3:
                page2.classList.add('flipped');
                page2.style.zIndex = 3;
                break;
            case 4:
                page3.classList.add('flipped');
                page3.style.zIndex = 4;
                break;
            case 5:
                backCover.classList.add('flipped');
                backCover.style.zIndex = 5;
                closeAlbum(false);
                break;
            default:
                throw new Error('unknown page');
        }
        currentPage++;
    }
}

function goPrevPage() {
    if (currentPage > 1) {
        switch (currentPage) {
            case 2:
                closeAlbum(true);
                frontCover.classList.remove('flipped');
                frontCover.style.zIndex = 5;
                break;
            case 3:
                page1.classList.remove('flipped');
                page1.style.zIndex = 4;
                break;
            case 4:
                page2.classList.remove('flipped');
                page2.style.zIndex = 3;
                break;
            case 5:
                openAlbum();
                page3.classList.remove('flipped');
                page3.style.zIndex = 2;
                break;
            case 6:
                openAlbum();
                backCover.classList.remove('flipped');
                backCover.style.zIndex = 1;
                break;
            default:
                throw new Error('unknown page');
        }
        currentPage--;
    }
}


const openAlbumBtn = document.getElementById('openAlbum');
const closeAlbumBtn = document.getElementById('closeAlbum');
const albumOverlay = document.getElementById('albumOverlay');

openAlbumBtn.addEventListener("click", () => {
    currentPage = 1;
    frontCover.classList.remove('flipped');
    backCover.classList.remove('flipped');
    page1.classList.remove('flipped');
    page2.classList.remove('flipped');
    page3.classList.remove('flipped');

    frontCover.style.zIndex = 5;
    page1.style.zIndex = 4;
    page2.style.zIndex = 3;
    page3.style.zIndex = 2;
    backCover.style.zIndex = 1;

    album.style.transform = 'translateX(0%)';
    prevPage.style.transform = 'translateX(0px)';
    nextPage.style.transform = 'translateX(0px)';

    albumOverlay.classList.add("open");
});
closeAlbumBtn.addEventListener("click", () => {
    albumOverlay.classList.remove("open");
});

const openDeleteAlbum = document.getElementById("openDeleteAlbum");
const closeDeleteAlbum = document.getElementById("closeDeleteAlbum");
const deleteAlbum = document.getElementById("deleteAlbum");

openDeleteAlbum.addEventListener("click", () => {
    deleteAlbum.classList.add("open");
})

closeDeleteAlbum.addEventListener("click", () => {
    deleteAlbum.classList.remove("open");
})