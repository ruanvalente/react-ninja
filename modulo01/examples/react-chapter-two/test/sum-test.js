'use strict'

const sum = require('./sum')

console.assert(typeof sum === 'function', 'should sum is a function')
console.assert(sum(1, 2) === 3, 'should sum(1, 2) return 3')
console.assert(sum(1, 3) === 4, 'should sum(1, 3) return 4')
console.log('All tests passed!')
