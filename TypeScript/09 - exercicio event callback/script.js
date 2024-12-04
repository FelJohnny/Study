"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById("nav");
function abrirMenu(event) {
    if (!(nav === null || nav === void 0 ? void 0 : nav.classList.contains('active'))) {
        // nav?.classList.toggle('active')
        nav === null || nav === void 0 ? void 0 : nav.setAttribute('class', 'active');
        btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.setAttribute('aria-expanded', 'true');
        btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.setAttribute('aria-label', 'Fechar Menu');
    }
    else {
        nav === null || nav === void 0 ? void 0 : nav.setAttribute('class', '');
        btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.setAttribute('aria-expanded', 'false');
        btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.setAttribute('aria-label', 'Abrir Menu');
    }
}
btnMobile === null || btnMobile === void 0 ? void 0 : btnMobile.addEventListener('pointerdown', abrirMenu);
