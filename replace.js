/*
Easy: Write a function to replace all occurrences of a specified substring in a 
string with a new substring using replace().
Medium: Write a function to remove all vowels from a given string using replace().
*/

// question no 1
const replacingOccurances = (str, searchingChar, replacedChar) => { 
    let newStr = str.replace(searchingChar, replacedChar);
    return newStr;
}
console.log(replacingOccurances("https://Github/user/MuhammadShakir-dev", "MuhammadShakir", "SaadPasta"));

// question no 2
const removingVowels = (str) => { 
    let newStr = str.replace(/[aeiouAEIOU]/g, '');
    return newStr;
}

console.log(removingVowels("hello my name is shakir"));

