import React from "react";

interface ECommerceType {
    state?: any,
    dispatch?: any
}

export const AppContext = React.createContext<ECommerceType>({});