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

/* Dot Section */

document.addEventListener("DOMContentLoaded", function () {
    const portfolioWrapper = document.querySelector(".grid-3"); // Wrapper yang bisa di-scroll
    const portfolios = document.querySelectorAll(".portofolio");
    const dotContainer = document.querySelector(".dot-navigation");

    if (!portfolios.length || !dotContainer || !portfolioWrapper) return;

    function updateDots() {
        if (window.innerWidth <= 640) {
            dotContainer.innerHTML = ""; // Bersihkan dot sebelumnya

            // Buat dot sesuai jumlah portofolio
            portfolios.forEach((_, index) => {
                const dot = document.createElement("div");
                dot.classList.add("dot");
                dot.dataset.index = index;
                dotContainer.appendChild(dot);
            });

            dotContainer.style.display = "flex"; // Tampilkan dot
            addDotListeners();
            activateDot(0); // Set dot pertama sebagai aktif
        } else {
            dotContainer.style.display = "none"; // Sembunyikan dot
        }
    }

    function activateDot(index) {
        const dots = document.querySelectorAll(".dot");
        dots.forEach(dot => dot.classList.remove("active"));
        if (dots[index]) {
            dots[index].classList.add("active");
        }
    }

    function addDotListeners() {
        document.querySelectorAll(".dot").forEach(dot => {
            dot.addEventListener("click", function () {
                const index = parseInt(this.dataset.index);
                const scrollPosition = portfolios[index].offsetLeft - portfolioWrapper.offsetLeft;
                
                portfolioWrapper.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
                });
            });
        });
    }

    function updateActiveDotOnScroll() {
        const scrollLeft = portfolioWrapper.scrollLeft;
        const itemWidth = portfolios[0].offsetWidth; // Lebar satu item grid
        const activeIndex = Math.round(scrollLeft / itemWidth); // Hitung item yang sedang terlihat

        activateDot(activeIndex); // Update dot aktif
    }

    portfolioWrapper.addEventListener("scroll", updateActiveDotOnScroll);
    window.addEventListener("resize", updateDots);

    updateDots();
});

/* Dark theme/Light theme section */

document.addEventListener("DOMContentLoaded", function () {
    const THEME_KEY = "theme";
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    // Cek preferensi tema sebelumnya
    if (localStorage.getItem(THEME_KEY) === "dark") {
        body.classList.add("dark-theme");
        if (themeIcon) themeIcon.src = "images/icons/light.svg"; // Ganti ikon jadi matahari
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        // Simpan preferensi pengguna & ubah ikon
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem(THEME_KEY, "dark");
            if (themeIcon) themeIcon.src = "images/icons/light.svg"; // Matahari untuk mode terang
        } else {
            localStorage.setItem(THEME_KEY, "light");
            if (themeIcon) themeIcon.src = "images/icons/dark.svg"; // Bulan untuk mode gelap
        }
    });
    if (document.body.classList.contains("dark-theme")) {
        document.documentElement.style.setProperty("--background-color", "#121212");
    } else {
        document.documentElement.style.setProperty("--background-color", "#ffffff");
    }
});

