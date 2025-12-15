const averageGrade = b;


if (typeof averageGrade !== 'number') {
    console.log("Incorrect data");
} else if (averageGrade < 60) {
    console.log("Unsatisfactorily");
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log("Satisfactorily");
} else if (averageGrade > 70 && averageGrade <= 80) {
    console.log("Good");
} else if (averageGrade > 80 && averageGrade <= 90) {
    console.log("Very good");
} else if (averageGrade > 90 && averageGrade <= 100) {
    console.log("Perfectly");
} else {
    console.log("Incorrect data");
}