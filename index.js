var imageList = [
    "./assets/img/bg_ispace.jpg",
    "./assets/img/bg1.jpg",
    "./assets/img/bg2.jpg",
    "./assets/img/bg3.jpg",
];

var currentIndex = 0;
var bgImage = document.getElementById("bg-image");
function changeImage() {
    currentIndex++;
    if (currentIndex >= imageList.length) {
        currentIndex = 0;
    }
    bgImage.src = imageList[currentIndex];
}
setInterval(changeImage, 7000);

const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    if (nav.classList.contains("openSearch")) {
        searchIcon.classList.remove(
            "fa-sharp",
            "fa-solid",
            "fa-magnifying-glass"
        );
        searchIcon.classList.add("fa-regular", "fa-circle-xmark");
    } else {
        searchIcon.classList.remove("fa-regular", "fa-circle-xmark");
        searchIcon.classList.add("fa-sharp", "fa-solid", "fa-magnifying-glass");
    }
});
