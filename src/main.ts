import './style.css';
import { renderListaDeProdutos } from './componentes/listaProdutos';
import { verificaCarrinhoDeCompras, criaEventListenerParaAdicionarAoCarrinho} from './servicos';
import { renderCarrinhoDeCompras } from './componentes/carrinhoDeCompras';

renderListaDeProdutos();
verificaCarrinhoDeCompras();
renderCarrinhoDeCompras();
criaEventListenerParaAdicionarAoCarrinho();