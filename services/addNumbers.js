const addNumbers = (valuesArray) => {
  console.log('Sample add Number Functions');
  let totalValue = 200;
  valuesArray.map((eachValue) => {
    totalValue += eachValue
  })
  return totalValue;
}

exports.addNumbers = addNumbers;
