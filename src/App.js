import Expenses from './components/expenses/Expenses';
import { expenses } from './expenses'

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
