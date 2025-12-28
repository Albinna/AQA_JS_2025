function countToFiveRecursion (startValue){
    if (startValue >=0){
        console.log(startValue);
        countToFiveRecursion (--startValue)
    } else {
        console.log("Finish")
    }
}
countToFiveRecursion (5);