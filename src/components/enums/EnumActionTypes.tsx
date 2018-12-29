export enum ActionType {
    ADD_TO_CART = 'ADD_TO_CART', // add produto no carrinho
    REMOVE_FROM_CART = 'REMOVE_FROM_CART', // remover produto do carrinho
    UPDATE_CART = 'UPDATE_CART',
    SET_ON_DETAIL = "SET_ON_DETAIL", // definir qual é o produto que está sendo detalhado atualmente
}

export interface AddToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: { id: number, qtd: number };
}

export interface RemoveFromCartAction {
    type: ActionType.REMOVE_FROM_CART;
    payload: { id: number };
}

export interface SetOnDetailAction {
    type: ActionType.SET_ON_DETAIL;
    payload: { id: number };
}

export interface UpdateCartAction {
    type: ActionType.UPDATE_CART;
    payload: { id: number, qtd: number };
}

export type Action = AddToCartAction | RemoveFromCartAction | UpdateCartAction | SetOnDetailAction;