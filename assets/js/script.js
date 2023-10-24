const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll('.character');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    /* Remove Old Selected Button and character */
    deselectButton();
    deselectCharacter();

    /* Add New Selected Button and Character */
    button.classList.add('selected');
    characters[index].classList.add('selected');
  });
});

function deselectCharacter() {
  const characterSelected = document.querySelector('.character.selected');
  characterSelected.classList.remove('selected');
}

function deselectButton() {
  const buttonSelected = document.querySelector('.button.selected');
  buttonSelected.classList.remove('selected');
}