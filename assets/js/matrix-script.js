// assets/js/matrix-script.js
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Define o tamanho do canvas com base nas suas dimensões renderizadas no DOM
// É importante que o CSS já tenha dado um tamanho ao canvas ou ao seu container
function resizeCanvas() {
    // Para garantir que o canvas tenha as dimensões corretas ANTES de desenhar
    // pode ser necessário um pequeno delay ou garantir que o CSS seja aplicado primeiro.
    // Ou, se o container do canvas tem um tamanho fixo, você pode definir
    // canvas.width e canvas.height com base nisso.
    // Por agora, vamos tentar com offsetWidth/offsetHeight, assumindo que o CSS
    // ou o HTML pai está definindo as dimensões.

    // Verifica se o elemento canvas existe e tem dimensões antes de tentar acessá-las
    if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    } else {
      // Fallback para um tamanho padrão ou logar um erro se o canvas não tiver dimensões
      // Isso pode acontecer se o canvas estiver oculto ou o CSS não tiver sido aplicado ainda.
      // Para um teste inicial, você pode definir um tamanho fixo se o offset não funcionar:
      // canvas.width = 600; // Exemplo
      // canvas.height = 400; // Exemplo
      console.warn("Matrix canvas dimensions not set via CSS, using default or previous.");
      // Se já tiver width/height, mantém, senão define um padrão
      if (!canvas.width || !canvas.height) {
          canvas.width = 600; // fallback
          canvas.height = 400; // fallback
      }
    }


    // Caracteres Katakana (comumente usados no efeito Matrix) + alguns números e letras
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    const fontSize = 16; // Você pode ajustar isso
    const columns = Math.floor(canvas.width / fontSize); // Recalcula colunas
    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    // Retorna rainDrops para que a função draw possa usá-la.
    // Ou, defina rainDrops em um escopo mais alto se draw for definida separadamente.
    return { alphabet, fontSize, columns, rainDrops };
}

let animationState = resizeCanvas(); // Pega o estado inicial

function draw() {
    if (!animationState) return; // Não desenha se o estado não foi inicializado

    const { alphabet, fontSize, columns, rainDrops } = animationState;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Fundo preto semi-transparente
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Cor verde brilhante
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        if (i >= columns) continue; // Segurança se as colunas mudaram
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
  setInterval(draw, 33);
} else {
  // Tenta redimensionar e iniciar após um pequeno delay se as dimensões não estiverem prontas
  // Isso é uma tentativa de contornar problemas de timing de renderização
  setTimeout(() => {
      animationState = resizeCanvas();
      if (canvas.width > 0 && canvas.height > 0) { // Verifica novamente
          setInterval(draw, 33);
      } else {
          console.error("Matrix canvas could not be initialized with valid dimensions.");
      }
  }, 100);
}


// Ajusta o canvas se a janela for redimensionada (OPCIONAL para este caso)
// Se o canvas deve ter um tamanho fixo (o da imagem que substitui),
// você pode não precisar deste listener de resize, ou ele precisaria
// recalcular o tamanho com base no seu container, não no window.innerWidth/Height.
window.addEventListener('resize', () => {
    animationState = resizeCanvas();
});