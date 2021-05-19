import { createContext, useReducer } from 'react';

const initialState = [];

export const TransactionsContext = createContext(initialState);

function transactionReducer(state, action){
    switch(action.type){
        case 'ADD_TRANSACTION':
            return [action.payload.transaction, ...state]
        default:
            return state
    }
}

function TransactionsContextProvider({ children }) {
    const [transactions, dispatch] = useReducer(transactionReducer, initialState);

    return (
        <TransactionsContext.Provider value={{
            transactions: transactions,
            dispatch
        }}>
            { children }
        </TransactionsContext.Provider>
    )
}

export default TransactionsContextProvider
