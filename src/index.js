module.exports = function reverse (num) {
  let reversedNumber = 0;
  let positiveNum = Math.abs(num);

  while (positiveNum != 0) {
    let lastDigit = positiveNum % 10;
    reversedNumber = (reversedNumber * 10) + lastDigit;
    positiveNum = Math.trunc(positiveNum / 10);
  }
  
  return reversedNumber;
}
