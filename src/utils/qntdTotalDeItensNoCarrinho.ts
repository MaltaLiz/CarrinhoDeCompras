import { carrinho } from "../dados/carrinho";

export const qntdTotalDeItensNoCarrinho = () => carrinho.reduce((total, item) => total + item.quantidade, 0.0);