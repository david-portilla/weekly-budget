import React from 'react'

const HandleBudget = ({budget, remainBudget}) => {
  return (
    <>
      <div className="alert alert-primary">
        Budget: ${budget}
      </div>

      <div className="alert">
        Remaining budget: ${remainBudget}
      </div>
    </>
  )
}

export default HandleBudget
