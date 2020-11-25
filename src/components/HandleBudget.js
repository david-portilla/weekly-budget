import React from 'react'
import PropTypes from 'prop-types'
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

HandleBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  remainBudget: PropTypes.number.isRequired
}

export default HandleBudget
