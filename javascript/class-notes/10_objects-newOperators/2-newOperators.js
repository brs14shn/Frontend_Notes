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
