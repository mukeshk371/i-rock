/*-------------------------------------------------------------------------------------------------*/
/*                                              COOKIES                                            */
/*-------------------------------------------------------------------------------------------------*/
function writeCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function readCookie(name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(searchName) == 0) {
            return c.substring(searchName.length, c.length);
        }
    }
    return "";
}


function alertText() {
    userName = readCookie("irock_username");
    if (userName) {
        alert("Hello " + userName + " Welcome ! Once Again.");
    }
    else {
        alert('Hello, I am your pet rock.');
    }
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
    document.getElementById("rockImage").src = "resources/images/rock.png";
}

document.cookie = "userName=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";