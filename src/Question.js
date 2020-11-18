import React from 'react'

const Question = () => {
  return (
    <>
      <h3>Add your $$$ budget for this week</h3>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Add an estimate of your budget"
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
