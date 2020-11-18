import React, { useState } from 'react'

const Question = () => {

  const [ amount, saveAmount ] = useState(0)

  // Save the budget on the state
  const setBudget = e => {
    saveAmount(parseInt(e.target.value, 10))
  }
  // Add the budget to the list
  const addBudget = e => {
    e.preventDefault()
    // Validate value

    // Send value
  }

  return (
    <>
      <h3>Add your $$$ budget for this week</h3>
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
