document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        alert("¡Gracias! Tu mensaje ha sido enviado.");
    });
});
