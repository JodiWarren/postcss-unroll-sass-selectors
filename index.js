var postcss = require('postcss')

module.exports = postcss.plugin(
  'postcss-unroll-sass-selectors',
  function (opts) {
    opts = opts || {}

    // Work with options here

    return function (root, result) {
    // Transform CSS AST here
      root.walkRules(function (rule) {
        var unrolledSelector = fetchParentSelector(rule)
        rule.selector = unrolledSelector
      })
    }
  })

function fetchParentSelector (rule, selector) {
  var thisSelector = selector || ''
  thisSelector = rule.selector + ' ' + thisSelector
  if (rule.parent.type === 'rule') {
    thisSelector = fetchParentSelector(rule.parent, thisSelector)
  }
  return thisSelector
}
