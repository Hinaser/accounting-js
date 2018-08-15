
function stripInsignificantZeros(str, decimal) {
  var parts = str.split(decimal);
  var integerPart = parts[0];
  var decimalPart = parts[1].replace(/0+$/, '');

  if (decimalPart.length > 0) {
    return integerPart + decimal + decimalPart;
  }

  return integerPart;
}

export default stripInsignificantZeros;