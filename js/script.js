document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#registro-form");
    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    });
});
