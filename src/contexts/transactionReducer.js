function transactionReducer(state, action){
    switch(action.type){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload.transaction, ...state.transactions]
            }
        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(t => t._id !== action.payload._id)
            }
        default:
            return state
    }
}

export default transactionReducer