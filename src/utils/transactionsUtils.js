// Income calculation
export const totalIncome = (transactions) => {
    let total = 0;
    transactions.forEach(({ amount }) => {
        if(amount > 0){
            total += amount
        }
    })
    return total
}

// Expence calculation
export const totalExpence = (transactions) => {
    let total = 0;
    transactions.forEach(({ amount }) => {
        if(amount < 0){
            total += amount
        }
    })
    return total
}

// totoal balance calculation
export const totalBalanceJsx = (income, expence) => {
    const balance = income + expence;
    if(balance < 0){
        return (
            <span className="text-2xl text-red-800 font-medium">
                -${Math.abs(balance)}
            </span>
        )
    } else {
        return(   
            <span className="text-2xl text-green-500 font-medium">
                ${balance}
            </span>
        )
    }
}