function addStyle(id) {
    element = document.querySelector("#" + id)
    element.classList.toggle("highlighted")
}

function addEventListeners() {
    document.addEventListener('keydown', (event) => {

        var ingresso1 = document.querySelector("#thursday");
        var ingresso2 = document.querySelector("#friday");
        var ingresso3 = document.querySelector("#saturday");
        var ingresso4 = document.querySelector("#sunday");

        var code = event.code;
        if (code == "Numpad1" || code == "Digit1") {
            ingresso1.classList.toggle("highlighted");
            ingresso2.classList.remove("highlighted");
            ingresso3.classList.remove("highlighted");
            ingresso4.classList.remove("highlighted");
        }

        if (code == "Numpad2" || code == "Digit2") {
            ingresso1.classList.remove("highlighted");
            ingresso2.classList.toggle("highlighted");
            ingresso3.classList.remove("highlighted");
            ingresso4.classList.remove("highlighted");
        }

        if (code == "Numpad3" || code == "Digit3") {
            ingresso1.classList.remove("highlighted");
            ingresso2.classList.remove("highlighted");
            ingresso3.classList.toggle("highlighted");
            ingresso4.classList.remove("highlighted");
        }

        if (code == "Numpad4" || code == "Digit4") {
            ingresso1.classList.remove("highlighted");
            ingresso2.classList.remove("highlighted");
            ingresso3.classList.remove("highlighted");
            ingresso4.classList.toggle("highlighted");
        }
    })
}

addEventListeners();