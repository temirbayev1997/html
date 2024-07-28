document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButton = document.querySelector(".close-button");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.classList.remove("fade-out");
            modal.style.display = "block";
            modal.classList.add("fade-in");
        });
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500); // Длительность анимации должна совпадать с CSS-анимацией
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.classList.remove("fade-in");
            modal.classList.add("fade-out");
            setTimeout(() => {
                modal.style.display = "none";
            }, 500); // Длительность анимации должна совпадать с CSS-анимацией
        }
    });
});