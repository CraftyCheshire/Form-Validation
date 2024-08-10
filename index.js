function shorter(firstName) {
    if(firstName.length <= 12) {
        return true;
    } else {
        return false;
    }
}

function longer(firstName) {
    if(firstName.length >= 2){
        return true;
    } else {
        return false;
    }
}

let longerElm = document.getElementById("longer-than-two");
let shorterElm = document.getElementById("shorter-than-twelve");
let firstNameInput = document.getElementById("firstName");

function handleChangeShorter() {
    console.log("Hello World!")
    let input = firstNameInput.value;
    let x = shorter(input);
    if(x) {
        shorterElm.style.color = "green";
        console.log("Your name is 12 or fewer characters.")
    } else {
        shorterElm.style.color = "red";
        console.log("Your name is too long.")
    }
}

function handleChangelonger() {
    console.log("Hello World! 2")
    let input = firstNameInput.value;
    let y = longer(input);
    if(y) {
        longerElm.style.color = "green";
        console.log("Your name is 2 or more characters.")
    } else {
        longerElm.style.color = "red";
        console.log("Your name is too short.")
    }
}

firstNameInput.addEventListener("input", handleChangeLonger)
firstNameInput.addEventListener("input", handleChangeShorter)