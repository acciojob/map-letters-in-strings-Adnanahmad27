//your JS code here. If required.
function mapLetters(str){
	const obj = {};

    // Loop through each letter in the word
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (!obj[letter]) { 
            obj[letter] = [];
        }
        obj[letter].push(i);
    }

    return obj;
}
const str = prompt("Enter String");
const mappedObj = mapLetters(str);
alert(JSON.stringify(mappedObj));