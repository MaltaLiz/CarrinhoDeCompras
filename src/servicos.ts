import { renderCarrinhoDeCompras } from "./componentes/carrinhoDeCompras";
import { produtos } from "./dados/produtos";
import { Produto } from "./interfaces/Produto";
import { carrinho } from "./dados/carrinho";

function atualizaLocalStorage(id: number, qntd: number){
    localStorage.setItem(JSON.stringify(id), JSON.stringify(qntd));
}

function pesquisaProdutoPorId(id: number) {
    return produtos.find(produto => produto.id == id);
}

function pesquisaNoCarrinhoPorId(id: number) {
    return carrinho.find(item => item.produto.id == id);
}

function adicionaAoCarrinho(produto: Produto, qntd: number) {
    const produtoExistente = pesquisaNoCarrinhoPorId(produto.id);
    if (produtoExistente) {
        produtoExistente.quantidade += qntd;
        atualizaLocalStorage(produto.id, produtoExistente.quantidade);
    } else {
        carrinho.push({
            produto: produto,
            quantidade: qntd
        });
        atualizaLocalStorage(produto.id, qntd);
    }
}

export function verificaCarrinhoDeCompras() {
    produtos.forEach(produto => {
        const qntdProdutoExistente = localStorage.getItem(JSON.stringify(produto.id));
        if(qntdProdutoExistente) {
            carrinho.push({
                produto: produto,
                quantidade: parseInt(qntdProdutoExistente),
            })
        }
    })
}

export function criaEventListenerParaAdicionarAoCarrinho() {
    const formularios = document.querySelectorAll('.formAdiciona')!;

    formularios.forEach(formulario => {
        formulario.addEventListener('submit', event => {
            event.preventDefault();
            const quantidade: HTMLInputElement = formulario.querySelector('.produtoQuantidade')!;
            const idProduto = quantidade.dataset.produtoId!;
            const produto = pesquisaProdutoPorId(parseInt(idProduto))!;

            if (quantidade.value == '') quantidade.value = '1';

            adicionaAoCarrinho(produto, parseInt(quantidade.value));
            renderCarrinhoDeCompras();
        })
    })
};

export function criaEventListenerParaFinalizarCompra() {
    const botao = document.querySelector('.botaoFinaliza');
    botao?.addEventListener('click', () => {
        renderCarrinhoDeCompras(true);
        localStorage.clear();
    })
}

export function criaEventListenerParaRemoverDoCarrinho() {
    const botoes: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.botaoRemove')!;
    botoes.forEach(botao => {
        const idProduto = botao.dataset.apagaId!;
        botao.addEventListener('click', () => {
            const produto = pesquisaNoCarrinhoPorId(parseInt(idProduto))!;
            produto.quantidade = 0;
            atualizaLocalStorage(parseInt(idProduto), 0);
            renderCarrinhoDeCompras();
        });
    });
}
