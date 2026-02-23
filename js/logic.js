document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('#start-button');

  startButton.addEventListener('click', () => {
    window.location.href = 'lab1_0.html';
  });

  startButton.addEventListener('mouseenter', () => {
    startButton.setAttribute('color', 'grey');
  });

  startButton.addEventListener('mouseleave', () => {
    startButton.setAttribute('color', 'black');
  });
});
