import React from "react";
import { EcommerceState, Dispatch } from "./AppStore";

export interface EcommerceType {
    state: EcommerceState
    dispatch: Dispatch
}

export const { Provider, Consumer } = React.createContext<EcommerceType | null>(null);