import { Action, ActionType } from "../enums/EnumActionTypes";
import { DataSet } from "../../mock";

export type Produto = {
    id: number,
    nome: string,
    descricao: string,
    imageSrc: string,
    preco: string,
    qtdEstoque: number,
}

export type EcommerceState = {
    produtos: Produto[],
    carrinho: Produto[],
    produtoEmDetalhe: Produto | undefined,
};

// MUDAR ESSA ABORDAGEM, FAZER FICAR MAIS DINAMICO, 
// OBTER TODOS OS PRODUTOS COM UM COMANDO SÓ 
const P = DataSet.getIDataSet().impressoras.produtos;
const J = DataSet.getIDataSet().jogos.produtos;
const Produtos = [...P, ...J];

export const initialState: EcommerceState = {
    produtos: Produtos,
    carrinho: [],
    produtoEmDetalhe: undefined,
}

const reducer = (state = initialState, action: Action) => {
    const { produtos, carrinho } = state;
    const { type, payload } = action;

    switch (type) {
        case ActionType.ADD_TO_CART:

            var produto = getProdutoFromStateById(state, payload.id);

            // console.log("Adicionando Produto no carrinho: ", produto);

            if (produto) {
                return { ...state, carrinho: [...carrinho, produto] };
            }
            else {
                return state;
            }

        case ActionType.REMOVE_TO_CART:
            // APENAS PARA TESTE: a lógica aqui não será essa.

            var produto = getProdutoFromStateById(state, payload.id);

            // console.log("Removendo Produto do carrinho: ", produto);

            if (produto) {

                const filteredItems = state.carrinho.filter(p => p !== produto);

                return { ...state, carrinho: filteredItems };
            }
            else {
                return state;
            }
        case ActionType.SET_ON_DETAIL:

            var produto = getProdutoFromStateById(state, payload.id);

            //console.log("definindo detalhe: ", produto);

            if (produto) {
                return { ...state, produtoEmDetalhe: produto };
            }
            else {
                return state;
            }

        default:
            return state;
    }
}

const getProdutoFromStateById = (state: EcommerceState, id: number) => {
    return state.produtos.find(p => p.id == id);
}

export default reducer;