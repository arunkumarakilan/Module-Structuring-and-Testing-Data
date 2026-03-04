function cardValidator(cardNumber)
{
    if(cardNumber.length !==16)
    {
        throw new Error("card number length must be 16");
    }
    let sum = 0;
    for(let i = 0; i<15; i++)
    {
        if(cardNumber[i]<"0" || cardNumber[i]>"9")
        {
            throw new Error("not a valid number");
        }
       
        sum = sum + Number(cardNumber[i]);
    }
    for(let i = 1; i< cardNumber.length;i++)
    {
         if(cardNumber[0] == cardNumber[i])
        {
          throw new Error(" should have at least two different digits represented");
        }
    }
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