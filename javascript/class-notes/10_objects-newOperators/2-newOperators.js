//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car = {
  name: 'BMW',
  model: 1990,
  engine: 1.6,
};

//* 1.YONTEM (Classical)
console.log(car.model);
console.log(car['name']);


//2.yöntem==>destructuring


const {name,model}=car;

console.log(name);

// //* EXAMPLE: NESTED
const cars = {
  car1: {
    name1: "BMW",
    model1: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};
const {car1,car2}=cars;
console.log(car1,car2);

const {name:c2name,model:c2model}=car2;

console.log(c2name,c2model);


//? JSON => javascript Object Notation
const kisiler = [
  {
    name: 'Ahmet',
    surname: 'Can',
    job: 'developer',
    age: 30,
  },
  {
    name: 'Mehmet',
    surname: 'Baki',
    job: 'tester',
    age: 35,
  },
  {
    name: 'Nur',
    surname: 'Ersan',
    job: 'team lead',
    age: 40,
  }];

  kisiler.forEach((kisi)=>{
    console.log("****************")
    const {name,job,surname,age}=kisi
    console.log("NAME:",kisi.name);
    console.log("SURNAME:",kisi.surname);
    console.log("AGE:",kisi.age);
  })



//* function
function getInfo() {
  return {
    id: 101,
    name: "Apple",
    price: 20000,
  };
}
const { id, name, price } = getInfo();
console.log(id, price);