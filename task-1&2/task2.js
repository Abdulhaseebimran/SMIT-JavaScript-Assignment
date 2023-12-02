// task 2 plaindrome words

let words = prompt("Enter a word");

let reverse = "";
let length = words.length - 1;

for (let i = length; i >= 0; i--) {
    reverse += words[i];
}

if (words.toLowerCase() === reverse.toLowerCase()) {
    Swal.fire({
        icon: "success",
        title: "Palindrome",
        text: "This word is a palindrome",
    });
} else {
    Swal.fire({
        icon: "error",
        title: "Not a Palindrome",
        text: "This word is not a palindrome",
    });
}