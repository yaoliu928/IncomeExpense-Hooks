import "./App.css";
import Header from "./components/Header";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import TransactionList from './components/TransactionList';
import IncomeExpense from './components/IncomeExpense';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
