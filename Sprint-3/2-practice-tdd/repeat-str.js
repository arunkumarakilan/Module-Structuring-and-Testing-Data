function repeatStr(str, count) {
  if (count <0)
  {
  throw new Error("negative counts are not valid");
  }
  else if(count === 1)
  {
    return str;
  }
  else if (count === 0)
  {
    return "";
  }
  else 
  {
    let result ="";
    for (let i =0; i<count;i++)
    {

      result =result+str;
    }
    return result;
  }
}

module.exports = repeatStr;
