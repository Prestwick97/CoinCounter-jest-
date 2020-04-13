export function Counter(number) {
  if (isNaN(number)) {
    return "invalid input";
  }
  else {
    const decimalPlaces = countDecimals(number);
    if (decimalPlaces > 2) {
      return "invalid input";
    }
    else {
      const totalChange = number * 100;
      return coinCounter(totalChange);
    }
  }
}

const countDecimals = function(number) {
  if(Math.floor(number.valueOf()) == number.valueOf()) {
    return 0;
  } else {
    return number.toString().split(".")[1].length || 0;
  }
}

export function coinCounter(cents, totalCoins = [0,0,0,0], counter = 0) {
  const coinValues = [25,10,5,1];
  if (cents == 0) {
    return totalCoins;
  }
  else {
    totalCoins[counter] = Math.floor(cents / coinValues[counter]);
    const remainingChange = cents - (cents/coinValues[counter]);
    const newCounter = counter + 1;
    return coinCounter(remainingChange, totalCoins, newCounter);
  }
}