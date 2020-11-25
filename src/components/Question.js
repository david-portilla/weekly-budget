import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({ saveBudget, setRemainBudget, updateQuestion }) => {

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

    // Save amount
    setError(false)
    saveBudget(amount)
    setRemainBudget(amount)
    updateQuestion(false)
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

Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  setRemainBudget: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
}

export default Question
