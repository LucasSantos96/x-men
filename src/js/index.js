// const itemCiclope = document.getElementById('ciclope');

//pega a class das <li> personagem onde contem todos os personagens 
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        const personagemSelecionado = document.querySelector('.selecionado');
        //remove a borda azul do personagem   
        personagemSelecionado.classList.remove('selecionado');
        //adciona a borda azul no personagem ao passar o mouse
        personagem.classList.add('selecionado');

        //pega a imagem do personagem grande e adicona informações nele  
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;


        //altera o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');


        //altera a descrição do personagem 
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
});
