const catalogo = document.getElementById("catalogo");
const filtros = document.querySelectorAll(".filtro-input");

// Função para montar o catálogo
function exibirProdutos(filtroCategorias = []) {
  catalogo.innerHTML = ""; // limpa antes de exibir novamente

  for (let id in produtos) {
    const p = produtos[id];

    // Se há filtros ativos e o produto não pertence a nenhum, pula
    if (filtroCategorias.length > 0 && !filtroCategorias.includes(p.categoria)) {
      continue;
    }

    const card = document.createElement("a");
    card.href = `detalhes.html?id=${id}`;
    card.classList.add("card");
    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome || id}">
      <div class="card-info">
      </div>
    `;
    catalogo.appendChild(card);
  }

  // Caso nenhum produto apareça
  if (catalogo.innerHTML === "") {
    catalogo.innerHTML = "<p>Nenhum produto encontrado.</p>";
  }
}

// Atualiza o catálogo conforme o filtro
filtros.forEach(input => {
  input.addEventListener("change", () => {
    const selecionados = Array.from(filtros)
      .filter(i => i.checked)
      .map(i => i.value);
    exibirProdutos(selecionados);
  });
});

// Exibe todos ao carregar
exibirProdutos();
