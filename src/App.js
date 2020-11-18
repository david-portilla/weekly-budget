import { useState } from 'react';
import Form from './Form';
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

        <div className="row">
          <div className="one-half column">
            <Form></Form>
          </div>
          <div className="one-half column">2</div>
        </div>

      </div>
    </div>
  );
}

export default App;
