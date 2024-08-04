/*
charAt()

Easy: Write a function that takes a string and a position as arguments and returns the 
character at that position using charAt().

Easy: Write a function to return the first character of a given string using charAt().

Medium: Write a function that takes a string and returns a new string with every other 
character capitalized using charAt().
*/

// Question no: 1
const findCharAt = (str, position) => {
    return str.charAt(position);
}
console.log(findCharAt("Hello World","4"));

// Question no: 2
const firstChar = (str) => { 
    return str.charAt(0);
}
console.log(firstChar("JavaScript is love"));

// Question no: 3
const capEveryOtherChar = (str) => { 
    let result = "";
    for (let i = 0; i < str.length; i++) { 
        let char = str.charAt(i)
        
        if (i % 2 === 0) {
            result += char.toUpperCase();
        }
        else { 
            result += char
        }
    }

    return result
} 

console.log(capEveryOtherChar("javascript"));


// Write a function that takes a string and a character as arguments and returns a new string where every 
// occurrence of the given character is replaced with its uppercase version using 

const charOccuranceUpperCase = (str, character) => { 
    let result = "";

    for (let i = 0; i < str.length; i++) { 
        let cureentCharacter = str.charAt(i);
        if (cureentCharacter === character) {
            result += cureentCharacter.toUpperCase()
        }
        else { 
            result += cureentCharacter
        }
    }

    return result;        
}
console.log(charOccuranceUpperCase("javascript", "a"));

// Write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) 
// capitalized using charAt().

const vowelsUpperCase = (str) => { 
    let result = "";
    for (let i = 0; i < str.length; i++) { 
        let cureentCharacter = str.charAt(i)
        if (cureentCharacter == "a" || cureentCharacter == "e" || cureentCharacter == "i" || cureentCharacter == "o" || cureentCharacter == "u") {
            result += cureentCharacter.toUpperCase()
        } else { 
            result += cureentCharacter
        }
    }
    return result
} 

console.log(vowelsUpperCase("shakir"));

