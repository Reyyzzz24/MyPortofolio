// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav"); // pastikan ini memilih elemen <nav>

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active"); 
        burger.classList.toggle("toggle-burger"); // Periksa apakah toggle-burger sudah diterapkan di CSS
    });
};

navSlide();

// Clear form before undo
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};
