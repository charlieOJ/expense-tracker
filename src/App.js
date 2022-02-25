import { useState } from 'react';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import { expenses } from './constants';

const App = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const addNewExpense = (newExpense) => {
    setExpensesList((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpense}/>
      <Expenses items={expensesList} />
    </div>
  );
}

export default App;
