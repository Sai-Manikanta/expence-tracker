import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsReducer'

function History() {
    const { transactions } = useContext(TransactionsContext);

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
                            <div key={transaction.id} className={`bg-white text-gray-600 py-2 px-3 shadow flex border-r-4 ${isNegative ? 'border-red-800' : 'border-green-400'}`}>
                                <p className="flex-grow">{transaction.text}</p>
                                <span>{transaction.amount}</span>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default History
