/*Have the function RecursionChallenge(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
For the test cases, the range will be between 1 and 18 and the input will always be an integer.*/

function RecursionChallenge(num) {

    // code goes here
    num = parseInt(num);
  
    if (num <= 0 || num > 18) {
  
      return 'Valor deve ser entre 1 e 18';
  
    } else if (num == 1) {
  
      return 1;

    } else {
      let acumula = 1;
      for (let i = num; i > 1; i--) {
        acumula = acumula * i;
      }
      num = acumula;
    }
    return num;
  }
  
  // keep this function call here 
  console.log(RecursionChallenge(readline()));
  