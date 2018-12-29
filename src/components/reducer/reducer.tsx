import { Action, ActionType } from "../enums/EnumActionTypes";
import { DataSet } from "../../mock";
import { ProdutoType } from "../produto/produto";

export type EcommerceState = {
    produtos: ProdutoType[],
    carrinho: ProdutoType[],
    produtoEmDetalhe: ProdutoType | undefined,
    maisVendidos: ProdutoType[], // no checkout, adicionaremos aqui, os 5 produtos mais vendidos.
};

const Produtos = DataSet.getIDataSet();

export const initialState: EcommerceState = {
    produtos: Produtos,
    carrinho: [],
    produtoEmDetalhe: undefined,
    maisVendidos: [],
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

        case ActionType.REMOVE_FROM_CART:
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

            console.log("definindo detalhe: ", produto);

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