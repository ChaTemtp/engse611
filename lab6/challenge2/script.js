document.addEventListener("DOMContentLoaded", function () {
    let paragraphs = document.querySelectorAll("p"); // Select all <p> elements

    paragraphs.forEach(function (p) {
        if (p.textContent === "Llamas and Chickens!") { // Check if the paragraph contains the specific text
            p.style.color = "red"; // Change the color to red
        }
    });
});
