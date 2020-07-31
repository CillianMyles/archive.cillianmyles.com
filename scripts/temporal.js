
/* To be run on every page */

printCopyrightText();
console.log("*********"); // TODO: remove
printAge();

/* Public / API */

function printCopyrightText() {
    var text = "Copyright © Cillian Myles " + _currentYear();
    document.getElementById("copyright-text").innerHTML = text;
}

function printAge() {
    document.getElementById("my-age").innerHTML = _myAge();
}

/* Private / internal */

function _currentYear() {
    return new Date().getFullYear();
}

function _myAge() {
    return _age('1993-05-13');
}

function _age(dateString) {
    var today = new Date();
    var dob = new Date(dateString);
    console.log("today: " + today); // TODO: remove
    console.log("dob: " + dob); // TODO: remove
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}
