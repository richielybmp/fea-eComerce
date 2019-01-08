import { Action, ActionType } from "../enums/EnumActionTypes";
import { DataSet } from "../../mock";
import { EcommerceState } from "../../AppStore";
import { serialize } from "class-transformer";
import _ from "lodash";

const reducer = (state: EcommerceState, action: Action) => {
    const { cart, produtos } = state;
    const { type, payload } = action;

    switch (type) {
        case ActionType.ADD_TO_CART:

            var produto = DataSet.getProdutoById(produtos, payload.id);
            //console.log("Adicionando Produto no carrinho: ", produto);

            if (produto) {
                cart.addProduct(produto);
                localStorage.setItem('cart', serialize(cart));
                return { ...state, cart };
            }
            else {
                return state;
            }

        case ActionType.UPDATE_CART:
            var produto = DataSet.getProdutoById(produtos, payload.id);
            //console.log("Removendo Produto do carrinho: ", produto);
            if (produto) {
                cart.updateProduct(produto, -1);
                localStorage.setItem('cart', serialize(cart));
                return { ...state, cart };
            }
            else {
                return state;
            }
        case ActionType.REMOVE_FROM_CART:
            var produto = DataSet.getProdutoById(produtos, payload.id);
            //console.log("Removendo Produto do carrinho: ", produto);
            if (produto) {
                cart.removeProduct(produto);
                localStorage.setItem('cart', serialize(cart));
                return { ...state, cart };
            }
            else {
                return state;
            }
        case ActionType.SET_ON_DETAIL:
            var produto = DataSet.getProdutoById(produtos, payload.id);

            //console.log("definindo detalhe: ", produto);

            if (produto) {
                return { ...state, produtoEmDetalhe: produto };
            }
            else {
                return state;
            }

        case ActionType.EMPTY_CART:
            cart.emptyCart();
            localStorage.setItem('cart', serialize(cart));
            return { ...state, cart };

        case ActionType.FINISH:
            cart.itens().map(item => {
                var index = _.findIndex(produtos, ['id', item.produto.id]);
                produtos[index].qtdEstoque = produtos[index].qtdEstoque - item.quantidade;
            })
            cart.emptyCart();
            localStorage.setItem('cart', serialize(cart));
            return { ...state, cart, produtos };

        default:
            return state;
    }
}

export default reducer;