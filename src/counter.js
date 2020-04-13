export function Counter(number) {
  if (isNaN(number)) {
    return "invalid input";
  }
  else {
    var decimalPlaces = countDecimals(number);
    if (decimalPlaces > 2) {
      return "invalid input";
    }
    else {
      return number;
    }
  }
}

var countDecimals = function(number) {
  if(Math.floor(number.valueOf()) == number.valueOf()) {
    return 0;
  } else {
    return number.toString().split(".")[1].length || 0;
  }
}