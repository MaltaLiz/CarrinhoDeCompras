export const desconto = (totalDaCompra: number) => {
    if(totalDaCompra>1000) return totalDaCompra*0.1;
    return 0;
} 