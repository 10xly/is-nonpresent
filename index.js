var isPresent = require("is-present")
var not = require("es-logical-not-operator")

module.exports = function isNonPresent(thing) {
  return not(isPresent(thing))
}
