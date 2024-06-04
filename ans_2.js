
function isEven(number)
 {
    return number % 2 === 0;
  }

  
  const num=parseInt(prompt("Enter a number:"));
  
  
  if (isNaN(num))
     {
    alert("Please enter a valid number.");
  } 
  else 
  {
    if (isEven(num)) 
        {
      alert(`${num} is even.`);
    } 
    else 
    {
      alert(`${num} is odd.`);
    }
  }
  