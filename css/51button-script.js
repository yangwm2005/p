(function () {
    // Hotspot toggle
    const hotspot = document.querySelector(".hotspot");
    const buttonContainer = document.querySelector(".button-container");

    if (hotspot && buttonContainer) {
        hotspot.addEventListener("click", function () {
            const isVisible = buttonContainer.classList.toggle("visible");
            hotspot.style.bottom = isVisible ? "15px" : "10px"; // Slight lift when buttons show
        });
    }

    // Button functionality
    const buttons = document.querySelectorAll(".circle-button");
    const slideOutWindow = document.getElementById("slide-out-window");
    const slideOutIframe = document.getElementById("slide-out-iframe");
    const closeButton = document.getElementById("close-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const link = button.getAttribute("data-link");
            slideOutIframe.src = link;
            slideOutWindow.classList.add("active");
            // Buttons stay visible when slide-out opens
        });
    });

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            slideOutWindow.classList.remove("active");
            slideOutIframe.src = "";
            buttonContainer.classList.remove("visible"); // Hide buttons when closing
            hotspot.style.bottom = "10px"; // Reset hotspot position
        });
    }
})();