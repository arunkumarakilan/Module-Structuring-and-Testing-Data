function cardValidator(cardNumber)
{
    //check the card length must be 16 digit if the card number is less than 16 this condition will throw error
    if(cardNumber.length !==16)
    {
        throw new Error("card number length must be 16");
    }
    let sum = 0;
    // Loop through each digit to check if it is a valid number
    for(let i = 0; i<15; i++)
    {  // if character is not between "0" to "9", it's not a digit.
        if(cardNumber[i]<"0" || cardNumber[i]>"9")
        {
            throw new Error("not a valid number");
        }
    //convert the digit to number and add it to sum total.
        sum = sum + Number(cardNumber[i]);
    }
    for(let i = 1; i< cardNumber.length;i++)
    {
         if(cardNumber[0] == cardNumber[i])
        {
          throw new Error(" should have at least two different digits represented");
        }
    }
    // This condition will check the sum of all digit must be greater than 16 if its less than or Equal to 16 this condition will throw error
    if(sum <= 16)
    {
        throw new Error("sum of all number less than 16");
    }
    else if(cardNumber.slice(-1)%2 !== 0 )
    {
        throw new Error("last digit not an even number");
    }
    else
    {
        return true;
    }
}
     module.exports = cardValidator;