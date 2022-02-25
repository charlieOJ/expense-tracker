import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const { onSaveNewExpense } = props;

  const [newExpenseInputs, setNewExpenseInputs] = useState({ title: '', date: '', amount: '' });
  const titleChangeHandler = e => {
    setNewExpenseInputs((prevState) => {
      return { ...prevState, title: e.target.value }
    });
  };
  const dateChangeHandler = e => {
    setNewExpenseInputs((prevState) => {
      return { ...prevState, date: e.target.value }
    });
  };
  const amountChangeHandler = e => {
    setNewExpenseInputs((prevState) => {
      return { ...prevState, amount: e.target.value }
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveNewExpense({ ...newExpenseInputs, date: new Date(newExpenseInputs.date) });
    // console.log("newExpenseInputs: ", { ...newExpenseInputs, date: new Date(newExpenseInputs.date) });
    // Set form input empty once form submit
    setNewExpenseInputs({ title: '', date: '', amount: '' })
  };

  return (<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={newExpenseInputs.title} onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={newExpenseInputs.date} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={newExpenseInputs.amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
      </div>
    </div>
    <div className="new-expense__actions" >
      <button type="submit">Add Expense</button>
    </div>
  </form>);
}

export default ExpenseForm;