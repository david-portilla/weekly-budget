import React, { useState } from 'react'
import Error from './Error'



const Question = () => {

  const [ amount, setAmount ] = useState(0)
  const [ error, setError ] = useState(false)

  // Save the budget on the state
  const setBudget = e => {
    setAmount(parseInt(e.target.value, 10))
  }
  // Add the budget to the list
  const addBudget = e => {
    e.preventDefault()

    // Validate value
    if (amount < 1 || isNaN(amount)) {
      setError(true)
      return
    }

    // Send value
    setError(false)
  }

  return (
    <>
      <h3>Add your $$$ budget for this week</h3>

      { error ? <Error msg="This is not a right value" /> : null }

      <form
        onSubmit={ addBudget }
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Add an estimate of your budget"
          onChange={ setBudget }
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Set budget"
        />

      </form>
    </>
  )
}

export default Question
