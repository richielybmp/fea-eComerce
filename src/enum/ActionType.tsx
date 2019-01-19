import { ItemMenu } from "./ItemMenu";

export enum ActionType {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    UPDATE_CART = 'UPDATE_CART',
    SET_ON_DETAIL = "SET_ON_DETAIL",
    FINISH = "FINISH",
    EMPTY_CART = "EMPTY_CART",
    SET_ITEM_MENU = "SET_ITEM_MENU",
}
interface Payload {
    item: ItemMenu,
    id: number,
}

export interface SetItemMenu {
    type: ActionType.SET_ITEM_MENU;
    payload: Payload;
}

export interface AddToCartAction {
    type: ActionType.ADD_TO_CART;
    payload: Payload;
}

export interface RemoveFromCartAction {
    type: ActionType.REMOVE_FROM_CART;
    payload: Payload;
}

export interface SetOnDetailAction {
    type: ActionType.SET_ON_DETAIL;
    payload: Payload;
}

export interface UpdateCartAction {
    type: ActionType.UPDATE_CART;
    payload: Payload;
}

export interface FinishAction {
    type: ActionType.FINISH;
    payload: Payload;
}

export interface EmptyCartAction {
    type: ActionType.EMPTY_CART;
    payload: Payload;
}

export type Action = AddToCartAction | RemoveFromCartAction | UpdateCartAction | SetOnDetailAction | EmptyCartAction | FinishAction | SetItemMenu