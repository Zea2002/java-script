function monthlySavings(paymentArray, livingCost)
 {
    if (paymentArray.length<2 || typeof livingCost !== 'number')
         {
        alert('Invalid input');
    }

    let totalPayments = paymentArray.reduce((total, payment) => {
        if (payment >= 3000) {
            payment *= 0.8; // Reduce by 20%
        }
        return total + payment;
    }, 0);

    let savings = totalPayments - livingCost;

    if (savings < 0) 
        {
        return 'Earn more';
    }
     else 
     {
        return savings;
    }
}

// Function to get input from user
function getUserInputAndCalculateSavings() {
    let paymentArrayInput = prompt("Enter your payments as a comma-separated list (e.g., 4000,2000,5000):");
    let livingCostInput = prompt("Enter your living cost as a number:");

    // Convert inputs to appropriate types
    let paymentArray = paymentArrayInput.split(',').map(Number);
    let livingCost = Number(livingCostInput);

    // Call the monthlySavings function and alert the result
    let result = monthlySavings(paymentArray, livingCost);
    alert(result);
}
