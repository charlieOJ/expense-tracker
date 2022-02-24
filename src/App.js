import Expenses from './components/expenses/Expenses';
import { expenses } from './expenses'

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
