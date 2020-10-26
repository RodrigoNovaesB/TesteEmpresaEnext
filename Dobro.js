/*Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the string true if any two numbers can be multiplied so that the answer is greater than double the sum of all the elements in the array. 
If not, return the string false. 
For example: if arr is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum of all these elements is 42 and doubling it is 84. 
There are two elements in the array, 16 * 6 = 96 and 96 is greater than 84, so your program should return the string true.
*/

function ArrayChallenge(arr) {

    // code goes here 
    let total = 0;
    let dobroTotal = 0;
    let maiorValor = 0;
    let menorValor = 0;
    let multiValor = 0;
  
    for (let i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }
    dobroTotal = total * 2;
  
    maiorValor = Math.max.apply(Math, arr);
    menorValor = Math.min.apply(Math, arr);
  
  
    multiValor = maiorValor * menorValor;
    console.log(total);
    console.log(dobroTotal);
    console.log(maiorValor);
    console.log(menorValor);
    console.log(multiValor);
  
    return multiValor > dobroTotal;
  
  }
  
  // keep this function call here 
  console.log(ArrayChallenge(readline()));