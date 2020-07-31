
function printAge() {
    document.write(age());
}

function age() {
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

function printCopyrightText() {
    var text = "Copyright © Cillian Myles "+ _currentYear();
    document.getElementById("copyright-text").innerHTML = text;
}

function _currentYear() {
    return new Date().getFullYear();
}

printCopyrightText();
