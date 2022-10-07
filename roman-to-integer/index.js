var romanToInt = function(s) {
  const arr = s.split('');

  var mapRomanToInt = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }

  let groups = [];
  let i = 0;

  while (i < arr.length) {
    if (i === arr.length - 1) {
      groups = [...groups, arr[i]];
      break;
    }

    switch (arr[i]) {
      case 'I':
        if (arr[i + 1] === 'V' || arr[i + 1] === 'X') {
          groups = [...groups, arr[i] + arr[i + 1]]
          i += 2;

          break;
        }
        groups = [...groups, arr[i]];
        i += 1;
        break;
      case 'X':
        if (arr[i + 1] === 'L' || arr[i + 1] === 'C') {
          groups = [...groups, arr[i] + arr[i + 1]]
          i += 2;

          break;
        }
        groups = [...groups, arr[i]];
        i += 1;

        break;
      case 'C':
        if (arr[i + 1] === 'D' || arr[i + 1] === 'M') {
          groups = [...groups, arr[i] + arr[i + 1]]
          i += 2;

          break;
        }
        groups = [...groups, arr[i]];
        i += 1;

        break;
      case 'V':
      case 'L':
      case 'D':
      case 'M':
        groups = [...groups, arr[i]];
        i += 1;
        break;
    }
  }

  return groups.reduce((acc, curr) => acc + mapRomanToInt[curr], 0);
};

console.log(romanToInt('MCMXCIV'));
