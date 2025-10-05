// Scroll suave para seções
function scrollSuave(elemento) {
    const target = document.querySelector(elemento.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
    return false; // Previne o comportamento padrão do link
}

// Toggle para expandir/ocultar detalhes
function toggleDetalhes(id) {
    const elemento = document.getElementById(id);
    if (elemento.style.display === 'block') {
        elemento.style.display = 'none';
    } else {
        elemento.style.display = 'block';
    }
}

// Animação das barras de skill ao carregar a página (opcional, para mais dinamismo)
window.addEventListener('load', function() {
    const barras = document.querySelectorAll('.barra');
    barras.forEach(barra => {
        const widthFinal = barra.style.width; // Pega o width do CSS
        barra.style.width = '0'; // Começa em 0
        setTimeout(() => {
            barra.style.width = widthFinal; // Anima para o valor final
        }, 500);
    });
});