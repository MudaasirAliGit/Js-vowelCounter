// Assignment: Vowel Counter
// Write a JavaScript program that counts the number of vowels (a, e, i, o, u) in a given sentence.

// Steps:

// Use the prompt() function to take a sentence input from the user.
// Convert the sentence to lowercase so the program can detect both uppercase and lowercase vowels.
// Use a loop to iterate over each character in the string.
// Use an if or switch statement to check if the character is a vowel.
// Count and display the total number of vowels in the sentence.

let sentence = prompt("Enter a word or a sentence:");
sentence = sentence.toLowerCase();
let vowelCount = 0;
for(let i=0; i<sentence.length; i++){
    if(sentence[i] === 'a' || sentence[i] === 'e' || sentence[i] === 'i' || sentence[i] === 'o' || sentence[i] === 'u'){
        vowelCount++;
    }
}
alert(`Total number of vowel: ${vowelCount}`);