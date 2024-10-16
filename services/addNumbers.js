const addNumbers = (valuesArray) => {
  console.log('Sample add Number Functions');
  let totalValue = 0;
  valuesArray.forEach((eachValue) => {
    totalValue += eachValue
  })
  return totalValue;
}

exports.addNumbers = addNumbers;
