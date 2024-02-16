
const colors = ['yellow' , 'aqua' , 'magenta' , 'pink'];
let currentColorIndex = 0;
let buttonCount = 0;

function changeColor() {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  buttonCount++;
  if (buttonCount % 5 === 0) {
    const newButton = document.createElement('button');
    newButton.className = ' btn btn-primary m-2';
    newButton.textContent = 'Created button';
    const container = document.querySelector('.container');
    container.appendChild(newButton);
  }
}