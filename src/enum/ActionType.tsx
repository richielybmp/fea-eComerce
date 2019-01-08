export enum ActionType {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    UPDATE_CART = 'UPDATE_CART',
    SET_ON_DETAIL = "SET_ON_DETAIL",
    FINISH = "FINISH",
    EMPTY_CART = "EMPTY_CART"
}

export interface AddToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: { id: number };
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
    payload: { id: number };
}

export interface FinishAction {
    type: ActionType.FINISH;
    payload: { id: number };
}

export interface EmptyCartAction {
    type: ActionType.EMPTY_CART;
    payload: { id: number };
}

export type Action = AddToCartAction | RemoveFromCartAction | UpdateCartAction | SetOnDetailAction | EmptyCartAction | FinishAction