import React from "react"
import reducer from './components/reducer/reducer';
import { Provider } from './AppContext';
import { ActionType } from "./components/enums/EnumActionTypes";
import { Cart } from "./Cart";
import { deserialize } from "class-transformer";

export interface Dispatch {
    removeFromCart(id: number): void;
    addToCart(id: number): void;
    updateCart(id: number): void;
}

export interface EcommerceState {
    cart: Cart
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
        addToCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.ADD_TO_CART, payload: { id: id, qtd: 1 } })) },
        updateCart: (id: number) => { this.setState(state => reducer(state, { type: ActionType.UPDATE_CART, payload: { id: id, qtd: 1 } })) }
    }

    state: EcommerceState = {
        cart: loadCart()
    }

    render() {
        return (
            <Provider value={{ state: this.state, dispatch: this.dispatch }} >
                {this.props.children}
            </Provider>
        );
    }
}

export default AppStore;