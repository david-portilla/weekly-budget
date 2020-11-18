import { useState } from 'react';
import Question from './Question';

function App () {

  // Define initial budget
  const [ budget, saveBudget ] = useState(0)
  const [ remainBudget, setRemainBudget ] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Weekly budget</h1>
      </header>

      <div className="contenido-principal contenido">
        <Question
          saveBudget={ saveBudget }
          setRemainBudget={ setRemainBudget }
        />
      </div>
    </div>
  );
}

export default App;
