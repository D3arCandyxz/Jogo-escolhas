const avança = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function (){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribuate('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopasso).classList.add('ativo');

    })

})
