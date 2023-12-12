const buttons = document.querySelectorAll('.button'); //Aqui, estamos selecionando todos os elementos do HTML que têm a classe CSS "button". Esses elementos serão armazenados na variável buttons.
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => { //Esta linha começa um loop através de todos os elementos que foram selecionados na linha 1. Cada elemento é passado para a função dentro do forEach, e o segundo argumento index representa a posição do elemento no NodeList.
  button.addEventListener('click', () => { //Para cada botão, estamos adicionando um ouvinte de evento para o evento de clique. Isso significa que quando um botão é clicado, a função dentro das chaves será executada.
    /* Remove Old Selected Button and character */
    deselectButton(); //Estas são chamadas de função. Elas são chamadas a cada vez que um botão é clicado. Elas removem a classe "selected" do botão e do personagem que foram previamente selecionados.
    deselectCharacter();

    /* Add New Selected Button and Character */
    button.classList.add('selected'); //Aqui, estamos adicionando a classe "selected" ao botão que foi clicado e ao personagem correspondente (o personagem cujo índice corresponde ao índice do botão clicado).
    characters[index].classList.add('selected');
  });
});

function deselectCharacter() { //Esta é uma função chamada deselectCharacter. Ela seleciona o primeiro elemento na página que possui a classe "character" e a classe "selected", e então remove a classe "selected" desse elemento.
  const characterSelected = document.querySelector('.character.selected');
  characterSelected.classList.remove('selected');
}

function deselectButton() { //Ela seleciona o primeiro elemento na página que possui a classe "character" e a classe "selected", e então remove a classe "selected" desse elemento.
  const buttonSelected = document.querySelector('.button.selected');
  buttonSelected.classList.remove('selected');
}