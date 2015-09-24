/**
 * Created by Clint on 9/24/2015.
 * 2nd try...
 */

console.log("**addlength2 WOD**");

var arr1 = ["apple", "pear"];
var arr2 = ["you", "can", "win"];

console.log(arr1);

function wordLength(word) {
    return word + " " + word.length;  // this function takes a string value and returns that value PLUS the length of the string.
}

function addLength(wordArr) {
    return _.map(wordArr, wordLength, 0);  // argument "wordLength" is the same as coding function(word) { ... } (as above)
}

console.log(addLength(arr1));
console.log(addLength(arr2));