function changeText() {
    document.getElementById("demo").innerText = "Text Changed!";
}

function changeColor() {
    document.body.style.backgroundColor = "#f0f8ff";
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function showMessage(message) {
    document.getElementById("demo").innerText = message;
}

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(element => {
        element.classList.add("visible");
    });
});
