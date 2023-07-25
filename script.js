const textElement = document.getElementById("changing-text");
const fixedTextElement = document.getElementById("fixed-text");
const underlineElement = document.getElementById("underline");
const texts = ["Luiz Fernando", "Desenvolvedor"];
let index = 0;
let charIndex = -1;

function typeWriter() {
  charIndex++;
  const currentText = texts[index].substring(0, charIndex);
  textElement.textContent = currentText;
  underlineElement.style.visibility = charIndex === texts[index].length ? "hidden" : "visible";

  if (charIndex === texts[index].length) {
    setTimeout(eraseText, 1500);
  } else {
    setTimeout(typeWriter, 100); // Velocidade da digitação (ajuste conforme preferência)
  }
}

function eraseText() {
  const currentText = texts[index].substring(0, charIndex);
  textElement.textContent = currentText;
  underlineElement.style.visibility = "visible";

  if (charIndex === -1) {
    index = (index + 1) % texts.length;
    setTimeout(typeWriter, 500); // Aguarda meio segundo e começa a digitar o próximo texto
  } else {
    charIndex--;
    setTimeout(eraseText, 50); // Velocidade do apagamento (ajuste conforme preferência)
  }
}

typeWriter(); // Inicia o Typewriter effect ao carregar a página
