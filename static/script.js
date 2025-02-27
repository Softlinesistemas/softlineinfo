document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  // Alterna a exibição do menu mobile
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  // Fecha o menu mobile ao clicar em um link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
      }
    });
  });

  // Função para scroll suave entre seções
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // Compensa a altura da navbar fixa
        behavior: 'smooth'
      });
    }
  }

  // Acha o elemento de brilho
  const glowEffect = document.getElementById('glow-effect');

  // Função para mover o brilho com base na posição do mouse
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Calcula a posição do brilho com base no mouse
    const offsetX = mouseX / window.innerWidth * 100;
    const offsetY = mouseY / window.innerHeight * 100;

    // Move o brilho para a posição calculada
    glowEffect.style.backgroundPosition = `${offsetX}% ${offsetY}%`;
  });

  // Ativar animação de fade-in quando as seções entrarem na tela
  const sections = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Chamada do chatbot (robo falando sobre o software)
  const chatbot = document.createElement('div');
  chatbot.id = 'chatbot';
  chatbot.innerHTML = `
    <div class="chatbot-popup">
      <p><strong>Olá! 👋 Eu sou o assistente virtual da Soft Line.</strong></p>
      <p>Nosso software é a solução ideal para transformar seu negócio com tecnologia de ponta.</p>
      <p>Precisa de mais informações? Fique à vontade para perguntar!</p>
      <button id="close-chatbot">Fechar</button>
    </div>
  `;
  document.body.appendChild(chatbot);

  // Estilo para o chatbot
  const chatbotStyle = document.createElement('style');
  chatbotStyle.innerHTML = `
    #chatbot {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #ff6f61;
      color: white;
      border-radius: 8px;
      padding: 15px;
      width: 250px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
      z-index: 9999;
    }

    .chatbot-popup {
      text-align: center;
    }

    .chatbot-popup p {
      margin: 10px 0;
    }

    .chatbot-popup button {
      background-color: #fff;
      color: #ff6f61;
      border: none;
      padding: 5px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }

    .chatbot-popup button:hover {
      background-color: #ff4f3a;
      transition: 0.3s;
    }
  `;
  document.head.appendChild(chatbotStyle);

  // Função para fechar o chatbot
  const closeButton = document.getElementById('close-chatbot');
  closeButton.addEventListener('click', () => {
    chatbot.style.display = 'none';
  });

  // Função de animação do botão de scroll para o topo (caso queira adicionar)
  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'back-to-top';
  backToTopButton.innerHTML = '↑';
  document.body.appendChild(backToTopButton);

  // Estilo para o botão de voltar ao topo
  const backToTopStyle = document.createElement('style');
  backToTopStyle.innerHTML = `
    #back-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background-color: #ff6f61;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 50%;
      font-size: 20px;
      cursor: pointer;
      display: none;
      transition: opacity 0.3s;
    }

    #back-to-top:hover {
      background-color: #ff4f3a;
    }
  `;
  document.head.appendChild(backToTopStyle);

  // Mostrar o botão de "voltar ao topo" quando o usuário rolar para baixo
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Função de scroll suave para o topo
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

      // Efeito de hover para aumentar o cartão
      document.querySelectorAll('.integration-card').forEach(card => {
        card.addEventListener('mouseover', () => {
          card.style.transform = 'scale(1.05)';
        });
    
        card.addEventListener('mouseout', () => {
          card.style.transform = 'scale(1)';
        });
      });
    
        // Adiciona o efeito de zoom no clique e limita o tamanho da imagem
      document.querySelectorAll('.integration-card').forEach(card => {
        card.addEventListener('click', () => {
          // Alterna a classe 'clicked' para aplicar o zoom ao clicar
          card.classList.toggle('clicked');
        });
      });
});