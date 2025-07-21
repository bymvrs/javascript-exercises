const palindromes = function (string) {
    let alphanumerical = "abcdefghijklmnopqrstuvxyz0123456789";

    let newString = string.toLowerCase().split("").filter(character => alphanumerical.includes(character)).join("");
    let reversedString = newString.split("").reverse().join("");

    return newString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
