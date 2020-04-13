// Recursive approach:
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

function coinCounter(cents, totalCoins = [0,0,0,0], counter = 0) {
  const coinValues = [25,10,5,1];
  if (cents === 0) {
    return totalCoins;
  }
  else {
    totalCoins[counter] = Math.floor(cents / coinValues[counter]);
    const remainingChange = cents - (totalCoins[counter] * coinValues[counter]);
    const newCounter = counter + 1;
    return coinCounter(remainingChange, totalCoins, newCounter);
  }
}

// Closure approach:

// export function OtherCounter(dollarAmount) {
//   const totalAmount = dollarAmount * 100;
//   const totalQuarters = Math.floor(totalAmount / 25);
//   return (totalQuarters) => {
//     console.log("quarters " + totalQuarters);
//     const firstRemainder = totalAmount - (totalQuarters*25);
//     return (firstRemainder) => {
//       const totalDimes = Math.floor(firstRemainder/10);
//       return (totalDimes) => {
//         console.log("dimes " + totalDimes);
//         const secondRemainder = firstRemainder - (totalDimes*10);
//         const totalNickels = Math.floor(secondRemainder/5);
//         return (totalNickels) => {
//           console.log("nickels " + totalNickels);
//           const totalPennies = secondRemainder - (totalNickels*5);
//           console.log("pennies " + totalPennies);
//           return [totalQuarters, totalDimes, totalNickels, totalPennies];
//         }
//       }
//     }
//   }
// }

export function OtherCounter(amount) {
  return denomination => {
    return (Math.floor(amount/denomination));
  }
}