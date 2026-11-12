"use strict";

function init() {
    const status = document.querySelector("#app-status");

    if (!status) {
        throw new Error("Elemento de status não encontrado.");
    }

    status.textContent = "Ambiente configurado!";
}

init()