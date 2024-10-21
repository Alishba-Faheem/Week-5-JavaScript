//1.Length
// Find the length of the string and remove starting extra space
let str = "                                ok ";
let trimmedStr = str.trim();
console.log("Length:", trimmedStr.length);

// Check if the length of a string is greater than 10
function isLengthGreaterThan10(string) {
    return string.length > 10;
}
console.log(isLengthGreaterThan10(trimmedStr)); // false

// Find the length of the longest word in a sentence
function longestWordLength(sentence) {
    let words = sentence.split(" ");
    let longest = 0;
    for (let word of words) {
        longest = Math.max(longest, word.length);
    }
    return longest;
}
console.log(longestWordLength("This is a simple test sentence.")); 


//2.CharAt()
// Return the first and last character of a string
function firstAndLastChar(string) {
    return {
        first: string.charAt(0),
        last: string.charAt(string.length - 1)
    };
}
console.log(firstAndLastChar("Hello")); 

// Find the character at the middle index of the string
function middleChar(string) {
    let midIndex = Math.floor(string.length / 2);
    return string.charAt(midIndex);
}
console.log(middleChar("abcdef")); // 'c'


//3. toUpperCase() / toLowerCase()
// Convert a sentence to lowercase and check for "javascript"
let sentence = "I love JavaScript!";
let lowerCaseSentence = sentence.toLowerCase();
console.log(lowerCaseSentence.includes("javascript")); 

// Convert first character to uppercase and the rest to lowercase
function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(capitalizeFirst("hELLo WoRLD")); 


//4. indexOf()
// Check if a certain word exists in a string
function containsWord(string, word) {
    return string.indexOf(word) !== -1;
}
console.log(containsWord("Hello world", "world")); 

// Find the index of the first occurrence of a character
function indexOfCharacter(string, char) {
    return string.indexOf(char);
}
console.log(indexOfCharacter("Hello", "e")); 


//5. slice() / substring()
// Extract the first 5 characters from a string
let sampleString = "JavaScript";
console.log(sampleString.slice(0, 5)); 
console.log(sampleString.substring(0, 5)); 

// Extract substring between two indices
function extractSubstring(string, start, end) {
    return string.slice(start, end);
}
console.log(extractSubstring("Hello, world!", 7, 12));


//6. replace()
// Replace spaces with underscores
function replaceSpacesWithUnderscores(sentence) {
    return sentence.replace(/ /g, "_");
}
console.log(replaceSpacesWithUnderscores("Hello world"))

// Replace the first occurrence of a character
function replaceFirstOccurrence(string, charToReplace, replacementChar) {
    return string.replace(charToReplace, replacementChar);
}
console.log(replaceFirstOccurrence("Hello", "e", "a")); 

//7. split()
// Split a comma-separated string into an array
let csv = "apple,banana,cherry";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]

// Split a sentence into individual characters
function splitIntoCharacters(sentence) {
    return sentence.split("");
}
console.log(splitIntoCharacters("hello")); // ['h', 'e', 'l', 'l', 'o']

//8. trim()
// Check if a string has leading or trailing spaces and remove them
function trimSpaces(string) {
    return string.trim();
}
console.log(trimSpaces("   Hello   ")); // "Hello"

// Clean up names with extra spaces
let names = ["  Alishba  ", "  Faheem  "];
let cleanedNames = names.map(trimSpaces);
console.log(cleanedNames); 

//9. includes()
// Check if a string contains the word "JavaScript"
function checkForJavaScript(string) {
    return string.includes("JavaScript");
}
console.log(checkForJavaScript("I love JavaScript!")); 

// Check if a sentence includes a specific word
function includesWord(sentence, word) {
    return sentence.includes(word);
}
console.log(includesWord("Hello world", "world")); 

// Check if an email includes the "@" symbol
function checkEmail(email) {
    return email.includes("@");
}
console.log(checkEmail("KAF123@gmail.com")); 

//10. concat()
// Concatenate two strings with a space in between
function concatenateWithSpace(string1, string2) {
    return string1 + " " + string2;
}
console.log(concatenateWithSpace("Hello", "World")); 

// Concatenate first and last name
let firstName = "Alishba";
let lastName = "Faheem";
console.log(concatenateWithSpace(firstName, lastName)); 

// Concatenate an array of words into a sentence
function concatenateWords(words) {
    return words.join(" ");
}
console.log(concatenateWords(["This", "is", "a", "sentence."])); 





