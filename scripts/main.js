let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/city-scroll.gif') {
        myImage.setAttribute('src', 'images/city-background.gif')
    } else {
        myImage.setAttribute('src', 'images/city-scroll.gif')
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello world!   Welcome, User:   ' + myName;
    }
};

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello world!   Welcome, User:   ' + storedName;
};

myButton.onclick = function() {
    setUserName();
};

