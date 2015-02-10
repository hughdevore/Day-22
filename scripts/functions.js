/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. 
// Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
    "use strict";
    // Data Validation
    if(arguments.length > 2 || arguments.length < 2) {
        throw 'The number of arguments must be two.';
    }
    if(!_.isNumber(a)) {
        throw 'The first argument should be a number';
    }
    if(!_.isNumber(b)) {
        throw 'The second argument should be a number';
    }

    //Return Max
    if(a >= b) {
        return a;
    } else if(b > a) {
        return b;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    // Data Validation
    if(arguments.length > 3 || arguments.length < 3) {
        throw 'The number of arguments must be three.';
    }
    if(!_.isNumber(a)) {
        throw 'The first argument should be a number';
    }
    if(!_.isNumber(b)) {
        throw 'The second argument should be a number';
    }
    if(!_.isNumber(c)) {
        throw 'The third argument should be a number';
    }

    //Return Max
    var numbers = [a,b,c];

    var max = a;

    for (var i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) max = numbers[i];
    }
    return max;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and 
// returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(!_.isString(char)){
        throw 'The argument must be a string';
    }
    if(arguments.length > 1 || arguments.length < 1) {
        throw 'The argument must be one character long';
    }

    switch (char) {
        case 'a':
            return 'Vowel';
        case 'e':
            return 'Vowel';
        case 'i':
            return 'Vowel';
        case 'o':
            return 'Vowel';
        case 'u':
            return 'Vowel';
    }
}

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    if(!_.isString(phrase)){
        throw 'The argument must be a string';
    }

    if(phrase === '') {
        throw 'The argument cannot be an empty string';
    }

    var myArray = phrase.split('');

    var newArray = [];

    for (var i = 0; i < myArray.length; i++) {
        if(myArray[i] == 'a') {
            myArray[i];
            newArray.push(myArray[i]);
        } else if (myArray[i] === 'e') {
            myArray[i];
            newArray.push(myArray[i]);
        }  else if (myArray[i] === 'i') {
            myArray[i];
            newArray.push(myArray[i]);
        } else if (myArray[i] === 'o') {
            myArray[i];
            newArray.push(myArray[i]);
        }  else if (myArray[i] === 'u') {
            myArray[i];
            newArray.push(myArray[i]);
        }  else {
            var rovar = myArray[i] + 'o' + myArray[i];
            newArray.push(rovar);
        }
    }
    myArray = newArray.join('');
    return myArray;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) 
// all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
// multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    "use strict";
    if(!_.isArray(array)){
        throw 'The argument must be an array';
    }

    if(_.isEmpty(array)) {
        throw 'The argument cannot be an empty array';
    }
    
    for (var i = 0; i < array.length; i++) {
        if(!_.isNumber(array[i])) {
            throw 'The array must contain only numbers';
        }
    }

    var total = 0;

    for (var i = 0; i < array.length; i++) {
        total = total += array[i];
    }

    return total;
}

function multiply(array){
    "use strict";
    if(!_.isArray(array)){
        throw 'The argument must be an array';
    }

    if(_.isEmpty(array)) {
        throw 'The argument cannot be an empty array';
    }
    for (var i = 0; i < array.length; i++) {
        if(!_.isNumber(array[i])) {
            throw 'The array must contain only numbers';
        }
    }

    var total = 1;

    for (var i = 0; i < array.length; i++) {
        total = total *= array[i];
    }

    return total;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, 
// reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    "use strict";
    if(!_.isString(phrase)){
        throw 'The argument must be a string';
    }

    if(phrase === '') {
        throw 'The argument cannot be an empty string';
    }

    return phrase.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the 
// length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    if(!_.isArray(words)){
        throw 'The argument must be an array';
    }

    if(_.isEmpty(words)) {
        throw 'The argument cannot be an empty array';
    }

    for (var i = 0; i < words.length; i++) {
        if(!_.isString(words[i])) {
            throw 'The array must contain only strings';
        }
    }
    
    var max = words[0].length;

    for (var i = 0; i < words.length; i++) {
        if(words[i].length > max) {
            console.log(max);
            max = words[i].length;
            console.log(max);
        }
        max = words[i];
    }
    return max;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i 
// and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    if(words === undefined && words === undefined) {
        throw 'The arguments must be entered';
    }

    if(!_.isArray(words)){
        throw 'The first argument must be an array';
    }



    if(!_.isNumber(i)) {
        throw 'The second argument must be an integer';
    }

    if(i < 0) {
        throw 'The second argument must be a positive integer';
    }

    for (var i = 0; i < words.length; i++) {
        if(!_.isString(words[i])) {
            throw 'The array must contain only strings';
        }
    }

    var newArray = [];

    var bar = i;

    for (var i = 0; i < words.length; i++) {
        if(words[i].length > bar) {
            newArray.push(words[i]);
        }
    }
    return newArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the 
// characters contained in it. Represent the frequency listing as a Javascript object. 
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}