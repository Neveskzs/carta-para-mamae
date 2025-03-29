// Gerar balões aleatórios
function createBalloons() {
  const colors = ['#ff9eb5', '#a1c4fd', '#f8c3cd', '#ffd700', '#ff7800', '#ff4081'];
  
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    const size = Math.random() * 20 + 20;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 5 + 8;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.2}px`;
    balloon.style.left = `${left}%`;
    balloon.style.animationDelay = `${delay}s`;
    balloon.style.animationDuration = `${duration}s`;
    balloon.style.backgroundColor = color;
    
    document.body.appendChild(balloon);
  }
}

// Abrir o cartão ao clicar
document.querySelector('.card').addEventListener('click', function() {
  this.classList.toggle('open');
});

// Função para criar confetes
function createConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#ff9eb5', '#a1c4fd', '#f8c3cd', '#ffd700', '#ff7800', '#ff4081'];
  
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      const size = Math.random() * 10 + 5;
      const shape = Math.random() > 0.5 ? '50%' : '0';
      const left = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.left = `${left}%`;
      confetti.style.top = '-20px';
      confetti.style.backgroundColor = color;
      confetti.style.borderRadius = shape;
      
      container.appendChild(confetti);
      
      const animationDuration = Math.random() * 3 + 2;
      confetti.style.animation = `float ${animationDuration}s linear forwards`;
      
      setTimeout(() => {
        confetti.remove();
      }, animationDuration * 1000);
    }, i * 50);
  }
}

// Evento para abrir o presente
document.getElementById('giftButton').addEventListener('click', function() {
  createConfetti();
  playBirthdaySong(); // Mantido apenas para os alertas
  this.textContent = 'Parabéns!!! 🎉';
  this.disabled = true;
  
  // Reproduzir música automaticamente ao abrir o presente
  const audioElement = document.getElementById('birthdaySong');
  audioElement.play();
});

// Apagar a vela ao clicar
document.getElementById('flame').addEventListener('click', function(e) {
  e.stopPropagation();
  this.style.display = 'none';
  alert('Faça um pedido! 🎂✨');
});

// Exibir a data atual
function displayCurrentDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('currentDate').textContent = now.toLocaleDateString('pt-BR', options);
}

// Simular uma música de aniversário com alertas (mantido para compatibilidade)
function playBirthdaySong() {
  setTimeout(() => {
    alert('🎵 Parabéns pra você... 🎵');
    setTimeout(() => {
      alert('🎵 Nesta data querida... 🎵');
      setTimeout(() => {
        alert('🎵 Muitas felicidades... 🎵');
        setTimeout(() => {
          alert('🎵 Muitos anos de vida! 🎵');
        }, 1500);
      }, 1500);
    }, 1500);
  }, 500);
}

// Controles de música
document.getElementById('playMusic').addEventListener('click', function() {
  const audioElement = document.getElementById('birthdaySong');
  audioElement.play();
});

document.getElementById('stopMusic').addEventListener('click', function() {
  const audioElement = document.getElementById('birthdaySong');
  audioElement.pause();
  audioElement.currentTime = 0; // Reinicia a música
});

// Inicializar
window.onload = function() {
  createBalloons();
  displayCurrentDate();
};