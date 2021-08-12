const expect = require('expect.js')
const intersect = require('../dist/intersection.min')

describe('intersect', () => {
  const a = {
    p: {x: 10, y: 250},
    q: {x: 20, y: 20}
  }

  const b = {
    p: {x: 400, y: 10},
    q: {x: 100, y: 300}
  }

  console.log(intersect(a, b))
})
