
/* To be run on every page */

console.log("*********"); // TODO: remove
printCopyrightText();
printMyAge();

/* Public / API */

function printCopyrightText() {
    var text = "Copyright © Cillian Myles " + _currentYear();
    _setInnerHtml("copyright-text", text);
}

function printMyAge() {
    _setInnerHtml("my-age", _myAge());
}

/* Private / internal */

function _setInnerHtml(elementId, value) {
    var element = document.getElementById(elementId);
    if (typeof element !== 'undefined' && element !== null) {
        element.innerHTML = value;
    }
}

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
