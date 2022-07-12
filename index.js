const _ = require('lodash');

const obj = [{ ss: 'a' }, { sam: 'b' }, { sss: 'c' }];

console.log(obj.reduce(function (result, current) {
  return Object.assign(result, current);
}, {}))

const arrObj = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
const m = arrObj.reduce(((r, c) => Object.assign(r, c)), {})
console.log(m);

const n = arrObj.reduce(((r, c) => Object.assign(r, c)), {})
console.log(n);