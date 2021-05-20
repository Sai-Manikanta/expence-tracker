import ReactDOM from 'react-dom'
import App from './App'
import TransactionsContextProvider from './contexts/TransactionsContext'
import './index.css';

ReactDOM.render(
    <TransactionsContextProvider>
        <App />
    </TransactionsContextProvider>,
    document.getElementById("root")
)