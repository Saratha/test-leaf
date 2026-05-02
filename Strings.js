function reverseString(input) {
    let chars = input.split("");
    let reversed = "";

    for (let i = chars.length - 1; i >= 0; i--) {
        reversed += chars[i];
    }

    console.log("Reversed String:", reversed);
    return reversed;
}

function isPalindrome(input) {
    let reversedString = reverseString(input);
    return input === reversedString;
}

let testStrings = ["madam", "racecar", "hello", "level", "javascript"];

for (let str of testStrings) {
    console.log("Original String:", str);
    console.log("Is Palindrome:", isPalindrome(str));
    console.log("----------------------");
}