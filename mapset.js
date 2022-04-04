
//"Problem:1
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"


var s = "abcadeecfb";
var n = s.length;
function dup( s , n) {
var exists = new Map();

var str = "";
for (var i = 0; i < n; i++) {
    if (!exists.has(s[i])) {
        str+= s[i];
        exists.set(s[i], 1);
    }
}
console.log(str);
}
dup(s,n)
 

// "Problem:22
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"
const uniqueCount=(arr)=>{
    let input ={};
    arr.sort().join("").match(/(.)(\1*)/g).map(i=>input[i[0]]=i.length);
    return input;
};
console.log(uniqueCount(["a", "b", "c", "a", "b","d","e","e","c","f","b"]));
