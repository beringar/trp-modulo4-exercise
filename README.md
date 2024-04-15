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

2. En un comentario del código o un archivo README, justifica la elección de la estructura de datos y responde y argumenta la siguiente pregunta: en JavaScript, ¿qué tipo de estructura de datos son los Arrays?

TBD
