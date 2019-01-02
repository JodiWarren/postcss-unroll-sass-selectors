var postcss = require('postcss')

var plugin = require('./')

function run (input, output, opts) {
  return postcss([plugin(opts)]).process(input).then(function (result) {
    expect(result.css).toEqual(output)
    expect(result.warnings()).toHaveLength(0)
  })
}


it('unrolls sass', function () {
  return run('a{ b{} c{ d {} } }', 'a{ } a b{} a c { } a c d {} ', { })
})
