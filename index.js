const _ = require('lodash');

const obj = [{ ss: 'a' }, { sam: 'b' }, { sss: 'c' }];

console.log(obj.reduce(function (result, current) {
  return Object.assign(result, current);
}, {}))

const arrObj = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]
const m = arrObj.reduce(((r, c) => Object.assign(r, c)), {})
console.log(m);

const n = _.reduce(arrObj, (r, c) => Object.assign(r, c), {})
console.log(n);


const initialObject = {
  status: 'success',
  fields: [
      {
          name: 'price',
          value: 12,
      },
      {
          name: 'remain',
          value: 45,
      },
  ],
};

const initialObject2 = {
  status: 'success',
  fields: [
      {
          name: 'Fremde',
          value: 12,
      },
      {
          name: 'WV',
          value: 45,
      },
  ],
};

function getFields(initialObject){
  const resultMapper = {
    ...initialObject,
    fields: initialObject.fields.map(({ name, value }) => ({ [name]: value })),
  };
  const resultMerge ={
    ...resultMapper,
    fields:_.reduce(resultMapper.fields, (r, c) => Object.assign(r, c), {})
  }
  return resultMerge;
}

console.log(getFields(initialObject));
console.log(getFields(initialObject2));

// const result = {
//   ...initialObject,
//   fields: initialObject.fields.map(({ name, value }) => ({ [name]: value })),
// };

// const result2={
//   ...result,
//   fields:_.reduce(result.fields, (r, c) => Object.assign(r, c), {})
// }

// console.log(result);
// console.log(result2);