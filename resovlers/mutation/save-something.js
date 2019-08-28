const { JsonqlError } = require('jsonql-errors')
/**
 * demo the mutation interface
 * @param {stirng} payload what to save
 * @param {number} condition just a phony condition to demo the validation
 */
module.exports = function saveSomething(payload, condition) {
  // just silly repeat it how many times
  if (condition > 0) {
    let result = new Array(condition).fill(payload)
    return result.join(' ')
  }
  throw new JsonqlError(`Expect the condition to have be greater than zero!`)
}
