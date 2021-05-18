function BudgetBox() {
    return (
        <div className="mt-9">
            <div>
                <h2 className="text-sm">YOUR BALANCE</h2>
                <span className="text-2xl font-medium">$260.00</span>
            </div>
            <div className="bg-white flex p-3 rounded-sm shadow mt-3">
                <div className="flex-grow text-center border-r">
                    <h3 className="text-sm">INCOME</h3>
                    <span className="text-green-500 text-lg">$500.00</span>
                </div>
                <div className="flex-grow text-center">
                    <h3 className="text-sm">EXPENSE</h3>
                    <span className="text-red-800 text-lg">$240.00</span>
                </div>
            </div>
        </div>
    )
}

export default BudgetBox
