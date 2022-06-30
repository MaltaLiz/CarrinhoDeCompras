import { carrinho } from "../dados/carrinho";

export const totalDaCompra = () => carrinho.reduce((total, item) => total + item.produto.preco*item.quantidade, 0.0);