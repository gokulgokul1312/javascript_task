function countVowel(str) { 
    let count = str.match(/[aeiou]/gi).length;
    console.log("vowel:",count);
}
countVowel("karka");

