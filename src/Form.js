import React from 'react'

const Form = () => {
  return (
    <form>
      <h2>Add your expenses here</h2>

      <div className="campo">
        <label htmlFor="expense-name">Expense name</label>
        <input
          type="text"
          className="u-full-width"
          id="expense-name"
          placeholder="Ex. Metro"
        />
      </div>

      <div className="campo">
        <label htmlFor="expense-amount">Expense amount</label>
        <input
          type="text"
          className="u-full-width"
          id="expense-amount"
          placeholder="Ex. 200"
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
