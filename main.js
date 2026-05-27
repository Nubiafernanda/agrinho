/**
 * AgroPrevisão IA - Funcionalidades da Interface
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito Dinâmico no Cabeçalho (Header) ao rolar a página
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Escurece levemente o tom azul e aumenta a sombra ao rolar
            header.style.background = 'linear-gradient(135deg, #152b52 0%, #1e3c72 100%)';
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
        } else {
            // Retorna ao estilo original definido no CSS
            header.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        }
    });

    // 2. Identificação Automática da Seção Ativa no Menu (Scroll Spy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Ativa quando a seção ocupa o centro da tela
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.style.color = '#00d2ff'; // Cor de destaque para o link ativo
                        link.style.fontWeight = '700';
                    } else {
                        link.style.color = 'white'; // Restaura os outros
                        link.style.fontWeight = '500';
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        if (section.getAttribute('id')) {
            sectionObserver.observe(section);
        }
    });

    // 3. Animação de Surgimento Suave (Fade-In) para os Cards de Ferramentas
    const cards = document.querySelectorAll('.card');
    
    // Configuração inicial oculta antes da animação
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target); // Executa a animação apenas uma vez
            }
        });
    }, { threshold: 0.15 }); // Dispara quando 15% do card surge na tela

    cards.forEach(card => cardObserver.observe(card));
});