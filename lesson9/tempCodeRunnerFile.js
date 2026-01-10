const users =[
    {name: 'Alex', age: 35, country: 'UA'},
    {name: 'Bob', age: 41, profession: 'driver'},
    {age: 41, gender: 'male'},
]

for (const user of users){
    console.log(user);
}

for (const {name, age, country, profession, gender} of users){
    console.log(name);
    console.log(age);
    console.log(country);
    console.log(profession);
    console.log(gender);
}