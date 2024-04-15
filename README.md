# checkCombination of valid pairs

1. Realiza el siguiente ejercicio en TDD:

Construir una función que reciba un string y compruebe si contiene la combinación y orden correctos de paréntesis, corchetes y llaves.

Input: string
Output: boolean
Ejemplos de casos de uso:

"[({[]})]" --> Retorna true
"()" --> Retorna true
"" --> Retorna true
"[{}" --> Retorna false
"([)]" --> Retorna false
Antes de comenzar a picar, pregúntate cuál es la mejor estructura de datos, teniendo en cuenta su eficiencia y complejidad algorítmica.

Big O of my solution:

The time complexity of the checkCombination function is O(n), where n is the length of the input string combination. Here's why:

The function iterates over the string combination from the start to the middle, which is a linear operation, hence O(n).
The lookup in the validPairs object is a constant time operation, O(1), because object property access time in JavaScript does not depend on the size of the object.
So, the overall time complexity is dominated by the linear iteration over the string, making it O(n).

## Alternative using stack (same complexity but more if/else)

I prefer first approach. Simple and clean.

```typescript
export const checkCombinationAlt = (combination: string): boolean => {
  const stack: string[] = [];

  for (let i = 0; i < combination.length; i++) {
    const bracket = combination[i];

    if (validPairs[bracket]) {
      // If the bracket is an opening bracket, push it onto the stack
      stack.push(bracket);
    } else {
      // If the bracket is a closing bracket, check if it matches the last opening bracket
      const lastOpeningBracket = stack.pop();

      if (lastOpeningBracket === undefined || validPairs[lastOpeningBracket] !== bracket) {
        // If the brackets don't match, the combination is not valid
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were matched and the combination is valid
  return stack.length === 0;
};
```

2. En un comentario del código o un archivo README, justifica la elección de la estructura de datos y responde y argumenta la siguiente pregunta: en JavaScript, ¿qué tipo de estructura de datos son los Arrays?

TBD
