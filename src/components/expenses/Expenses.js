import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const { items } = props;
  const expenses = items.map(expense => {
    return <ExpenseItem
    key={expense.id}
    title={expense.title}
    date={expense.date}
    amount={expense.amount} />
  });

  return (<Card className='expenses'>
    {expenses}
  </Card>);
}

export default Expenses;