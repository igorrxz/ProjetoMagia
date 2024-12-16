// Seleciona os elementos
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');

// Alterna o menu ao clicar no botão hambúrguer
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Adiciona comportamento de rolagem suave para links do menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href'); // Obtém o destino do link
        if (targetId.startsWith('#')) { // Apenas para âncoras internas
            e.preventDefault(); // Previne o comportamento padrão
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Faz o scroll suave
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Ajuste o valor de -100 para considerar a altura da navbar
                    behavior: 'smooth'
                });
            }
        }
    });
});
