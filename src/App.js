import { useEffect, useState } from 'react';
import Form from './components/Form';
import HandleBudget from './components/HandleBudget';
import List from './components/List';
import Question from './components/Question';

function App () {

  // Define initial budget
  const [ budget, saveBudget ] = useState(0)
  const [ remainBudget, setRemainBudget ] = useState(0)
  const [ showQuestion, setQuestion ] = useState(true)
  const [ expenses, setExpenses ] = useState([])
  const [ expense, setExpense ] = useState([])
  const [ createExpense, setCreateExpense ] = useState(false)

  useEffect(() => {
    if (createExpense) {
      // add new expense
      setExpenses([
        ...expenses,
        expense
      ])
      // update remain buget
      const remain = remainBudget - expense.amount
      setRemainBudget(remain)
    }
    setCreateExpense(false)
  }, [ expense ])

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
                  setExpense={ setExpense }
                  setCreateExpense={ setCreateExpense }
                />
              </div>

              <div className="one-half column">
                <List
                  expenses={ expenses }
                />
                <HandleBudget
                  budget={ budget }
                  remainBudget={ remainBudget }
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
