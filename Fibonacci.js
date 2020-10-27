/*
Have the function MathChallenge(num) return the string yes if the number given is part of the Fibonacci sequence.
This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up.
The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
*/

function MathChallenge(num) {

    let atual = 0;
    let ultimo = 1;
    let penultimo = 0;
  
  
    if (num > 0 && num <= 3) {
      num = 'yes';
      return num;
    }
  
    while (num > atual) {
      atual = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = atual;
  
      if (atual == num) {
        num = 'yes';
        return num
      }
    }
  
    num = 'no'
    return num;
  
  }
  
  // keep this function call here 
  console.log(MathChallenge(readline()));