import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const { onAddNewExpense } = props;

  return (<div className='new-expense'>
    <ExpenseForm onSaveNewExpense={onAddNewExpense} />
  </div>);
}

export default NewExpense;