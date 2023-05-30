//! node module import synax

const {
    calculateTotal,
    celsiusToFahrenheit,
    fahrenheitTocelsius,
    fibonacci} = require("./math");


//! es6 module export
// import{
//     calculateTotal,
//     fahrenheitTocelsius,
//     celsiusToFahrenheit,
//     fibonacci


describe("calculateTotal", () => {
    // test caselerini olusturuyoruz
    it("should exist", () => {
    expect (calculateTotal) . toBeDefined()
})
    
    
    it("should return a number", () => {
    expect (calculateTotal(100, 0.20)).toBe(120)
})
    it("should return with default  VAT", () => {
    expect (calculateTotal(200)).toBe(236)
    // expect (calculateTotal(200)).toBe(235)
})

})


// describe("calculateTotal",()=>{
   
//     // it("should exist",()=>{
//     //     expect(calculateTotal).toBeDefined()
//     // })
//     // test("calculates total with default vat",()=>{
//     //     expect(calculateTotal(100)).toBe(118);
//     // });
//     // test("calculates total with 0 vat",()=>{
//     //     expect(calculateTotal(100,0)).toBe(100);
//     // });
//     // test("calculates total with 0.1 vat",()=>{
//     //     expect(calculateTotal(100,0.1)).toBe(110);
//     // });
// })

describe("celsiusToFahrenheit",()=>{
    
})
describe("fahrenheitTocelsius",()=>{
    
})

describe("fibonacci",()=>{

})