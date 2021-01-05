const elementos = document.querySelectorAll('[data-anime]');
const animacaoClass = 'animacao';

function animaScroll() {
    const topoPaginaNaJanela = window.pageYOffset + ((window.innerHeight * 3) / 4);
    elementos.forEach(function(elemento) {
        if (topoPaginaNaJanela > elemento.offsetTop) {
            elemento.classList.add(animacaoClass);
        } else {
            elemento.classList.remove(animacaoClass);
        }
    });
}
animaScroll();

if (elementos.length) {
    window.addEventListener('scroll', function() {
        animaScroll();
    })
}

var modal3 = document.querySelector('.bg-modal3');


function abrirModal() {
    modal3.style.top = '0px';

}

function fecharModal() {
    modal3.style.top = '-150%';

}