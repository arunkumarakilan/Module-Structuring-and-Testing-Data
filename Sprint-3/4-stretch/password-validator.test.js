/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
    // Arrange
    const password = "Ha!1";
   expect( ()=> isValidPassword(password)).toThrow();
}
);
test("password has at least one uppercase letter(A-Z)",()=>{
const password = "harju!1621";
    
    
    expect(()=> isValidPassword(password)).toThrow();
});
test("password has at least one lowercase letter (a-z)", ()=>{
    const password = "HARJU!1621";
    expect(()=> isValidPassword(password)).toThrow();
});
test("password has at least one number (0-9)", ()=>{
    const password = "Harju!";
    expect(()=>isValidPassword(password)).toThrow();
});
test("password has  at least one special character ",()=>{
    const password = "Harju1621";
    expect(()=> isValidPassword(password)).toThrow();
});
test("password not match with previous password", ()=>{
    const password = "Arun!1621";
    expect(()=> isValidPassword(password)).toThrow();
});
test("password meet all the condition", ()=>{
    const password ="Harju!1621";
    expect(isValidPassword(password)).toEqual(true);
});