function passwordValidator(password) {
    const previousPassword =["Arun!1621"];
    const specialChar = ["!", "#", "$", "%", ".", "*", "&"];
    if (password.length<5)
    {
        throw new Error("minimum length is 5");
    }
    else if(!/[A-Z]/.test(password))
    {
        throw new Error("Need at least one uppercase");
    }
    else if (!/[a-z]/.test(password))
    {
        throw new Error("Need at least one lower case");
    }
    else if (!/[0-9]/.test(password))
    {
        throw new Error("need at least one number");
    }
    else if(!/["!", "#", "$", "%", ".", "*", "&"]/.test(password))
    {
        throw new Error("need at least one special character");
    }
    else if (previousPassword.includes(password))
    {
        throw new Error("no previous password");

    }
else
{
    return true;
}
}


module.exports = passwordValidator;