function ExpenseDate(props) {
  const { date } = props;
  const year = date.toLocaleString('en-US', { year: 'numeric' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (<div>
    <div>{month}</div>
    <div>{year}</div>
    <div>{day}</div>
  </div>);
}

export default ExpenseDate;