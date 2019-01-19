import React from "react"
import reducer from './components/reducer/reducer';
import { Cart } from "./model/Cart";
import { deserialize } from "class-transformer";
import { ActionType } from "./enum/ActionType";
import { Produto } from "./model/Produto";
import DataSet from "./mock/dataset";
import { ItemMenu } from "./enum/ItemMenu";

export interface EcommerceType {
    state: EcommerceState
    dispatch: Dispatch
}

const EcommerceContext = React.createContext<EcommerceType | null>(null);

export interface Dispatch {
    finish(): void;
    emptyCart(): void;
    removeFromCart(id: number): void;
    addToCart(id: number): void;
    updateCart(id: number): void;
    clickMenuItem(value: ItemMenu): void;
}

export interface EcommerceState {
    cart: Cart
    produtos: Produto[]
    maisPedidos: Map<number, number>
    menuSelecionado: ItemMenu
};

const loadCart = (): Cart => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return new Cart();
        }
        let cart = deserialize(Cart, serializedState);
        return cart;
    } catch (e) {
        return new Cart();
    }
}

class AppStore extends React.Component<{}, EcommerceState> {

    dispatch: Dispatch = {
        removeFromCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.REMOVE_FROM_CART, payload: { id: id, item: ItemMenu.UNDEFINED } })) },
        addToCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.ADD_TO_CART, payload: { id: id, item: ItemMenu.UNDEFINED } })) },
        updateCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.UPDATE_CART, payload: { id: id, item: ItemMenu.UNDEFINED } })) },
        finish: () => { this.setState(state => reducer(state, { type: ActionType.FINISH, payload: { id: 0, item: ItemMenu.UNDEFINED } })) },
        emptyCart: () => { this.setState(state => reducer(state, { type: ActionType.EMPTY_CART, payload: { id: 0, item: ItemMenu.UNDEFINED } })) },
        clickMenuItem: (item: ItemMenu) => { this.setState(state => reducer(state, { type: ActionType.SET_ITEM_MENU, payload: { id: 0, item: item } })) }
    }

    state: EcommerceState = {
        cart: loadCart(),
        produtos: DataSet.getIDataSet(),
        maisPedidos: new Map<number, number>(),
        menuSelecionado: ItemMenu.HOME,
    }

    render() {
        return (
            <EcommerceContext.Provider value={{ state: this.state, dispatch: this.dispatch }} >
                {this.props.children}
            </EcommerceContext.Provider>
        );
    }
}

export default AppStore;
export { EcommerceContext };