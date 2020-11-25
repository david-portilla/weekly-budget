import React from 'react'
import { checkBudget } from '../helpers/helpers'

const HandleBudget = ({ budget, remainBudget }) => {
  return (
    <>
      <div className="alert alert-primary">
        Budget: ${ budget }
      </div>

      <div className={ checkBudget(budget, remainBudget) }>
        Remaining budget: ${ remainBudget }
      </div>
    </>
  )
}

export default HandleBudget
