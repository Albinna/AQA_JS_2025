//function declaration
function calculateAreaOfRectangle (num1, num2){
    const result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
}
calculateAreaOfRectangle(5, 10);

//function declaration
function calculateAreaOfRectangle2(num1, num2){
    const result = num1 * num2;
    return result;
}

console.log (calculateAreaOfRectangle2(5, 10));

// function expression
const calculateAreaOfRectangle3 = function (num1, num2) {
    return num1 * num2;
};

console.log(calculateAreaOfRectangle3(5, 10));

//arrow function
const calculateAreaOfRectangle4 = (num1, num2) => {
    return num1 * num2;
}
console.log(calculateAreaOfRectangle4(5, 10));