import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'
import { numberWithCommas } from '../utils/helpers'

function History() {
    const { transactions, dispatch } = useContext(TransactionsContext);

    if(transactions.length === 0){
        return null
    }

    return (
        <div className="mt-6">
            <h2 className="border-b-2 border-gray-300 pb-1">History</h2>
            <div className="mt-3 space-y-2">
                {transactions.map(transaction => {
                    const isNegative = transaction.amount < 0 ? true : false;
                        return (
                            <div key={transaction._id} className={`bg-white text-gray-600 group shadow flex border-r-4 ${isNegative ? 'border-red-800' : 'border-green-400'}`}>
                                <div className="flex-grow flex py-2 px-3">
                                    <p className="flex-grow">{transaction.text}</p>
                                    <span>{numberWithCommas(transaction.amount)}</span>
                                </div>
                                <button 
                                    onClick={() => {
                                        // Removing transaction dispatch
                                        dispatch({
                                            type: 'REMOVE_TRANSACTION',
                                            payload: {
                                                _id: transaction._id
                                            }
                                        })
                                    }}
                                    className="border ml-2 text-red-400 px-2 hidden group-hover:block"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default History
