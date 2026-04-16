const API_KEY = "3ce48475c4b6ebf1b1ff379a4667e266"; //chave api
const BASE_URL = "https://api.themoviedb.org/3"; //base url api
const IMG_URL = "https://image.tmdb.org/t/p/w500"; //base url imagens

let guestSessionId = "";

// Inicia a aplicação
async function inicializar() {
  try {
    const res = await fetch(
      `${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`,
    );
    const data = await res.json();
    guestSessionId = data.guest_session_id;

    // ID: info-sessão
    document.getElementById("info-sessão").innerText = "Sessão de Visitante";

    carregarFilmesCartaz();
    carregarAvaliados();
  } catch (erro) {
    console.error("Erro ao iniciar sessão:", erro);
  }
}

//função buscar filmes disponiveis
async function carregarFilmesCartaz() {
  const res = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR`, //usando api
  );
  const data = await res.json();

  //ordem decrescente -> nota
  const filmesOrdenados = data.results.sort(
    (a, b) => b.vote_average - a.vote_average,
  );

  //lista-filmes (usando id)
  renderizarCards(filmesOrdenados, "lista-filmes", true);
}

//renderizar cards
function renderizarCards(filmes, containerId, permitirAvaliar) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  filmes.forEach((filme) => {
    const card = document.createElement("div");
    card.className = "card-filme";
    card.innerHTML = `
            <img src="${IMG_URL + filme.poster_path}" alt="${filme.title}">
            <h3>${filme.title}</h3>
            <span class="nota-badge">★ ${filme.vote_average.toFixed(1)}</span>
            <div class="controles">
                ${
                  permitirAvaliar
                    ? `
                    <input type="number" id="input-${filme.id}" min="0.5" max="10" step="0.5" value="10">
                    <button onclick="votar(${filme.id})">Avaliar</button>
                `
                    : `
                    <button class="remover" onclick="removerVoto(${filme.id})">Remover Avaliação</button>
                `
                }
            </div>
        `;
    container.appendChild(card);
  });
}

// Envia a avaliação (POST)
async function votar(filmeId) {
  const nota = document.getElementById(`input-${filmeId}`).value;
  const url = `${BASE_URL}/movie/${filmeId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ value: nota }),
  });

  alert("Filme avaliado!");
  carregarAvaliados();
}

// Lista filmes avaliados pelo visitante (GET)
async function carregarAvaliados() {
  const url = `${BASE_URL}/guest_session/${guestSessionId}/rated/movies?api_key=${API_KEY}&language=pt-BR`;
  const res = await fetch(url);
  const data = await res.json();

  // ID: lista-avaliados
  if (data.results) {
    renderizarCards(data.results, "lista-avaliados", false);
  }
}

// Remove a avaliação (DELETE)
async function removerVoto(filmeId) {
  const url = `${BASE_URL}/movie/${filmeId}/rating?api_key=${API_KEY}&guest_session_id=${guestSessionId}`;

  await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });

  alert("Avaliação removida!");
  carregarAvaliados();
}

inicializar();
