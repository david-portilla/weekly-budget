export const checkBudget = (budget, remainBudget) => {
  let styleClass
  // > 25%
  if ((budget / 4) > remainBudget) {
    styleClass = 'alert alert-danger'
  } else if ((budget / 2) > remainBudget) {
    // > 50%
    styleClass = 'alert alert-warning'
  } else {
    styleClass = 'alert alert-success'
  }

  return styleClass
}
