import React, { useState } from 'react'
import Error from './Error'

const Form = () => {

  const [ name, setName ] = useState('')
  const [ amount, setAmount ] = useState(0)
  const [ error, setError ] = useState(false)

  const saveName = e => {
    setName(e.target.value)
  }

  const saveAmount = e => {
    setAmount(parseInt(e.target.value, 10))
  }

  // Add expense to global state
  const addExpense = e => {
    e.preventDefault()

    // Validate value
    if (amount < 1 || isNaN(amount) || name.trim() === '') {
      setError(true)
      return
    }

    // Save expense
    setError(false)
  }

  return (
    <form
      onSubmit={ addExpense }
    >
      <h2>Add your expenses here</h2>

      { error ? <Error msg="Both fiels are mandatory or incorrect value on expense" /> : null }

      <div className="campo">
        <label htmlFor="expense-name">Expense name</label>
        <input
          type="text"
          className="u-full-width"
          id="expense-name"
          placeholder="Ex. Metro"
          value={ name }
          onChange={ saveName }
        />
      </div>

      <div className="campo">
        <label htmlFor="expense-amount">Expense amount</label>
        <input
          type="number"
          className="u-full-width"
          id="expense-amount"
          placeholder="Ex. 200"
          value={ amount }
          onChange={ saveAmount }
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />

    </form>
  )
}

export default Form
