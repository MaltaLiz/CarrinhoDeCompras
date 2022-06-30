import { produtos } from "../dados/produtos"
import { converteParaReal } from "../utils/converteParaReal"

export default function produtoTemplate() {
    return `
      <h2>Produtos</h2>
      ${produtos.map(produto => `
        <div class="produto">
        <img class="produtoImagem" src=${produto.imagem}>
        <div class="produtoInfo">
          <div>
            <p class="produtoNome">${produto.nome}</p>
            <p class="produtoDescricao">${produto.descricao}</p>
            <p class="produtoPreco">${converteParaReal(produto.preco)}</p>
          </div>
          <form class="formAdiciona">
            <input type="text" placeholder="1" class="produtoQuantidade" data-produto-id="${produto.id}">
            <input type="submit" value="Adicionar ao carrinho" class="botaoAdiciona">
          </form>
        </div>
      </div>
      `).join('')}
    `
}
