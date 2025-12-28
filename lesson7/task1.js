function handleNum (number, evenNumberCb, oddNumberCb){
    const isEvenNumber = number % 2 === 0;

if (isEvenNumber){
    evenNumberCb(number)
} else {
    oddNumberCb (number)
}
}

function onEvenNumber (number){
    console.log(`Number ${number} is even`)
};

function onOddNumber (number){
    console.log(`Number ${number} is odd`)
};

handleNum(1, onEvenNumber, onOddNumber);