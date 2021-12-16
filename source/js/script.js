function getRandomX() {
  const itemX = Math.floor(Math.random() * document.body.clientWidth);
  return itemX;
}

function getRandomString() {
  const maxLength = 20;
  const randomLength = Math.floor(Math.random() * maxLength);
  let string = '';

  for (let i = 0; i < randomLength; i++) {
    string += Math.round(Math.random());
  }
  return string;
}

const hero = document.querySelector('.hero');

function createMartix() {
  const item = document.createElement('div');
  item.classList.add('matrix');
  item.textContent = getRandomString();
  item.style.left = `${getRandomX()}px`;

  hero.appendChild(item);

  setTimeout(() => {
    item.remove()
  }, 12000);
}

setInterval(createMartix, 300)

// progressBar
const percent = document.getElementById('percent');
const progressBar = document.getElementById('progressBar');
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
  const progress = Math.round((window.pageYOffset / totalHeight) * 100);
  progressBar.style.width = `${progress}%`;
  percent.innerHTML = `Scrolled ${progress}%`;
}