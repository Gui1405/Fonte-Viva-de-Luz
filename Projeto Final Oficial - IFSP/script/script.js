document.addEventListener("DOMContentLoaded", () => {

  // Mostra ou recolhe o header
  const header = document.getElementById("header");

  // Troca do navbar comum para o hamburger
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".center nav ul");
  const navLinks = document.querySelectorAll('.center nav ul li a');
  let lastScrollY = window.scrollY;

  // Exibição de vídeos (stat-items)
  const statItems = document.querySelectorAll('.stat-item');
  const videoContainer = document.getElementById('video-container');
  const videoFrame = document.getElementById('video-frame');
  const closeButton = document.getElementById('close-button');

  // Exibição das imagens da galeria
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Mostrar/esconder header ao rolar
  window.addEventListener("scroll", () => {
    // Se o hambúrguer estiver ativo, não faz nada
    if (!hamburger.classList.contains("active")) {
      if (window.scrollY > lastScrollY) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    }
    lastScrollY = window.scrollY;
  });

  // Alternar menu hambúrguer
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Fecha o menu quando um link é selecionado
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active"); // Fecha o menu
    });
  });

  // Troca o vídeo do container
  statItems.forEach(item => {
    item.addEventListener('click', () => {
      const videoUrl = item.getAttribute('data-video');
      videoFrame.src = videoUrl;

      // Aparece o container com efeito suave
      videoContainer.style.display = 'flex';
      setTimeout(() => {
        videoContainer.style.opacity = '1';
        videoContainer.style.transform = 'translate(-50%, -50%) scale(1)';
      }, 10); // Delay pequeno para garantir que o display seja alterado antes do efeito
    });
  });

  closeButton.addEventListener('click', () => {
    // Animação de desaparecimento suave
    videoContainer.style.opacity = '0';
    videoContainer.style.transform = 'translate(-50%, -50%) scale(0.9)';

    // Após o efeito de desaparecimento, esconde o container e para o vídeo
    setTimeout(() => {
      videoContainer.style.display = 'none';
      videoFrame.src = ''; // Para o vídeo ao fechar
    }, 500); // Tempo suficiente para a transição de opacidade
  });

  // Responsável por mostrar o texto escondido do curso
  document.querySelectorAll('section .conteudo > button').forEach(button => {
    button.addEventListener('click', () => {
      // Alterna a classe 'ativo' no elemento pai
      const conteudo = button.parentElement;
      conteudo.classList.toggle('ativo');
    });
  });

  // Responsável por abrir as imagens da galeria em uma tela maior
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;
      modalImage.src = imgSrc;

      // Exibe o modal
      modal.style.display = "flex";
    });
  });

  // Fechar o modal ao clicar fora da imagem ou no "×"
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.classList.contains("close")) {
      modal.style.display = "none";
    }
  });

});
