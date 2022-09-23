function processIndex(i: number): string {
  if (i % 15 === 0) {
    return 'FizzBuzz';
  }

  if (i % 3 === 0) {
    return 'Fizz';
  }

  if (i % 5 === 0) {
    return 'Buzz';
  }

  return i.toString();
}

function fizzBuzz(n: number): string[] {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(processIndex(i));
  }

  return result;
};

let input = 15;

console.log(fizzBuzz(input));
