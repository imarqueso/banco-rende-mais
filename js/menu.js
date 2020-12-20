class menuDrop {

    constructor() {

        this._modal = document.querySelector('#modal1');
        this._abrirMenu = document.querySelector('#menuclose');
        this._fecharMenu = document.querySelector('#menuclose2');

        this.inicioModal();
        this.execModal();
    }

    inicioModal() {
        window.onload = this.modalFechado();
    }

    modalFechado() {
        this._modal.style.left = '-250%';
        this._abrirMenu.style.display = 'block';
        this._fecharMenu.style.display = 'none';
    }

    modalAberto() {
        this._modal.style.left = '0px';
        this._abrirMenu.style.display = 'none';
        this._fecharMenu.style.display = 'block';
    }

    abrirMenu() {

        this._abrirMenu.addEventListener('click', () => {
            return this.modalAberto();
        });

    }

    fecharMenu() {

        this._fecharMenu.addEventListener('click', () => {
            return this.modalFechado();
        });

        this._modal.addEventListener('click', () => {
            return this.modalFechado();
        });

    }

    execModal() {
        if (this.abrirMenu()) {
            return this.abrirMenu();
        } else if (this.fecharMenu()) {
            return this.fecharMenu();
        }
    }

}