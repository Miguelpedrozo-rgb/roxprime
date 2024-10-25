let imagemAtiva = 0;
const imagens = document.querySelectorAll('.carrossel img');

function navegar(direcao) {
    imagens[imagemAtiva].classList.remove('imagem-ativa');
    imagemAtiva = (imagemAtiva + direcao + imagens.length) % imagens.length;
    imagens[imagemAtiva].classList.add('imagem-ativa');
}

function mostrarMensagem() {
    alert("Obrigado por seu interesse! Entre em contato conosco para mais informações.");
}

function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return true;
}

function mostrarMais() {
    const produtosExtras = document.getElementById('produtosExtras');
    produtosExtras.style.display = 'block';
    document.getElementById('mostrarMais').style.display = 'none'; // Esconde o botão
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
