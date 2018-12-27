export enum ActionType {
    ADD_TO_CART = 'ADD_TO_CART', // add produto no carrinho
    REMOVE_TO_CART = 'REMOVE_TO_CART', // remover produto do carrinho
    SET_ON_DETAIL = "SET_ON_DETAIL", // definir qual é o produto que está sendo detalhado atualmente
}

export interface AddToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: { id: number, qtd: number };
}

export interface RemoveToCartAction {
    type: ActionType.REMOVE_TO_CART;
    payload: { id: number, qtd: number };
}

export interface SetOnDetailAction {
    type: ActionType.SET_ON_DETAIL;
    payload: { id: number };
}

export type Action = AddToCartAction | RemoveToCartAction | SetOnDetailAction;