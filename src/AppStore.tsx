import React from "react"
import reducer from './components/reducer/reducer';
import { ActionType } from "./components/enums/EnumActionTypes";
import { Cart } from "./Cart";
import { deserialize } from "class-transformer";
import { ProdutoType } from "./components/produto/produto";
import { DataSet } from "./mock";
import EcommerContext from "./AppContext";
import { number } from "prop-types";

export interface Dispatch {
    finish(): void;
    emptyCart(): void;
    removeFromCart(id: number): void;
    addToCart(id: number): void;
    updateCart(id: number): void;
}

export interface EcommerceState {
    cart: Cart
    produtos: ProdutoType[]
    maisPedidos: Map<number, number>
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
        removeFromCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.REMOVE_FROM_CART, payload: { id: id } })) },
        addToCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.ADD_TO_CART, payload: { id: id } })) },
        updateCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.UPDATE_CART, payload: { id: id } })) },
        finish: () => { this.setState(state => reducer(state, { type: ActionType.FINISH, payload: { id: 0 } })) },
        emptyCart: () => { this.setState(state => reducer(state, { type: ActionType.EMPTY_CART, payload: { id: 0 } })) }
    }

    state: EcommerceState = {
        cart: loadCart(),
        produtos: DataSet.getIDataSet(),
        maisPedidos: new Map<number, number>(),
    }

    render() {
        return (
            <EcommerContext.Provider value={{ state: this.state, dispatch: this.dispatch }} >
                {this.props.children}
            </EcommerContext.Provider>
        );
    }
}

export default AppStore;