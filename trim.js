/*
Easy: Write a function that removes whitespace from both ends of a given string using trim().
Medium: Write a function to remove extra spaces from a string, leaving only single spaces between words, 
using trim() and other string methods.
*/

// question no 1
const removingSpaces = (str) => { 
    let newStr = str.trim();
    return newStr;
}

console.log(removingSpaces("                  Hello World                    "));

// question no 2
const removingExtreaSpaces = (str) => {
    let newStr = str.trim();
    let removedSpace = newStr.split(/\s+/);
    let finalStr = removedSpace.join(' ');
    
    return finalStr;
}
 
console.log(removingExtreaSpaces("      Hello    my name is     shakir       "));