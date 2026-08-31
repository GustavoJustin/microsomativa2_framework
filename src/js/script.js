class Musica {
    constructor(titulo, cantor, genero, ano,capaUrl) {
        this.titulo = titulo;
        this.cantor = cantor;
        this.genero = genero;
        this.ano = ano;
        this.capaUrl = capaUrl
    }

        formatarSubtitulo(){
            return `${this.genero} . ${this.ano}`;
        }
     }

     const catalogo = [
        new Musica(
            "Vai ser tão lindo",
            "Pedro Henrique",
            "Gospel",
            2023,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rVTEamP5Z1JNEOcC5LxGBmL4rnLAy91FhU2Cjcy2vWccOgYKVE7dA6tw&s=10"
           ),
           
            new Musica(
                "Acende outra vez",
                "Jefferson e Suelen",
                "Gospel",
                2023,
                "https://i.ytimg.com/vi/86cC5jqPPBI/maxresdefault.jpg"
            )
           ];

           const constainerCatalogo = document.querySelector('#catalogo-musicas');

           function criarCardMusica(musica){
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-3';

            const card = document.createElement('article');
            card.className = 'card card-musica h-100 text-light';

         card.innerHTML = `
    <img src="${musica.capaUrl}" class="card-img-top capa-album" alt="Capa de ${musica.titulo}">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold text-white mb-1">${musica.titulo}</h5>
      <p class="card-text text-primary small fw-semibold mb-2">${musica.formatarSubtitulo()}</p>
    </div>
    <div class="card-footer bg-transparent border-top-0 pb-3">
      <button class="btn btn-outline-primary w-100 btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#modalMusica"
              data-titulo="${musica.titulo}"
              data-cantor="${musica.cantor}"
              data-genero="${musica.genero}"
              data-ano="${musica.ano}">
              
        Ver detalhes
      </button>
    </div>
    
  `;

  col.appendChild(card);
  return col;
}

// Renderiza todos os cards na tela
function renderizarCatalogo() {
  if (!containerCatalogo) return;
  containerCatalogo.innerHTML = '';
  catalogo.forEach(musica => {
    containerCatalogo.appendChild(criarCardMusica(musica));
  });
}

renderizarCatalogo();


// Integração com o Modal do Bootstrap para exibir detalhes dinamicamente
const modalMusica = document.getElementById('modalMusica');
if (modalMusica) {
  modalMusica.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
   
    // Extração dos atributos data-* do botão acionado
    const titulo    = button.getAttribute('data-titulo');
    const cantor    = button.getAttribute('data-cantor');
    const genero    = button.getAttribute('data-genero');
    const ano       = button.getAttribute('data-ano');
    

    // Preenchimento dos elementos internos do Modal
    document.getElementById('modalTitulo').textContent    = titulo;
    document.getElementById('modalcantor').textContent    = cantor;
    document.getElementById('modalGenero').textContent    = `Gênero: ${genero}`;
    document.getElementById('modalAno').textContent       = `Lançamento: ${ano}`;
  });
}