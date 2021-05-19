import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsReducer'
import { totalIncome, totalExpence, totalBalanceJsx } from '../utils/transactionsUtils'

function BudgetBox() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <div className="mt-9">
            <div>
                <h2 className="text-sm">YOUR BALANCE</h2>
                {/* return jsx code with total balance see return jsx in utils/transactionUtils.js file */}
                {totalBalanceJsx(totalIncome(transactions), totalExpence(transactions))}
            </div>
            <div className="bg-white flex p-3 rounded-sm shadow mt-3">
                <div className="flex-grow text-center border-r">
                    <h3 className="text-sm">INCOME</h3>
                    <span className="text-green-500 text-lg">
                        ${totalIncome(transactions)}
                    </span>
                </div>
                <div className="flex-grow text-center">
                    <h3 className="text-sm">EXPENSE</h3>
                    <span className="text-red-800 text-lg">
                        ${Math.abs(totalExpence(transactions))}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BudgetBox
