import React from "react";
import { EcommerceState, Dispatch } from "./AppStore";

export interface EcommerceType {
    state: EcommerceState
    dispatch: Dispatch
}

const EcommerceContext = React.createContext<EcommerceType | null>(null);

export default EcommerceContext