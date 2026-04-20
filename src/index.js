function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    let shortest = strs.reduce((a, b) => a.length < b.length ? a : b);
    for (let i = 0; i < shortest.length; i++) {
        for (let other of strs) {
            if (other[i] !== shortest[i]) return shortest.slice(0, i);
        }
    }
    return shortest;
}

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
console.log(longestCommonPrefix(["a"])); // "a"
console.log(longestCommonPrefix([])); // ""
