/*
slice()
Easy: Write a function that extracts a section of a string and returns it as a new string using slice().
Medium: Write a function that takes a string and a number n and returns the last n characters of the string using slice().
Medium: Write a function to remove the first and last characters of a string using slice().

*/

const slicing = (str, slicingPart) => { 
    let newStr = str.slice(slicingPart);
    return newStr
} 

console.log(slicing("Hello my name is Shakir", 7));

// possible enhancement : defining starting & end point

const againSlice = (str, startpoint, endpoint) => { 
    let newStr;
    if (endpoint !== undefined) {
        newStr = str.slice(startpoint, endpoint)
    } else { 
        newStr = str.slice(startpoint)
    }
    return newStr
}

console.log(againSlice("Hello my name is shakir", 5, 9));


// Medium: Write a function to remove the first and last characters of a string using slice().

const removeFirstLastCharacter = (str) => { 
    let newStr = str.slice(1, -1);
    return newStr;
} 

console.log(removeFirstLastCharacter("Shakir"));

// Medium: Write a function that takes a string and a number n and returns the last n characters of the string using slice().
const findLastCharacters = (str, n) => { 
    let newStr = str.slice(-n);
    return newStr
}

console.log(findLastCharacters("Hello my name is Shakir", 6));

