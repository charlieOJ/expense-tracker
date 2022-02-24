import ExpenseItem from './components/ExpenseItem';
import { expenses } from './expenses'

function App() {
  const expenseItems = expenses.map(expense => {
    return <ExpenseItem
      key={expense.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount} />
  });

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseItems}
    </div>
  );
}

export default App;
