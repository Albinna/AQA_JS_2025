const car1 = {
    brand: 'BMW',
    model: 'G21',
    year: 2023
    }


const car2= {
    brand: 'Ford',
    model: 'Mustang',
    carOwner: "Ivanov Ivan"
    }


const car3 = {
  car1: { ...car1 },
  car2: { ...car2 }
};


console.log(car3);
