
/* To be run on every page */

printCopyrightText();

/* Public / API */

function printCopyrightText() {
    var text = "Copyright © Cillian Myles " + _currentYear();
    document.getElementById("copyright-text").innerHTML = text;
}

function printAge() {
    document.write(_age());
}

/* Private / internal */

function _currentYear() {
    return new Date().getFullYear();
}

function _age() {
    return _age("1993-05-13");
}

function _age(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
