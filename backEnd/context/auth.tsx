import { Context, createContext, useReducer } from "react";

export type Action = {
    type: string
    payload: {} | any
}

const initialStateAuth: {} | undefined = {
    account: {}
},
    AuthContext: Context<{}> = createContext<{}>(initialStateAuth),
    authReducer = (state = initialStateAuth, action: Action) => {
        let { type, payload } = action;
        switch (type) {
            case "UPDATE_ACCOUNT":
                return Object.assign({}, state, {
                    account: payload,
                    idToken: payload.token,
                    isAuthenticated: true
                });
            case "UPDATE_TOKEN":
                return Object.assign({}, state, {
                    idToken: payload
                });
            case "GET_TOKEN":
                return state;
            default: return initialStateAuth
        }
    }, AuthProvider = ({ children }: any) => {
        const [account, auth] = useReducer(authReducer, initialStateAuth);
        return (
            <AuthContext.Provider value={{ account, auth }}>
                {children}
            </AuthContext.Provider>
        )
    };
export { AuthContext, AuthProvider }