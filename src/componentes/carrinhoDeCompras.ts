import carrinhoTemplate from "../templates/carrinhoTemplate";
import { carrinho as carrinhoDeCompras } from "../dados/carrinho";
import carrinhoVazioTemplate from "../templates/carrinhoVazioTemplate";
import compraFinalizadaTemplate from "../templates/compraFinalizadaTemplate";
import { criaEventListenerParaFinalizarCompra, criaEventListenerParaRemoverDoCarrinho } from "../servicos";
import { qntdTotalDeItensNoCarrinho } from "../utils/qntdTotalDeItensNoCarrinho";

export function renderCarrinhoDeCompras(compraFinalizada=false) {
    const carrinho = document.querySelector('#carrinho')!;
    if(compraFinalizada) carrinho.innerHTML = compraFinalizadaTemplate();
    else if(carrinhoDeCompras.length && qntdTotalDeItensNoCarrinho()>0){
        carrinho.innerHTML = carrinhoTemplate();
        criaEventListenerParaRemoverDoCarrinho();
        criaEventListenerParaFinalizarCompra();
    } 
    else {
        carrinho.innerHTML = carrinhoVazioTemplate();
        localStorage.clear();
    }
}