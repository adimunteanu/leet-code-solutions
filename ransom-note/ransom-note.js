/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const letterMap = magazine.split("").reduce((acc, curr) => {
    return acc.set(curr, (acc.get(curr) ?? 0) + 1);
  }, new Map());

  return ransomNote.split("").reduce((acc, curr) => {
    if (!letterMap.has(curr) || letterMap.get(curr) === 0) {
      return acc && false;
    }
    letterMap.set(curr, letterMap.get(curr) - 1);
    return acc && true;
  }, true);
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
