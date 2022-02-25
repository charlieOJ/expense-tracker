import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  const { items } = props;

  if (items.length === 0) return <p className='expenses-list__fallback'>No expenses found.</p>;

  return items.map(expense => {
    return <ExpenseItem
    key={expense.id}
    title={expense.title}
    date={expense.date}
    amount={expense.amount} />
  });
};

export default ExpensesList;
