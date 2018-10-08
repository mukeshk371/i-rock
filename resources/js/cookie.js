/*-------------------------------------------------------------------------------------------------*/
/*                                              COOKIES                                            */
/*-------------------------------------------------------------------------------------------------*/
function writeCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == " ")
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    return null;
}


function alertText() {
    userName = readCookie("irock_username");
    if (userName)
        alert("Hello " + userName + ", I missed you.");
    else
        alert('Hello, I am your pet rock.');
}

function clickRock() {
    if (userName) {
        alert("I like the attention, " + userName + ". Thank you.");
    } else {
        userName = prompt("What is your name?", "Enter your name here.");
        if (userName) {
            alert("It is good to meet you, " + userName + ".");
            writeCookie("irock_username", userName, 5 * 365);
        }
    }
}