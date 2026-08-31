
// 1. Sua lista de dados criada direto no Script (Pode ser texto ou objetos complexos)
// A variável precisa estar no escopo global para o busca.js acessar
const minhaListaDados = [
    { 
        id: 1, 
        nome: "Bohemian Rhapsody", 
        descricao: "Clássico da banda Queen lançado em 1975 no álbum A Night at the Opera.",
        imagem: "https://picsum.photos/id/1025/300/300" 
    },
    { 
        id: 2, 
        nome: "Hotel California", 
        descricao: "Famosa canção da banda Eagles, lançada em 1976 no álbum de mesmo nome.",
        imagem: "https://picsum.photos/id/1082/300/300" 
    },
    { 
        id: 3, 
        nome: "Imagine", 
        descricao: "Um dos singles mais vendidos e aclamados da carreira solo de John Lennon.",
        imagem: "https://picsum.photos/id/1062/300/300" 
    },
    { 
        id: 4, 
        nome: "Smells Like Teen Spirit", 
        descricao: "Sucesso estrondoso do Nirvana, marco do movimento Grunge em 1991.",
        imagem: "https://picsum.photos/id/145/300/300" 
    },
    { 
        id: 5, 
        nome: "Sweet Child O' Mine", 
        descricao: "Um dos maiores hits do Guns N' Roses, lançado no álbum Appetite for Destruction em 1987.",
        imagem: "https://picsum.photos/id/158/300/300" 
    },
    { 
        id: 6, 
        nome: "Billie Jean", 
        descricao: "Faixa icônica de Michael Jackson que revolucionou a música pop no álbum Thriller (1982).",
        imagem: "https://picsum.photos/id/1074/300/300" 
    },
    { 
        id: 7, 
        nome: "Like a Rolling Stone", 
        descricao: "Revolucionário single de Bob Dylan lançado em 1965 no álbum Highway 61 Revisited.",
        imagem: "https://picsum.photos/id/225/300/300" 
    },
    { 
        id: 8, 
        nome: "Wonderwall", 
        descricao: "A canção mais famosa do Oasis, lançada em 1995 no álbum (What's the Story) Morning Glory?.",
        imagem: "https://picsum.photos/id/325/300/300" 
    },
    { 
        id: 9, 
        nome: "Stairway to Heaven", 
        descricao: "Obra-prima do rock composta pelo Led Zeppelin e lançada em seu quarto álbum em 1971.",
        imagem: "https://picsum.photos/id/433/300/300" 
    },
    { 
        id: 10, 
        nome: "Shape of You", 
        descricao: "Hit global de Ed Sheeran lançado em 2017 como parte do álbum ÷ (Divide).",
        imagem: "https://picsum.photos/id/532/300/300" 
    }
];

// 2. Mapeia os elementos do HTML
const campoBusca = document.getElementById('campoBusca');
const containerLista = document.getElementById('listaElementos');

// 3. Função responsável por desenhar a lista na tela
function renderizarLista(dadosFiltrados) {
    // Limpa a lista antiga antes de desenhar a nova
    containerLista.innerHTML = "";

    // Se a busca não retornar nada, mostra uma mensagem amigável
    if (dadosFiltrados.length === 0) {
        containerLista.innerHTML = `<li class="list-group-item text-muted text-center">Nenhum resultado encontrado</li>`;
        return;
    }

    // Cria o HTML de cada item baseado nos dados do script
    dadosFiltrados.forEach(item => {
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        // Aqui você monta a estrutura interna como quiser, usando classes do Bootstrap
        li.innerHTML = `
        <strong>${item.nome}</strong>
        `;

        containerLista.appendChild(li);
    });
}

// 4. Evento de busca que filtra a lista original do Script
campoBusca.addEventListener('input', () => {
    const termoBusca = campoBusca.value.toLowerCase();

    // Filtra a lista do script gerando uma nova sub-lista apenas com quem bate com a busca
    const listaFiltrada = minhaListaDados.filter(item => {
        return item.nome.toLowerCase().includes(termoBusca);
    });

    // Desenha na tela apenas os itens que passaram no filtro
    renderizarLista(listaFiltrada);
});

// 5. Inicializa a página mostrando a lista completa logo de cara
renderizarLista(minhaListaDados);
