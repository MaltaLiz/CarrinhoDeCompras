import produtoTemplate from "../templates/produtoTemplate";

export function renderListaDeProdutos() {
    const produtos = document.querySelector('#produtos')!;
    produtos.innerHTML = produtoTemplate();
}

