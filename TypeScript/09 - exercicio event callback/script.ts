// Estado dos elementos

// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button

// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button


const btnMobile = document.getElementById('btn-mobile')
const nav = document.getElementById("nav")


function abrirMenu(event: Event){
    if(!nav?.classList.contains('active')){
        // nav?.classList.toggle('active')
        nav?.setAttribute('class','active')
        btnMobile?.setAttribute('aria-expanded','true')
        btnMobile?.setAttribute('aria-label','Fechar Menu')
    }else{
        nav?.setAttribute('class','')
        btnMobile?.setAttribute('aria-expanded','false')
        btnMobile?.setAttribute('aria-label','Abrir Menu')
    }
}

btnMobile?.addEventListener('pointerdown',abrirMenu)
