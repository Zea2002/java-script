const A = [3,20,4,6,9,2,5,1,13,17,19,14,7,8,11,10,12,15,18,16];
// use libray function
A.sort((a, b) => a - b); 

console.log(...A);

// Using  loop 
for (let i = 0; i < A.length; i++)
     {
  for (let j = i + 1; j < A.length; j++) 
    {
    if (A[i] > A[j]) 
        {
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
}

console.log(...A);
