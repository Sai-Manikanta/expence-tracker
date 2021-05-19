import BudgetBox from "./components/BudgetBox"
import History from "./components/History"
import TransactionForm from "./components/TransactionForm"

function App() {
    return (
        <div className="max-w-xs m-5 sm:mx-auto">
            <h1 className="text-xl text-center mt-12">Expence Tracker</h1>
            <BudgetBox />
            <History />
            <TransactionForm />
        </div>
    )
}

export default App
