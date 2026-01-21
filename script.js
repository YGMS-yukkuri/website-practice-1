const header = document.querySelector("header");
const headerBtn = document.querySelector("header button");


const changeHeader = () => {
    if (window.scrollY !== 0) {
        header.classList.add("leave");
        headerBtn.classList.add("leave");
    } else {
        header.classList.remove("leave");
        headerBtn.classList.remove("leave");
    };
}
window.addEventListener("scroll", () => {
    changeHeader();
});


changeHeader();