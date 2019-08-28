// this is using the stock cjs or you can pass
// jsType: ES to the jsonqlKoa configuration

/**
 * No param required
 * @return {string} a message
 */
module.exports = function getSomething() {
  return `You call me @ ${Date.now()}`
}
