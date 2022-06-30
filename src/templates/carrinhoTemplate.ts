import { carrinho } from "../dados/carrinho"
import { converteParaReal } from "../utils/converteParaReal";
import { totalDaCompra } from "../utils/totalDaCompra";
import { desconto } from "../utils/desconto";
import { frete } from "../utils/frete";
import { qntdTotalDeItensNoCarrinho } from "../utils/qntdTotalDeItensNoCarrinho";
export default function carrinhoTemplate() {
    return `
    <h2>Carrinho</h2>
    <table id="tabelaCarrinho">
        <thead>
            <th>Descrição</th>
            <th>Preço Unitário</th>
            <th>Valor</th>
        </thead>
        <tbody>
            ${carrinho.map(item => {
            if(item.quantidade>0) return `
                <tr>
                    <td class="tdDescricao">
                        <img src="${item.produto.imagem}" width="75" height="56">
                        <p>${item.quantidade} x ${item.produto.nome}</p>
                        <button data-apaga-id="${item.produto.id}" class="botaoRemove"><img src="https://www.pngrepo.com/png/60334/180/trash.png" width="18" height="18"}"></button>
                    </td>
                    <td class="tdPrecoUnitario">
                        <p>${converteParaReal(item.produto.preco)}</p>
                    </td>
                    <td class="tdValor">
                        <p>${converteParaReal(item.produto.preco * item.quantidade)}</p>
                    </td>
                </tr>
            `
            return}).join('')}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">Produtos</td>
                <td>${converteParaReal(totalDaCompra())}</td>
            </tr>
            <tr>
                <td colspan="2">Frete</td>
                <td>${converteParaReal(frete(qntdTotalDeItensNoCarrinho()))}</td>
            </tr>
            <tr>
                <td colspan="2">Descontos</td>
                <td>${converteParaReal(desconto(totalDaCompra()))}</td>
            </tr>
            <tr>
                <td colspan="2">Total</td>
                <td>${converteParaReal(totalDaCompra()+frete(qntdTotalDeItensNoCarrinho())-desconto(totalDaCompra()))}</td>
            </tr>
        <tfoot>
    </table>
    <input type="submit" value="Finalizar a compra" class="botaoFinaliza"}>
    `
}