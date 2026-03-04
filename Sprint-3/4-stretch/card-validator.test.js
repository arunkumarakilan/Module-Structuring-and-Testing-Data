const cardValidator = require("./card-validator");

test("Should card number length must be 16", ()=>{
    const cardNumber = "546313000814253";
    expect(()=> cardValidator(cardNumber)).toThrow();
});
test("should all of them must be Number", ()=>{
    const cardNumber = "546313000814253A";
    expect(()=> cardValidator(cardNumber)).toThrow();
    });
    test(" should have at least two different digits represented", ()=>{
        const cardNumber = "1111111111111111";
        expect(()=> cardValidator(cardNumber)).toThrow();
    })
test("should The sum of all the digits must be greater than 16", ()=>{
    const cardNumber = "1111111111111111";
    expect(()=> cardValidator(cardNumber)).toThrow();
});
test("should the final digit must be even", ()=>{
    const cardNumber = "5463130008141535";
    expect(()=> cardValidator(cardNumber)).toThrow();
});
test("Should a valid card Number", ()=>{
    const cardNumber = "5463130076112436";
    expect(cardValidator(cardNumber)).toEqual(true);
});
