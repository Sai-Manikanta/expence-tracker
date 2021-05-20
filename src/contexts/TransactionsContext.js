import { createContext, useReducer } from 'react'
import transactionReducer from './transactionReducer'

const initialState = {
    transactions: [],
    loading: false
};

export const TransactionsContext = createContext(initialState);

function TransactionsContextProvider({ children }) {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    return (
        <TransactionsContext.Provider value={{
            transactions: state.transactions,
            dispatch
        }}>
            { children }
        </TransactionsContext.Provider>
    )
}

export default TransactionsContextProvider
