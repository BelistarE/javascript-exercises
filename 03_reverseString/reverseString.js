const reverseString = function(str) {
    const characters = str.split('');

    const reverseCharacters = [];
    for (let i = characters.length - 1; i >= 0; i--) {
        // Push each character to the reversedCharacters array
        reverseCharacters.push(characters[i]);
    }

    const reversedString = reverseCharacters.join('');
    
    // Return the reversed string
    return reverseString;

};
//testing here
reverseString("ian james halliday");
// Do not edit below this line
module.exports = reverseString;
