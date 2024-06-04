function isLeapYear(year) 
{
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) 
    return true
  }
  
  
 const year = parseInt(prompt("Enter a year: "));
  
  if (isLeapYear(year)) 
    {
        alert(`${year} is leap year.`);
  }
   else
    {
        alert(`${year} is not leap year.`);
  }
  