function countNumbers(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log("Number of positive numbers:", positive);
  console.log("Number of negative numbers:", negative);
  console.log("Number of zeros:", zero);
}

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
countNumbers(numbers);