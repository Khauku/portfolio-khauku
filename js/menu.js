
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const icon = toggle.querySelector("i");

    if (toggle && mobileMenu && icon) {
        toggle.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("open");
            toggle.classList.toggle("open");

            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    /* log out button */ 
    const logoutBtn = document.querySelector("#logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.clear();
            alert("You have been logged out.");
            window.location.href = "/index.html";
        });
    }
});