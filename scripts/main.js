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

// Smooth Drag Scroll untuk Portfolio
/* const initDragScroll = () => {
    const container = document.querySelector(".grid-3");
    if (!container) return; // Hindari error jika elemen tidak ditemukan

    let isDown = false;
    let startX, startY;
    let scrollLeft;
    let isDragging = false;
    let isHorizontalScroll = false;

    container.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX;
        startY = e.pageY;
        scrollLeft = container.scrollLeft;
        isDragging = false;
        isHorizontalScroll = false;
        container.style.cursor = "grabbing"; // Ubah cursor saat drag
    });

    container.addEventListener("mouseleave", () => {
        isDown = false;
        container.style.cursor = "grab";
    });

    container.addEventListener("mouseup", () => {
        isDown = false;
        container.style.cursor = "grab";
    });

    container.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        const xDiff = e.pageX - startX;
        const yDiff = e.pageY - startY;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            isDragging = true;
            isHorizontalScroll = true;
            container.scrollLeft = scrollLeft - xDiff * 2;
            e.preventDefault(); // Cegah scroll vertikal saat geser horizontal
        }
    });

    // Handle touch event untuk mobile
    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
        scrollLeft = container.scrollLeft;
        isDragging = false;
        isHorizontalScroll = false;
    }, { passive: true });

    container.addEventListener("touchmove", (e) => {
        const xDiff = e.touches[0].pageX - startX;
        const yDiff = e.touches[0].pageY - startY;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            isHorizontalScroll = true;
            container.scrollLeft = scrollLeft - xDiff * 2;
            e.preventDefault(); // Cegah scroll vertikal hanya saat geser horizontal
        }
    }, { passive: false });

    container.addEventListener("touchend", () => {
        isDragging = false;
        isHorizontalScroll = false;
    });
};

// Jalankan fungsi setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
    navSlide();
    initDragScroll();
}); */
