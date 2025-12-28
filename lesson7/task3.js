function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  if (denominator === 0) {
    throw new Error("You can't divide by zero");
  }

  return numerator / denominator;
}


try {
  console.log(divide(10, 2));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finish");
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finish");
}

try {
  console.log(divide("abc", 5));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("РFinish");
}

try {
  console.log(divide(15, 3));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finish");
}