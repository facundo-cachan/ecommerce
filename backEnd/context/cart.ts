import { Context, createContext, useReducer } from 'react';
import { Action } from './auth';
import { removeFromArray } from 'utils/removeFromArray';
import { Product } from '../__generated__/lib/type-defs.graphqls';

const initialStateCart: Product[] | undefined = [],
    CartShop: Context<[]> = createContext<any>(initialStateCart),
    cartReducer = (state = initialStateCart, action: Action) => {
        let { type, payload } = action;
        switch (type) {
            case "ADD":
                const itemIndex: number = state.findIndex((item: Product) => item.id == payload.id);
                if (itemIndex >= 0) {
                    state[itemIndex] = payload;
                    return [...state]
                }
                return [payload, ...state];
            case "REMOVE":
                return removeFromArray(state, payload.id);
            case "RESET": return initialStateCart;
            default: return state
        }
    }, Cart = ({ children }: any) => {
        const [cart, shop] = useReducer(cartReducer, initialStateCart);
        return (
            <CartShop.Provider value={{ cart, shop }}>
            {children}
            </CartShop.Provider>
        )
    };
export { CartShop, Cart }