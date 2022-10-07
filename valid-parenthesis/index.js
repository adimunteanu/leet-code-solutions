var isValid = function(s) {
  if (s.length === 0 || s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let c of s) {
    if (pairs[c]) {
      stack.push(c);
    } else {
      if (pairs[stack[stack.length - 1]] !== c) {
        return false;
      } else {
        stack.pop()
      }
    }
  }

  return stack.length !== 0;
};

console.log(isValid(']'))
