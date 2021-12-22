const canvasElement = document.getElementById("matrix");
const canvasContext = canvasElement.getContext("2d");

canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

const letters = [
  "日",
  "ﾊ",
  "ﾐ",
  "ﾋ",
  "ｰ",
  "ｳ",
  "ｼ",
  "ﾅ",
  "ﾓ",
  "ﾆ",
  "ｻ",
  "ﾜ",
  "ﾂ",
  "ｵ",
  "ﾘ",
  "ｱ",
  "ﾎ",
  "ﾃ",
  "ﾏ",
  "ｹ",
  "ﾒ",
  "ｴ",
  "ｶ",
  "ｷ",
  "ﾑ",
  "ﾕ",
  "ﾗ",
  "ｾ",
  "ﾈ",
  "ｽ",
  "ﾀ",
  "ﾇ",
  "ﾍ",
  ":",
  "・",
  ".",
  "=",
  "*",
  "+",
  "-",
  "<",
  ">",
  "¦",
  "｜",
  "ﾘ",
];
const fontSize = 18;
const columns = canvasElement.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(1);

const draw = () => {
  canvasContext.fillStyle = "rgba(0, 0, 0, 0.05)";
  canvasContext.fillRect(0, 0, canvasElement.width, canvasElement.height);

  canvasContext.fillStyle = "#0F0";
  canvasContext.font = `${fontSize}px arial`;

  for (let i = 0; i < drops.length; i++) {
    // pegando uma letra randomicamente no nosso array
    const text = letters[Math.floor(Math.random() * letters.length)];

    // escrevendo na tela
    canvasContext.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvasElement.height && Math.random() > 0.95) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  window.requestAnimationFrame(draw);
};

draw();
