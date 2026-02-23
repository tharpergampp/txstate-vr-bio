document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('#start-button');

  startButton.addEventListener('click', () => {
    window.location.href = 'mainmenu.html';
  });

  startButton.addEventListener('mouseenter', () => {
    startButton.setAttribute('color', 'grey');
  });

  startButton.addEventListener('mouseleave', () => {
    startButton.setAttribute('color', '#501214');
  });
});
