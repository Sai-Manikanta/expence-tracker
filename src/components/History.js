function History() {

    return (
        <div className="mt-6">
            <h2 className="border-b-2 border-gray-300 pb-1">History</h2>
            <div className="mt-3 space-y-2">
                <div className="bg-white text-gray-600 py-2 px-3 shadow flex border-r-4 border-green-400">
                    <p className="flex-grow">Cash</p>
                    <span>+500</span>
                </div>
                <div className="bg-white text-gray-600 py-2 px-3 shadow flex border-r-4 border-red-700">
                    <p className="flex-grow">Book</p>
                    <span>-40</span>
                </div>
                <div className="bg-white text-gray-600 py-2 px-3 shadow flex border-r-4 border-red-700">
                    <p className="flex-grow">Camera</p>
                    <span>-200</span>
                </div>
            </div>
        </div>
    )
}

export default History
