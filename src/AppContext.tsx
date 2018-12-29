import React from "react";
import { EcommerceState, Dispatch } from "./AppStore";

interface EcommerceType {
    state: EcommerceState
    dispatch: Dispatch
}


export const { Provider, Consumer } = React.createContext<EcommerceType | null>(null);