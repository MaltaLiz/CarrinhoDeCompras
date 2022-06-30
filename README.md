### CarrinhoDeCompras

Desafio da Let's Code:

Faça uma página em HTML subdividida em 2 regiões:

A primeira região será a área de compras e deve listar ao menos 10 produtos de sua preferência.

Cada produto deve ter nome e preço em reais.

Ao lado de cada produto, coloque um botão "Adicionar ao carrinho" e alguma forma de entrada de quantidade.

A segunda região será o carrinho. Ele deve mostrar os produtos adicionados (nome, preço unitário, quantidade e total daquele produto). Coloque a opção de deletar um produto (remove todas as unidades daquele produto de uma vez do carrinho).

Quando o usuário clicar em um botão "Adicionar carrinho" na área de compras, você deve verificar se aquele produto já existe no carrinho.
  -caso exista, some a quantidade selecionada ao carrinho e atualize o valor total daquele produto
  -caso não exista, insira a quantidade selecionada do produto no carrinho e atualize o preço total daquele produto

O carrinho não deve ter seu conteúdo perdido caso a página seja atualizada.

O carrinho deve ter um botão "finalizar compra", que deve calcular o preço total e exibi-lo para o usuário.

Caso o total de compras dê pelo menos 1000 reais, aplique 10% de desconto sobre a soma dos produtos antes de calcular o frete.

O frete deve ser de 10 reais a cada unidade:

 - 1 a 10 unidades sai exatamente 10 reais de frete

 - 11 a 20 unidades sai exatamente 20 reais de frete

 - 21 a 30 unidades sai exatamente 30 reais, e assim sucessivamente...
