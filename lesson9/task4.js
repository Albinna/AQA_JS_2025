const person = {
    firstName: 'Alex',
    lastName: 'Jonson',
    age: 45
}

person.email = "test@gmail.com";
delete person.age;

console.log(person);