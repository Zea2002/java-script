
  function findLongestName(names)
   {
    
    let longestName = names[0];

    for (let i = 1; i < names.length; i++) 
        {
        if (names[i].length > longestName.length)
             {
            longestName = names[i];
        }
    }

    return longestName;
}


var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var longestName = findLongestName(friends);
console.log("Longest name:", longestName);

  