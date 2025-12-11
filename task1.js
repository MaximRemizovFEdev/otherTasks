// [ALGS]: Числовой палиндром https://www.youtube.com/watch?v=rD1l1i7_fwc

// const input1 = 121; // true
// const input2 = -121; // false
// const input3 = 0; // false

// const isPalindromNumber = (x) => {};

// console.log(isPalindromNumber(input1));
// console.log(isPalindromNumber(input2));
// console.log(isPalindromNumber(input3));

const input1 = 121; // true
const input2 = -121; // false
const input3 = 0; // false

const isPalindromNumber = (x) => {
  if (typeof x !== "number") {
    throw "is not a number";
  }

  if (x <= 0) {
    return false;
  }

  const numArr = String(x).split("");

  for (let i = 0; i < Math.floor(numArr.length / 2); i++) {
    if (numArr[i] !== numArr[numArr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindromNumber(123));
console.log(isPalindromNumber(input1));
console.log(isPalindromNumber(input2));
console.log(isPalindromNumber(input3));
