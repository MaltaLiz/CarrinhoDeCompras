export function converteParaReal(valor: number) {
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}