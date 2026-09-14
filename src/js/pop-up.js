// Função responsável por preencher os dados e exibir o Modal
function abrirModalMusica(musica) {
    const modalElement = document.getElementById('modalMusica');
    if (!modalElement) return;

    // Elementos principais do modal
    const elTitulo = document.getElementById('modalTitulo');
    const elImagem = document.getElementById('modalImagem');
    const elDescricao = document.getElementById('modalDescricao');
    const elCantor = document.getElementById('modalcantor');

    if (elTitulo) elTitulo.textContent = musica.nome || musica.titulo || '';
    if (elImagem) {
        elImagem.src = musica.imagem || musica.capaUrl || '';
        elImagem.alt = musica.nome || musica.titulo || '';
    }
    if (elDescricao) elDescricao.textContent = musica.descricao || '';
    if (elCantor) elCantor.textContent = musica.cantor ? `Artista: ${musica.cantor}` : '';

    // Abre o modal do Bootstrap via JavaScript
    const modalInstancia = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalInstancia.show();
}