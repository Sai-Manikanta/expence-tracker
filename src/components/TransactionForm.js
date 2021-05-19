import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TransactionsContext } from '../contexts/TransactionsReducer'

function TransactionForm() {

    const { dispatch } = useContext(TransactionsContext);

    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // check if amount 0 alert
        if(parseInt(amount) === 0){
            window.alert("Amount Could not be 0");
            return
        }

        const transaction = { id: uuidv4(), text, amount: parseInt(amount) };

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                transaction
            }
        })

        // clear form inputs
        setText("");
        setAmount("");
    }

    return (
        <div className="mt-6">
            <h2 className="border-b-2 border-gray-300 pb-1">Add new transaction</h2>
            <form onSubmit={handleSubmit} className="mt-3">
                    <div className="my-2">
                        <label htmlFor="text">Text</label>
                        <input type="text" id="text" className="block w-full border py-1 px-2 mt-1 placeholder-gray-500 outline-none focus:border-gray-300" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="amout">Amount</label>
                        <span className="block text-sm">(negative - expensive, positive-income)</span>
                        <input type="text" id="amout" className="block w-full border py-1 px-2 placeholder-gray-500 mt-1 outline-none focus:border-gray-300" placeholder="Extra amout..." value={amount} onChange={(e) => setAmount(e.target.value)}  />
                    </div>
                    <button type="submit" className="bg-purple-500 rounded-sm text-center py-2 w-full text-gray-300 hover:text-gray-100 hover:bg-purple-600 text-sm mt-3 focus:outline-none">Add transaction</button>
            </form>
        </div>
    )
}

export default TransactionForm
