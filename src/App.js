import { useState } from 'react';
import Form from './Form';
import List from './List';
import Question from './Question';

function App () {

  // Define initial budget
  const [ budget, saveBudget ] = useState(0)
  const [ remainBudget, setRemainBudget ] = useState(0)
  const [ showQuestion, setQuestion ] = useState(true)
  const [ expenses, setExpenses ] = useState([])

  // Add new expense
  const addNewExpense = expense => {
    setExpenses([
      ...expenses,
      expense ])
  }

  return (
    <div className="container">
      <header>
        <h1>Weekly budget</h1>
      </header>

      <div className="contenido-principal contenido">
        { showQuestion ?
          (
            <Question
              saveBudget={ saveBudget }
              setRemainBudget={ setRemainBudget }
              updateQuestion={ setQuestion }
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  addNewExpense={ addNewExpense }
                />
              </div>

              <div className="one-half column">
                <List
                  expenses={ expenses }
                />
              </div>

            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
