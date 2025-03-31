document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".circle-button");
    const slideOutWindow = document.getElementById("slide-out-window");
    const slideOutIframe = document.getElementById("slide-out-iframe");
    const closeButton = document.getElementById("close-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const link = button.getAttribute("data-link");
            slideOutIframe.src = link;
            slideOutWindow.classList.add("active");
        });
    });

    closeButton.addEventListener("click", function () {
        slideOutWindow.classList.remove("active");
        slideOutIframe.src = ""; // Clear the iframe content
    });
});