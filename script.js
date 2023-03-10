const palleteContainer = document.getElementById('palleteContainer');
const colorValues = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const palleteSize = 5;

const createPallete = () => {
  for(let i = 0; i < palleteSize; i++) {
    const palleteElement = document.createElement('div');
    palleteElement.classList.add('palleteItem');
    palleteContainer.appendChild(palleteElement);
  }
  updatePallete();
}

const colorize = (element) => {
  let color = '#';
  for(let i = 0; i < 6; i++) {
    const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
    color += randomElement;
  }
  element.style.backgroundColor = color;
  element.innerHTML = `<span class='colorHex'>${color}</span>`;
}

const updatePallete = () => {
  for(let i = 0; i < palleteContainer.children.length; i++) {
    colorize(palleteContainer.children[i])
  }
};

createPallete();