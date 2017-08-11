function changeString(string) {
    const splitString = string.split(" ");
    let joined = "";
    for (let i = 0; i < splitString.length; i++) {

        if (splitString[i].length > 3) {
            let first3 = splitString[i].slice(0, 3);
            let theRest = splitString[i].slice(3);
            joined += `${first3.toLowerCase()}${theRest.toUpperCase()} `;
        }
        else {
            joined += splitString[i] + " ";
        }
        // d(joined);
    }
    return joined;
}

const myString = prompt("Enter text to convert").toUpperCase();

console.log(changeString(myString));





