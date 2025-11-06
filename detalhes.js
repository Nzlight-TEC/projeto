// Lê o parâmetro da URL (ex: detalhes.html?id=camiseta)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Verifica se o produto existe
if (id && produtos[id]) {
  const produto = produtos[id];

  // Preenche os elementos da página
  const nomeEl = document.getElementById("produto");
  const descricaoEl = document.getElementById("descricao-produto");
  const imagemEl = document.getElementById("imagem-produto");

  if (nomeEl) nomeEl.textContent = produto.nome;
  if (descricaoEl) descricaoEl.textContent = produto.descricao;
  if (imagemEl) {
    imagemEl.src = produto.imagem;
    imagemEl.alt = produto.nome;
  }

} else {
  // Produto não encontrado
  const detalhesEl = document.querySelector(".detalhes-produto");
  if (detalhesEl) {
    detalhesEl.innerHTML = "<p>Produto não encontrado.</p>";
  }
}