// Seleciona os elementos do menu hambúrguer e a lista de links
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Adiciona o evento de clique no botão hambúrguer
hamburger.addEventListener("click", () => {
    // Liga/desliga a classe 'active' para abrir e fechar o menu e animar o botão
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu automaticamente quando o usuário clica em qualquer link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});